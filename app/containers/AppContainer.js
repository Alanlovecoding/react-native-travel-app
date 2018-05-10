import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'


import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  ScrollView,
  StatusBar,
  ListView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  FlatList
} from 'react-native';

import { NavigationComponent } from 'react-native-material-bottom-navigation';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Swipeout from 'react-native-swipeout'

var TodoList = require('../components/TodoList');
var Calendar = require('../components/Calendar');
//var Translate = require('../components/Translate');
var Details = require('../components/Details');
var SanFrancisco = require('../components/SanFrancisco')
var Login = require('../components/Login');
var TravelDates = require('../components/TravelDates');
var FilterBar = require('../components/FilterBar');
var HeroText = require('../components/HeroText');
var Check = require('../components/Check');

import Ionicons from 'react-native-vector-icons/Ionicons';

//This changes the header status icons (the battery and wifi) to white.
StatusBar.setBarStyle('light-content', true)

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FILTERS = [
  {
    tag: "Filter",
    "active": false
  }
]
const FIELDS = [
  {
    title:"Tokyoo",
    subtitle: "Shinjuku",
    tags: [ "eat"],
    active: true,
  }
]


const HomeScreen = ( { navigation }) => (
<ScrollView>
  <View style={styles.card}>
    <Text style={styles.textLarge}>Toyko</Text>
      <TouchableHighlight onPress={() => navigation.navigate('SanFranciscoDetail')}>
        <Image
          style={{width: windowWidth*0.96, height: windowWidth*0.3, alignSelf: 'center'}}
          source={require('../../data/img/Toyko.jpg')}
          />
      </TouchableHighlight>
  </View>
  <View style={styles.card}>
    <Text style={styles.textLarge}>New York City</Text>
      <Image
        style={{width: windowWidth*0.96, height: windowWidth*0.3, alignSelf: 'center'}}
        source={require('../../data/img/New-York-City.jpg')}
      />
  </View>
  <View style={styles.card}>
    <Text style={styles.textLarge}>Beijing</Text>
      <Image
        style={{width: windowWidth*0.96, height: windowWidth*0.3, alignSelf: 'center'}}
        source={require('../../data/img/Beijing.jpeg')}
      />
  </View>
  <View style={styles.card}>
    <Text style={styles.textLarge}>London</Text>
      <Image
        style={{width: windowWidth*0.96, height: windowWidth*0.3, alignSelf: 'center'}}
        source={require('../../data/img/London.jpg')}
      />
  </View>
  <View style={styles.card}>
    <Text style={styles.textLarge}>Moscow</Text>
      <Image
        style={{width: windowWidth*0.96, height: windowWidth*0.3, alignSelf: 'center'}}
        source={require('../../data/img/Moscow.jpg')}
      />
  </View>
  <View style={styles.card}>
    <Text style={styles.textLarge}>Washington DC</Text>
      <Image
        style={{width: windowWidth*0.96, height: windowWidth*0.3, alignSelf: 'center'}}
        source={require('../../data/img/Washington-DC.jpg')}
      />
  </View>
  <View style={styles.card}>
    <Text style={styles.textLarge}>Paris</Text>
      <Image
        style={{width: windowWidth*0.96, height: windowWidth*0.3, alignSelf: 'center'}}
        source={require('../../data/img/Paris.jpg')}
      />
  </View>
  <View style={styles.card}>
    <Text style={styles.textLarge}>Boston</Text>
      <Image
        style={{width: windowWidth*0.96, height: windowWidth*0.3, alignSelf: 'center'}}
        source={require('../../data/img/Boston.jpg')}
      />
  </View>
</ScrollView>

)
const InfoScreen = ({ navigation, screenProps }) => (
  <ScrollView>
    <HeroText>Step 1</HeroText>
    <View style={styles.section}>
      <Button
        onPress={() => navigation.navigate('LoginSetting')}
        title="Enter Travelers"
        />
      <FilterBar
        filters={screenProps.activeUsers}
        setFilters={screenProps.setActiveUsers}
        fields={screenProps.userFilteredTodos}
        filterBarLabel={"Travelers"}
        setFields={screenProps.setUserFilteredTodos}
        setUserFilteredTodos={screenProps.setUserFilteredTodos}
        />
    </View>

    <HeroText>Step 2</HeroText>
    <View style={styles.section}>
      <Button
       onPress={() => navigation.navigate('travelDatesSetting')}
       title="Enter Travel Dates"
       />
       <View style={{flex: 1},styles.containerCenter}>
         <Text style={styles.textSmall}>Start: {screenProps.travelDates[0]}</Text>
         <Text style={styles.textSmall}>End: {screenProps.travelDates.slice(-1)[0]}</Text>
       </View>
    </View>


    <HeroText>Step 3</HeroText>
    <View style={styles.section}>
       <Check name='Mount Fuji' />
       <Check name='Senso-ji Temple' />
       <Check name='Tokyo Tower' />
       <Check name='Ginza' />
       <Check name='University of Tokyo' />
       <Check name='Tokyo skytree' />

   <HeroText>Step 4</HeroText>
   <View style={styles.section}>
      <Button
       onPress={() => navigation.navigate('CalendarTab')}
       title="See Your Itinerary"
       />
   </View>



    </View>
  </ScrollView>
);

