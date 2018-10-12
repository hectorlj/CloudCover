import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { LinearGradient, Switch } from 'expo'

export default class Settings extends Component {
  static navigationOptions = {
        header: null
    }
  render () {
    return (
      <View style={styles.container}>
      <View style = {{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.header}>Settings</Text>
      </View>
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
      </View>
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
    top: 15
  },
  text: {
    fontSize: 15,
  },
});