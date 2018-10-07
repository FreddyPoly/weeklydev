import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableWithoutFeedback, Image, Animated} from 'react-native';

export default class CircleButton extends Component {
  opacityOptions = new Animated.Value(0);
  origin = {
    x: 25,
    y: 25,
  };
  delayButtons = 200;
  delaytBtwButtons = 50;

  constructor(props) {
    super(props);

    this.state = {
      buttons: [],
    }
  }

  _PressButton = async () => {
    const anim = [];

    const startAngle = 270;
    const increm = 360 / this.state.buttons.length;

    // Construction de l'animation de la position des boutons
    await this.state.buttons.forEach((button, i) => {
      const angle = startAngle + increm * i;
      const rad = angle * Math.PI / 180;

      anim.push(
        Animated.parallel([
          Animated.timing(
            button.x,
            {
              toValue: this.origin.x + this.props.radius * Math.cos(rad),
              duration: this.delayButtons
            }
          ),
          Animated.timing(
            button.y,
            {
              toValue: this.origin.y + this.props.radius * Math.sin(rad),
              duration: this.delayButtons
            }
          )
        ]),
        Animated.delay(this.delaytBtwButtons),
      );
    });

    Animated.parallel([
      Animated.sequence([
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
      x: new Animated.Value(this.origin.x),
      y: new Animated.Value(this.origin.y),
    }));

    this.setState({buttons: tmp});
  }

  render() {
    return (
      <View>
        <TouchableWithoutFeedback
          onPress={this._PressButton}>
          <View
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
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

