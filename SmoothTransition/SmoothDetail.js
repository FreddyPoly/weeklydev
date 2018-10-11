import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class SmoothDetail extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text>DETAILS</Text>
        <Text>{ this.props.navigation.state.params.data.label }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
