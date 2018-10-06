import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image, Animated} from 'react-native';

export default class CircleButton extends Component {
  opacityOptions = new Animated.Value(0);

  _PressButton = () => {
    Animated.sequence([
      Animated.timing(
        this.opacityOptions,
        {
          toValue: 1,
          duration: 100
        }
      ),
     ]).start();
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: 'lightblue',
            borderRadius: 60,
            height: 120,
            width: 120,
          }}
          onPress={this._PressButton}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>BOUTON</Text>

            {this.props.options.map((option, i) => (
              <Animated.View
                key={i}
                style={{
                  position: 'absolute',
                  backgroundColor: option.color,
                  padding: 10,
                  borderRadius: 40,
                  opacity: this.opacityOptions,
                }}>
                <Image
                  style={{width: 20, height: 20}}
                  source={{ uri: option.icon }} />
                </Animated.View>
            ))}
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

