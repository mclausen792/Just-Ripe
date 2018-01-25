import React from 'react';
import { StyleSheet, Text, View, Scrollview, StatusBar, Button } from 'react-native';
import { SafeAreaView, StackNavigator } from 'react-navigation';
import Landing from './Landing'
import Fruit from './Fruit'
import Veg from './Veg'

const Navigation = StackNavigator({
  Main: {
    screen: Landing,
    navigationOptions: {
      title: "Just Ripe",
    }
  },
  Fruit: {
    screen: Fruit,
    navigationOptions: {
      title: "Fruit",
    }
  },
  Veg: {
    screen: Veg,
    navigationOptions: {
      title: "Vegetables"

    }
  }
})

export default Navigation
