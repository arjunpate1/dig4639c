import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './weather_project';
import Settings from './Settings';

const HomeStack = createStackNavigator({
  Home : {
  screen: HomeScreen,
  navigationOptions: {
    header: null,
  }
},
  //option above is better so it hides the top bar which has a go back
  //Home: HomeScreen,
  Settings: Settings,
});

export default HomeStack;
