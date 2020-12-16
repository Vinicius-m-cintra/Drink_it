import React from 'react';
import {StatusBar, Platform} from 'react-native';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';

import store from './src/store';
import Routes from './src/routes';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Platform.OS === 'android' ? 'black' : null}
      />
      <Routes />
    </Provider>
  );
};

export default App;
