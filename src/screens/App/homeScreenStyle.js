import React from 'react';
import {StyleSheet} from 'react-native';

const HomeScreenStyle = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    alignSelf: 'center',
    top: 90,
  },
  board: {
    width: 100,
    height: 100,
    borderWidth: 1,
  },
  xStyle: {
    flex: 1,
    color: 'red',
    fontSize: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  oStyle: {
    flex: 1,
    color: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 70,
  },
});

export default HomeScreenStyle;
