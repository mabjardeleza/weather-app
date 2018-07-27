import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import SunIcon from '../images/sun-icon.png';
import BackIcon from '../images/back-icon.png';
import EllipsisIcon from '../images/vertical-ellipsis-icon.png';
import { ToggableButton } from '../global/components/Button';
import COLORS from '../global/styles';

const styles = StyleSheet.create({
  iconStyle: {
    height: 30,
    width: 30,
  },
  textStyle: {
    color: COLORS.offWhite,
    fontFamily: 'Pacifico',
    fontSize: 25,
    lineHeight: 25,
    marginLeft: 10,
    paddingTop: 12,
  },
  viewStyle: {
    alignItems: 'flex-start',
    backgroundColor: COLORS.skyBlue,
    elevation: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 60,
    justifyContent: 'space-between',
    padding: 15,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
  },
  brandStyle: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  backStyle: {
    color: COLORS.offWhite,
    fontSize: 25,
    lineHeight: 25,
    paddingTop: 12,
  },
});

const Header = (props) => {
  const {
    headerText,
    onBackButtonPress,
    routeName,
    onSettingsButtonPress,
  } = props;
  const isFirstScreen = routeName === 'Home';
  const isSettings = routeName === 'Settings';
  const icon = isFirstScreen ? SunIcon : BackIcon;
  return (
    <View style={styles.viewStyle}>
      <View style={styles.brandStyle}>
        <TouchableOpacity
          onPress={() => onBackButtonPress()}
          disabled={isFirstScreen}
        >
          <Image source={icon} style={styles.iconStyle} />
        </TouchableOpacity>
        <Text style={styles.textStyle}>{headerText}</Text>
      </View>
      <ToggableButton
        onPress={() => onSettingsButtonPress()}
        visible={!isSettings}
      >
        <Image source={EllipsisIcon} style={styles.iconStyle} />
      </ToggableButton>
    </View>
  );
};

Header.propTypes = {
  headerText: PropTypes.string.isRequired,
  onBackButtonPress: PropTypes.func.isRequired,
  routeName: PropTypes.string.isRequired,
  onSettingsButtonPress: PropTypes.func.isRequired,
};

export default Header;
