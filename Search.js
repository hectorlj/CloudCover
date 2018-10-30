import React, { Component } from 'react';
import { ActivityIndicator,FlatList, Image, View, Text, StyleSheet, TouchableHighlight, Platform, StatusBar} from 'react-native';
import { LinearGradient } from 'expo';
import {SearchBar, Card} from 'react-native-elements';
import {connect} from 'react-redux';
import { Font } from 'expo';

const filled = require('./assets/images/round_favorite_white_18dp.png');
const notfilled = require('./assets/images/round_favorite_border_white_18dp.png');

class Search extends Component {
  static navigationOptions = {
        header: null
  }
  
  constructor(props){
    super(props);
    this.state = {isloading: true,
      query: "",}
    this.clearList = () => {
      this.setState({data: []})
    }
  }

  handleQueryChange = query => {
        this.setState(state => ({ ...state, query: query || "" }))
        this.searchlist(query)
      };

  handleSearchClear = () => this.handleQueryChange("");

  concatServices(responseJson) {
    var currentMovies = []
    var plex = []
    var hulu = []
    var netflix = []
    var amazon = []
    var returnArray = []
    for (i in responseJson) {
        if (i % 4 == 0) {
            responseJson[i].Type = 'Plex'
            plex.push(i)
        }
        else if (i % 3 == 0) {
            responseJson[i].Type = 'Hulu'
            hulu.push(i)
        }
        else if (i % 2 == 0) {
            responseJson[i].Type = "Netflix"
            netflix.push(i)
        }
        else {
            responseJson[i].Type = "Prime"
            amazon.push(i)
        }
    }

    if (this.props.content.filters['plex'] == true)
        currentMovies = currentMovies.concat(plex)
    if (this.props.content.filters['hulu'] == true)
        currentMovies = currentMovies.concat(hulu)
    if (this.props.content.filters['netflix'] == true)
        currentMovies = currentMovies.concat(netflix)
    if (this.props.content.filters['amazon'] == true)
        currentMovies = currentMovies.concat(amazon)

    currentMovies.sort(function(a, b) {
        return parseInt(a) - parseInt(b)
    });

    currentMovies.forEach(function(i) {
        returnArray.push(responseJson[i])
    });

    return returnArray
  };
    
  searchlist(text) {
      var source = this.state.currentMovies;
      var list = [];
      text = text.toLowerCase();
      for(var key in source){
        var title = source[key].Title.toLowerCase();
        if(title.includes(text)){
          let img
            switch (source[key].Type) {
              case 'Netflix':
                img = require('./assets/netflix.png')
                break
              case 'Hulu':
                img = require('./assets/Hulu.png')
                break
              case 'Prime':
                img = require('./assets/prime.png')
                break
              case 'Plex':
                img = require('./assets/Plex.png')
                break
              default:
                img = require('./assets/Plex.png')
                break
            }
          source[key].TypePic = img;
          list.push(source[key]);
        }
      }
      if(text == '')
        list = [];
      else if(list.length < 1){
        list.push({notfound:'No movies found! :(', Title:'notfound'})
      }
      this.setState({ data: list});
  };

  componentDidMount() {
        Font.loadAsync({
          Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
          'Material Design Icons': require("@expo/vector-icons/fonts/MaterialCommunityIcons.ttf")
        });
        return fetch('https://codegarage.org/plex/allmovies.json')
        .then((response) => response.json())
        .then((responseJson) => {

            var currentMovies = this.concatServices(responseJson)
            this.setState({
                isLoading: false,
                currentMovies: currentMovies
            }, 
            function(responseJson){
            });
        })
        .catch((error) => {
            console.error(error)
        });
    };

  render () {
    this.componentDidMount()
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
          <View style={{marginTop: Platform.OS === 'ios' ? 45 : 0}}>
          <SearchBar darkTheme
            platform="default"
            onChangeText={this.handleQueryChange}
            onClear = {this.handleSearchClear}
            value={this.state.query}
            searchIcon={false}
            placeholder='Search...'
            />
            </View>
          <FlatList
           horizontal={false}
           data = {this.state.data}
           keyExtractor = {(item, index) =>{ return item.Title}}
           renderItem = {({item}) => {
              if(item.notfound){
                return (
                  <View style={styles.container}>
                    <Text style={styles.header}>
                    {item.notfound}
                    </Text>
                  </View>
                  )
              }
              return (
                <Card
                  containerStyle = {{flex:1, backgroundColor: 'rgba(0, 0, 0, 0.3)', borderColor: 'rgba(0, 0, 0, 0.0)'}}
                  >
                 <TouchableHighlight onPress={() => {
                          this.props.navigation.navigate("Movie", {item: item})   
                        }}
                        >
                <View style = {{flexDirection:'row'}}>  
                <View 
                style = {{
                   flexDirection: 'column',
                   flex: 0.95,
                   paddingRight: 4 }}>
                  <Text style={styles.header}>{item.Title}</Text>
                  <Image
                    style={{width: 30, height: 30, margin: 15}}
                    source={item.TypePic}
                  />
                  
                  <Text
                    numberOfLines={4}
                    style={styles.text}>{item.Plot}</Text>
                </View>
                <View>
                  <Image
                    style={{width: 120, height: 180}}
                    source={{uri: item.Poster}}
                  />
                </View>
                </View>
                </TouchableHighlight>
                </Card>

              )
            }
           }
           />
      </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    color: 'white',
  },
  header:{
    fontSize: 17,
    color: 'white',
  	fontWeight: 'bold'
  }
});

const mapStateToProps = (state) => {
    const { content } = state
    return { content }
};

export default connect(mapStateToProps)(Search);