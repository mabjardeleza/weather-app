import React, { Component } from 'react';
import { Linking, Dimensions } from 'react-native';
import { camelizeKeys } from 'humps';
import Forecast from '../components/Forecast';
import Spinner from '../global/components/Spinner';
import { DAYS, MONTHS } from '../global/constants';

class ForecastPage extends Component {
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
        day: 0,
        weekday: '',
        month: '',
        maxTemp: 0,
        minTemp: 0,
        windSpd: 0,
        windCdir: 'NA',
        pres: 0,
        rh: 0,
        weather: {
          icon: '',
          description: '',
        },
      }],
      navigateToDetailsPage: () => {},
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({
      loading: true,
    });
    fetch('https://api.weatherbit.io/v2.0/forecast/daily?city=Adelaide&country=AU&key=dde8d8f055f74bc39f253757d643b379')
      .then(res => res.json())
      .then(this.onForecastSuccess.bind(this));
  }

  onForecastSuccess(res) {
    const {
      countryCode,
      cityName,
      data,
    } = camelizeKeys(res);
    let forecasts = data;
    forecasts.forEach((forecast, index) => {
      const {
        month,
        weekday,
        day,
        label,
      } = this.constructor.getDateBreakdown(forecast.validDate, index);
      forecasts[index].label = label;
      forecasts[index].weekday = weekday;
      forecasts[index].day = day;
      forecasts[index].month = month;
    });
    const currentDay = forecasts[0];
    forecasts = forecasts.slice(1);
    this.setState({
      city: cityName,
      country: countryCode,
      currentDay,
      forecasts,
      loading: false,
      navigateToDetailsPage: this.navigateToDetailsPage.bind(this),
    });
  }

  static getDateBreakdown(date, index) {
    const dateObject = new Date(date);
    const weekday = DAYS[dateObject.getDay()];
    const month = MONTHS[dateObject.getMonth()];
    const day = dateObject.getDate();
    const shortenedMonth = month.substr(0, 3);
    const shortenedWeekday = weekday.substr(0, 3);

    let label = '';
    if (index === 0) {
      label = `Today, ${month} ${day}`;
    } if (index === 1) {
      label = 'Tomorrow';
    } else if (index < 6) {
      label = weekday;
    } else {
      label = `${shortenedWeekday} ${shortenedMonth} ${day}`;
    }

    return {
      month,
      weekday,
      day,
      label,
    };
  }

  navigateToDetailsPage(index) {
    const { navigation } = this.props;
    const { forecasts } = this.state;
    navigation.navigate('Details', {
      forecast: forecasts[index],
    });
  }

  colorChange() {
    const city = 'Press';
    this.setState({
      city,
    });
    Linking.openURL('https://www.google.com');
  }

  render() {
    const {
      country,
      city,
      currentDay,
      forecasts,
      loading,
      navigateToDetailsPage,
    } = this.state;

    const customSpinnerStyle = {
      height: Dimensions.get('window').height,
    };

    if (loading) {
      return <Spinner customStyle={customSpinnerStyle} />;
    }

    return (
      <Forecast
        country={country}
        city={city}
        forecasts={forecasts}
        currentDay={currentDay}
        navigateToDetailsPage={navigateToDetailsPage}
      />
    );
  }
}

export default ForecastPage;
