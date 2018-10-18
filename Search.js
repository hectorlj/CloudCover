import React, { Component } from 'react';
import { ActivityIndicator,VirtualizedList, Image, View, Text, StyleSheet, TouchableOpacity, Platform, StatusBar} from 'react-native';
import { LinearGradient } from 'expo';
import {SearchBar} from 'react-native-elements';
import {connect} from 'react-redux';

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

    // if ((global.filters)['plex'] == true)
    //     currentMovies = currentMovies.concat(plex)
    // if ((global.filters)['hulu'] == true)
    //     currentMovies = currentMovies.concat(hulu)
    // if ((global.filters)['netflix'] == true)
    //     currentMovies = currentMovies.concat(netflix)
    // if ((global.filters)['amazon'] == true)
    //     currentMovies = currentMovies.concat(amazon)

    currentMovies.sort(function(a, b) {
        return parseInt(a) - parseInt(b)
    });

    currentMovies.forEach(function(i) {
        // console.log(i)
        returnArray.push(responseJson[i])
    });

    return returnArray
}
var list = [''];
var moviesList;


class Search extends Component {
static navigationOptions = {
        header: null
    }
  constructor(props){
    super(props);
    this.state = {isLoading: true}
    this.searchlist = (text, source) => {
      list = [''];
      for(var key in source){
        var title = source[key].Title;
        if(title.contains(text)){
          list.push(source[key]);
        }
      }
      return list;
    }
  }

componentDidMount(){
    return fetch('https://codegarage.org/plex/allmovies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      
        var currentMovies = concatServices(responseJson)

        this.setState({
            isLoading: false,
            currentMovies: currentMovies,

        }, 
        function(responseJson){
          console.log(responseJson);
        });
    })
    .catch((error) => {
      console.error(error);
    });
  }
  render () {
    if (this.state.isLoading){
      return  <ActivityIndicator/>
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
            top:0,
            paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
          }} >
          <SearchBar darkTheme
            onChangeText={(text) => this.searchlist(text, this.props.content.all)}
            onClear = {() => list = ['']}
            searchIcon={true}
            placeholder='Search...'
            style = {{
              position: 'absolute',
              top: 0
            }}
            />
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

const mapStateToProps = (state) => {
    const { content } = state
    return { content }
};

export default connect(mapStateToProps)(Search);