import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'stretch',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'flex-start',
  },
});

const Card = ({ children }) => (
  <View style={styles.containerStyle}>
    {children}
  </View>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
