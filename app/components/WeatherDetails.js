import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Weather from '../global/components/Weather';
import COLORS from '../global/styles';

const styles = StyleSheet.create({
  iconStyle: {
    alignSelf: 'center',
    height: 100,
    width: 100,
  },
  dateTextStyle: {
    color: COLORS.gray,
    fontSize: 22,
    lineHeight: 32,
  },
  predictionTextStyle: {
    alignSelf: 'center',
    color: COLORS.gray,
    fontSize: 18,
  },
  locationTextStyle: {
    color: COLORS.gray,
    fontSize: 14,
  },
  mainTextStyle: {
    alignSelf: 'center',
    color: COLORS.gray,
    fontSize: 80,
    fontWeight: '100',
  },
  subTextStyle: {
    alignSelf: 'center',
    color: COLORS.gray,
    fontSize: 40,
  },
  mainViewStyle: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  subViewStyle: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  headerViewStyle: {
    flex: 1,
    backgroundColor: COLORS.offWhite,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 10,
  },
  weatherViewStyle: {
    backgroundColor: COLORS.offWhite,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 40,
    paddingBottom: 20,
  },
  dateLocationViewStyle: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});

const WeatherDetails = (props) => {
  const {
    forecast,
    forecast: {
      day,
      weekday,
      month,
      windSpd,
      windCdir,
      pres,
      rh,
    },
  } = props;

  return (
    <View style={styles.headerViewStyle}>
      <View style={styles.dateLocationViewStyle}>
        <Text style={styles.dateTextStyle}>{weekday}</Text>
        <Text style={styles.locationTextStyle}>{month} {day}</Text>
      </View>
      <View style={styles.weatherViewStyle}>
        <Weather forecast={forecast} />
      </View>
      <View style={styles.dateLocationViewStyle}>
        <Text style={styles.dateTextStyle}>Humidity: {rh}%</Text>
        <Text style={styles.dateTextStyle}>Pressure: {pres} mb</Text>
        <Text style={styles.dateTextStyle}>Wind: {windSpd} km/h {windCdir}</Text>
      </View>
    </View>
  );
};

WeatherDetails.propTypes = {
  forecast: PropTypes.shape({
    day: PropTypes.number.isRequired,
    weekday: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
    windSpd: PropTypes.number.isRequired,
    windCdir: PropTypes.string.isRequired,
    pres: PropTypes.number.isRequired,
    rh: PropTypes.number.isRequired,
    weather: PropTypes.shape({
      icon: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default WeatherDetails;
