import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import COLORS from '../global/styles';

const styles = StyleSheet.create({
  iconStyle: {
    alignSelf: 'center',
    height: 100,
    width: 100,
  },
  dateTextStyle: {
    color: COLORS.offWhite,
    fontSize: 22,
  },
  predictionTextStyle: {
    alignSelf: 'center',
    color: COLORS.offWhite,
    fontSize: 18,
  },
  locationTextStyle: {
    color: COLORS.offWhite,
    fontSize: 14,
  },
  mainTextStyle: {
    alignSelf: 'center',
    color: COLORS.offWhite,
    fontSize: 80,
    fontWeight: '100',
  },
  subTextStyle: {
    alignSelf: 'center',
    color: COLORS.offWhite,
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
    backgroundColor: COLORS.skyBlue,
    flexDirection: 'column',
    justifyContent: 'center',
    height: 240,
    paddingLeft: 50,
    paddingRight: 10,
  },
  dateLocationViewStyle: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});

const CurrentWeatherHeader = (props) => {
  const {
    city,
    country,
    forecast: {
      label,
      maxTemp,
      minTemp,
      weather: {
        icon,
        description,
      },
    },
  } = props;

  return (
    <View style={styles.headerViewStyle}>
      <View style={styles.dateLocationViewStyle}>
        <Text style={styles.dateTextStyle}>{label}</Text>
        <Text style={styles.locationTextStyle}>{city}, {country}</Text>
      </View>
      <View style={styles.mainViewStyle}>
        <Text style={styles.mainTextStyle}>{maxTemp}°</Text>
        <Image source={{ uri: `https://www.weatherbit.io/static/img/icons/${icon}.png` }} style={styles.iconStyle} />
      </View>
      <View style={styles.subViewStyle}>
        <Text style={styles.subTextStyle}>{minTemp}°</Text>
        <Text style={styles.predictionTextStyle}>{description}</Text>
      </View>
    </View>
  );
};

CurrentWeatherHeader.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  forecast: PropTypes.shape({
    label: PropTypes.string.isRequired,
    maxTemp: PropTypes.number.isRequired,
    minTemp: PropTypes.number.isRequired,
    weather: PropTypes.shape({
      icon: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CurrentWeatherHeader;
