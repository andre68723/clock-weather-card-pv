import { css } from 'lit'

export default css`

  ha-card {
    --bar-height: 1.5rem;
    height: 100%;
  }

  clock-weather-card-today {
    display: flex;
  }

  clock-weather-card-today-left {
    display: flex;
    width: 35%;
    align-items: center;
    justify-content: center;
  }

  .grow-img {
    max-width: 100%;
    max-height: 100%;
  }

  clock-weather-card-today-right {
    display: flex;
    width: 65%;
    justify-content: space-around;
    align-items: center;
  }

  clock-weather-card-today-right-wrap {
    display: flex;
    flex-direction: column;
  }

  clock-weather-card-today-right-wrap-top {
    width: 100%;
    text-align: end;
    display: block;
  }

  clock-weather-card-today-right-wrap-center {
    display: flex;
    height: 4rem;
    font-size: 3.5rem;
    white-space: nowrap;
    align-items: center;
    justify-content: center;
  }

  clock-weather-card-today-right-wrap-bottom {
    display: flex;
    justify-content: start;
  }

  clock-weather-card-forecast {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  clock-weather-card-forecast-row {
    display: grid;
    grid-template-columns: var(--col-one-size) 2rem 2.1rem 1fr auto;
    align-items: start;
    grid-gap: 0.5rem;
  }

  forecast-text {
    text-align: var(--text-align);
    white-space: nowrap;
    text-overflow: clip;
    line-height: var(--bar-height);
  }

  forecast-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--bar-height);
  }

  forecast-bar-column {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    width: 100%;
  }

  forecast-right-column {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    align-items: flex-end;
  }

  forecast-solar-text {
    line-height: calc(var(--bar-height) * 0.6);
    font-size: 0.75rem;
    opacity: 0.75;
    white-space: nowrap;
  }

  forecast-temperature-bar {
    position: relative;
    width: 100%;
    height: var(--bar-height);
    border-radius: calc(var(--bar-height) / 2);
    overflow: hidden;
  }

  forecast-solar-bar {
    position: relative;
    width: 100%;
    height: calc(var(--bar-height) * 0.6);
    border-radius: calc(var(--bar-height) * 0.3);
    overflow: hidden;
  }

  forecast-solar-bar-background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.25;
    background: var(--energy-solar-color, #FFB300);
  }

  forecast-solar-bar-fill {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: var(--solar-bar-width, 0%);
    background: var(--energy-solar-color, #FFB300);
    opacity: 0.85;
  }

  forecast-temperature-bar-background {
    left: 0%;
    right: 100%;
    width: 100%;
    opacity: 0.25;
    background: var(--light-primary-color);
  }

  forecast-temperature-bar-current-indicator-dot {
    --border-width: 2px;
    background-color: var(--primary-text-color);
    border-radius: 50%;
    width: var(--bar-height);
    box-shadow: inset 0 0 0 var(--border-width) var(--text-light-primary-color);
    margin-left: calc(var(--move-right) * -1 * var(--bar-height));
  }

  forecast-temperature-bar-range {
    border-radius: calc(var(--bar-height) / 2);
    left: var(--start-percent);
    right: calc(100% - var(--end-percent));
    background: linear-gradient(to right, var(--gradient));
    overflow: hidden;
    min-width: var(--bar-height);
    margin-left: calc(var(--move-right) * -1 * var(--bar-height));
  }

  forecast-temperature-bar-current-indicator {
    opacity: 0.75;
    left: var(--position);
  }

  forecast-temperature-bar-current-indicator,
  forecast-temperature-bar-current-indicator-dot,
  forecast-temperature-bar-background,
  forecast-temperature-bar-range {
    height: 100%;
    position: absolute;
  }

  aqi {
    padding: 2px;
    border-radius: 5px;
  }
`
