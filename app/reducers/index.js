import { combineReducers } from 'redux';

import { forecastList } from './forecastList';
import { selection } from './selection';

export default combineReducers({
  forecastList,
  selection,
});
