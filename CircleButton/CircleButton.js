import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

export default class CircleButton extends Component {
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
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>BOUTON</Text>

            {this.props.options.map((option, i) => (
              <View
                style={{
                  position: 'absolute',
                  backgroundColor: option.color,
                  padding: 10,
                  borderRadius: 40,
                  opacity: 0,
                }}>
                <Image
                  key={i}
                  style={{width: 20, height: 20}}
                  source={{ uri: option.icon }} />
                </View>
            ))}
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

