import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, Animated} from 'react-native';

import letterL from './assets/london-l.png';
import letterO from './assets/london-oo.png';
import letterN from './assets/london-n.png';
import letterD from './assets/london-d.png';
import letterOO from './assets/london-o.png';
import letterNN from './assets/london-nn.png';
import bus from './assets/london-bus.png';
import bigben from './assets/london-bigben.png';

export default class London extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  l_top = new Animated.Value(-200);
  o_top = new Animated.Value(-208);
  n_top = new Animated.Value(-205);
  d_top = new Animated.Value(-201);
  oo_top = new Animated.Value(-209);
  nn_top = new Animated.Value(-209);
  bus_top = new Animated.Value(-209);
  bigben_top = new Animated.Value(-209);

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

    const totalBus = off * 450;
    this.bus_top.setValue(-209 + totalBus);

    const totalBigben = off * 600;
    this.bigben_top.setValue(-209 + totalBigben);
  }

  render() {
    return (
      <View style={{ flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#599f7f' }}>
        <Animated.Image
          style={{
            width: 230,
            height: 230,
            resizeMode: 'contain',
            position: 'absolute',
            top: this.bus_top,
            left: 25,
            transform: [{rotate: '-26deg'}]
          }}
          source = { bus } />

        <Animated.Image
          style={{
            width: 190,
            height: 190,
            resizeMode: 'contain',
            position: 'absolute',
            top: this.bigben_top,
            left: 245,
            transform: [{rotate: '12deg'}]
          }}
          source = { bigben } />

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
