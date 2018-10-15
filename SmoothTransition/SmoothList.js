import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Dimensions, TouchableWithoutFeedback, Animated, Easing, Image} from 'react-native';

import SmoothDetail from './SmoothDetail';

export default class SmoothList extends Component {
  transitionSize = new Animated.Value(0);
  opacityContent = new Animated.Value(0);

  firstColor = '#FCF7F8';
  secondColor = '#5E7999';
  thirdColor = '#3F4A9E';

  constructor(props) {
    super(props);

    this.state = {
      list: [{
        label: 'Element 1',
        color: this.firstColor,
        name: 'Emilia Clarke',
        picture: 'http://fr.web.img6.acsta.net/pictures/15/06/04/16/19/049773.jpg',
      }, {
        label: 'Element 2',
        color: this.secondColor,
        name: 'Kit Harington',
        picture: 'https://parismatch.be/app/uploads/2017/10/9344885691_60164ea3d5_k-1100x715.jpg',
      }, {
        label: 'Element 3',
        color: this.thirdColor,
        name: 'Sophie Turner',
        picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Sophie_Turner_by_Gage_Skidmore_3.jpg/220px-Sophie_Turner_by_Gage_Skidmore_3.jpg',
      }, {
        label: 'Element 4',
        color: this.firstColor,
        name: 'Peter Dinklage',
        picture: 'http://www.gstatic.com/tv/thumb/persons/299302/299302_v9_ba.jpg',
      }, {
        label: 'Element 5',
        color: this.secondColor,
        name: 'Maisie Williams',
        picture: 'http://www.geekgeneration.fr/wp-content/uploads/2016/04/Maisie-Williams-The-New-Mutants.jpg',
      }, {
        label: 'Element 6',
        color: this.thirdColor,
        name: 'Lena Headey',
        picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Lena_Headey_Primetime_Emmy_Awards_2014.jpg/240px-Lena_Headey_Primetime_Emmy_Awards_2014.jpg',
      }, {
        label: 'Element 7',
        color: this.firstColor,
        name: 'Nikolaj Coster-Waldau',
        picture: 'https://www.lindbergmanagement.com/wp-content/uploads/2017/09/Nikolaj-Coster-Waldau-Portrait-copy.jpg',
      }, {
        label: 'Element 8',
        color: this.secondColor,
        name: 'Gwendoline Christie',
        picture: 'http://static1.purepeople.com/articles/3/24/81/43/@/3481309-gwendoline-christie-en-conference-de-pre-950x0-2.jpg',
      }],
      transitionColor: 'white',
      top: 0,
      left: 0,

      itemActive: null,
    }
  }

  _navigate = (event, item) => {
    const headerOffset = 0;

    this.setState({ top: event.nativeEvent.pageY - headerOffset });
    this.setState({ left: event.nativeEvent.pageX });
    this.setState({ transitionColor: item.color });

    this.setState({itemActive: item});

    // Anim on
    Animated.parallel([
      Animated.timing(
        this.transitionSize,
        {
          toValue: Dimensions.get('window').height * 2,
          duration: 500,
          easing: Easing.sin,
        }
      ),
      Animated.sequence([
        Animated.delay(200),
        Animated.timing(
          this.opacityContent,
          {
            toValue: 1,
            duration: 200,
          }
        )
      ]),
    ]).start();
  }

  _goBack = () => {
    // Anim off
    Animated.parallel([
      Animated.timing(
        this.opacityContent,
        {
          toValue: 0,
          duration: 250,
          easing: Easing.sin,
        }
      ),
      Animated.sequence([
        Animated.delay(100),
        Animated.timing(
          this.transitionSize,
          {
            toValue: 0,
            duration: 500,
          }
        )
      ]),
    ]).start(() => {
      this.setState({itemActive: null});
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
              width: 60,
              height: 60,
              borderRadius: 30,
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

        { this.state.itemActive ?
          <SmoothDetail data={this.state.itemActive} goBack={this._goBack} opacityContent={this.opacityContent} />
        :
          null }
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
