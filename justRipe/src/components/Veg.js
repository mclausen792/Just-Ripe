import React from 'react';
import { StyleSheet,View, Image,TouchableOpacity,Text, StatusBar } from 'react-native';


export default class Veg extends React.Component {

render(){
  return (
<View style = {styles.container}>
  <Text>This is the veg page</Text>
</View>
)
}
}
const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},
})
