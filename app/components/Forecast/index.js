import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { camelizeKeys } from 'humps';
import CurrentWeatherHeader from '../CurrentWeatherHeader';
import ForecastList from './List';
import { DAYS, MONTHS } from '../../global/constants';

class Forecast extends Component {
  constructor() {
    super();
    this.state = {
      city: '',
      country: '',
      currentDay: {
        label: '',
        maxTemp: 0,
        minTemp: 0,
        weather: {
          icon: '',
          description: '',
        },
      },
      forecasts: [{
        label: '',
        maxTemp: 0,
        minTemp: 0,
        weather: {
          icon: '',
          description: '',
        },
      }],
    };
  }

  componentDidMount() {
    fetch('https://api.weatherbit.io/v2.0/forecast/daily?city=Adelaide&country=AU&key=dde8d8f055f74bc39f253757d643b379')
      .then(res => res.json())
      .then((res) => {
        const {
          countryCode,
          cityName,
          data,
        } = camelizeKeys(res);
        let forecasts = data;
        forecasts.forEach((forecast, index) => {
          forecasts[index].label = Forecast.getLabel(forecast.validDate, index);
        });
        const currentDay = forecasts[0];
        forecasts = forecasts.slice(1);
        this.setState({
          city: cityName, country: countryCode, currentDay, forecasts,
        });
      });
  }

  static getLabel(date, index) {
    if (index === 1) {
      return 'Tomorrow';
    }

    const dateObject = new Date(date);
    const weekday = DAYS[dateObject.getDay()];
    const month = MONTHS[dateObject.getMonth()];
    const day = dateObject.getDate();

    if (index === 0) {
      return `Today, ${month} ${day}`;
    }
    if (index < 6) {
      return weekday;
    }

    const shortenedMonth = month.substr(0, 3);
    const shortenedWeekday = weekday.substr(0, 3);
    return `${shortenedWeekday} ${shortenedMonth} ${day}`;
  }

  render() {
    const {
      country,
      city,
      currentDay,
      forecasts,
    } = this.state;

    return (
      <ScrollView>
        <CurrentWeatherHeader
          country={country}
          city={city}
          forecast={currentDay}
        />
        <ForecastList details={forecasts} />
      </ScrollView>
    );
  }
}

export default Forecast;
