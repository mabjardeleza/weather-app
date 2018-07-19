import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import Forecast from './src/components/Forecast';

const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'Sunshine'} />
        <Forecast />
    </View>
);

AppRegistry.registerComponent('WeatherApp', () => App);
