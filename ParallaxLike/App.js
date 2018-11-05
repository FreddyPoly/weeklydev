import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, Animated} from 'react-native';

import {IndicatorViewPager} from 'rn-viewpager';

import Paris from './Paris';
import London from './London';
import NewYork from './NewYork';

import rusty from './assets/rusty.png';

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

  spinValueRight = new Animated.Value(.34);
  spinValueLeft = new Animated.Value(.74);

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
  }

  componentWillUpdate = (nextProps, nextState) => {
    this.spinValueRight.setValue(nextState.currentPosition === 0 ? nextState.currentOffset * .5 : .5 + (nextState.currentOffset * .5));
    this.spinValueLeft.setValue(nextState.currentPosition === 0 ? nextState.currentOffset * .5 : .5 + (nextState.currentOffset * .5));
  }

  render() {
    const spinRight = this.spinValueRight.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '270deg']
    });
    const spinLeft = this.spinValueLeft.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

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

        <Animated.Image
          style={{
            width: 300,
            height: 300,
            resizeMode: 'contain',
            position: 'absolute',
            bottom: -150,
            left: -145,
            transform: [{rotate: spinLeft}]
          }}
          source = { rusty } />

          <Animated.Image
          style={{
            width: 225,
            height: 225,
            resizeMode: 'contain',
            position: 'absolute',
            bottom: -120,
            right: -110,
            transform: [{rotate: spinRight}]
          }}
          source = { rusty } />
      </View>
    );
  }
}
