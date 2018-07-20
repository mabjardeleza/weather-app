import React from 'react';
import PropTypes from 'prop-types';
import { Text, Image, StyleSheet } from 'react-native';
import Card from '../../global/components/Card';
import CardColumn from '../../global/components/Card/CardColumn';
import CardSection from '../../global/components/Card/CardSection';
import COLORS from '../../global/styles';

const styles = StyleSheet.create({
  iconStyle: {
    alignSelf: 'center',
    height: 35,
    width: 35,
    marginRight: 10,
  },
  headerTextStyle: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  subTextStyle: {
    alignSelf: 'center',
    fontSize: 12,
    color: COLORS.gray,
  },
});

const ForecastDay = (props) => {
  const {
    details: {
      label,
      maxTemp,
      minTemp,
      weather: {
        icon,
        description,
      },
    },
  } = props;

  const {
    iconStyle,
    headerTextStyle,
    subTextStyle,
  } = styles;

  return (
    <Card>
      <Image source={{ uri: `https://www.weatherbit.io/static/img/icons/${icon}.png` }} style={iconStyle} />
      <CardColumn>
        <CardSection>
          <Text style={headerTextStyle}>{label}</Text>
          <Text style={headerTextStyle}>{maxTemp}°</Text>
        </CardSection>
        <CardSection>
          <Text style={subTextStyle}>
            {description}
          </Text>
          <Text style={subTextStyle}>{minTemp}°</Text>
        </CardSection>
      </CardColumn>
    </Card>
  );
};

ForecastDay.propTypes = {
  details: PropTypes.shape({
    label: PropTypes.string.isRequired,
    maxTemp: PropTypes.number.isRequired,
    minTemp: PropTypes.number.isRequired,
    weather: PropTypes.shape({
      icon: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ForecastDay;
