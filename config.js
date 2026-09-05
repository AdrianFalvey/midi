window.MIDI_MAP_CONFIG = Object.freeze({
  tileUrl: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  tileAttribution: "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap contributors</a>",
  tileOptions: {
    maxZoom: 18,
    minZoom: 9,
    detectRetina: true
  },
  dataUrls: {
    zone: "data/midi-zone.geojson",
    places: "data/places.geojson"
  }
});
