import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import CircleButton from './CircleButton';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [{
        icon: 'https://image.flaticon.com/icons/png/128/126/126509.png',
        action: null,
        color: 'red',
      },
      {
        icon: 'https://image.flaticon.com/icons/png/128/126/126516.png',
        action: null,
        color: 'purple',
      },
      {
        icon: 'https://image.flaticon.com/icons/png/128/126/126490.png',
        action: null,
        color: 'orange',
      },
      {
        icon: 'https://image.flaticon.com/icons/png/128/126/126474.png',
        action: null,
        color: 'pink',
      }],
    }
  }

  render() {
    return (
      <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <CircleButton options={this.state.options} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
