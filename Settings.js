import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch
} from 'react-native'
import { LinearGradient } from 'expo'

export default class Settings extends Component {
  static navigationOptions = {
        header: null
    }
  render () {
    return (
       <LinearGradient
        colors={['rgb(32,56,100)','rgb(49,88,157)','rgb(54,96,171)','rgb(53,95,169)']}
        style={{
            position: 'absolute',
            left:0,
            right:0,
            bottom:0,
            top:0
        }}>
      <Text style={{paddingTop: 50, paddingLeft: 10, color: 'white', fontSize: 25}}>Settings</Text>
      <View style={styles.container} >
      <View style={{ flexDirection: 'row'}}>
      <Text style={styles.text}>Netflix</Text> 
      <Switch
        onValueChange = {() => {
          if (global.filters['netflix'])
            return global.filters['netflix'] == false;
          else
            return global.filters['netflix'] == true;
         }}
        value = {global.filters['netflix']}
      />
      </View>
      <Text style={styles.text}>Hulu</Text>
      <Text style={styles.text}>Prime</Text>
      <Text style={styles.text}>Plex</Text>
      </View>
      </LinearGradient>
    )
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 15,
    
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  header:{
    fontSize: 30,
    fontWeight: 'bold',
    position: 'absolute',
    top: 15,
    color: 'white'
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
});