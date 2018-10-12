import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Image,
  TouchableHighlight
} from 'react-native'
import { LinearGradient } from 'expo'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleService } from './Actions';

class Settings extends Component {
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
      </View>
        <TouchableHighlight onPress={() => {this.props.toggleService('netflix')}}>
          <Image
            style={{width: 60, height: 60, margin: 20}}
            source={require('./assets/netflix.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {this.props.toggleService('hulu')}}>
        <Image
          style={{width: 60, height: 60, margin: 20}}
          source={require('./assets/Hulu.png')}
        />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {this.props.toggleService('amazon')}}>
           <Image
             style={{width: 60, height: 60, margin: 20}}
             source={require('./assets/prime.png')}
           />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {this.props.toggleService('plex')}}>
           <Image
             style={{width: 60, height: 60, margin: 20}}
             source={require('./assets/Plex.png')}
           />
        </TouchableHighlight>     
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

const mapStateToProps = (state) => {
    const { content } = state
    return { content }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    toggleService,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Settings);