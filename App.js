import React from 'react';
import {StatusBar, Platform} from 'react-native';
import 'react-native-gesture-handler';

import Routes from './src/routes';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Platform.OS === 'android' ? 'black' : null}
      />
      <Routes />
    </>
  );
};

export default App;
