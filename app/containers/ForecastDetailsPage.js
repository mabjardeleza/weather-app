import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import WeatherDetails from '../components/WeatherDetails';
import Header from '../components/Header';
import { DAYS, MONTHS } from '../global/constants';

class ForecastDetailsPage extends Component {
  constructor(props) {
    super(props);

    this.getCurrentForecast = this.getCurrentForecast.bind(this);
  }

  getCurrentForecast() {
    const { forecastList: { forecasts }, forecastSelection: { currentForecastKey } } = this.props;
    const forecastLabelList = forecasts.map(forecast => forecast.label);
    const currentForecastIndex = forecastLabelList.indexOf(currentForecastKey);
    return forecasts[currentForecastIndex];
  }

  render() {
    const forecast = this.getCurrentForecast();
    return (
      <WeatherDetails forecast={forecast} />
    );
  }
}

ForecastDetailsPage.navigationOptions = ({ navigation: { state, goBack, navigate } }) => ({
  header: (<Header headerText="Details" routeName={state.routeName} onBackButtonPress={() => goBack()} onSettingsButtonPress={() => navigate('Settings')} />),
});

ForecastDetailsPage.propTypes = {
  forecastList: PropTypes.shape({
    forecasts: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
  forecastSelection: PropTypes.shape({
    currentForecastKey: PropTypes.string.isRequired,
  }).isRequired,
};

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

const onForecastSuccess = (res) => {
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
  });
  const currentDay = forecasts[0];
  forecasts = forecasts.slice(1);
  return {
    cityName,
    countryCode,
    currentDay,
    forecasts,
  };
};

const mapStateToProps = (state) => {
  const data = onForecastSuccess(state.forecastList.data);
  return {
    ...state,
    forecastList: data,
  };
};

export default connect(mapStateToProps)(ForecastDetailsPage);
