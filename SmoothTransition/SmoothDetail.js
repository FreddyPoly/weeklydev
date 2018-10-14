import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, View, Animated, TouchableOpacity, Image} from 'react-native';

export default class SmoothDetail extends Component {
  opacity = new Animated.Value(0);
  backgroundSize = new Animated.Value((Dimensions.get('window').height * 2) + 150);

  componentWillMount = () => {
    Animated.timing(
      this.opacity,
      {
        toValue: 1,
        duration: 1550,
      }
    ).start();
  }

  _navigate = () => {
    Animated.parallel([
      Animated.timing(
        this.opacity,
        {
          toValue: 0,
          duration: 550,
        }
      )
    ]).start(() => {
      this.props.navigation.navigate('SmoothList');
    });
  }

  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: this.props.navigation.state.params.data.color,
      }}>
        <Animated.View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          opacity: this.opacity,
        }}>
          <Text>DETAILS</Text>
          <Text>{ this.props.navigation.state.params.data.label }</Text>
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
