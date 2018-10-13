import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';

import SmoothList from './SmoothList';
import SmoothDetail from './SmoothDetail';
import HeaderIcon from './HeaderIcon';

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
  navigationOptions: ({navigation}) => ({
    headerLeft: <HeaderIcon nav = {navigation} />,
  }),
  transitionConfig: () => ({
    screenInterpolator: (props) => {
        return fade(props)
    }
  })
});
