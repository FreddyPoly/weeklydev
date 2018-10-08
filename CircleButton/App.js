import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import CircleButton from './CircleButton';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: '',
      options: [{
        icon: 'https://image.flaticon.com/icons/png/128/126/126509.png',
        action: () => this.setState({number: '1'}),
        color: 'red',
      },
      {
        icon: 'https://image.flaticon.com/icons/png/128/126/126516.png',
        action: () => this.setState({number: '2'}),
        color: 'purple',
      },
      {
        icon: 'https://image.flaticon.com/icons/png/128/126/126490.png',
        action: () => this.setState({number: '3'}),
        color: 'orange',
      },
      {
        icon: 'https://image.flaticon.com/icons/png/128/126/126474.png',
        action: () => this.setState({number: '4'}),
        color: 'pink',
      },
      {
        icon: 'https://image.flaticon.com/icons/png/128/126/126490.png',
        action: () => this.setState({number: '5'}),
        color: 'orange',
      },
      {
        icon: 'https://image.flaticon.com/icons/png/128/126/126474.png',
        action: () => this.setState({number: '6'}),
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
        <CircleButton options={this.state.options} radius={150} />

        <Text>Bouton {this.state.number}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
