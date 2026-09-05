# Divi embed snippets

Deploy this directory to `/wp-content/themes/Divi-child/midi-map/`, then replace the existing map Image module with a Divi Code module. Update the path below if the web developer chooses another same-origin location.

## English page

```html
<iframe
  class="midi-map-embed"
  src="/wp-content/themes/Divi-child/midi-map/index.html?lang=en"
  title="Interactive map of the indicative MIDI affected area"
  loading="lazy"
  referrerpolicy="strict-origin-when-cross-origin"
></iframe>
```

## Bangla page

```html
<iframe
  class="midi-map-embed"
  src="/wp-content/themes/Divi-child/midi-map/index.html?lang=bn"
  title="MIDI-এর সম্ভাব্য ক্ষতিগ্রস্ত এলাকার ইন্টারেক্টিভ মানচিত্র"
  loading="lazy"
  referrerpolicy="strict-origin-when-cross-origin"
></iframe>
```

## Japanese page

```html
<iframe
  class="midi-map-embed"
  src="/wp-content/themes/Divi-child/midi-map/index.html?lang=ja"
  title="MIDI影響想定区域のインタラクティブ地図"
  loading="lazy"
  referrerpolicy="strict-origin-when-cross-origin"
></iframe>
```

Add this CSS to the Divi child theme stylesheet or the page's Custom CSS field:

```css
.midi-map-embed {
  display: block;
  width: 100%;
  height: 700px;
  border: 0;
}

@media (max-width: 760px) {
  .midi-map-embed {
    height: max(70vh, 720px);
  }
}
```

The iframe intentionally omits `sandbox`; the map needs scripts and same-origin data fetches. If a sandbox is required by site policy, use `sandbox="allow-scripts allow-same-origin allow-popups"` and retest source links and Leaflet controls.

## Rollback

Keep the existing static SVG Image module disabled in the Divi layout until the interactive version has campaign-owner sign-off. To roll back, disable the Code module and re-enable the original Image module.
