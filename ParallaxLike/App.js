import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {IndicatorViewPager} from 'rn-viewpager';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <IndicatorViewPager
          style={{flex: 1}} >
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'gold',
          }}>
            <Text>Londres</Text>
          </View>

          <View style={{backgroundColor: 'green'}}>
            <Text>Paris</Text>
          </View>

          <View style={{backgroundColor: 'blue'}}>
            <Text>New York</Text>
          </View>
        </IndicatorViewPager>
      </View>
    );
  }
}
