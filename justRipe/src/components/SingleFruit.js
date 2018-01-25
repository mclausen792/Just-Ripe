import React from 'react';
import { StyleSheet,View, Image,TouchableOpacity,Text, StatusBar, ScrollView } from 'react-native';


export default class SinlgeFruit extends React.Component {
  constructor(props){
      super(props)

      this.state = {
        data: []
      }
  }
async componentDidMount() {
  const response = await fetch(`https://just-ripe.herokuapp.com/fruit`)
  const json = await response.json()
    this.setState({data: json})
    // console.log(this.state.data);
}

render(){
  console.log('Hello');
  return(
    <View style={styles.container}>
      <Text>Heyyy</Text>
    </View>
  )}
}
const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
},
})
