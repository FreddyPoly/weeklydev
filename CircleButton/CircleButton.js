import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image, Animated} from 'react-native';

export default class CircleButton extends Component {
  opacityOptions = new Animated.Value(0);

  constructor(props) {
    super(props);

    this.state = {
      buttons: [],
    }
  }

  _PressButton = async () => {
    const anim = [];

    // Construction de l'animation de la position des boutons
    await this.state.buttons.forEach((button) => {
      anim.push(
        Animated.parallel([
          Animated.timing(
            button.x,
            {
              toValue: 150,
              duration: 500
            }
          ),
          Animated.timing(
            button.y,
            {
              toValue: 150,
              duration: 500
            }
          )
        ]),
        Animated.delay(1000),
      );
    });

    Animated.parallel([
      Animated.sequence([
        Animated.delay(300),
        Animated.timing(
          this.opacityOptions,
          {
            toValue: 1,
            duration: 100
          }
        ),
      ]),
      Animated.sequence(anim),
    ]).start();
  }

  componentDidMount = () => {
    // Ajout d'une position à chaque option
    const tmp = this.props.options.map((prop) => ({
      ...prop,
      x: new Animated.Value(25),
      y: new Animated.Value(25),
    }));

    this.setState({buttons: tmp});
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

            {this.state.buttons.map((option, i) => (
              <Animated.View
                key={i}
                style={{
                  position: 'absolute',
                  top: option.y,
                  left: option.x,
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

