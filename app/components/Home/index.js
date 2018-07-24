import React from 'react';
import { createStackNavigator } from 'react-navigation';
import ForecastPage from '../../containers/ForecastPage';
import ForecastDetailsPage from '../../containers/ForecastDetailsPage';
import Header from '../Header';

ForecastPage.navigationOptions = (props) => {
  return {
    header: (<Header headerText="Sunshine" navigationProps={props} />),
  };
};

ForecastDetailsPage.navigationOptions = (props) => {
  return {
    header: (<Header headerText="Details" navigationProps={props} />),
  };
};

export default createStackNavigator(
  {
    Home: {
      screen: ForecastPage,
    },
    Details: {
      screen: ForecastDetailsPage,
    },
  },
);
