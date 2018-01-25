import React from 'react';
import { StyleSheet,View, Image,TouchableOpacity,Text, StatusBar, ScrollView } from 'react-native';


export default class SinlgeFruit extends React.Component {
  constructor(props){
      super(props)

      this.state = {
        data: {}
      }
  }
async componentDidMount() {
  const response = await fetch(`https://just-ripe.herokuapp.com/fruit/${this.props.navigation.state.params.id}`)
  const json = await response.json()
    this.setState({data: json})

}

render(){
console.log(typeof this.state.data, this.state.data.id)
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
        style ={{ width: 350, height: 200
        }}
        source={require("../../images/JustRipe.png")}/>
      </View>
      <Text>{this.state.data.title}</Text>
      <ScrollView>
      <Text> Select:</Text>
      <Text>{this.state.data.select}</Text>
      <Text>Store:</Text>
      <Text>{this.state.data.store}</Text>
      <Text>Season:</Text>
      <Text> {this.state.data.season}</Text>
      <Text>Ripen:</Text>
      <Text>{this.state.data.ripen}</Text>
      </ScrollView>
    </View>

    )
  }
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor:'#ADD8E6'
},
image: {
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
}
})
