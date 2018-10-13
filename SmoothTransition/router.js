import { StackNavigator } from 'react-navigation';

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
  headerMode: 'none',
  transitionConfig: () => ({
    screenInterpolator: (props) => {
        return fade(props)
    }
  })
});
