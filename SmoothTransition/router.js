import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {View, Image, Dimensions} from 'react-native';

import SmoothList from './SmoothList';
import SmoothDetail from './SmoothDetail';

const fade = (props) => {
  const {position, scene} = props

  const index = scene.index

  const translateX = 0
  const translateY = 0

  const opacity = position.interpolate({
    inputRange: [index - 0.7, index, index + 0.7],
    outputRange: [1, 1, 1]
  })

  return {
    opacity,
    transform: [{translateX}, {translateY}]
  }
}

export const Root = StackNavigator({
  SmoothList: {
    screen: SmoothList,
  },
  SmoothDetail: {
    screen: SmoothDetail,
  }
}, {
  navigationOptions: () => ({
    headerLeft: <Image source={require('./fonts/menu.png')} style={{marginLeft: 25, width: 25, height: 25, resizeMode: 'contain'}} />,
  }),
  transitionConfig: () => ({
    screenInterpolator: (props) => {
        return fade(props)
    }
  })
});
