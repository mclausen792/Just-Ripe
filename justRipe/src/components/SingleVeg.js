import React from 'react';
import { StyleSheet,View, Image,TouchableOpacity,Text, StatusBar, ScrollView } from 'react-native';


export default class SingleVeg extends React.Component {

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
