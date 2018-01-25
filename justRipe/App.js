import React from 'react';
import { StyleSheet, Text, View, Scrollview, StatusBar} from 'react-native'
import Landing from './src/components/Landing'
import Fruit from './src/components/Fruit'
import Navigation from './src/components/Navigation'

export default class App extends React.Component {

  constructor(){
      super()

      // this.state = {
      //   landing: true,
      //   // fruit: false,
      //   // veg:false
      // }

    }
  homeScreen = (e) => {
    this.setState({'activeSecond':false})
    this.componentDidMount()
  }
  //
  // gotoFruit = () => {
  //   this.setState({fruit: true, landing:false, veg:false })
  //
  // }
  //
  // gotoVeg = () => {
  //   this.setState({veg: true, landing:false, fruit: false})
  //
  // }
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
