import React, { Component } from 'react'
import { LinearGradient } from 'expo';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  Image
} from 'react-native'
import Dimensions from 'Dimensions';

class Movie extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('item').Title,
    // headerStyle: {
    //   backgroundColor: 'rgb(39,70,125)',
    // },
  })

  render () {
      const { navigation } = this.props
      const item = navigation.getParam('item', 'NO ITEM SELECTED')
      console.log(item)
      const width = Dimensions.get('window').width
      let img
      switch (item.Type) {
        case 'Netflix':
          img = require('./assets/netflix.png')
          break
        case 'Hulu':
          img = require('./assets/Hulu.png')
          break
        case 'Prime':
          img = require('./assets/prime.png')
        default:
          img = require('./assets/plex.png')
          break
      }
    return (
      <LinearGradient
            colors={['rgb(32,56,100)','rgb(49,88,157)','rgb(54,96,171)','rgb(53,95,169)']}
            style={{
                position: 'absolute',
                left:0,
                right:0,
                bottom:0,
                top:0,
                paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight 

            }}>
            <ScrollView style={{top: 85}}>
                <Image
                  style={{width: width, height: 300}}
                  source={{uri: item.Poster}}
                />
                <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'white', padding: 15, paddingRight: 0, fontSize: 30}}>{item.Title}</Text>
                <Image
                  style={{width: 40, height: 40, margin: 10}}
                  source={img}
                />
                </View>
                <Text style={{color: 'white', width: width, padding: 10}}>{item.Plot}</Text>
            </ScrollView>
      </LinearGradient>
    )
  }
}

export default Movie

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c0392b',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})