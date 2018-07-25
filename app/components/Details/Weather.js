import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';

import COLORS from '../../global/styles';

const styles = StyleSheet.create({
  iconStyle: {
    alignSelf: 'center',
    height: 100,
    width: 100,
  },
  predictionTextStyle: {
    alignSelf: 'center',
    color: COLORS.gray,
    fontSize: 18,
  },
  mainTextStyle: {
    alignSelf: 'center',
    color: COLORS.gray,
    fontSize: 70,
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
});

const Weather = (props) => {
  const {
    forecast: {
      maxTemp,
      minTemp,
      weather: {
        icon,
        description,
      },
    },
  } = props;
  return (
    <View>
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

Weather.propTypes = {
  forecast: PropTypes.shape({
    maxTemp: PropTypes.number.isRequired,
    minTemp: PropTypes.number.isRequired,
    weather: PropTypes.shape({
      icon: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Weather;
