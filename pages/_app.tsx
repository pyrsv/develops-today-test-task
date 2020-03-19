import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { store } from '../store/store';

const MyApp = props => {
  // eslint-disable-next-line react/prop-types
  const { Component, pageProps, store } = props;
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default withRedux(store)(MyApp);
