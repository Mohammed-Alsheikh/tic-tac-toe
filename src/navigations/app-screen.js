import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '_screens/App/homeScreen';

const StackApp = createStackNavigator();

const AppStackScreen = ({navigation}) => {
  return (
    <StackApp.Navigator>
      <StackApp.Screen name="HomeScreen" component={HomeScreen} />
    </StackApp.Navigator>
  );
};

export default AppStackScreen;
