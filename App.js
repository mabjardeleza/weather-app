import React from 'react';
import { Provider } from 'react-redux';

import Home from './app/components/Home';
import getStore from './app/getStore';

const store = getStore();

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default App;
