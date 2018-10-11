import React from 'react';
import {VirtualizedList, Image, ScrollView, FlatList, ActivityIndicator, Button, StyleSheet, Text, View, StatusBar } from 'react-native';
import { LinearGradient } from 'expo';

<<<<<<< HEAD
// async function getPoster(title) {
//   var url = 'http://www.omdbapi.com/?apikey=';
//   var apikey = '8330622';
//   title = title.split(' ').join('+');
//   url +=apikey+'&t='+title; 
//   return await fetch(url)
//   .then((response) => response.json())
//   .then((responseJson) => {
//     return responseJson.Poster
// })
//   .catch((error) => {
//     console.error(error);
//     return 'http://www.piniswiss.com/wp-content/uploads/2013/05/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef-300x199.png'
// });
// }

global.filters = {'plex' : true, 'hulu' : true, 'netflix' : false, 'amazon' : false}

function concatServices(responseJson){
    var currentMovies = []
    var plex = []
    var hulu = []
    var netflix = []
    var amazon = []
    var returnArray = []
    for (i in responseJson) {
        if (i % 4 == 0)
            plex.push(i)
        else if (i % 3 == 0) 
            hulu.push(i)
        else if (i % 2 == 0)
            netflix.push(i)
        else
            amazon.push(i)
    }

    if ((global.filters)['plex'] == true)
        currentMovies = currentMovies.concat(plex)
    if ((global.filters)['hulu'] == true)
        currentMovies = currentMovies.concat(hulu)
    if ((global.filters)['netflix'] == true)
        currentMovies = currentMovies.concat(netflix)
    if ((global.filters)['amazon'] == true)
        currentMovies = currentMovies.concat(amazon)

    currentMovies.sort(function(a, b) {
        return parseInt(a) - parseInt(b)
    });

    currentMovies.forEach(function(i) {
        console.log(i)
        returnArray.push(responseJson[i])
    });

    return returnArray
}

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {isLoading: true}
}

componentDidMount(){
    return fetch('https://codegarage.org/plex/allmovies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      
        var currentMovies = concatServices(responseJson)
        this.setState({
            isLoading: false,
            currentMovies: currentMovies
        }, 
        function(responseJson){
        });
=======
export default class App extends React.Component {
static navigationOptions = {
        header: null
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
>>>>>>> 834074c960de30c26bfcdafe134b9395b0830ae2
  })
    .catch((error) => {
      console.error(error);
  });
}



render() {
    if (this.state.isLoading){
        return(
            <View style={{flex: 1, padding: 50}}>
            <ActivityIndicator/>
            </View>
        )
    }
    return (
<<<<<<< HEAD
        <View style={styles.container}>

            <LinearGradient
                colors={['rgb(32,56,100)','rgb(49,88,157)','rgb(54,96,171)','rgb(53,95,169)']}
                style={{
                    position: 'absolute',
                    left:0,
                    right:0,
                    bottom:0,
                    top:0
                }}>

                <VirtualizedList
                    style={{flex:1, paddingTop: 50, paddingLeft: 2, paddingRight: 2}}
                    horizontal={true}
                    maxToRenderPerBatch={4}
                    data = {this.state.currentMovies}
                    getItemCount={(data) => {
                        return 401
                    }}
                    getItem={(data, index) => {
                        return data[index]
                    }}
                    keyExtractor={(item, index) =>{
                        return item.Title
                    }}
                    initialNumToRender = { 4 }
                    updateCellsBatchingPeriod = { 1 }
                    windowSize={4}
                    renderItem = {({item}) => {
                        return (
                            <View style={{height:200, margin: 10}}>
                                <Image
                                    style={{width: 120, height: 180}}
                                    source={{uri: item.Poster}}
                                    />
                                <Text style={{color: 'white', width: 120, marginTop: 5}}>{item.Title}</Text>
                            </View>
                        )
                    }}
                />
            </LinearGradient>
        </View>
=======

      <View style={styles.container}>
                  <StatusBar hidden />

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
           horizontal={true}
           maxToRenderPerBatch={4}
           data = {this.state.dataSource}
           getItemCount={(data) => {
            return 401
          }}
           getItem={(data, index) => {
            return data[index]
          }}
           keyExtractor={(item, index) =>{
            return item.Title
           }}
           initialNumToRender = { 4 }
           updateCellsBatchingPeriod = { 1 }
           windowSize={4}
           renderItem = {({item}) => {
              return (
                <View style={{height:50}}>
                
                <Text style={{color: 'white'}}>{item.Title}</Text>
                </View>
              )
            }
           }
           />
        </LinearGradient>
      </View>
>>>>>>> 834074c960de30c26bfcdafe134b9395b0830ae2
    );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},
});



//?X-Plex-Token=41SURguGvcq4ZSrUX7SU