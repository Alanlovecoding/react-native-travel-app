import React, { Component } from 'react'

import {
  View,
  Dimensions,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  StatusBar,
  ListView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

import { CheckBox } from 'react-native-elements';

var Check_Heart = require('./Check_Heart');

class SanFrancisco extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let windowWidth = Dimensions.get('window').width;
    let windowHeight = Dimensions.get('window').height;

    return (
        <ScrollView>
          <View style={styles.card}>
            <Text style={styles.textLarge}>Mount Fuji</Text>
              <Image
                style={{width: windowWidth*0.96, height: windowWidth*0.3, alignSelf: 'center'}}
                source={require('../../data/img/Mount_Fuji.jpg')}
              />
              <Text style = {styles.textEntry3}>Introduction：
              Mount Fuji, located on Japan's main island is the countries tallest
              mountain standing at 3,776 meters (12,389 ft). Still an active
              volcano, Mt. Fuji has erupted several times with the last recorded
               eruption taking place in 1707. Along with Mt. Tate and Mt. Haku,
               Fujisan is one of the three holiest mountains in Japan.
              </Text>
              <Check_Heart name='Add this place for trip planning' />

          </View>
          <View style={styles.card}>
            <Text style={styles.textLarge}>Senso-ji Temple</Text>
              <Image
                style={{width: windowWidth*0.96, height: windowWidth*0.3, alignSelf: 'center'}}
                source={require('../../data/img/Senso-ji Templ.jpg')}
              />
              <Text style = {styles.textEntry3}>Introduction：
              Sensō-ji is an ancient Buddhist temple located in Asakusa, Tokyo,
              Japan. It is Tokyo's oldest temple, and one of its most significant.
              Formerly associated with the Tendai sect of Buddhism, it became
              independent after World War II
              </Text>
              <Check_Heart name='Add this place for trip planning' />
          </View>

          <View style={styles.card}>
            <Text style={styles.textLarge}>Tokyo Tower</Text>
              <Image
                style={{width: windowWidth*0.96, height: windowWidth*0.3, alignSelf: 'center'}}
                source={require('../../data/img/Tokyo_Tower.jpg')}
              />
              <Text style = {styles.textEntry3}>Introduction：
              Tokyo Tower is a communications and observation tower in the
              Shiba-koen district of Minato, Tokyo, Japan. At 332.9 metres
              (1,092 ft), it is the second-tallest structure in Japan. The
              structure is an Eiffel Tower-inspired lattice tower that is painted
              white and international orange to comply with air safety regulations.
              </Text>
              <Check_Heart name='Add this place for trip planning' />
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  textLarge: {
    color: '#22264b',
    fontWeight: 'bold',
    fontSize: 22
  },
  card: {
    padding: 10,
    alignItems: 'center'
  },

});

module.exports = SanFrancisco;
