(function () {
  "use strict";

  const supportedLanguages = new Set(["en", "bn", "ja"]);
  const requestedLanguage = new URLSearchParams(window.location.search).get("lang") || "en";
  const language = supportedLanguages.has(requestedLanguage) ? requestedLanguage : "en";

  const translations = {
    en: {
      eyebrow: "Fossil Free Chattogram",
      title: "What could MIDI affect?",
      intro: "Explore the confirmed affected areas and nearby communities, infrastructure and environmental features.",
      reset: "Reset map",
      layers: "Map layers",
      zoneLayer: "Confirmed affected areas",
      projectsLayer: "Fossil fuel projects",
      communityLayer: "Community facilities",
      environmentLayer: "Environment and land use",
      transportLayer: "Roads and bridges",
      loading: "Loading map data…",
      loaded: "Map loaded. Use the layer controls or select a marker for details.",
      caveat: "Affected-area boundaries supplied in the confirmed MIDI KML; not cadastral survey boundaries.",
      detailsKicker: "Map details",
      detailsTitle: "Select a place",
      detailsPrompt: "Choose a marker or affected area to see its information and source.",
      close: "Close details",
      source: "Source",
      accuracy: "Accuracy",
      reviewed: "Reviewed",
      no: "No",
      yes: "Yes",
      approximate: "Indicative interpretation",
      confirmedBoundary: "Confirmed KML boundary",
      point: "Point supplied through Google Maps",
      representativePoint: "Representative point; feature extent not mapped",
      sourceLink: "Open source location",
      fallback: "This item has not yet been translated; English is shown.",
      error: "The map data could not be loaded.",
      retry: "Try again",
      mapLabel: "Interactive map of the confirmed MIDI affected areas",
      translationNote: "Some place names and descriptions remain in English until reviewed translations are supplied.",
      reportMapIssue: "Report a basemap issue",
      project: "Fossil fuel project",
      school: "School or shelter",
      worship: "Place of worship",
      environment: "Environmental feature",
      agriculture: "Land use",
      transport: "Transport",
      zone: "Affected area"
    },
    bn: {
      eyebrow: "জীবাশ্মমুক্ত চট্টগ্রাম",
      title: "MIDI কী কী প্রভাবিত করতে পারে?",
      intro: "নিশ্চিত ক্ষতিগ্রস্ত এলাকাগুলো এবং কাছাকাছি জনপদ, অবকাঠামো ও পরিবেশগত স্থানগুলো দেখুন।",
      reset: "মানচিত্র পুনরায় সেট করুন",
      layers: "মানচিত্রের স্তর",
      zoneLayer: "নিশ্চিত ক্ষতিগ্রস্ত এলাকা",
      projectsLayer: "জীবাশ্ম জ্বালানি প্রকল্প",
      communityLayer: "সামাজিক স্থাপনা",
      environmentLayer: "পরিবেশ ও ভূমি ব্যবহার",
      transportLayer: "সড়ক ও সেতু",
      loading: "মানচিত্রের তথ্য লোড হচ্ছে…",
      loaded: "মানচিত্র লোড হয়েছে। বিস্তারিত দেখতে একটি চিহ্ন নির্বাচন করুন।",
      caveat: "নিশ্চিত MIDI KML-এ ক্ষতিগ্রস্ত এলাকার সীমানা সরবরাহ করা হয়েছে; এগুলো ক্যাডাস্ট্রাল জরিপের সীমানা নয়।",
      detailsKicker: "মানচিত্রের বিস্তারিত",
      detailsTitle: "একটি স্থান নির্বাচন করুন",
      detailsPrompt: "তথ্য ও উৎস দেখতে একটি চিহ্ন বা ক্ষতিগ্রস্ত এলাকা নির্বাচন করুন।",
      close: "বিস্তারিত বন্ধ করুন",
      source: "উৎস",
      accuracy: "নির্ভুলতা",
      reviewed: "পর্যালোচিত",
      no: "না",
      yes: "হ্যাঁ",
      approximate: "আনুমানিক ব্যাখ্যা",
      confirmedBoundary: "নিশ্চিত KML সীমানা",
      point: "গুগল ম্যাপস থেকে দেওয়া বিন্দু",
      representativePoint: "প্রতিনিধিত্বমূলক বিন্দু; সম্পূর্ণ বিস্তার দেখানো হয়নি",
      sourceLink: "উৎসের অবস্থান খুলুন",
      fallback: "এই তথ্যটির অনুবাদ এখনো হয়নি; ইংরেজি দেখানো হচ্ছে।",
      error: "মানচিত্রের তথ্য লোড করা যায়নি।",
      retry: "আবার চেষ্টা করুন",
      mapLabel: "MIDI-এর নিশ্চিত ক্ষতিগ্রস্ত এলাকার ইন্টারেক্টিভ মানচিত্র",
      translationNote: "পর্যালোচিত অনুবাদ না পাওয়া পর্যন্ত কিছু নাম ও বর্ণনা ইংরেজিতে থাকবে।",
      reportMapIssue: "বেসম্যাপের সমস্যা জানান",
      project: "জীবাশ্ম জ্বালানি প্রকল্প",
      school: "বিদ্যালয় বা আশ্রয়কেন্দ্র",
      worship: "উপাসনালয়",
      environment: "পরিবেশগত স্থান",
      agriculture: "ভূমি ব্যবহার",
      transport: "পরিবহন",
      zone: "ক্ষতিগ্রস্ত এলাকা"
    },
    ja: {
      eyebrow: "Fossil Free Chattogram",
      title: "MIDI計画は何に影響を与えるのか",
      intro: "確認済みの影響区域と、周辺の地域社会、インフラ、環境上重要な場所をご覧ください。",
      reset: "地図をリセット",
      layers: "地図レイヤー",
      zoneLayer: "確認済みの影響区域",
      projectsLayer: "化石燃料事業",
      communityLayer: "地域施設",
      environmentLayer: "環境・土地利用",
      transportLayer: "道路・橋",
      loading: "地図データを読み込んでいます…",
      loaded: "地図を読み込みました。マーカーを選択すると詳細を確認できます。",
      caveat: "確認済みのMIDI KMLで提供された影響区域の境界です。地籍測量境界ではありません。",
      detailsKicker: "地図の詳細",
      detailsTitle: "場所を選択",
      detailsPrompt: "マーカーまたは影響区域を選択すると、情報と出典を確認できます。",
      close: "詳細を閉じる",
      source: "出典",
      accuracy: "精度",
      reviewed: "確認済み",
      no: "いいえ",
      yes: "はい",
      approximate: "参考情報としての解釈",
      confirmedBoundary: "確認済みKML境界",
      point: "Google マップで提供された地点",
      representativePoint: "代表地点。対象全体の範囲は未表示",
      sourceLink: "出典の場所を開く",
      fallback: "この項目は未翻訳のため、英語で表示しています。",
      error: "地図データを読み込めませんでした。",
      retry: "再試行",
      mapLabel: "MIDIの確認済み影響区域のインタラクティブ地図",
      translationNote: "確認済みの翻訳が提供されるまで、一部の地名と説明は英語で表示されます。",
      reportMapIssue: "ベースマップの問題を報告",
      project: "化石燃料事業",
      school: "学校・避難所",
      worship: "宗教施設",
      environment: "環境上重要な場所",
      agriculture: "土地利用",
      transport: "交通",
      zone: "影響区域"
    }
  };

  const t = (key) => translations[language][key] || translations.en[key] || key;
  document.documentElement.lang = language;
  document.title = `${t("title")} – ${t("eyebrow")}`;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });

  const categoryMeta = {
    project: { group: "projects", letter: "P" },
    school: { group: "community", letter: "S" },
    worship: { group: "community", letter: "W" },
    environment: { group: "environment", letter: "N" },
    agriculture: { group: "environment", letter: "A" },
    transport: { group: "transport", letter: "R" }
  };

  const statusElement = document.getElementById("map-status");
  const errorElement = document.getElementById("map-error");
  const detailsPanel = document.getElementById("map-details");
  const detailsHeading = document.getElementById("details-heading");
  const detailsCategory = document.getElementById("details-category");
  const detailsBody = document.getElementById("details-body");
  let map;
  let initialBounds;
  let zoneLayer;
  let groupLayers;

  function localizedProperty(properties, key) {
    const requested = properties[`${key}_${language}`];
    const fallback = properties[`${key}_en`];
    return {
      value: (typeof requested === "string" && requested.trim()) ? requested : (fallback || ""),
      usedFallback: language !== "en" && !(typeof requested === "string" && requested.trim()) && Boolean(fallback)
    };
  }

  function appendTextElement(parent, tagName, text, className) {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    element.textContent = text;
    parent.appendChild(element);
    return element;
  }

  function safeHttpUrl(value) {
    try {
      const parsed = new URL(value);
      return parsed.protocol === "https:" || parsed.protocol === "http:" ? parsed.href : null;
    } catch {
      return null;
    }
  }

  function describeAccuracy(value) {
    if (value === "confirmed_boundary") return t("confirmedBoundary");
    if (value === "indicative") return t("approximate");
    if (value === "representative_point") return t("representativePoint");
    return t("point");
  }

  function showDetails(feature, focusPanel) {
    const properties = feature.properties || {};
    const name = localizedProperty(properties, "name");
    const description = localizedProperty(properties, "description");
    const category = properties.category || "zone";

    detailsCategory.textContent = t(category);
    detailsHeading.textContent = name.value || t("detailsTitle");
    detailsBody.replaceChildren();

    if (description.value) appendTextElement(detailsBody, "p", description.value);
    if (name.usedFallback || description.usedFallback) appendTextElement(detailsBody, "p", t("fallback"), "details-fallback");

    const metadata = document.createElement("dl");
    metadata.className = "details-meta";
    appendTextElement(metadata, "dt", t("accuracy"));
    appendTextElement(metadata, "dd", describeAccuracy(properties.accuracy));
    appendTextElement(metadata, "dt", t("reviewed"));
    appendTextElement(metadata, "dd", properties.reviewed ? t("yes") : t("no"));
    detailsBody.appendChild(metadata);

    const sourceUrl = safeHttpUrl(properties.source_url);
    if (sourceUrl) {
      const link = document.createElement("a");
      link.href = sourceUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = t("sourceLink");
      detailsBody.appendChild(link);
    } else if (properties.source) {
      appendTextElement(detailsBody, "p", `${t("source")}: ${properties.source}`);
    }

    if (focusPanel) {
      const mobileLayout = window.matchMedia("(max-width: 760px)").matches;
      if (mobileLayout) {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        detailsPanel.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      }
      detailsPanel.focus({ preventScroll: mobileLayout });
    }
  }

  function resetDetails() {
    detailsCategory.textContent = t("detailsKicker");
    detailsHeading.textContent = t("detailsTitle");
    detailsBody.replaceChildren();
    appendTextElement(detailsBody, "p", t("detailsPrompt"));
  }

  function markerIcon(category) {
    const meta = categoryMeta[category] || categoryMeta.transport;
    return L.divIcon({
      className: "",
      html: `<span class="category-marker category-marker--${category}" aria-hidden="true"><span>${meta.letter}</span></span>`,
      iconSize: [30, 30],
      iconAnchor: [15, 29],
      tooltipAnchor: [0, -24]
    });
  }

  function addStripePattern(renderer, layer) {
    const svg = renderer._container;
    if (!svg || !layer._path) return;
    let defs = svg.querySelector("defs");
    if (!defs) {
      defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
      svg.prepend(defs);
    }
    if (!defs.querySelector("#midi-hatch")) {
      const pattern = document.createElementNS("http://www.w3.org/2000/svg", "pattern");
      pattern.setAttribute("id", "midi-hatch");
      pattern.setAttribute("width", "10");
      pattern.setAttribute("height", "10");
      pattern.setAttribute("patternUnits", "userSpaceOnUse");
      pattern.setAttribute("patternTransform", "rotate(35)");
      const background = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      background.setAttribute("width", "10");
      background.setAttribute("height", "10");
      background.setAttribute("fill", "#00a8e8");
      background.setAttribute("fill-opacity", ".13");
      const stripe = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      stripe.setAttribute("width", "3");
      stripe.setAttribute("height", "10");
      stripe.setAttribute("fill", "#00a8e8");
      stripe.setAttribute("fill-opacity", ".48");
      pattern.append(background, stripe);
      defs.appendChild(pattern);
    }
    layer._path.setAttribute("fill", "url(#midi-hatch)");
  }

  async function getData() {
    if (window.MIDI_EMBEDDED_DATA) return window.MIDI_EMBEDDED_DATA;
    const config = window.MIDI_MAP_CONFIG;
    const responses = await Promise.all([fetch(config.dataUrls.zone), fetch(config.dataUrls.places)]);
    if (responses.some((response) => !response.ok)) throw new Error("Data request failed");
    const [zone, places] = await Promise.all(responses.map((response) => response.json()));
    return { zone, places };
  }

  async function initialize() {
    statusElement.textContent = t("loading");
    errorElement.hidden = true;
    document.getElementById("map").removeAttribute("aria-busy");

    try {
      const data = await getData();
      if (map) map.remove();
      const config = window.MIDI_MAP_CONFIG;
      map = L.map("map", { scrollWheelZoom: false, zoomControl: true, preferCanvas: false });
      L.tileLayer(config.tileUrl, { ...config.tileOptions, attribution: config.tileAttribution }).addTo(map);

      const renderer = L.svg({ padding: 0.5 }).addTo(map);
      zoneLayer = L.geoJSON(data.zone, {
        renderer,
        style: { color: "#006ea8", weight: 2.5, dashArray: "7 5", fillColor: "#00a8e8", fillOpacity: 0.25 },
        onEachFeature(feature, layer) {
          layer.on({
            click: () => showDetails(feature, true),
            add: () => window.requestAnimationFrame(() => {
              addStripePattern(renderer, layer);
              if (!layer._path) return;
              const name = localizedProperty(feature.properties, "name").value;
              layer._path.setAttribute("tabindex", "0");
              layer._path.setAttribute("role", "button");
              layer._path.setAttribute("aria-label", `${t("zone")}: ${name}`);
              if (layer._path.dataset.keyboardReady !== "true") {
                layer._path.dataset.keyboardReady = "true";
                L.DomEvent.on(layer._path, "keydown", (event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    L.DomEvent.preventDefault(event);
                    showDetails(feature, true);
                  }
                });
                L.DomEvent.on(layer._path, "focus", () => layer.openTooltip());
                L.DomEvent.on(layer._path, "blur", () => layer.closeTooltip());
              }
            })
          });
          layer.bindTooltip(localizedProperty(feature.properties, "name").value, { sticky: true, direction: "top" });
        }
      }).addTo(map);

      groupLayers = {
        projects: L.featureGroup().addTo(map),
        community: L.featureGroup().addTo(map),
        environment: L.featureGroup().addTo(map),
        transport: L.featureGroup().addTo(map)
      };

      L.geoJSON(data.places, {
        pointToLayer(feature, latlng) {
          return L.marker(latlng, { icon: markerIcon(feature.properties.category), keyboard: true, riseOnHover: true });
        },
        onEachFeature(feature, layer) {
          const properties = feature.properties;
          const name = localizedProperty(properties, "name").value;
          const group = groupLayers[categoryMeta[properties.category].group];
          layer.bindTooltip(name, { direction: "top", offset: [0, -18] });
          layer.on({
            click: () => showDetails(feature, true),
            mouseover: () => layer.openTooltip(),
            mouseout: () => layer.closeTooltip(),
            focus: () => layer.openTooltip(),
            blur: () => layer.closeTooltip(),
            add: () => {
              if (layer._icon) {
                layer._icon.setAttribute("aria-label", `${t(properties.category)}: ${name}`);
                layer._icon.setAttribute("role", "button");
              }
            }
          });
          group.addLayer(layer);
        }
      });

      initialBounds = zoneLayer.getBounds().pad(0.08);
      map.fitBounds(initialBounds, { padding: [20, 20] });
      statusElement.textContent = t("loaded");
      window.setTimeout(() => { statusElement.textContent = ""; }, 4500);
    } catch (error) {
      statusElement.textContent = "";
      errorElement.hidden = false;
      document.getElementById("map").setAttribute("aria-busy", "false");
      console.error("MIDI map initialization failed", error);
    }
  }

  document.querySelectorAll("[data-layer]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      if (!map || !groupLayers) return;
      const key = checkbox.dataset.layer;
      const layer = key === "zone" ? zoneLayer : groupLayers[key];
      if (checkbox.checked) layer.addTo(map);
      else map.removeLayer(layer);
    });
  });

  document.getElementById("reset-view").addEventListener("click", () => {
    if (map && initialBounds) map.fitBounds(initialBounds, { padding: [20, 20] });
  });
  document.getElementById("close-details").addEventListener("click", () => {
    resetDetails();
    if (window.matchMedia("(max-width: 760px)").matches) {
      document.getElementById("map").focus({ preventScroll: false });
    }
  });
  document.getElementById("retry").addEventListener("click", initialize);

  initialize();
}());
