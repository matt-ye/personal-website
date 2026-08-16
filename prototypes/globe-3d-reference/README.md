# 3D globe reference (three.js / globe.gl)

Archived WebGL globe from the dementia-exposome **globe bake-off** (July 2026). We compared
two ways to render a global country-level choropleth and chose **d3-geo orthographic** for
production on mattye.dev — it's ~18 KB gzip vs globe.gl's ~490 KB and fits the site's
plain/static ethos. This 3D version is kept here as a **portable reference** for future
projects that want a true-WebGL globe.

**This folder is not part of the Astro build** (it lives outside `src/` and `public/`), so it
is never deployed — it's a self-contained artifact you can copy into any project.

## Run it
It fetches `world-globe.geojson`, so serve the folder (a plain `file://` open is blocked by
browser CORS):

```bash
cd prototypes/globe-3d-reference
python3 -m http.server 8000
# open http://localhost:8000
```

## Files
- `index.html` — self-contained page: PM2.5 / PAF toggle, hover tooltip, legend, auto-spin,
  drag + zoom, light/dark. All logic inline; the only deps are the two files below.
- `globe.gl.min.js` — globe.gl v2.46.1 UMD (bundles three.js + three-globe). `window.Globe`.
- `world-globe.geojson` — Natural Earth admin-0 (110m) with `pm25` (ACAG national, µg/m³) and
  `paf` (composite modifiable-risk %, 27 countries) baked per country. Regenerate via
  `scripts/build_data.py` → `build_world_globe_geojson()`.

## Reuse notes
The whole 3D setup is the ~15 lines under `fetch(...).then` in `index.html`:
`Globe()(el).polygonsData(features).polygonCapColor(fn)…` + `world.controls().autoRotate`.
Swap `world-globe.geojson` for any country-keyed GeoJSON and change the `METRICS`/`colorFor`
to re-skin it. Attribution/licences travel with the data (Natural Earth PD; ACAG CC BY 4.0;
Livingston 2024 for PAF).
