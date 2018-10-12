import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Dimensions, TouchableWithoutFeedback, Animated, Easing} from 'react-native';

export default class SmoothList extends Component {
  transitionSize = new Animated.Value(0);

  constructor(props) {
    super(props);

    this.state = {
      list: [{
        label: 'Element 1',
        color: '#F44E3F',
      }, {
        label: 'Element 2',
        color: '#F8B945',
      }, {
        label: 'Element 3',
        color: '#EA8C55',
      }, {
        label: 'Element 4',
        color: '#DC8A14',
      }, {
        label: 'Element 5',
        color: '#FF8930',
      }, {
        label: 'Element 6',
        color: '#ABC6D0',
      }, {
        label: 'Element 7',
        color: '#FBEFC4',
      }, {
        label: 'Element 8',
        color: '#B0E1E2',
      }],
      transitionColor: 'white',
      top: 0,
      left: 0,
    }
  }

  _navigate = (event, item) => {
    this.setState({ top: event.nativeEvent.pageY });
    this.setState({ left: event.nativeEvent.pageX });
    this.setState({ transitionColor: item.color });

    // Cercle de couleur
    Animated.timing(
      this.transitionSize,
      {
        toValue: Dimensions.get('window').height * 2,
        duration: 550,
        easing: Easing.sin,
      }
    ).start(() => {
      this.props.navigation.navigate('SmoothDetail', { data: item });
    });
  }

  _renderItem = ({item, index}) => (
    <TouchableWithoutFeedback
      onPress={(e) => this._navigate(e, item)}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: item.color,
          width: Dimensions.get('window').width,
          height: 120
        }}>
        <Text>{ item.label }</Text>
      </View>
    </TouchableWithoutFeedback>
  );

  _keyExtractor = item => item.label;

  render() {
    return (
      <View style={{
        flex: 1,
      }}>
        <FlatList
          style={{ flex: 1 }}
          keyExtractor={this._keyExtractor}
          data={this.state.list}
          renderItem={this._renderItem} />

        <View
          style={{
            position: 'absolute',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            top: this.state.top,
            left: this.state.left,
          }}>
          <Animated.View
            style={{
              position: 'absolute',
              backgroundColor: this.state.transitionColor,
              width: this.transitionSize,
              height: this.transitionSize,
              borderRadius: 2000,
            }}>
          </Animated.View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
