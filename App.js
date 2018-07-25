import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './app/reducers';
import Home from './app/components/Home';

const App = () => (
  <Provider store={createStore(reducers)}>
    <Home />
  </Provider>
);

export default App;
