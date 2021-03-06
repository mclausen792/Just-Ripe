import React from 'react';
import { StyleSheet,View, Image,TouchableOpacity,Text, StatusBar, ScrollView } from 'react-native';


export default class Fruit extends React.Component {
  constructor(props){
      super(props)

      this.state = {
        data: []
      }
      console.log("What is data here", this.state.data);
  }

  sortFruit(){
  let data = this.state.data
  let sorted = data.sort(function(a, b) {
  var nameA = a.title.toUpperCase(); // ignore upper and lowercase
  var nameB = b.title.toUpperCase(); // ignore upper and lowercase

  if (nameA < nameB) {
    return -1;
  }

  if (nameA > nameB) {
    return 1;
  }

  return 0;
  })
  this.setState({data: this.state.data})
  }



async componentDidMount() {
  const response = await fetch(`https://just-ripe.herokuapp.com/fruit`)
  const json = await response.json()
    this.setState({data: json})
    this.sortFruit()
    // console.log("unsorted data", this.state.data);
}




render(){
  console.log("render",this.state.data);
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
