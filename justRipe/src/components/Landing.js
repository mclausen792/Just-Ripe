import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  Button,
  Image,
  StatusBar

} from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class Landing extends React.Component {

  constructor(props) {
      super(props)

    }



render(){
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
        style ={{ width: 350, height: 200
        }}
        source={require("../../images/JustRipe.png")}/>
      </View>
      <View>
      <TouchableHighlight
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Fruit')}  >
          <Text style={styles.buttonText}>FRUIT</Text>
        </TouchableHighlight>
        <TouchableHighlight
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Veg')}
              title="Go to details">
            <Text style={styles.buttonText}>VEGETABLES</Text>
          </TouchableHighlight>
        </View>
    </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
button: {
    backgroundColor: '#A1353D',
    height: 50,
    width: 200,
    marginTop: 10,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'

  },
  buttonText: {
    color: '#F3FFF8',
    alignSelf: 'center',
    fontSize: 18
  },
  image: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 100,
  }
  });
