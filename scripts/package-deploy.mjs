import { cp, mkdir } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const output = new URL("../dist/midi-map/", import.meta.url);
const files = ["index.html", "styles.css", "app.js", "config.js", "data", "vendor"];

await mkdir(output, { recursive: true });
for (const file of files) {
  await cp(new URL(file, root), new URL(file, output), { recursive: true, force: true });
}

console.log("Packaged the production directory at dist/midi-map/.");
