import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, Animated} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'WALLETS',
      subtitle: 'Check your earnings',
      currentItem: null,
      item: [{
        title: 'Paiement 1',
        subtitle: 'Salaire',
        total: 300,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis sed dui in semper. Ut ornare placerat malesuada. Aliquam erat volutpat. Maecenas vitae magna accumsan, vestibulum lorem ut, tristique leo. Donec fermentum pharetra nibh, sit amet suscipit ipsum condimentum at. Proin non mollis lacus, vel fringilla odio. Curabitur in porta urna. In sed sapien quis lorem tincidunt dictum. Suspendisse potenti.',
        icon: 'https://image.flaticon.com/icons/png/128/138/138292.png',
        color: '#F79131',
      }, {
        title: 'Paiement 2',
        subtitle: 'Drogue',
        total: 10300,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis sed dui in semper. Ut ornare placerat malesuada. Aliquam erat volutpat. Maecenas vitae magna accumsan, vestibulum lorem ut, tristique leo. Donec fermentum pharetra nibh, sit amet suscipit ipsum condimentum at. Proin non mollis lacus, vel fringilla odio. Curabitur in porta urna. In sed sapien quis lorem tincidunt dictum. Suspendisse potenti.',
        icon: 'https://image.flaticon.com/icons/png/128/138/138292.png',
        color: '#009EDE',
      }, {
        title: 'Paiement 3',
        subtitle: 'Loyer',
        total: 80,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis sed dui in semper. Ut ornare placerat malesuada. Aliquam erat volutpat. Maecenas vitae magna accumsan, vestibulum lorem ut, tristique leo. Donec fermentum pharetra nibh, sit amet suscipit ipsum condimentum at. Proin non mollis lacus, vel fringilla odio. Curabitur in porta urna. In sed sapien quis lorem tincidunt dictum. Suspendisse potenti.',
        icon: 'https://image.flaticon.com/icons/png/128/138/138292.png',
        color: '#00AC65',
      }, {
        title: 'Paiement 4',
        subtitle: 'Poney aquatique',
        total: 666,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis sed dui in semper. Ut ornare placerat malesuada. Aliquam erat volutpat. Maecenas vitae magna accumsan, vestibulum lorem ut, tristique leo. Donec fermentum pharetra nibh, sit amet suscipit ipsum condimentum at. Proin non mollis lacus, vel fringilla odio. Curabitur in porta urna. In sed sapien quis lorem tincidunt dictum. Suspendisse potenti.',
        icon: 'https://image.flaticon.com/icons/png/128/138/138292.png',
        color: '#765BA7',
      }],
    }
  }

  opacityCards = new Animated.Value(1);
  opacityCurrentCard = new Animated.Value(0);
  topCurrentCard = new Animated.Value(Dimensions.get('window').height / 2);

  _selectCard = (item) => {
    this.setState({ currentItem: item });

    // Hide cards
    Animated.parallel([
      // Hide main cards
      Animated.timing(
        this.opacityCards,
        {
          toValue: 0,
          duration: 200,
        }
      ),
      // Display hidden card
      Animated.timing(
        this.opacityCurrentCard,
        {
          toValue: 1,
          duration: 300,
        }
      ),
      // Positioning current card
      Animated.timing(
        this.topCurrentCard,
        {
          toValue: 0,
          duration: 600,
        }
      ),
    ]).start();
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ScrollView style = {{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {this.state.item.map((item) => (
            <TouchableOpacity
              key={item.title}
              onPress={() => this._selectCard(item)}>
              <Animated.View
                style={{
                  width: Dimensions.get('window').width * .8,
                  height: 200,
                  backgroundColor: item.color,
                  marginTop: 24,
                  marginBottom: 24,
                  borderRadius: 8,
                  padding: 16,
                  opacity: this.opacityCards,
                }}>
                <Text style={{color: 'white', fontSize: 28, fontWeight: '700'}}>{ item.title }</Text>
                <Text style={{color: 'white', fontSize: 20}}>{ item.subtitle }</Text>

                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                  <Text style={{color: 'white', fontSize: 36, fontWeight: '700', textAlign: 'right'}}>{ item.total }€</Text>
                </View>
              </Animated.View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        { this.state.currentItem ?
          <Animated.View
            style={{
              position: 'absolute',
              top: this.topCurrentCard,
              width: Dimensions.get('window').width * .8,
              height: 200,
              backgroundColor: this.state.currentItem.color,
              borderRadius: 8,
              padding: 16,
              opacity: this.opacityCurrentCard,
            }}>
            <Text style={{color: 'white', fontSize: 28, fontWeight: '700'}}>{ this.state.currentItem.title }</Text>
            <Text style={{color: 'white', fontSize: 20}}>{ this.state.currentItem.subtitle }</Text>

            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <Text style={{color: 'white', fontSize: 36, fontWeight: '700', textAlign: 'right'}}>{ this.state.currentItem.total }€</Text>
            </View>
          </Animated.View>
        :
            null }
      </View>
    );
  }
}