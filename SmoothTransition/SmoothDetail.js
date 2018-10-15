import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, View, Animated, TouchableOpacity, Image} from 'react-native';

export default class SmoothDetail extends Component {
  _navigate = () => {
    this.props.goBack();
  }

  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}>
        <Animated.View style={{
          flex: 1,
          alignItems: 'center',
          opacity: this.props.opacityContent,
          paddingTop: 90,
        }}>
          <Image
            style = {{
              width: 175,
              height: 175,
              borderRadius: 88,
            }}
            source = {{ uri: this.props.data.picture }} />

          <Text style={{
            color: this.props.data.font,
            fontSize: 20,
            fontFamily: 'Arimo-Bold',
            fontWeight: '700',
            paddingTop: 35,
          }}>{ this.props.data ? this.props.data.name.toUpperCase() : '' }</Text>

          <Text style={{
            paddingLeft: 25,
            paddingRight: 25,
            color: this.props.data.font,
            fontSize: 14,
            fontFamily: 'Arimo-Regular',
            paddingTop: 35,
          }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget tellus sollicitudin, mollis dui id, commodo felis. Fusce luctus pulvinar finibus. Sed mollis egestas quam sit amet congue. Nulla at imperdiet leo. Vivamus sit amet lorem id justo sollicitudin efficitur. Maecenas pretium erat eget urna interdum commodo. Nam euismod fringilla odio, at condimentum felis malesuada lobortis. Maecenas dapibus, lacus quis ultricies bibendum, nisi erat egestas nunc, et vestibulum ligula lacus a nulla.</Text>
        </Animated.View>

        <TouchableOpacity
          onPress={this._navigate}
          style={{position: 'absolute', top: 35, left: 25}}>
          <Animated.Image source={this.props.data.font === 'white' ? require('./fonts/backW.png') : require('./fonts/backB.png')} style={{
          opacity: this.props.opacityContent, width: 25, height: 25, resizeMode: 'contain'}} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
