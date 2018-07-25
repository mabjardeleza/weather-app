import { createStackNavigator } from 'react-navigation';

import ForecastPage from '../../containers/ForecastPage';
import ForecastDetailsPage from '../../containers/ForecastDetailsPage';

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
