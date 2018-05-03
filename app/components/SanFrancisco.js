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
            <Text style={styles.textLarge}>Golden Gate Bridge</Text>
              <Image
                style={{width: windowWidth*0.96, height: windowWidth*0.3, alignSelf: 'center'}}
                source={require('../../data/img/Golden_Gate_Bridge.jpg')}
              />
              <Text style = {styles.textEntry3}>Introduction：
              The Golden Gate Bridge is a suspension bridge spanning the Golden Gate,
              the one-mile-wide (1.6 km) strait connecting San Francisco Bay and
              the Pacific Ocean. The structure links the American city
              of San Francisco, California – the northern tip of the San
              Francisco Peninsula – to Marin County, carrying both U.S. Route 101
              and California State Route 1 across the strait. The bridge is one
              of the most internationally recognized symbols of San Francisco,
              California, and the United States. It has been declared one of
              the Wonders of the Modern World by the American Society of
              Civil Engineers.
              </Text>
              <Check_Heart name='Add this place for trip planning' />

          </View>
          <View style={styles.card}>
            <Text style={styles.textLarge}>Lombard Street</Text>
              <Image
                style={{width: windowWidth*0.96, height: windowWidth*0.3, alignSelf: 'center'}}
                source={require('../../data/img/Lombard_Street.jpg')}
              />
              <Text style = {styles.textEntry3}>Introduction：
              Lombard Street is an east–west street in San Francisco, California
               that is famous for a steep, one-block section with eight hairpin
               turns. Stretching from The Presidio east to The Embarcadero
               (with a gap on Telegraph Hill), most of the street western segment
               is a major thoroughfare designated as part of U.S. Route 101. The
               famous one-block section, claimed to be "the crookedest street in the world",
               is located along the eastern segment in the Russian Hill neighborhood.
               It is a major tourist attraction, receiving around two million
               visitors per year and up to 17,000 per day on busy summer weekends, as of 2015.
              </Text>
              <Check_Heart name='Add this place for trip planning' />
          </View>

          <View style={styles.card}>
            <Text style={styles.textLarge}>Alcatraz Island</Text>
              <Image
                style={{width: windowWidth*0.96, height: windowWidth*0.3, alignSelf: 'center'}}
                source={require('../../data/img/Alcatraz_Island.jpg')}
              />
              <Text style = {styles.textEntry3}>Introduction：
              Alcatraz Island is located in San Francisco Bay,
              1.25 miles (2.01 km) offshore from San Francisco, California, United States.
              The small island was developed with facilities for a lighthouse,
              a military fortification, a military prison (1868), and a federal
              prison from 1934 until 1963. Beginning in November 1969, the
              island was occupied for more than 19 months by a group of Native
              Americans from San Francisco, who were part of a wave of Native activism
              across the nation, with public protests through the 1970s. In 1972,
              Alcatraz became part of a national recreation area and received
              designation as a National Historic Landmark in 1986.
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
