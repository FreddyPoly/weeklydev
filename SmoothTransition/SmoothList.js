import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Dimensions, TouchableWithoutFeedback} from 'react-native';

export default class SmoothList extends Component {
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
    }
  }

  _renderItem = ({item, index}) => (
    <TouchableWithoutFeedback
      onPress={() => this.props.navigation.navigate('EventDetail', { data, enableButtons: this._enableButtons })}>
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
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <FlatList
          style={{ flex: 1 }}
          keyExtractor={this._keyExtractor}
          data={this.state.list}
          renderItem={this._renderItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
