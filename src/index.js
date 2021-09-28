import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Navigator from '_navigations';

const Stack = createStackNavigator();

const SrcApp = () => <Navigator />;

export default SrcApp;
