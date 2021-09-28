import React from 'react';
import {SafeAreaView} from 'react-native';
import Provider from './src/navigations';

const App = () => {
  return (
    <SafeAreaView>
      <Provider />
    </SafeAreaView>
  );
};

export default App;
