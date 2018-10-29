import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, Animated} from 'react-native';

import {IndicatorViewPager} from 'rn-viewpager';

import Paris from './Paris';
import London from './London';
import NewYork from './NewYork';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lastOffset: 0,

      currentOffset: null,
      currentPosition: null,
      swipeDirection: null,
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

    this.setState({currentOffset: offset});
    this.setState({currentPosition: position});
    this.setState({swipeDirection: swipeRight});

    // Anim à lancer
    /* const posCible = swipeRight ? (Dimensions.get('window').width / 2) - 200 : (Dimensions.get('window').width / 2) - 100;

    const calculatedPos = posCible * offset;

    Animated.timing(
      this.posMainBeachLeft,
      {
        toValue: Math.min(calculatedPos, posCible),
        duration: 100,
      }
    ).start(); */
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <IndicatorViewPager
          style={{flex: 1}}
          onPageScroll={this._handleSwipe} >
          <View style={{
            flex: 1,
          }}>
            <Paris
              offset={this.state.currentOffset}
              position={this.state.currentPosition}
              swipe={this.state.swipeDirection} />
          </View>

          <View style={{
            flex: 1,
          }}>
            <London
              offset={this.state.currentOffset}
              position={this.state.currentPosition}
              swipe={this.state.swipeDirection} />
          </View>

          <View style={{
            flex: 1,
          }}>
            <NewYork
              offset={this.state.currentOffset}
              position={this.state.currentPosition}
              swipe={this.state.swipeDirection} />
          </View>
        </IndicatorViewPager>
      </View>
    );
  }
}
