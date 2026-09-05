import { readFile } from "node:fs/promises";

const zone = JSON.parse(await readFile(new URL("../data/midi-zone.geojson", import.meta.url), "utf8"));
const places = JSON.parse(await readFile(new URL("../data/places.geojson", import.meta.url), "utf8"));
const requiredProperties = ["id", "category", "name_en", "source", "source_url", "accuracy", "reviewed"];
const errors = [];

function assert(condition, message) {
  if (!condition) errors.push(message);
}

function orientation(a, b, c) {
  return Math.sign((b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]));
}

function segmentsIntersect(a, b, c, d) {
  return orientation(a, b, c) !== orientation(a, b, d) && orientation(c, d, a) !== orientation(c, d, b);
}

function validateFeature(feature, collectionName) {
  assert(feature.type === "Feature", `${collectionName}: ${feature.id || "unknown"} is not a Feature`);
  requiredProperties.forEach((key) => assert(Object.hasOwn(feature.properties || {}, key), `${feature.id}: missing ${key}`));
  assert(feature.id === feature.properties.id, `${feature.id}: feature and property IDs differ`);
  assert(/^https:\/\//.test(feature.properties.source_url), `${feature.id}: source_url must use HTTPS`);
}

assert(zone.type === "FeatureCollection", "Zone data must be a FeatureCollection");
assert(places.type === "FeatureCollection", "Places data must be a FeatureCollection");
assert(zone.features.length === 4, `Expected 4 zone features; received ${zone.features.length}`);
assert(places.features.length === 16, `Expected 16 place features; received ${places.features.length}`);

const allIds = new Set();
for (const feature of [...zone.features, ...places.features]) {
  validateFeature(feature, feature.properties.category === "zone" ? "zone" : "places");
  assert(!allIds.has(feature.id), `${feature.id}: duplicate ID`);
  allIds.add(feature.id);
}

for (const feature of places.features) {
  assert(feature.geometry.type === "Point", `${feature.id}: expected Point geometry`);
  const [longitude, latitude] = feature.geometry.coordinates;
  assert(longitude >= 91.7 && longitude <= 92.1, `${feature.id}: longitude is outside expected project region`);
  assert(latitude >= 21.4 && latitude <= 21.9, `${feature.id}: latitude is outside expected project region`);
  assert(Object.hasOwn({ project: 1, school: 1, worship: 1, environment: 1, agriculture: 1, transport: 1 }, feature.properties.category), `${feature.id}: unsupported category`);
}

for (const feature of zone.features) {
  assert(feature.geometry.type === "Polygon", `${feature.id}: expected Polygon geometry`);
  assert(feature.properties.accuracy === "indicative", `${feature.id}: zone must be marked indicative`);
  const ring = feature.geometry.coordinates[0];
  assert(ring.length >= 4, `${feature.id}: polygon ring has too few coordinates`);
  assert(JSON.stringify(ring[0]) === JSON.stringify(ring.at(-1)), `${feature.id}: polygon ring is not closed`);
  for (let index = 0; index < ring.length - 1; index += 1) {
    for (let other = index + 2; other < ring.length - 1; other += 1) {
      if (index === 0 && other === ring.length - 2) continue;
      assert(!segmentsIntersect(ring[index], ring[index + 1], ring[other], ring[other + 1]), `${feature.id}: polygon self-intersection detected`);
    }
  }
}

const categoryCounts = Object.groupBy(places.features, (feature) => feature.properties.category);
assert(categoryCounts.project?.length === 3, "Expected 3 project features");
assert(categoryCounts.school?.length === 4, "Expected 4 school features");
assert(categoryCounts.worship?.length === 5, "Expected 5 worship features");

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Validated ${zone.features.length} indicative polygons and ${places.features.length} point features.`);
}
