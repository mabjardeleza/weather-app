import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Details from '../components/Details';
import Header from '../components/Header';

class ForecastDetailsPage extends Component {
  constructor(props) {
    super(props);

    this.getCurrentForecast = this.getCurrentForecast.bind(this);
  }

  getCurrentForecast() {
    const { forecastList: { forecasts }, selection: { currentForecastKey } } = this.props;
    const forecastLabelList = forecasts.map(forecast => forecast.label);
    const currentForecastIndex = forecastLabelList.indexOf(currentForecastKey);
    return forecasts[currentForecastIndex];
  }

  render() {
    const forecast = this.getCurrentForecast();
    return (
      <Details forecast={forecast} />
    );
  }
}

ForecastDetailsPage.navigationOptions = ({ navigation: { state, goBack } }) => ({
  header: (<Header headerText="Details" routeName={state.routeName} onBackButtonPress={() => goBack()} />),
});

ForecastDetailsPage.propTypes = {
  // navigation: PropTypes.shape({
  //   goBack: PropTypes.func.isRequired,
  //   state: PropTypes.shape({
  //     routeName: PropTypes.string.isRequired,
  //   }).isRequired,
  // }).isRequired,
  forecastList: PropTypes.shape({
    forecasts: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
  selection: PropTypes.shape({
    currentForecastKey: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ForecastDetailsPage);
