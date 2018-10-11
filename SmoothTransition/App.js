import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import SmoothList from './SmoothList';

export default class App extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <SmoothList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
