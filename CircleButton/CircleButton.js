import React, {Component} from 'react';
import {Platform, StyleSheet, Dimensions, Text, View, TouchableWithoutFeedback, Image, Animated} from 'react-native';

export default class CircleButton extends Component {
  buttonSize = 20;
  opacityOptions = new Animated.Value(0);
  mainButtonSize = new Animated.Value(120);
  origin = {
    x: - this.buttonSize,
    y: Dimensions.get('window').height / 2 - this.buttonSize,
  };
  delayButtons = 225;
  delaytBtwButtons = 100;

  speedMainButton = 200;

  constructor(props) {
    super(props);

    this.state = {
      buttons: [],
      open: false,
    }
  }

  _PressButton = async () => {
    if (!this.state.open) this._openButton();
    else this._closeButton();

    this.setState({open: !this.state.open});
  }
  
  _closeButton = () => {
    Animated.parallel([
      this._animCloseMainButton(),  // Animation du bouton
      this._animCloseButtons(),  // Animation des boules
    ]).start();
  }

  _animCloseButtons = () => {
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
            // Opacité descend vers 0 avec un délai pour que la boule apparraisse sur le chemoin et pas sur le bouton principal directement
            Animated.sequence([
              Animated.delay(400),
              Animated.timing(
                button.opacity,
                {
                  toValue: 0,
                  duration: 150
                }
              ),
            ]),
            // Position vers celle calculée sur le cercle de radius
            Animated.sequence([
              Animated.parallel([
                Animated.timing(
                  button.x,
                  {
                    toValue: this.origin.x + (this.props.radius - 5) * Math.cos(rad),
                    duration: 150
                  }
                ),
                Animated.timing(
                  button.y,
                  {
                    toValue: this.origin.y + (this.props.radius - 5) * Math.sin(rad),
                    duration: 150
                  }
                )
              ]),
              Animated.parallel([
                Animated.timing(
                  button.x,
                  {
                    toValue: this.origin.x + (this.props.radius + 15) * Math.cos(rad),
                    duration: 200
                  }
                ),
                Animated.timing(
                  button.y,
                  {
                    toValue: this.origin.y + (this.props.radius + 15) * Math.sin(rad),
                    duration: 200
                  }
                )
              ]),
              Animated.parallel([
                Animated.timing(
                  button.x,
                  {
                    toValue: this.origin.x,
                    duration: 250
                  }
                ),
                Animated.timing(
                  button.y,
                  {
                    toValue: this.origin.y,
                    duration: 250
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

  _animCloseMainButton = () => {
    return Animated.sequence([
      Animated.timing(
        this.mainButtonSize,
        {
          toValue: 140,
          duration: this.speedMainButton + 50
        }
      ),
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
          toValue: 120,
          duration: this.speedMainButton
        }
      )
    ]);
  }

  _openButton = () => {
    Animated.parallel([
      this._animOpenMainButton(), // Animation taille du bouton
      Animated.sequence([
        Animated.delay(250),  // Délai avant de commencer l'animation des boules
        this._animOpenButtons(),  // Animation des boules
      ])
    ]).start();
  }

  _animOpenButtons = () => {
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

  _animOpenMainButton = () => {
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
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
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
              style={{
                width: this.buttonSize,
                height: this.buttonSize
              }}
              source={{ uri: option.icon }} />
            </Animated.View>
        ))}

        <TouchableWithoutFeedback
          onPress={this._PressButton}>
          <Animated.View
            style={{
              position: 'absolute',
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
            </View>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

