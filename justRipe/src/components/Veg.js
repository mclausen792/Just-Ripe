import React from 'react';
import { StyleSheet,View, Image,TouchableOpacity,Text, StatusBar, ScrollView } from 'react-native';


export default class Veg extends React.Component {
  constructor(props){
      super(props)

      this.state = {
        data: []
      }
  }
async componentDidMount() {
  const response = await fetch(`https://just-ripe.herokuapp.com/vegetable`)
  const json = await response.json()
    this.setState({data: json})
    console.log(this.state.data);
}

render(){
console.log("here", this.state.data);
  return (
    <View style={styles.container}>
      <ScrollView>
      {this.state.data.map(vegInfo =>
        <TouchableOpacity key={vegInfo.id}
            onPress={() => this.props.navigation.navigate('SingleVeg', {id: vegInfo.id})}>
          <Text style= {styles.veg}>{vegInfo.title}</Text>
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
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  backgroundColor: 'whitesmoke'
},
veg:{
  flex: 1,
  width: 320,
  fontSize: 20,
  borderWidth: 1,
  borderBottomWidth: 1,
  borderColor: 'white',
}
})
