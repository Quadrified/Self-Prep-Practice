import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Travelgram from './Travelgram';

const RootApp = () => {
  return (
    <Provider store={store}>
      <Travelgram />
    </Provider>
  );
};

export default RootApp;
