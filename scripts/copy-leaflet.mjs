import { copyFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const source = new URL("../node_modules/leaflet/dist/", import.meta.url);
const destination = new URL("../vendor/leaflet/", import.meta.url);
const files = [
  "leaflet.css",
  "leaflet.js",
  "leaflet.js.map",
  "images/layers-2x.png",
  "images/layers.png",
  "images/marker-icon-2x.png",
  "images/marker-icon.png",
  "images/marker-shadow.png"
];

await mkdir(new URL("images/", destination), { recursive: true });
for (const file of files) {
  await copyFile(new URL(file, source), new URL(file, destination));
}
await copyFile(new URL("../node_modules/leaflet/LICENSE", import.meta.url), new URL("LICENSE", destination));

console.log(`Copied Leaflet ${files.length} distribution files to ${join("vendor", "leaflet")}.`);
