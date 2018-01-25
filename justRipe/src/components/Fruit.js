import React from 'react';
import { StyleSheet,View, Image,TouchableOpacity,Text, StatusBar, ScrollView } from 'react-native';


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
    // console.log(this.state.data);
}

render(){

  return (
    <View style={styles.container}>
      <ScrollView>
      {this.state.data.map(fruitInfo =>
        <TouchableOpacity key={fruitInfo.id}
          onPress={() => this.props.navigation.navigate('SingleFruit', {id: fruitInfo.id})}>
          <Text style= {styles.fruit}>{fruitInfo.title}</Text>
        </TouchableOpacity>
        )}
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
    backgroundColor: 'whitesmoke'
},
fruit:{
  flex: 1,
  width: 320,
  fontSize: 20,
  borderWidth: 1,
  borderBottomWidth: 1,
  borderColor: 'white',
}

})
