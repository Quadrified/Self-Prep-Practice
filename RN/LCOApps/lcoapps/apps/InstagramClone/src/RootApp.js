import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import InstagramClone from './InstagramClone';

function RootApp(props) {
  return (
    <>
      <Provider store={store}>
        <InstagramClone />
      </Provider>
    </>
  );
}

export default RootApp;
