import React from 'react';
import { StyleSheet, Text, View, Scrollview, StatusBar} from 'react-native'
import Landing from './src/components/Landing'
import Fruit from './src/components/Fruit'
import Navigation from './src/components/Navigation'

export default class App extends React.Component {

  constructor(){
      super()
}
  render() {
    return (
      <View style={styles.container}>


          <Navigation props={this.state}/>
          {/* <Fruit /> */}


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    //alignItems: 'center',
    justifyContent: 'center',
  },
});
