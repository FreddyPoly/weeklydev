import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, Animated} from 'react-native';

import {IndicatorViewPager} from 'rn-viewpager';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lastOffset: 0,
    }
  }

  _handleSwipe = async ({offset, position }) => {
    // Cas initial pareil pour tous
    if (offset === 0) {
      await this.setState({lastOffset: offset});

      Animated.timing(
        this.posMainBeachLeft,
        {
          toValue: (Dimensions.get('window').width / 2) - 150,
          duration: 100,
        }
      ).start();
      return;
    }

    // Sens du scroll
    let swipeRight = false;

    if (offset > this.state.lastOffset) {
      swipeRight = true;
      await this.setState({lastOffset: offset});
    }

    // Anim à lancer
    const posCible = swipeRight ? (Dimensions.get('window').width / 2) - 200 : (Dimensions.get('window').width / 2) - 100;

    const calculatedPos = posCible * offset;

    Animated.timing(
      this.posMainBeachLeft,
      {
        toValue: Math.min(calculatedPos, posCible),
        duration: 100,
      }
    ).start();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <IndicatorViewPager
          style={{flex: 1}}
          onPageScroll={this._handleSwipe} >
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
              source = { require('./assets/beach.png') } />

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
              source = { require('./assets/mountain.png') } />
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
            source = { require('./assets/forest.png') } />
            <Text>Forest</Text>
          </View>
        </IndicatorViewPager>
      </View>
    );
  }
}
