# MIDI interactive map

This repository contains a deployable, multilingual Leaflet map for the Fossil Free Chattogram microsite. It is designed to run as a same-origin iframe inside a Divi Code module.

## Important limitation

The blue polygons are indicative interpretations of the supplied campaign artwork. They are not official surveyed, cadastral, land-acquisition or statutory MIDI boundaries. All polygons and point content remain marked `reviewed: false` until the campaign team approves them.

## Contents

- `index.html`, `styles.css`, `app.js`, `config.js`: production multi-file map.
- `data/places.geojson`: 16 normalized points from the supplied spreadsheet links.
- `data/midi-zone.geojson`: four indicative affected-area polygons.
- `data/places-normalized.csv`: audit-friendly normalized point table.
- `data/normalization-report.json`: missing-content and review summary.
- `gis/midi-map.gpkg`: editable QGIS-compatible source layers.
- `dist/midi-map/`: production-ready directory containing only the public map files.
- `dist/midi-map-single.html`: optional single-file handoff; it still requests internet basemap tiles.
- `integration/divi-embed-snippets.md`: English, Bangla and Japanese Divi iframe code.
- `source/`: unchanged copies of the supplied CSV and reference image.

## Local review

```sh
npm install
npm run build
npm test
npm run validate:data
npm run serve
```

Open `http://localhost:4173/index.html?lang=en`, changing `lang` to `bn` or `ja` to review other language contexts. Loading `index.html` directly from the filesystem will not work reliably because browsers block local GeoJSON fetches; use the local server.

## Deployment

Upload the contents of `dist/midi-map/` to a same-origin static directory. Do not deploy `node_modules`, `tests`, `scripts`, `source`, or `gis` to the public web server.

The default basemap uses OpenStreetMap's standard raster service. Keep visible attribution, do not add tile prefetch or offline download, and change `config.js` to an approved supported provider if traffic becomes substantial.

## Content updates

Edit the GeoPackage in QGIS for geometry work and preserve WGS84 on export. For copy updates, edit the GeoJSON properties directly or regenerate them from an approved content source. Empty Bangla or Japanese values deliberately fall back to English and display a translation notice.

No images appear in v1 because the source spreadsheet did not include approved image files, rights information, captions or alt text.
