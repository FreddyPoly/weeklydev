import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, Animated} from 'react-native';

import letterN from './assets/newyork-n.png';
import letterE from './assets/newyork-e.png';
import letterW from './assets/newyork-w.png';
import letterY from './assets/newyork-y.png';
import letterO from './assets/newyork-o.png';
import letterR from './assets/newyork-r.png';
import letterK from './assets/newyork-k.png';
import empire from './assets/ny-empire.png';
import liberty from './assets/ny-liberty.png';

export default class NewYork extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  n_top = new Animated.Value(-201);
  e_top = new Animated.Value(-201);
  w_top = new Animated.Value(-201);
  y_top = new Animated.Value(-201);
  o_top = new Animated.Value(-201);
  r_top = new Animated.Value(-201);
  k_top = new Animated.Value(-201);
  empire_top = new Animated.Value(-201);
  liberty_top = new Animated.Value(-201);

  componentDidUpdate = (nextProps, nextState) => {
    const totalN = nextProps.offset * 300;
    this.n_top.setValue(-200 + totalN);

    const totalE = nextProps.offset * 290;
    this.e_top.setValue(-208 + totalE);

    const totalW = nextProps.offset * 300;
    this.w_top.setValue(-205 + totalW);

    const totalY = nextProps.offset * 414;
    this.y_top.setValue(-201 + totalY);

    const totalO = nextProps.offset * 431;
    this.o_top.setValue(-209 + totalO);

    const totalR = nextProps.offset * 423;
    this.r_top.setValue(-209 + totalR);

    const totalK = nextProps.offset * 417;
    this.k_top.setValue(-209 + totalK);

    const totalEmpire = nextProps.offset * 575;
    this.empire_top.setValue(-209 + totalEmpire);

    const totalLiberty = nextProps.offset * 555;
    this.liberty_top.setValue(-209 + totalLiberty);
  }

  render() {
    return (
      <View style={{ flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue' }}>
        <Animated.Image
          style={{
            width: 220,
            height: 220,
            resizeMode: 'contain',
            position: 'absolute',
            top: this.liberty_top,
            left: 199,
            transform: [{rotate: '32deg'}]
          }}
          source = { liberty } />

        <Animated.Image
          style={{
            width: 260,
            height: 260,
            resizeMode: 'contain',
            position: 'absolute',
            top: this.empire_top,
            left: 5,
            transform: [{rotate: '-7deg'}]
          }}
          source = { empire } />

        <Animated.Image
          style={{
            width: 60,
            height: 60,
            resizeMode: 'contain',
            position: 'absolute',
            top: this.n_top,
            left: 115
          }}
          source = { letterN } />

        <Animated.Image
          style={{
            width: 60,
            height: 60,
            resizeMode: 'contain',
            position: 'absolute',
            top: this.e_top,
            left: 175
          }}
          source = { letterE } />

        <Animated.Image
          style={{
            width: 60,
            height: 60,
            resizeMode: 'contain',
            position: 'absolute',
            top: this.w_top,
            left: 235
          }}
          source = { letterW } />

        <Animated.Image
          style={{
            width: 60,
            height: 60,
            resizeMode: 'contain',
            position: 'absolute',
            top: this.y_top,
            left: 85
          }}
          source = { letterY } />

          <Animated.Image
            style={{
              width: 60,
              height: 60,
              resizeMode: 'contain',
              position: 'absolute',
              top: this.o_top,
              left: 145
            }}
            source = { letterO } />

            <Animated.Image
              style={{
                width: 60,
                height: 60,
                resizeMode: 'contain',
                position: 'absolute',
                top: this.r_top,
                left: 205
              }}
              source = { letterR } />

              <Animated.Image
                style={{
                  width: 60,
                  height: 60,
                  resizeMode: 'contain',
                  position: 'absolute',
                  top: this.k_top,
                  left: 265
                }}
                source = { letterK } />
      </View>
    );
  }
}
