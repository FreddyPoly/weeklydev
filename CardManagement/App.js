import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Dimensions, TouchableWithoutFeedback, Animated} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'WALLETS',
      subtitle: 'Check your earnings',
      item: [{
        title: 'Paiement 1',
        subtitle: 'Salaire',
        total: 300,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis sed dui in semper. Ut ornare placerat malesuada. Aliquam erat volutpat. Maecenas vitae magna accumsan, vestibulum lorem ut, tristique leo. Donec fermentum pharetra nibh, sit amet suscipit ipsum condimentum at. Proin non mollis lacus, vel fringilla odio. Curabitur in porta urna. In sed sapien quis lorem tincidunt dictum. Suspendisse potenti.',
        icon: 'https://image.flaticon.com/icons/png/128/138/138292.png',
        color: '#F79131',
        hidden: false,
      }, {
        title: 'Paiement 2',
        subtitle: 'Drogue',
        total: 10300,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis sed dui in semper. Ut ornare placerat malesuada. Aliquam erat volutpat. Maecenas vitae magna accumsan, vestibulum lorem ut, tristique leo. Donec fermentum pharetra nibh, sit amet suscipit ipsum condimentum at. Proin non mollis lacus, vel fringilla odio. Curabitur in porta urna. In sed sapien quis lorem tincidunt dictum. Suspendisse potenti.',
        icon: 'https://image.flaticon.com/icons/png/128/138/138292.png',
        color: '#009EDE',
        hidden: false,
      }, {
        title: 'Paiement 3',
        subtitle: 'Loyer',
        total: 80,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis sed dui in semper. Ut ornare placerat malesuada. Aliquam erat volutpat. Maecenas vitae magna accumsan, vestibulum lorem ut, tristique leo. Donec fermentum pharetra nibh, sit amet suscipit ipsum condimentum at. Proin non mollis lacus, vel fringilla odio. Curabitur in porta urna. In sed sapien quis lorem tincidunt dictum. Suspendisse potenti.',
        icon: 'https://image.flaticon.com/icons/png/128/138/138292.png',
        color: '#00AC65',
        hidden: false,
      }, {
        title: 'Paiement 4',
        subtitle: 'Poney aquatique',
        total: 666,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis sed dui in semper. Ut ornare placerat malesuada. Aliquam erat volutpat. Maecenas vitae magna accumsan, vestibulum lorem ut, tristique leo. Donec fermentum pharetra nibh, sit amet suscipit ipsum condimentum at. Proin non mollis lacus, vel fringilla odio. Curabitur in porta urna. In sed sapien quis lorem tincidunt dictum. Suspendisse potenti.',
        icon: 'https://image.flaticon.com/icons/png/128/138/138292.png',
        color: '#765BA7',
        hidden: false,
      }],
    }
  }

  _hideCards = (title) => {
    const newList = this.state.item.map(e => e.title !== title ? { ...e, hidden: true } : e);

    this.setState({item: newList});
  }

  _selectCard = (item) => {
    this._hideCards(item.title);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ScrollView style = {{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {this.state.item.map((item) => (
            !item.hidden ?
              <TouchableWithoutFeedback
                onPress={() => this._selectCard(item)}>
                <Animated.View
                  style={{
                    width: Dimensions.get('window').width * .8,
                    height: 200,
                    backgroundColor: item.color,
                    marginTop: 24,
                    marginBottom: 24,
                    borderRadius: 8,
                    padding: 16
                  }}>
                  <Text style={{color: 'white', fontSize: 28, fontWeight: '700'}}>{ item.title }</Text>
                  <Text style={{color: 'white', fontSize: 20}}>{ item.subtitle }</Text>

                  <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <Text style={{color: 'white', fontSize: 36, fontWeight: '700', textAlign: 'right'}}>{ item.total }€</Text>
                  </View>
                </Animated.View>
              </TouchableWithoutFeedback>
            :
              null
          ))}
        </ScrollView>
      </View>
    );
  }
}
