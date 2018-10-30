import React, { Component } from 'react'
import { LinearGradient } from 'expo';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  Image,
  StatusBar,
  TouchableHighlight
} from 'react-native'
import Dimensions from 'Dimensions';
import AppLink from 'react-native-app-link';
var url = '';
var appName = '';
var appStoreId = '';
var appStoreLocale = 'us';
var playStoreId = '';
class Movie extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('item').Title,
    headerStyle: {
      backgroundColor: 'rgb(32,56,100)',
    },
    headerTitleStyle: {
       color: 'white',
    },
  })

  render () {
      const { navigation } = this.props
      const item = navigation.getParam('item', 'NO ITEM SELECTED')
      const width = Dimensions.get('window').width
      let img
      switch (item.Type) {
        case 'Netflix':
          img = require('./assets/netflix.png')
          url = 'nflx://www.netflix.com/'
          appName = 'Netflix'
          appStoreId = 'id363590051'
          playStoreId = 'com.netflix.mediaclient'       
          break
        case 'Hulu':
          img = require('./assets/Hulu.png')
          url = 'hulu: hulu://'
          appName = 'Hulu'
          appStoreId = 'id376510438'
          playStoreId = 'com.hulu.plus'
          break
        case 'Prime':
          img = require('./assets/prime.png')
          url = ''
          appName = 'Prime Video'
          appStoreId = 'id545519333'
          playStoreId = 'com.amazon.avod.thirdpartyclient'
        default:
          img = require('./assets/Plex.png')
          url = 'plex://'
          appName = 'Plex'
          appStoreId = 'id383457673'
          playStoreId = 'com.plexapp.android'
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
            <ScrollView style={{top: Platform.OS === 'ios' ? 85 : 0}}>
              <TouchableHighlight onPress={() => {
 
                AppLink.maybeOpenURL(url, {appName, appStoreId, appStoreLocale, playStoreId}).then(() => {

                })
                .catch((err)=>{
                  console.log(err);
                });
              }}
              >
                <View>
                <Image
                  style={{width: width, height: 300}}
                  source={{uri: item.Poster}}
                />
                  <Image
                  style={{width: 150, height: 150, position: 'absolute', left: (width/2) - 75, top: 150 - 75 }}
                  source={require('./assets/playButton.png')}
                />
                </View>
                </TouchableHighlight>
                <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'white', paddingTop: 5, paddingLeft: 5, paddingBottom: 5, fontSize: 30}}>{item.Title}</Text>
                <TouchableHighlight onPress={() => {
                  AppLink.maybeOpenURL(url, {appName, appStoreId, appStoreLocale, playStoreId}).then(() => {

                  })
                  .catch((err)=>{
                    console.log(err);
                  });
                }}
                style={{margin: 10, marginBottom: 0}}
                >
                <Image
                  style={{width: 40, height: 40}}
                  source={img}
                />
                </TouchableHighlight>
                </View>
                <Text style={styles.metadata}>{item.Year}</Text>
                <Text style={styles.plot}>{item.Plot}</Text>
                <Text style={styles.subinfo}>Starring: {item.Actors}</Text>
                <Text style={styles.subinfo}>Director: {item.Director}</Text>
            
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
  },
  subinfo: {
    fontSize: 10,
    color: 'white',
    width: Dimensions.get('window').width,
    padding: 10
  },
  metadata: {
    fontSize: 12,
    color: 'white',
    width: Dimensions.get('window').width,
    padding: 10
  }, 
  plot: {
    fontSize: 14,
    color: 'white',
    width: Dimensions.get('window').width, 
    padding: 10
  }
})