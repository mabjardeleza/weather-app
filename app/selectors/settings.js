
import { createSelector } from 'reselect';
import { DAYS, MONTHS } from '../global/constants';

const getForecasts = state => state.forecastList.data;
const getTemperatureUnit = state => state.settings.temperature.unit;

const getDateBreakdown = (date, index) => {
  let month = '';
  let weekday = '';
  let day = 0;
  let label = '';
  if (date) {
    const dateObject = new Date(date);
    weekday = DAYS[dateObject.getDay()];
    month = MONTHS[dateObject.getMonth()];
    day = dateObject.getDate();
    const shortenedMonth = month.substr(0, 3);
    const shortenedWeekday = weekday.substr(0, 3);

    if (index === 0) {
      label = `Today, ${month} ${day}`;
    } if (index === 1) {
      label = 'Tomorrow';
    } else if (index < 6) {
      label = weekday;
    } else {
      label = `${shortenedWeekday} ${shortenedMonth} ${day}`;
    }
  }

  return {
    month,
    weekday,
    day,
    label,
  };
};

const convertToFahrenheit = (data) => {
  const convertedData = (data * 1.8) + 32;
  return parseFloat(convertedData.toFixed(1));
};

// takes forecast data and gets date related labels
// separates the current day data
// converts data according to the system of unit chosen
// eslint-disable-next-line import/prefer-default-export
export const getConvertedAndFormattedForecastData = createSelector(
  [getForecasts, getTemperatureUnit],
  (res, unit) => {
    const {
      cityName,
      countryCode,
      data,
    } = res;
    let forecasts = data;
    forecasts.forEach((forecast, index) => {
      const {
        month,
        weekday,
        day,
        label,
      } = getDateBreakdown(forecast.validDate, index);
      forecasts[index].label = label;
      forecasts[index].weekday = weekday;
      forecasts[index].day = day;
      forecasts[index].month = month;
      if (unit === 'Metric') {
        forecasts[index].convertedMaxTemp = forecasts[index].maxTemp;
        forecasts[index].convertedMinTemp = forecasts[index].minTemp;
      } else if (unit === 'Imperial') {
        forecasts[index].convertedMaxTemp = convertToFahrenheit(forecasts[index].maxTemp);
        forecasts[index].convertedMinTemp = convertToFahrenheit(forecasts[index].minTemp);
      }
    });
    const currentDay = forecasts[0];
    forecasts = forecasts.slice(1);
    return {
      cityName,
      countryCode,
      currentDay,
      forecasts,
    };
  },
);
