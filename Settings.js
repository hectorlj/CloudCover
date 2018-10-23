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

const netflix = require('./assets/netflix.png');
const netflixGray = require('./assets/netflixGray.png');
const hulu = require('./assets/Hulu.png');
const huluGray = require('./assets/huluGray.png');
const prime = require('./assets/prime.png');
const primeGray = require('./assets/primeGray.png');
const plex = require('./assets/Plex.png');
const plexGray = require('./assets/plexGray.png');

class Settings extends Component {

  static navigationOptions = {
    header: null
  }

  componentWillMount(){
    this.changeState('netflix', netflix, netflixGray)
    this.changeState('plex', plex, plexGray)
    this.changeState('hulu', hulu, huluGray)
    this.changeState('amazon', prime, primeGray)
  }

  changeState(service, img, imgGray) {
    var item = {}
    if (this.props.content.filters[service] == true) {
      item[service] = img
      this.setState(item);
    }
    else {
      item[service] = imgGray
      this.setState(item)
    }
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
    <Text style={{paddingTop: 50, paddingLeft: 10, color: 'white', fontSize: 25}}>Filters</Text>
    <View style={styles.container} >

    <TouchableHighlight onPress={() => {
      this.props.toggleService('netflix')
      this.changeState('netflix', netflix, netflixGray)
    }}
    style={{width: 80, height: 80, margin: 20}}>
    <Image
    style={{width: 80, height: 80}}
    source={this.state.netflix}
    />
    </TouchableHighlight>
    <TouchableHighlight onPress={() => {
      this.props.toggleService('hulu')
      this.changeState('hulu', hulu, huluGray)
    }} style={{width: 80, height: 80, margin: 20}}>
    <Image
    style={{width: 80, height: 80}}
    source={this.state.hulu}
    />
    </TouchableHighlight>
    <TouchableHighlight onPress={() => {
      this.props.toggleService('amazon')
      this.changeState('amazon', prime, primeGray)
    }}
    style={{width: 80, height: 80, margin: 20}}>
    <Image
    style={{width: 80, height: 80}}
    source={this.state.amazon}
    />
    </TouchableHighlight>
    <TouchableHighlight onPress={() => {
      this.props.toggleService('plex')
      this.changeState('plex', plex, plexGray)
    }}
    style={{width: 80, height: 80, margin: 20}}>
    <Image
    style={{width: 80, height: 80}}
    source={this.state.plex}
    />
    </TouchableHighlight>   
     <Text style={{padding: 10, color: 'white', fontSize: 20}}>Use the service icons to change which content you see</Text>  
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