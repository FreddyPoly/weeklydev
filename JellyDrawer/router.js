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
});

export const Root = StackNavigator({
    Root: {
        screen: App,
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#2C3B37',
                borderBottomWidth: 0,
                shadowOpacity: 0,
                shadowOffset: {
                    height: 0,
                },
                shadowRadius: 0,
                elevation: 0
            },
        })
    }
});
