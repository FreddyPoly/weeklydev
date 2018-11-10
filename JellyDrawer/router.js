import React from 'react';
import { Dimensions } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

// Import des écrans
import Main from './Main';
import JellyDrawer from './JellyDrawer';

const App = DrawerNavigator({
  Accueil: {
    screen: Main,
  },
}, {
  contentComponent: props => <JellyDrawer {...props} />,
  drawerBackgroundColor: 'transparent',
});

export const Root = StackNavigator({
  Root: {
    screen: App,
  }
}, {
  headerMode: 'none',
});
