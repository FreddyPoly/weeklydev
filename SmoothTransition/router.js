import { StackNavigator } from 'react-navigation';

import SmoothList from './SmoothList';
import SmoothDetail from './SmoothDetail';

export const Root = StackNavigator({
  SmoothList: {
      screen: SmoothList,
  },
  SmoothDetail: {
      screen: SmoothDetail,
  }
}, {
  headerMode: 'none'
});