class UpdateItinerary extends Component {
  setTodos() {
    let newFieldsGuest = this.props.screenProps.userFilteredTodos.map(todo => {
        var newTodo = todo;
          newTodo.active = true
          return newTodo;
        }
    );
    this.props.screenProps.setUserFilteredTodos(newFieldsGuest)
  }
  render() {
    return(
      <Button
        onPress={() => this.setTodos()}
        title="Update Itinerary"
        />
    )
  }
}

const TravelDatesScreen = ({ navigation, screenProps}) => (
  <TravelDates
    navigation={navigation}
    screenProps={screenProps}
    />
);
const SanFranciscoScreen = ({ navigation, screenProps}) => (
  <SanFrancisco
    navigation={navigation}
    screenProps={screenProps}
    />
);
const LoginScreen = ({ navigation, screenProps}) => (
  /* TODO: instead of passing in the entire screenProps, give Login the actual
   * props it needs such that Login doesn't have to know anything about how states are
   encoded in the reducer
   */
  <Login
    navigation={navigation}
    screenProps={screenProps}
    />
);

const DetailsScreen = ({ navigation }) => (
  <Details
    activity={navigation.state.params.activity}
    navigation={navigation}
  />
);
const TodoListScreen = ({ navigation, screenProps }) => (
  <TodoList
    filters={screenProps.activeUsers}
    setFilters={screenProps.setActiveUsers}
    fields={screenProps.userFilteredTodos}
    setFields={screenProps.setUserFilteredTodos}
    navigation={navigation}
    travelDates={screenProps.travelDates}
  />
);
const CalendarScreen = ({ navigation, screenProps}) => (
  <Calendar
    fields={screenProps.userFilteredTodos}
    setFields={screenProps.setUserFilteredTodos}
    filters={screenProps.activeUsers}
    travelDates={screenProps.travelDates}
    navigation={navigation}
  />
);
// const TranslateScreen = ({ navigation, screenProps }) => (
//   <Translate
//     filters={screenProps.activeTranslate}
//     setFilters={screenProps.setActiveTranslate}
//     fields={screenProps.filteredTranslations}
//     setFields={screenProps.setFilteredTranslations}
//     navigation={navigation}
//   />
// );

