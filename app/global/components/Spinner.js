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

const Spinner = ({ size, customStyle, visible }) => {
  if (!visible) {
    return (null);
  }

  return (
    <View style={[styles.spinnerStyle, customStyle]}>
      <ActivityIndicator size={size} />
    </View>
  );
};

Spinner.propTypes = {
  size: PropTypes.string,
  customStyle: PropTypes.shape({
    height: PropTypes.number,
  }),
  visible: PropTypes.bool,
};

Spinner.defaultProps = {
  size: 'large',
  customStyle: {},
  visible: true,
};

export default Spinner;
