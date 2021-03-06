import React, {Component} from 'react';
import {Platform, StyleSheet, Dimensions, Text, View, TouchableWithoutFeedback, TouchableOpacity, Image, Animated} from 'react-native';

export default class CircleButton extends Component {
  buttonIconSize = new Animated.Value(this.props.mainButtonIconSize);
  opacityOptions = new Animated.Value(0);
  mainButtonSize = new Animated.Value(this.props.mainButtonRadius);
  origin = {
    x: - this.props.buttonsRadius,
    y: Dimensions.get('window').height / 2 - this.props.buttonsRadius,
  };
  delayButtons = this.props.timeAnimButtons;
  delaytBtwButtons = this.props.delayBtwButtons;

  speedMainButton = this.props.timeAnimMainButton;

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
                  duration: this.delayButtons * 80 / 100,
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
                    duration: this.delayButtons
                  }
                ),
                Animated.timing(
                  button.y,
                  {
                    toValue: this.origin.y + (this.props.radius - 5) * Math.sin(rad),
                    duration: this.delayButtons
                  }
                )
              ]),
              Animated.parallel([
                Animated.timing(
                  button.x,
                  {
                    toValue: this.origin.x + (this.props.radius + 15) * Math.cos(rad),
                    duration: this.delayButtons
                  }
                ),
                Animated.timing(
                  button.y,
                  {
                    toValue: this.origin.y + (this.props.radius + 15) * Math.sin(rad),
                    duration: this.delayButtons
                  }
                )
              ]),
              Animated.parallel([
                Animated.timing(
                  button.x,
                  {
                    toValue: this.origin.x,
                    duration: this.delayButtons
                  }
                ),
                Animated.timing(
                  button.y,
                  {
                    toValue: this.origin.y,
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

  _animCloseMainButton = () => {
    return Animated.sequence([
      Animated.parallel([
        Animated.timing(
          this.mainButtonSize,
          {
            toValue: 140,
            duration: this.speedMainButton + 50
          }
        ),
        Animated.timing(
          this.buttonIconSize,
          {
            toValue: 66,
            duration: this.speedMainButton + 50
          }
        )
      ]),
      Animated.parallel([
        Animated.timing(
          this.mainButtonSize,
          {
            toValue: 90,
            duration: this.speedMainButton
          }
        ),
        Animated.timing(
          this.buttonIconSize,
          {
            toValue: 40,
            duration: this.speedMainButton + 50
          }
        )
      ]),
      Animated.parallel([
        Animated.timing(
          this.mainButtonSize,
          {
            toValue: 120,
            duration: this.speedMainButton
          }
        ),
        Animated.timing(
          this.buttonIconSize,
          {
            toValue: 54,
            duration: this.speedMainButton + 50
          }
        )
      ]),
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
      Animated.parallel([
        Animated.timing(
          this.mainButtonSize,
          {
            toValue: 90,
            duration: this.speedMainButton
          }
        ),
        Animated.timing(
          this.buttonIconSize,
          {
            toValue: 48,
            duration: this.speedMainButton
          }
        )
      ]),
      Animated.parallel([
        Animated.timing(
          this.mainButtonSize,
          {
            toValue: 140,
            duration: this.speedMainButton
          }
        ),
        Animated.timing(
          this.buttonIconSize,
          {
            toValue: 66,
            duration: this.speedMainButton
          }
        )
      ]),
      Animated.parallel([
        Animated.timing(
          this.mainButtonSize,
          {
            toValue: 120,
            duration: this.speedMainButton
          }
        ),
        Animated.timing(
          this.buttonIconSize,
          {
            toValue: 54,
            duration: this.speedMainButton
          }
        )
      ]),
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
              opacity: option.opacity,
            }}>
            <TouchableOpacity
              onPress={option.action}
              style={{
                backgroundColor: option.color,
                padding: 10,
                borderRadius: 40,
                shadowColor: '#373737',
                shadowOffset: {
                  width: 1,
                  height: 2
                },
                shadowOpacity: .5,
                shadowRadius: 2,
              }}>
              <Image
                style={{
                  width: this.props.buttonsRadius,
                  height: this.props.buttonsRadius
                }}
                source={option.icon} />
            </TouchableOpacity>
          </Animated.View>
        ))}

        <TouchableWithoutFeedback
          onPress={this._PressButton}>
          <Animated.View
            style={{
              position: 'absolute',
              padding: 15,
              backgroundColor: '#0784DB',
              borderRadius: 800,
              height: this.mainButtonSize,
              width: this.mainButtonSize,
              shadowColor: '#373737',
              shadowOffset: {
                width: 1,
                height: 2
              },
              shadowOpacity: .5,
              shadowRadius: 2,
            }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Animated.Image
                style={{
                  width: this.buttonIconSize,
                  height: this.buttonIconSize,
                }}
                source={require('./assets/settings.png')} />
            </View>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

