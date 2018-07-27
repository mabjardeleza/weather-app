import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { forecastList, forecastSelection } from '../actions';
import Forecast from '../components/Forecast';
import Header from '../components/Header';
import Spinner from '../global/components/Spinner';
import { getConvertedAndFormattedForecastData } from '../selectors';

class ForecastPage extends Component {
  constructor(props) {
    super(props);

    this.navigateToDetailsPage = this.navigateToDetailsPage.bind(this);
  }

  componentDidMount() {
    const { requestForecasts, locationSettings: { city, country } } = this.props;
    requestForecasts(city, country);
  }

  navigateToDetailsPage(key) {
    const { navigation: { navigate }, setSelectedForecast } = this.props;
    setSelectedForecast(key);
    navigate('Details');
  }

  render() {
    const {
      forecastList: {
        currentDay,
        cityName,
        countryCode,
        forecasts,
      },
      loadingForecast,
    } = this.props;

    const customSpinnerStyle = {
      height: Dimensions.get('window').height,
    };

    if (loadingForecast) {
      return <Spinner customStyle={customSpinnerStyle} />;
    }

    return (
      <Forecast
        country={countryCode}
        city={cityName}
        forecasts={forecasts}
        currentDay={currentDay}
        navigateToDetailsPage={this.navigateToDetailsPage}
      />
    );
  }
}

ForecastPage.navigationOptions = ({ navigation }) => ({
  header: (<Header headerText="Sunshine" routeName={navigation.state.routeName} onBackButtonPress={() => navigation.goBack()} onSettingsButtonPress={() => navigation.navigate('Settings')} />),
});

ForecastPage.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    state: PropTypes.shape({
      routeName: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  requestForecasts: PropTypes.func.isRequired,
  setSelectedForecast: PropTypes.func.isRequired,
  forecastList: PropTypes.shape({
    cityName: PropTypes.string.isRequired,
    countryCode: PropTypes.string.isRequired,
    currentDay: PropTypes.shape({
      day: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      weekday: PropTypes.string.isRequired,
      month: PropTypes.string.isRequired,
      convertedMaxTemp: PropTypes.number.isRequired,
      convertedMinTemp: PropTypes.number.isRequired,
      windSpd: PropTypes.number.isRequired,
      windCdir: PropTypes.string.isRequired,
      pres: PropTypes.number.isRequired,
      rh: PropTypes.number.isRequired,
      weather: PropTypes.shape({
        icon: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    forecasts: PropTypes.arrayOf(PropTypes.shape({
      day: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      weekday: PropTypes.string.isRequired,
      month: PropTypes.string.isRequired,
      convertedMaxTemp: PropTypes.number.isRequired,
      convertedMinTemp: PropTypes.number.isRequired,
      windSpd: PropTypes.number.isRequired,
      windCdir: PropTypes.string.isRequired,
      pres: PropTypes.number.isRequired,
      rh: PropTypes.number.isRequired,
      weather: PropTypes.shape({
        icon: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired,
    })).isRequired,
  }).isRequired,
  locationSettings: PropTypes.shape({
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
  loadingForecast: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  forecastList: getConvertedAndFormattedForecastData(state),
  loadingForecast: state.forecastList.loading,
  locationSettings: state.settings.location,
});

const mapDispatchToProps = {
  requestForecasts: forecastList.request,
  setSelectedForecast: forecastSelection.set,
};


export default connect(mapStateToProps, mapDispatchToProps)(ForecastPage);
