# GIS handoff

`midi-map.gpkg` is the editable QGIS-compatible source. It contains:

- `midi_zone`: four indicative polygons interpreted from the supplied campaign artwork.
- `places`: the 16 point locations resolved from the supplied Google Maps links.

The GeoPackage uses WGS84 (EPSG:4326), matching GeoJSON longitude/latitude coordinates. Open it directly in QGIS, add `source/English_Map.jpg` as a visual reference, and use current aerial imagery or another licensed basemap to review the polygons.

The artwork is stylised and internally distorted, so it has not been transformed into a false-precision georeferenced raster. The polygons are manual campaign interpretations around named communities, not cadastral, resettlement, land-acquisition or statutory planning boundaries.

Before publication:

1. Review each polygon against current coastline and settlement features.
2. Record the reviewer and date in `review-checklist.csv`.
3. Set `reviewed` to `true` only after campaign-owner sign-off.
4. Re-export each layer to WGS84 GeoJSON using RFC 7946 coordinate order.
5. Run `npm run validate:data` after replacing the web GeoJSON files.

QGIS is not installed in the build environment, so no unverified `.qgs` project file is included. The GeoPackage is the portable editable source and avoids broken machine-specific layer paths.
