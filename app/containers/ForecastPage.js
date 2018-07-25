import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { camelizeKeys } from 'humps';

import { forecastList, selection } from '../actions';
import Forecast from '../components/Forecast';
import Header from '../components/Header';
import Spinner from '../global/components/Spinner';
import { DAYS, MONTHS } from '../global/constants';

class ForecastPage extends Component {
  // static navigationOptions = ({ navigation }) => ({
  //   header: (<Header headerText="Sunshine"
  // routeName={navigation.state.routeName}
  // onBackButtonPress={() => navigation.goBack()} />),
  // });

  // static propTypes = {
  //   navigation: PropTypes.shape({
  //     navigate: PropTypes.func.isRequired,
  //     goBack: PropTypes.func.isRequired,
  //     state: PropTypes.shape({
  //       routeName: PropTypes.string.isRequired,
  //     }).isRequired,
  //   }).isRequired,
  // };

  constructor(props) {
    super(props);

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
    const { setForecastListState } = this.props;
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
    setForecastListState(forecasts);
    this.setState({
      city: cityName,
      country: countryCode,
      currentDay,
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

  navigateToDetailsPage(key) {
    const { navigation: { navigate }, setSelectedForecast } = this.props;
    setSelectedForecast(key);
    navigate('Details');
  }

  render() {
    const {
      country,
      city,
      currentDay,
      loading,
      navigateToDetailsPage,
    } = this.state;

    const {
      forecastData,
    } = this.props;

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
        forecasts={forecastData}
        currentDay={currentDay}
        navigateToDetailsPage={navigateToDetailsPage}
      />
    );
  }
}

ForecastPage.navigationOptions = ({ navigation }) => ({
  header: (<Header headerText="Sunshine" routeName={navigation.state.routeName} onBackButtonPress={() => navigation.goBack()} />),
});

ForecastPage.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    state: PropTypes.shape({
      routeName: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  setSelectedForecast: PropTypes.func.isRequired,
  setForecastListState: PropTypes.func.isRequired,
  forecastData: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    weekday: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
    maxTemp: PropTypes.number.isRequired,
    minTemp: PropTypes.number.isRequired,
    windSpd: PropTypes.number.isRequired,
    windCdir: PropTypes.string.isRequired,
    pres: PropTypes.number.isRequired,
    rh: PropTypes.number.isRequired,
    weather: PropTypes.shape({
      icon: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({ forecastData: state.forecastList.forecasts });

const mapDispatchToProps = {
  setSelectedForecast: selection.set,
  setForecastListState: forecastList.success,
};


export default connect(mapStateToProps, mapDispatchToProps)(ForecastPage);
