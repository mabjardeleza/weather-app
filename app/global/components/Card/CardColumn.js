import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});

const CardColumn = ({ children }) => (
  <View style={styles.containerStyle}>
    {children}
  </View>
);

CardColumn.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardColumn;
