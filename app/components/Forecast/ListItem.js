import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

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
  buttonStyle: {
    backgroundColor: COLORS.offWhite,
  },
});

const ForecastListItem = (props) => {
  const {
    details: {
      label,
      convertedMaxTemp,
      convertedMinTemp,
      weather: {
        icon,
        description,
      },
    },
    navigateToDetailsPage,
  } = props;

  return (
    <TouchableHighlight
      underlayColor={COLORS.skyBlue}
      style={styles.buttonStyle}
      activeOpacity={1}
      onPress={navigateToDetailsPage}
    >
      <Card>
        <Image source={{ uri: `https://www.weatherbit.io/static/img/icons/${icon}.png` }} style={styles.iconStyle} />
        <CardColumn>
          <CardSection>
            <Text style={styles.headerTextStyle}>{label}</Text>
            <Text style={styles.headerTextStyle}>{convertedMaxTemp}°</Text>
          </CardSection>
          <CardSection>
            <Text style={styles.subTextStyle}>
              {description}
            </Text>
            <Text style={styles.subTextStyle}>{convertedMinTemp}°</Text>
          </CardSection>
        </CardColumn>
      </Card>
    </TouchableHighlight>
  );
};

ForecastListItem.propTypes = {
  details: PropTypes.shape({
    label: PropTypes.string.isRequired,
    convertedMaxTemp: PropTypes.number.isRequired,
    convertedMinTemp: PropTypes.number.isRequired,
    weather: PropTypes.shape({
      icon: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  navigateToDetailsPage: PropTypes.func.isRequired,
};

export default ForecastListItem;
