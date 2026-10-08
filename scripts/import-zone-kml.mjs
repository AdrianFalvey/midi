import { readFile, writeFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const inputUrl = new URL("MIDI bangladesh v2.kml", root);
const outputUrl = new URL("data/midi-zone.geojson", root);
const kml = await readFile(inputUrl, "utf8");
const sourceUrl = "https://github.com/AdrianFalvey/midi/blob/main/MIDI%20bangladesh%20v2.kml";

const placemarks = [...kml.matchAll(/<Placemark\b[^>]*\bid="([^"]+)"[^>]*>([\s\S]*?)<\/Placemark>/g)];
const features = [];

for (const [, sourceFeatureId, body] of placemarks) {
  const name = body.match(/<name>([^<]+)<\/name>/)?.[1]?.trim();
  if (!/^Zone \d+$/.test(name || "")) continue;

  const coordinatesText = body.match(/<coordinates>([\s\S]*?)<\/coordinates>/)?.[1];
  if (!coordinatesText) throw new Error(`${name}: polygon coordinates are missing`);

  const ring = coordinatesText
    .trim()
    .split(/\s+/)
    .map((tuple) => tuple.split(",").slice(0, 2).map(Number));

  if (ring.some((position) => position.length !== 2 || position.some((value) => !Number.isFinite(value)))) {
    throw new Error(`${name}: invalid coordinate tuple`);
  }
  if (JSON.stringify(ring[0]) !== JSON.stringify(ring.at(-1))) ring.push([...ring[0]]);

  const zoneNumber = Number(name.slice(5));
  const id = `midi-zone-${zoneNumber}`;
  features.push({
    type: "Feature",
    id,
    properties: {
      id,
      category: "zone",
      name_en: `Confirmed affected area — ${name}`,
      name_bn: "",
      name_ja: "",
      description_en: "Affected-area boundary supplied in the confirmed MIDI Bangladesh v2 KML.",
      description_bn: "",
      description_ja: "",
      source: "MIDI bangladesh v2.kml supplied by the campaign team",
      source_url: sourceUrl,
      source_feature_id: sourceFeatureId,
      accuracy: "confirmed_boundary",
      reviewed: true
    },
    geometry: {
      type: "Polygon",
      coordinates: [ring]
    }
  });
}

features.sort((a, b) => Number(a.id.split("-").at(-1)) - Number(b.id.split("-").at(-1)));
if (features.length !== 6) throw new Error(`Expected 6 named zone polygons; found ${features.length}`);

const collection = {
  type: "FeatureCollection",
  name: "MIDI confirmed affected areas",
  crs_note: "RFC 7946 WGS84 longitude/latitude coordinates",
  source_file: "MIDI bangladesh v2.kml",
  features
};

await writeFile(outputUrl, `${JSON.stringify(collection, null, 2)}\n`);
console.log(`Imported ${features.length} confirmed zone polygons from ${inputUrl.pathname}.`);
