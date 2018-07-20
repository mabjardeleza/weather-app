import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import SunIcon from '../images/sun-icon.png';
import COLORS from '../global/styles';

const styles = StyleSheet.create({
  iconStyle: {
    height: 30,
    marginRight: 10,
    width: 30,
  },
  textStyle: {
    color: COLORS.offWhite,
    fontFamily: 'Pacifico',
    fontSize: 25,
    lineHeight: 25,
    paddingTop: 12,
  },
  viewStyle: {
    alignItems: 'flex-start',
    backgroundColor: COLORS.skyBlue,
    elevation: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 60,
    justifyContent: 'flex-start',
    padding: 15,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
  },
});

const Header = ({ headerText }) => (
  <View style={styles.viewStyle}>
    <Image source={SunIcon} style={styles.iconStyle} />
    <Text style={styles.textStyle}>{headerText}</Text>
  </View>
);

Header.propTypes = {
  headerText: PropTypes.string.isRequired,
};

export default Header;
