import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, Animated} from 'react-native';

import letterL from './assets/london-l.png';
import letterO from './assets/london-oo.png';
import letterN from './assets/london-n.png';
import letterD from './assets/london-d.png';
import letterOO from './assets/london-o.png';
import letterNN from './assets/london-nn.png';

export default class London extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  l_top = new Animated.Value(100);
  o_top = new Animated.Value(108);
  n_top = new Animated.Value(105);
  d_top = new Animated.Value(101);
  oo_top = new Animated.Value(99);
  nn_top = new Animated.Value(99);

  componentDidUpdate = (nextProps, nextState) => {
    let off = nextProps.position === 1 ? 1 - nextProps.offset: nextProps.offset;

    const totalL = off * 300;
    this.l_top.setValue(-200 + totalL);

    const totalO = off * 290;
    this.o_top.setValue(-208 + totalO);

    const totalN = off * 300;
    this.n_top.setValue(-205 + totalN);

    const totalD = off * 294;
    this.d_top.setValue(-201 + totalD);

    const totalOO = off * 311;
    this.oo_top.setValue(-209 + totalOO);

    const totalNN = off * 303;
    this.nn_top.setValue(-209 + totalNN);
  }

  render() {
    return (
      <View style={{ flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue' }}>
        <Animated.Image
          style={{
            width: 60,
            height: 60,
            resizeMode: 'contain',
            position: 'absolute',
            top: this.l_top,
            left: 25
          }}
          source = { letterL } />

        <Animated.Image
          style={{
            width: 60,
            height: 60,
            resizeMode: 'contain',
            position: 'absolute',
            top: this.o_top,
            left: 85
          }}
          source = { letterO } />

        <Animated.Image
          style={{
            width: 60,
            height: 60,
            resizeMode: 'contain',
            position: 'absolute',
            top: this.n_top,
            left: 145
          }}
          source = { letterN } />

        <Animated.Image
          style={{
            width: 60,
            height: 60,
            resizeMode: 'contain',
            position: 'absolute',
            top: this.d_top,
            left: 205
          }}
          source = { letterD } />

        <Animated.Image
          style={{
            width: 60,
            height: 60,
            resizeMode: 'contain',
            position: 'absolute',
            top: this.oo_top,
            left: 265
          }}
          source = { letterOO } />

        <Animated.Image
          style={{
            width: 60,
            height: 60,
            resizeMode: 'contain',
            position: 'absolute',
            top: this.nn_top,
            left: 325
          }}
          source = { letterNN } />
      </View>
    );
  }
}
