import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, View, Animated, TouchableOpacity, Image} from 'react-native';

export default class SmoothDetail extends Component {
  _navigate = () => {
    this.props.goBack();
  }

  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}>
        <Animated.View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          opacity: this.props.opacityContent,
        }}>
          <Text>{ this.props.data ? this.props.data.name : '' }</Text>
        </Animated.View>

        <TouchableOpacity
          onPress={this._navigate}
          style={{position: 'absolute', top: 35, left: 25}}>
          <Image source={require('./fonts/back.png')} style={{width: 25, height: 25, resizeMode: 'contain'}} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
