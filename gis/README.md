# GIS handoff

`midi-map.gpkg` is the editable QGIS-compatible source. It contains:

- `midi_zone`: six confirmed affected-area polygons imported from `MIDI bangladesh v2.kml`.
- `places`: the 16 point locations resolved from the supplied Google Maps links.

The GeoPackage uses WGS84 (EPSG:4326), matching GeoJSON longitude/latitude coordinates. Open it directly in QGIS, add `source/English_Map.jpg` as a visual reference, and use current aerial imagery or another licensed basemap to review the polygons.

The supplied KML replaces the earlier manual interpretations of the stylised artwork. Its six named Zone polygons are preserved at their supplied WGS84 coordinates. They are campaign-supplied affected-area boundaries, not cadastral survey boundaries.

Before publication:

1. Preserve each KML polygon without simplification unless the campaign team approves a change.
2. Record any future geometry revision and its source.
3. Re-export each layer to WGS84 GeoJSON using RFC 7946 coordinate order.
4. Run `npm run validate:data` after replacing the web GeoJSON files.

QGIS is not installed in the build environment, so no unverified `.qgs` project file is included. The GeoPackage is the portable editable source and avoids broken machine-specific layer paths.
