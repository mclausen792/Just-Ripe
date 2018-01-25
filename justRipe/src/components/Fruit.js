import React from 'react';
import { StyleSheet,View, Image,TouchableOpacity,Text, StatusBar, Scrollview } from 'react-native';


export default class Fruit extends React.Component {
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
}

render(){
  return (
<View style={styles.container}>
  {/* <Scrollview>
    {this.state.data.map( fruitInfo =>
    <View key ={fruitInfo.id}>
      <Text>{fruitInfo.select}</Text>
    </View>)}
  </Scrollview> */}
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
