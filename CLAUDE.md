# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn start      # dev build with watch mode (rollup.config.dev.js)
yarn build      # production build → dist/
yarn lint       # ESLint (zero warnings allowed)
```

There are no tests in this project.

## Architecture

This is a single-file Home Assistant Lovelace custom card bundled with Rollup into `dist/clock-weather-card.js`.

**Entry point:** `src/clock-weather-card.ts` — defines the `ClockWeatherCard` LitElement (`<clock-weather-card>`). All card logic lives here: config validation, HA entity subscription, forecast fetching via `subscribeForecastEvents`, and rendering via `renderToday()` / `renderForecast()`.

**Key modules:**
- `src/types.ts` — all TypeScript interfaces. `ClockWeatherCardConfig` is the raw user config; `MergedClockWeatherCardConfig` is the config after defaults are applied in `mergeConfig()`.
- `src/images.ts` — imports all SVG weather icons as data URIs (via `@rollup/plugin-image`). Exports `animatedIcons` and `staticIcons` maps keyed by HA weather condition string.
- `src/localize/localize.ts` — i18n; JSON translation files live in `src/localize/languages/`. The `localize()` function uses the card's configured `locale` or falls back to the HA locale.
- `src/styles.ts` — all CSS-in-JS styles for the card, returned as a `CSSResult`.
- `src/utils.ts` — pure math/array utilities (`min`, `max`, `roundIfNotNull`, etc.).
- `src/helpers.ts` — `safeRender()` wrapper that catches render errors and logs them.

**Icon assets:**
- `src/icons/fill/svg/` and `src/icons/line/svg/` — animated SVG icons (bundled as inline data URIs)
- `src/icons/fill/lottie/` — Lottie JSON animation files (separate, not bundled inline)
- `src/icons/monochrome/font/` — font-based monochrome icon set

**Weather forecast flow:** The card subscribes to HA's `weather.subscribe_forecast` WebSocket event via `subscribeForecastEvents()`. Forecasts arrive as `WeatherForecastEvent` and are stored in `this.forecasts`. On disconnect/reconnect, the subscriber is cleaned up and re-established.

**Temperature gradient:** A hardcoded `gradientMap` in `clock-weather-card.ts` maps temperatures (°C) to RGB colors used to color the forecast bars.

**Config merging:** `setConfig()` validates the raw config then calls `mergeConfig()` to produce a `MergedClockWeatherCardConfig` with all defaults filled in. Downstream rendering always reads from `this.config` (the merged version).
