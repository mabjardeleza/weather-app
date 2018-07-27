import { createStackNavigator } from 'react-navigation';

import ForecastPage from '../containers/ForecastPage';
import ForecastDetailsPage from '../containers/ForecastDetailsPage';
import SettingsPage from '../containers/SettingsPage';

export default createStackNavigator(
  {
    Home: {
      screen: ForecastPage,
    },
    Details: {
      screen: ForecastDetailsPage,
    },
    Settings: {
      screen: SettingsPage,
    },
  },
);
