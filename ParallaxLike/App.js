import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, Animated} from 'react-native';

import {IndicatorViewPager} from 'rn-viewpager';

export default class App extends Component {
  posMainBeachTop = new Animated.Value((Dimensions.get('window').height / 2) - 150);
  posMainBeachLeft = new Animated.Value((Dimensions.get('window').width / 2) - 150);

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
      return;
    }

    let swipeRight = false;

    if (offset > this.state.lastOffset) {
      swipeRight = true;
      await this.setState({lastOffset: offset});
    }
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
            <Animated.Image
              style={{
                position: 'absolute',
                top: this.posMainBeachTop,
                left: this.posMainBeachLeft,
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
