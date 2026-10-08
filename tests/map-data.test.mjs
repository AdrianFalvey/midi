import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const readJson = async (path) => JSON.parse(await readFile(new URL(path, root), "utf8"));

test("all places retain their original HTTPS source links", async () => {
  const places = await readJson("data/places.geojson");
  assert.equal(places.features.length, 16);
  for (const feature of places.features) {
    assert.match(feature.properties.source_url, /^https:\/\/maps\.app\.goo\.gl\//);
    assert.equal(feature.properties.reviewed, false);
  }
});

test("language fallbacks can always use an English name", async () => {
  const collections = await Promise.all([readJson("data/places.geojson"), readJson("data/midi-zone.geojson")]);
  for (const feature of collections.flatMap((collection) => collection.features)) {
    assert.ok(feature.properties.name_en.trim());
    assert.ok(Object.hasOwn(feature.properties, "name_bn"));
    assert.ok(Object.hasOwn(feature.properties, "name_ja"));
  }
});

test("affected polygons come from the confirmed KML boundary file", async () => {
  const zone = await readJson("data/midi-zone.geojson");
  assert.equal(zone.features.length, 6);
  for (const feature of zone.features) {
    assert.equal(feature.properties.accuracy, "confirmed_boundary");
    assert.equal(feature.properties.reviewed, true);
    assert.match(feature.properties.source, /MIDI bangladesh v2\.kml/);
    assert.match(feature.properties.source_feature_id, /^[A-F0-9]+$/);
  }
});

test("runtime copy does not present the 73,000 acre figure as calculated geometry", async () => {
  const files = await Promise.all(["index.html", "app.js", "data/midi-zone.geojson"].map((path) => readFile(new URL(path, root), "utf8")));
  assert.equal(files.join("\n").includes("73,000"), false);
});

test("map uses DOM text assignment for spreadsheet-derived detail content", async () => {
  const source = await readFile(new URL("app.js", root), "utf8");
  assert.match(source, /element\.textContent = text/);
  assert.doesNotMatch(source, /detailsBody\.innerHTML/);
});
