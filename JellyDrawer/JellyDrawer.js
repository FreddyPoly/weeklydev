import React, { Component } from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Text, FlatList, Dimensions} from 'react-native';

export default class DrawerView extends Component {
  shouldComponentUpdate = (nextProps, nextState) => {
    return false;
  }

  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      </View>
    );
  }
}