//Bottom Navigator
const TabNav = TabNavigator(
  {
    MainTab: {
      screen: HomeScreen,
      path: '/',
      navigationOptions: {
        title: 'Destination',
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../assets/navbar/home.png')}
            style={[styles.tabBarIcon, {tintColor: tintColor}]}
          />),
        headerStyle:{ backgroundColor: '#22264b'},
        headerTitleStyle:{ color: '#e8edf3'},
      },
    },
    InfoTab: {
      screen: InfoScreen,
      path: '/info',
      navigationOptions: {
        title: 'Create_trip',
        tabBarLabel: 'Create_trip',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../assets/navbar/account.png')}
            style={[styles.tabBarIcon, {tintColor: tintColor}]}
          />),
        headerStyle:{ backgroundColor: '#22264b'},
        headerTitleStyle:{ color: '#e8edf3'},
      },
    },
    // TranslateTab: {
    //   screen: TranslateScreen,
    //   path: '/translate',
    //   navigationOptions: {
    //     title: 'Translate',
    //     tabBarLabel: 'Translate',
    //     tabBarIcon: ({ tintColor }) => (
    //       <Image
    //         source={require('../assets/navbar/translate.png')}
    //         style={[styles.tabBarIcon, {tintColor: tintColor}]}
    //       />),
    //     headerStyle:{ backgroundColor: '#22264b'},
    //     headerTitleStyle:{ color: '#e8edf3'},
    //   },
    // },
    TodoListTab: {
      screen: TodoListScreen,
      path: '/list',
      navigationOptions: {
        title: 'Things To Do',
        tabBarLabel: 'To-dos',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../assets/navbar/list.png')}
            style={[styles.tabBarIcon, {tintColor: tintColor}]}
          />),
        headerStyle:{ backgroundColor: '#22264b'},
        headerTitleStyle:{ color: '#e8edf3'},
      },
    },
    CalendarTab: {
      screen: CalendarScreen,
      path: '/calendar',
      navigationOptions: {
        title: 'Calendar',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../assets/navbar/calendar.png')}
            style={[styles.tabBarIcon, {tintColor: tintColor}]}
          />),
        headerStyle:{ backgroundColor: '#22264b'},
        headerTitleStyle:{ color: '#e8edf3'},
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
const TravelAppJapan = StackNavigator({
  Root: {
    screen: TabNav, //bottom navigator
  },
  SanFranciscoDetail: {
    screen: SanFranciscoScreen,
    navigationOptions: {
      title: 'Toyko',
      headerStyle: { backgroundColor: '#22264b'},
      headerTitleStyle: { color: '#e8edf3'},
      headerTitleStyle:{ color: '#e8edf3'},
      headerTintColor: '#e8edf3',
    },
  },
  LoginSetting: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Login As',
      headerStyle: { backgroundColor: '#22264b'},
      headerTitleStyle: { color: '#e8edf3'},
      headerTitleStyle:{ color: '#e8edf3'},
      headerTintColor: '#e8edf3',
    },
  },
  travelDatesSetting: {
    screen: TravelDatesScreen,
    navigationOptions: {
      title: 'Login As',
      headerStyle: { backgroundColor: '#22264b'},
      headerTitleStyle: { color: '#e8edf3'},
      headerTitleStyle:{ color: '#e8edf3'},
      headerTintColor: '#e8edf3',
    },
  },
  Details: {
    screen: DetailsScreen,
    path: '/detail/:name',
    navigationOptions: ({ navigation }) => {
      title: navigation.state.params.name;
    },
    navigationOptions: {
      headerStyle: { backgroundColor: '#22264b'},
      headerTitleStyle: { color: '#e8edf3'},
      headerBackTitleStyle: { color: '#e8edf3' },
      headerTintColor: '#e8edf3',
    },
  },
});

//The AppContainer passes all the possible actions to the View components
class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: FIELDS,
      json: 'stuff',
      isLoading: true
    };
  }
  setData(responseJson) {
    let sortedActivities = responseJson.FIELDS.sort((a,b) => new Date(a.date) - new Date(b.date))
    this.setState({
      json: responseJson,
      activities: sortedActivities,
      isLoading: false,
    })
   this.props.setUserFilteredTodos(sortedActivities);
  }
  componentDidMount() {
    if(this.props.userFilteredTodos.length == 1) {
      const test = true
      const dataUrl = 'https://facebook.github.io/react-native/movies.json'

      if(test) {
        let responseJson = require('../../data/japan.json')
        this.setData(responseJson)
      }
      else {
        return fetch(dataUrl)
           .then((response) => response.json())
           .then((responseJson) => {
             this.setData(responseJson)
           })
           .catch((error) => {
             console.error(error);
           });
       }
    }
  }
  render() {
    return (
      <TravelAppJapan screenProps={this.props} />
    )
  }
}

const styles = StyleSheet.create({
  section: {
    borderWidth: 1,
    borderColor: '#656565',
    margin: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    flex: 0,
    backgroundColor: '#374046'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 50,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },
  navBar: {
    flexDirection: 'row',
    paddingTop: 30,
    height: 64,
    backgroundColor: '#1EAAF1'
  },
  tabBarIcon: {
    width: 35,
    height: 35
  },
  containerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8edf3',
    padding: 5,
  },
  textNormal: {
    color: '#22264b',
    fontWeight: 'bold',
    fontSize: 12
  },
  textLarge: {
    color: '#22264b',
    fontWeight: 'bold',
    fontSize: 22
  },
  card: {
    padding: 10,
    alignItems: 'center'
  },

  container1: {
  flex: 1,
  paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

});

/*************** Redux Stuff ****************/

//Dispatching funcitons (boilerplate)
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}
export default connect((state) => {
  //the state in the argument is the global state of the application
  return {
    todoCount: state.todoCount,
    activeDurations: state.activeDurations,
    travelDates: state.travelDates,
    activeUsers: state.activeUsers,
    userFilteredTodos: state.userFilteredTodos,
    //activeTranslate: state.activeTranslate,
    filteredTranslations: state.filteredTranslations,
  }
}, mapDispatchToProps)(AppContainer);
