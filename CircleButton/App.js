import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import CircleButton from './CircleButton';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: '',
      options: [{
        icon: require('./assets/pencil.png'),
        action: () => this.setState({number: '1'}),
        color: '#dbc807',
      },
      {
        icon: require('./assets/paper-plane.png'),
        action: () => this.setState({number: '2'}),
        color: '#07db5e',
      },
      {
        icon: require('./assets/pin.png'),
        action: () => this.setState({number: '3'}),
        color: '#5e07db',
      },
      {
        icon: require('./assets/upload.png'),
        action: () => this.setState({number: '4'}),
        color: '#db0784',
      },
      {
        icon: require('./assets/trash.png'),
        action: () => this.setState({number: '5'}),
        color: '#db5e07',
      },
      {
        icon: require('./assets/floppy-disk.png'),
        action: () => this.setState({number: '6'}),
        color: '#07dbc8',
      }],
    }
  }

  render() {
    return (
      <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fffff',
        }}>
        <CircleButton options={this.state.options} radius={150} />

        <Text>Bouton {this.state.number}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
