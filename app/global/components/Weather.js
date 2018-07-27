import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';

import COLORS from '../styles';

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
});

const Weather = (props) => {
  const {
    forecast: {
      convertedMaxTemp,
      convertedMinTemp,
      weather: {
        icon,
        description,
      },
    },
    backgroundColor,
    textColor,
  } = props;

  const customBackgroundStyle = {
    backgroundColor,
  };

  const customTextStyle = {
    color: textColor,
  };

  return (
    <View styles={customBackgroundStyle}>
      <View style={styles.mainViewStyle}>
        <Text style={[styles.mainTextStyle, customTextStyle]}>{convertedMaxTemp}°</Text>
        <Image source={{ uri: `https://www.weatherbit.io/static/img/icons/${icon}.png` }} style={styles.iconStyle} />
      </View>
      <View style={styles.subViewStyle}>
        <Text style={[styles.subTextStyle, customTextStyle]}>{convertedMinTemp}°</Text>
        <Text style={[styles.predictionTextStyle, customTextStyle]}>{description}</Text>
      </View>
    </View>
  );
};

Weather.propTypes = {
  forecast: PropTypes.shape({
    convertedMaxTemp: PropTypes.number.isRequired,
    convertedMinTemp: PropTypes.number.isRequired,
    weather: PropTypes.shape({
      icon: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};

Weather.defaultProps = {
  backgroundColor: COLORS.offWhite,
  textColor: COLORS.gray,
};
export default Weather;
