import React, { Component } from 'react';
import { ActivityIndicator,VirtualizedList, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo';
import {SearchBar} from 'react-native-elements';

function getPoster(title) {
  var url = 'http://www.omdbapi.com/?apikey=';
  var apikey = '8330622';
  title = title.split(' ').join('+');
  url +=apikey+'&t='+title; 
  return fetch(url)
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson.Poster);
    return responseJson.Poster;
  })
   .catch((error) => {
    console.error(error);
    return 'http://www.piniswiss.com/wp-content/uploads/2013/05/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef-300x199.png'
  });
}

export default class Search extends Component {
static navigationOptions = {
        header: <View>
        <SearchBar lightTheme/>
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
      dataSource: responseJson.MediaContainer.Video,
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
           maxToRenderPerBatch={4}
           data = {this.state.dataSource}
           getItemCount={(data) => {
            return 401
          }}
           getItem={(data, index) => {
            return data[index]
          }}
           keyExtractor={(item, index) =>{
            return item.key
           }}
           initialNumToRender = { 4 }
           updateCellsBatchingPeriod = { 1 }
           windowSize={4}
           renderItem = {({item}) => {
              return (
                <View style={{flexDirection: 'row', flex:1 ,height:100, padding:5}}>
                
                <Text
                 numberOfLines={4}
                 style={{color: 'white', width:250, paddingLeft:2}}>{item.summary}</Text>
                <Text style={{color: 'white', paddingLeft:2}}>{item.title}</Text>

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