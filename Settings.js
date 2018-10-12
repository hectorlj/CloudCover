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
  state = {
    netflix: true,
    hulu:false,
    prime:true,
    plex:false

  };
    _handleToggleSwitch = () =>
    this.setState(state => ({
      switchValue: !state.switchValue,
    }));

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
        onValueChange = {() =>
    this.setState(state => ({
      netflix: !state.netflix,
    }))}
        value = {this.state.netflix}
      />
      </View>

      <View style={{ flexDirection: 'row'}}>
      <Text style={styles.text}>Hulu</Text> 
      <Switch
        onValueChange = {() =>
    this.setState(state => ({
      hulu: !state.hulu,
    }))}
        value = {this.state.hulu}
      />
      </View>

      <View style={{ flexDirection: 'row'}}>
      <Text style={styles.text}>Plex</Text> 
      <Switch
        onValueChange = {() =>
    this.setState(state => ({
      plex: !state.plex,
    }))}
        value = {this.state.plex}
      />
      </View>

      <View style={{ flexDirection: 'row'}}>
      <Text style={styles.text}>Prime</Text> 
      <Switch
        onValueChange = {() =>
    this.setState(state => ({
      prime: !state.prime,
    }))}
        value = {this.state.prime}
      />
      </View>
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
    paddingRight: 15
  },
});