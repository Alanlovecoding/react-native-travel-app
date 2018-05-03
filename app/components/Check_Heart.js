import React, { Component } from 'react'

import {
  View,
  Text,
  StyleSheet,
  Button,
  ListView,
  FlatList,
} from 'react-native';

import { CheckBox } from 'react-native-elements'

class Check_Heart extends Component {
    constructor(props) {
      super(props);
      this.state = {checked: false};
    }

   render() {
     return (
        <CheckBox
          title={this.props.name}
          center
          iconRight = {true}
          checkedIcon = 'heart'
          uncheckedIcon='heart'
          checkedColor = 'red'
          checked={this.state.checked}
          onPress={() => this.setState({checked: !this.state.checked})}
        />
     );
   }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

module.exports = Check_Heart;
