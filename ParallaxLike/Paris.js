import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, Animated} from 'react-native';

import letterP from './assets/ppng.png';
import letterA from './assets/a.png';
import letterR from './assets/paris-r.png';
import letterI from './assets/paris-i.png';
import letterS from './assets/paris-s.png';
import eiffel from './assets/paris-eiffel.png';
import triomphe from './assets/paris-triomphe.png';

export default class Paris extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  p_top = new Animated.Value(100);
  a_top = new Animated.Value(108);
  r_top = new Animated.Value(105);
  i_top = new Animated.Value(101);
  s_top = new Animated.Value(99);
  eiffel_top = new Animated.Value(320);
  triomphe_top = new Animated.Value(270);

  shouldComponentUpdate = (nextProps, nextState) => {
    return nextProps.position === 0;
  }

  componentWillUpdate = (nextProps, nextState) => {
    const totalP = nextProps.offset * 300;
    this.p_top.setValue(100 - totalP);

    const totalA = nextProps.offset * 500;
    this.a_top.setValue(108 - totalA);

    const totalR = nextProps.offset * 450;
    this.r_top.setValue(105 - totalR);

    const totalI = nextProps.offset * 300;
    this.i_top.setValue(101 - totalI);

    const totalS = nextProps.offset * 330;
    this.s_top.setValue(99 - totalS);

    const totalEiffel = nextProps.offset * 350;
    this.eiffel_top.setValue(320 - totalEiffel);

    const totalTriomphe = nextProps.offset * 350;
    this.triomphe_top.setValue(270 - totalTriomphe);
  }

  render() {
    return (
      <View style={{ flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7e6547' }}>
        <Animated.Image
          style={{
            width: 165,
            height: 165,
            resizeMode: 'contain',
            position: 'absolute',
            top: this.eiffel_top,
            left: 35,
            transform: [{rotate: '-21deg'}]
          }}
          source = { triomphe } />

        <Animated.Image
          style={{
            width: 275,
            height: 275,
            resizeMode: 'contain',
            position: 'absolute',
            top: this.eiffel_top,
            left: 165,
            transform: [{rotate: '17deg'}]
          }}
          source = { eiffel } />

        <Animated.Image
          style={{
            width: 60,
            height: 60,
            resizeMode: 'contain',
            position: 'absolute',
            top: this.p_top,
            left: 84
          }}
          source = { letterP } />

        <Animated.Image
          style={{
            width: 60,
            height: 60,
            resizeMode: 'contain',
            position: 'absolute',
            top: this.a_top,
            left: 133
          }}
          source = { letterA } />

        <Animated.Image
          style={{
            width: 60,
            height: 60,
            resizeMode: 'contain',
            position: 'absolute',
            top: this.r_top,
            left: 182
          }}
          source = { letterR } />

        <Animated.Image
          style={{
            width: 60,
            height: 60,
            resizeMode: 'contain',
            position: 'absolute',
            top: this.i_top,
            left: 231
          }}
          source = { letterI } />

        <Animated.Image
          style={{
            width: 60,
            height: 60,
            resizeMode: 'contain',
            position: 'absolute',
            top: this.s_top,
            left: 280
          }}
          source = { letterS } />
      </View>
    );
  }
}
