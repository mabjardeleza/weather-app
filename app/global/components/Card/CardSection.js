import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

const CardSection = ({ children }) => (
  <View style={styles.containerStyle}>
    {children}
  </View>
);

CardSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardSection;
