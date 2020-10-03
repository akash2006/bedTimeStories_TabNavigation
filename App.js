import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Header from 'react-native-elements'

import ReadScreen from './screens/readScreen'
import WriteScreen from './screens/writeScreen'
import MyHeader from './components/myheader'
 
export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <MyHeader/>
        <AppContainer/>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Read:{screen:ReadScreen},
  Write:{screen:WriteScreen}
})

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
