import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const Spinner = ({ size, customStyle }) => (
  <View style={[styles.spinnerStyle, customStyle]}>
    <ActivityIndicator size={size} />
  </View>
);

Spinner.propTypes = {
  size: PropTypes.string,
  customStyle: PropTypes.shape({
    height: PropTypes.number,
  }),
};

Spinner.defaultProps = {
  size: 'large',
  customStyle: {},
};

export default Spinner;
