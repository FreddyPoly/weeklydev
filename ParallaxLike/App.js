import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions} from 'react-native';

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
          }}>
            <Image
              style={{
                position: 'absolute',
                top: (Dimensions.get('window').height / 2) - 150,
                left: (Dimensions.get('window').width / 2) - 150,
                width: 300,
                height: 300,
              }}
              source = { require('./assets/beach.jpg') } />

            <Text>Beach</Text>
          </View>

          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Image
              style={{
                position: 'absolute',
                top: (Dimensions.get('window').height / 2) - 150,
                left: (Dimensions.get('window').width / 2) - 150,
                width: 300,
                height: 300,
              }}
              source = { require('./assets/mountain.jpg') } />
            <Text>Mountain</Text>
          </View>

          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              position: 'absolute',
              top: (Dimensions.get('window').height / 2) - 150,
              left: (Dimensions.get('window').width / 2) - 150,
              width: 300,
              height: 300,
            }}
            source = { require('./assets/forest2.jpg') } />
            <Text>Forest</Text>
          </View>
        </IndicatorViewPager>
      </View>
    );
  }
}
