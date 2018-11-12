import React, { Component } from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Text, FlatList, Dimensions} from 'react-native';

export default class DrawerView extends Component {
  shouldComponentUpdate = (nextProps, nextState) => {
    return false;
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log(`Update ${JSON.stringify(nextProps)} // ${JSON.stringify(nextState)}`);
  }

  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'gold',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
      }}
      onLayout={(event) => {
        var {x, y, width, height} = event.nativeEvent.layout;
        console.log(`${x} / ${y} / ${width} / ${height}`);
      }}>
      </View>
    );
  }
}
