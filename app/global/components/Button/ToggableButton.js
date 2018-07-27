import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const ToggableButton = (props) => {
  const {
    children,
    disabled,
    onPress,
    visible,
  } = props;
  if (!visible) {
    return (null);
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
    >
      {children}
    </TouchableOpacity>
  );
};

ToggableButton.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  visible: PropTypes.bool,
};

ToggableButton.defaultProps = {
  disabled: false,
  onPress: () => {},
  visible: true,
};

export default ToggableButton;
