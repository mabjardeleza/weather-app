import React from 'react';
import { View } from 'react-native';
import Header from './app/components/Header';
import Forecast from './app/components/Forecast';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText="Sunshine" />
    <Forecast />
  </View>
);

export default App;
