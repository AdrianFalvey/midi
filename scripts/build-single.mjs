import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (path) => readFile(resolve(root, path), "utf8");
const scriptSafe = (value) => value.replace(/<\/script/gi, "<\\/script");

let [html, leafletCss, appCss, leafletJs, configJs, appJs, zoneText, placesText] = await Promise.all([
  read("index.html"),
  read("vendor/leaflet/leaflet.css"),
  read("styles.css"),
  read("vendor/leaflet/leaflet.js"),
  read("config.js"),
  read("app.js"),
  read("data/midi-zone.geojson"),
  read("data/places.geojson")
]);

const imagePattern = /url\(images\/([^\)]+)\)/g;
const imageNames = new Set([...leafletCss.matchAll(imagePattern)].map((match) => match[1]));
for (const imageName of imageNames) {
  const imageBytes = await readFile(resolve(root, "vendor/leaflet/images", imageName));
  const dataUri = `data:image/png;base64,${imageBytes.toString("base64")}`;
  leafletCss = leafletCss.replaceAll(`url(images/${imageName})`, `url(${dataUri})`);
}

const embeddedData = `window.MIDI_EMBEDDED_DATA = Object.freeze({zone:${zoneText},places:${placesText}});`;
const inlineScripts = `\n  <script>${scriptSafe(leafletJs)}</script>\n  <script>${scriptSafe(configJs)}</script>\n  <script>${scriptSafe(embeddedData)}</script>\n  <script>${scriptSafe(appJs)}</script>\n`;
html = html
  .replace(/\s*<link rel="stylesheet" href="vendor\/leaflet\/leaflet\.css">/, "")
  .replace(/\s*<link rel="stylesheet" href="styles\.css">/, `\n  <style>\n${leafletCss}\n${appCss}\n  </style>`)
  .replace(/\s*<script src="vendor\/leaflet\/leaflet\.js" defer><\/script>/, "")
  .replace(/\s*<script src="config\.js" defer><\/script>/, "")
  .replace(/\s*<script src="app\.js" defer><\/script>/, "")
  .replace("</body>", `${inlineScripts}</body>`);

await mkdir(resolve(root, "dist"), { recursive: true });
await writeFile(resolve(root, "dist/midi-map-single.html"), html);
console.log("Built dist/midi-map-single.html.");
