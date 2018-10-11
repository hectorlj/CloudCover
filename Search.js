import React, { Component } from 'react';
import { ActivityIndicator,VirtualizedList, Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo';
import {SearchBar} from 'react-native-elements';

var list = [];

function searchlist(text, source){
  console.log(text);
  console.log(source);
}
export default class Search extends Component {
static navigationOptions = {
        header: <View>
        <SearchBar lightTheme
        onChangeText={(text) => searchlist(text,this.state.dataSource)}
        onClear = {() => list = []}
        placeholder='Search...'
        />
        </View>
    }

constructor(props){
  super(props);
  this.state = {isLoading: true}
}

componentDidMount(){
  return fetch('https://codegarage.org/plex/allmovies.json')
  .then((response) => response.json())
  .then((responseJson) => {
    this.setState({
      isLoading: false,
      dataSource: responseJson,
    }, function(responseJson){

    });
  })
  .catch((error) => {
    console.error(error);
  });
}
  render () {
  	    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 50}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style={styles.container}>
       <LinearGradient
          colors={['rgb(32,56,100)','rgb(49,88,157)','rgb(54,96,171)','rgb(53,95,169)']}
          style={{
            position: 'absolute',
            left:0,
            right:0,
            bottom:0,
            top:0
          }} >
          <VirtualizedList
           style={{flex:1, paddingTop: 50, paddingLeft: 2, paddingRight: 2}}
           horizontal={false}
           maxToRenderPerBatch={20}
           data = {list}
           getItemCount={(data) => {
            return 0
          }}
           getItem={(data, index) => {
            return data[index]
          }}
           keyExtractor={(item, index) =>{
            return item.Title
           }}
           initialNumToRender = { 10 }
           windowSize={4}
           renderItem = {({item}) => {
              return (
                <View style={{flexDirection: 'row', flex:1 ,height:200, padding:5}}>
                <View 
                style= {{flexDirection:'column', width:225,}}>
               <Text style={{fontSize: 20, color: 'white', paddingLeft:2}}>{item.Title}</Text>
                <Text
                 numberOfLines={4}
                 style={{fontSize: 15, color: 'white', paddingLeft:2}}>{item.Plot}</Text>
                
                </View>
                <View
                  style={{flexDirection: 'column'}}
                >
                <Image
                  source = {{uri: item.Poster}}
                  style={{height: 150, width: 125}}
                />
                </View>

                </View>
              )
            }
           }
           />
      </LinearGradient>
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
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  header:{
  	fontWeight: 'bold'
  }
});