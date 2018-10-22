import React, { Component } from 'react';
import { ActivityIndicator,FlatList, Image, View, Text, StyleSheet, TouchableOpacity, Platform, StatusBar} from 'react-native';
import { LinearGradient } from 'expo';
import {SearchBar, Card} from 'react-native-elements';
import {connect} from 'react-redux';

class Search extends Component {
static navigationOptions = {
        header: null
    }
  constructor(props){
    super(props);
    this.state = {data: []}
    this.clearList = () => {
      this.setState({data: []})
    }
    this.searchlist = (text, source) => {
      var list = [];
      text = text.toLowerCase();
      for(var key in source){
        var title = source[key].Title.toLowerCase();
        if(title.contains(text)){
          list.push(source[key]);
        }
      }
      if(text == '')
        list = [];
      this.setState({ data: list});
    }
  }

  render () {

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
          <View style={{marginTop: Platform.OS === 'ios' ? 35 : 0}}>
          <SearchBar darkTheme
            onChangeText={(text) => this.searchlist(text, this.props.content.all)}
            onClear = {() => this.clearList()}
            searchIcon={false}
            placeholder='Search...'
            />
            </View>
          <FlatList
           horizontal={false}
           data = {this.state.data}
           keyExtractor = {(item, index) =>{ return item.Title}}
           renderItem = {({item}) => {
              return (
                <Card
                  containerStyle = {{flex:1, backgroundColor: 'rgba(0, 0, 0, 0.0)', borderColor: 'rgba(0, 0, 0, 0.0)'}}
                  >
                <View style = {{flexDirection:'row'}}>  
                <View 
                style = {{
                   flexDirection: 'column',
                   flex: 0.95,
                   paddingRight: 2 }}>
                  <Text style={styles.header}>{item.Title}</Text>
                  <Text
                    numberOfLines={6}
                    style={styles.text}>{item.Plot}</Text>
                </View>
                <View>
                  <Image
                    style={{width: 120, height: 180}}
                    source={{uri: item.Poster}}
                  />
                </View>
                </View>
                </Card>

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
    fontSize: 15,
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