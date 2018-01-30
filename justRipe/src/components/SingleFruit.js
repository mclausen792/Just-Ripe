import React from 'react';
import { StyleSheet,View, Image,TouchableOpacity,Text, StatusBar, ScrollView } from 'react-native';


export default class SinlgeFruit extends React.Component {
  constructor(props){
      super(props)

      this.state = {
        data: {}
      }
  }

  async update (e){
    e.preventDefault()
  await this.setState({count: this.state.count + 1})
   let value = this.state.count
   let id = this.state.data.id
   let title = this.state.data.title
   let select = this.state.data.select
   let store = this.state.data.store
   let season = this.state.data.season
   let ripen = this.state.data.ripen
   let data = {
     count: value, id, title, select,store, season, ripen
   }

   console.log("Current state", data)
if(value > 0){
   fetch(`https://just-ripe.herokuapp.com/fruit`,{
     method:'PUT',
     body: JSON.stringify(data),
     headers: {
       "Content-Type": "application/json"
     }

   })
.then(function(){
  console.log('this run?', data);
})
.catch(function(err){
  console.log(err);
  })
 }


 }

async componentDidMount() {
  const response = await fetch(`https://just-ripe.herokuapp.com/fruit/${this.props.navigation.state.params.id}`)
  const json = await response.json()
    this.setState({data: json, count: json.count})
console.log("What is count", this.state.data);
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
      <Text style={styles.title}>{this.state.data.title}</Text>
      <TouchableOpacity style={styles.love} onPress ={(e)=>this.update(e)}><Text style= {styles.loveText}>Love: {this.state.count}</Text></TouchableOpacity>
      <ScrollView>
      <Text style={styles.headers}> Select</Text>
      <Text style={styles.info}>{this.state.data.select}</Text>
      <Text style={styles.headers}>Store</Text>
      <Text style={styles.info}>{this.state.data.store}</Text>
      <Text style={styles.headers}>Season</Text>
      <Text style={styles.info}> {this.state.data.season}</Text>
      <Text style={styles.headers}>Ripen</Text>
      <Text style={styles.info}>{this.state.data.ripen}</Text>
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
  backgroundColor:'#ADD8E6',
},
image: {
  justifyContent: 'flex-end',
  alignItems: 'flex-end'
},
title: {
fontSize: 20
},
headers:{
  marginTop: 20,
  textAlign: 'center',
  fontSize: 18
},
info:{
  textAlign: 'center'
},
love:{
  marginTop: 12,
  borderRadius: 4,
  backgroundColor: '#A1353D',
  width: 80,
  height: 30,
  justifyContent: 'center',
  alignItems: 'center'
},
loveText:{
  color: 'whitesmoke'
}

})
