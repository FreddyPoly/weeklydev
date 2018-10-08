import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableWithoutFeedback, Image, Animated} from 'react-native';

export default class CircleButton extends Component {
  opacityOptions = new Animated.Value(0);
  mainButtonSize = new Animated.Value(120);
  origin = {
    x: 25,
    y: 25,
  };
  delayButtons = 225;
  delaytBtwButtons = 115;

  speedMainButton = 200;

  constructor(props) {
    super(props);

    this.state = {
      buttons: [],
    }
  }

  _PressButton = async () => {
    Animated.parallel([
      this._animMainButton(), // Animation taille du bouton
      Animated.sequence([
        Animated.delay(250),  // Délai avant de commencer l'animation des boules
        this._animButtons(),  // Animation des boules
      ])
    ]).start();
  }

  _animButtons = () => {
    const anim = [];

    const startAngle = 270;
    const increm = 360 / this.state.buttons.length;

    // Construction de l'animation de la position de chaque bouton
    this.state.buttons.forEach((button, i) => {
      const angle = startAngle + increm * i;
      const rad = angle * Math.PI / 180;

      anim.push(
        Animated.sequence([
          // Délai entre les animations de chaque bouton
          Animated.delay(this.delaytBtwButtons + (i * this.delaytBtwButtons)),
          Animated.parallel([
            // Opacité monte vers 1 avec un délai pour que la boule apparraisse sur le chemoin et pas sur le bouton principal directement
            Animated.sequence([
              Animated.delay(60),
              Animated.timing(
                button.opacity,
                {
                  toValue: 1,
                  duration: this.delayButtons * 80 / 100
                }
              ),
            ]),
            // Position vers celle calculée sur le cercle de radius
            Animated.sequence([
              Animated.parallel([
                Animated.timing(
                  button.x,
                  {
                    toValue: this.origin.x + (this.props.radius + 10) * Math.cos(rad),
                    duration: this.delayButtons
                  }
                ),
                Animated.timing(
                  button.y,
                  {
                    toValue: this.origin.y + (this.props.radius + 10) * Math.sin(rad),
                    duration: this.delayButtons
                  }
                )
              ]),
              Animated.parallel([
                Animated.timing(
                  button.x,
                  {
                    toValue: this.origin.x + (this.props.radius - 10) * Math.cos(rad),
                    duration: this.delayButtons
                  }
                ),
                Animated.timing(
                  button.y,
                  {
                    toValue: this.origin.y + (this.props.radius - 10) * Math.sin(rad),
                    duration: this.delayButtons
                  }
                )
              ]),
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
            ]),
          ]),
        ])
      );
    });

    return Animated.parallel(anim);
  }

  _animMainButton = () => {
    return Animated.sequence([
      Animated.timing(
        this.mainButtonSize,
        {
          toValue: 90,
          duration: this.speedMainButton
        }
      ),
      Animated.timing(
        this.mainButtonSize,
        {
          toValue: 140,
          duration: this.speedMainButton
        }
      ),
      Animated.timing(
        this.mainButtonSize,
        {
          toValue: 120,
          duration: this.speedMainButton
        }
      )
    ]);
  }

  componentDidMount = () => {
    // Ajout d'une position à chaque option
    const tmp = this.props.options.map((prop) => ({
      ...prop,
      x: new Animated.Value(this.origin.x),
      y: new Animated.Value(this.origin.y),
      opacity: new Animated.Value(0),
    }));

    this.setState({buttons: tmp});
  }

  render() {
    return (
      <View>
        <TouchableWithoutFeedback
          onPress={this._PressButton}>
          <Animated.View
            style={{
              padding: 15,
              backgroundColor: 'lightblue',
              borderRadius: 800,
              height: this.mainButtonSize,
              width: this.mainButtonSize,
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
                    opacity: option.opacity,
                  }}>
                  <Image
                    style={{width: 20, height: 20}}
                    source={{ uri: option.icon }} />
                  </Animated.View>
              ))}
            </View>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

