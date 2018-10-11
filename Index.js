import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon, LinearGradient } from 'expo';
import AppNavigator from './AppNavigator';
import MaterialCommunityIcons from './node_modules/@expo/vector-icons/fonts/MaterialCommunityIcons.ttf'
export default class Index extends React.Component{
  state = {
    fontLoaded: false
  };
  async componentWillMount(){
    try{
      await Font.loadAsync({
        MaterialCommunityIcons
      });
      this.setState({fontLoaded:true});
    } catch(error){
      console.log('error loading icon fonts', error);
    }
  }
	render() {
    if(!this.state.fontLoaded){
      return <AppLoading/>;
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
          }} >
          
          <AppNavigator />
          </LinearGradient>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});