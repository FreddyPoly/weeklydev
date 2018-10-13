import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Dimensions, TouchableWithoutFeedback, Animated, Easing, Image} from 'react-native';

export default class SmoothList extends Component {
  transitionSize = new Animated.Value(0);

  constructor(props) {
    super(props);

    this.state = {
      list: [{
        label: 'Element 1',
        color: '#dbc807',
        name: 'Emilia Clarke',
        picture: 'http://fr.web.img6.acsta.net/pictures/15/06/04/16/19/049773.jpg',
      }, {
        label: 'Element 2',
        color: '#07db5e',
        name: 'Kit Harington',
        picture: 'https://parismatch.be/app/uploads/2017/10/9344885691_60164ea3d5_k-1100x715.jpg',
      }, {
        label: 'Element 3',
        color: '#5e07db',
        name: 'Sophie Turner',
        picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Sophie_Turner_by_Gage_Skidmore_3.jpg/220px-Sophie_Turner_by_Gage_Skidmore_3.jpg',
      }, {
        label: 'Element 4',
        color: '#db0784',
        name: 'Peter Dinklage',
        picture: 'http://www.gstatic.com/tv/thumb/persons/299302/299302_v9_ba.jpg',
      }, {
        label: 'Element 5',
        color: '#db5e07',
        name: 'Maisie Williams',
        picture: 'http://www.geekgeneration.fr/wp-content/uploads/2016/04/Maisie-Williams-The-New-Mutants.jpg',
      }, {
        label: 'Element 6',
        color: '#07dbc8',
        name: 'Lena Headey',
        picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Lena_Headey_Primetime_Emmy_Awards_2014.jpg/240px-Lena_Headey_Primetime_Emmy_Awards_2014.jpg',
      }, {
        label: 'Element 7',
        color: '#FBEFC4',
        name: 'Nikolaj Coster-Waldau',
        picture: 'https://www.lindbergmanagement.com/wp-content/uploads/2017/09/Nikolaj-Coster-Waldau-Portrait-copy.jpg',
      }, {
        label: 'Element 8',
        color: '#B0E1E2',
        name: 'Gwendoline Christie',
        picture: 'http://static1.purepeople.com/articles/3/24/81/43/@/3481309-gwendoline-christie-en-conference-de-pre-950x0-2.jpg',
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
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: item.color,
          width: Dimensions.get('window').width,
          height: 100,
        }}>
        <View
          style={{
            flex: 1,
            paddingLeft: 25,
            paddingLRight: 25,
          }}>
          <Image
            style = {{
              width: 65,
              height: 65,
              borderRadius: 40,
            }}
            source = {{ uri: item.picture }} />
        </View>

        <View
          style={{
            flex: 3,
            paddingLeft: 35,
            paddingLRight: 35,
          }}>
          <Text
            style={{
              color: '#373737',
              fontSize: 15,
              fontFamily: 'Arimo-Regular',
              fontWeight: '700',
            }}>
            { item.name.toUpperCase() }
          </Text>
        </View>
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
