import { combineReducers } from 'redux';

import { forecastList } from './forecastList';
import { forecastSelection } from './selection';
import { settings } from './settings';

export default combineReducers({
  forecastList,
  forecastSelection,
  settings,
});
