import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Animated} from 'react-native';

export default class SmoothDetail extends Component {
  opacity = new Animated.Value(0);

  componentWillMount = () => {
    Animated.timing(
      this.opacity,
      {
        toValue: 1,
        duration: 550,
      }
    ).start();
  }

  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: this.props.navigation.state.params.data.color,
      }}>
        <Animated.View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: this.props.navigation.state.params.data.color,
          opacity: this.opacity,
        }}>
          <Text>DETAILS</Text>
          <Text>{ this.props.navigation.state.params.data.label }</Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
