import React from 'react';
import {Platform} from 'react-native';
import {createMaterialTopTabNavigator, createDrawerNavigator, createStackNavigator} from 'react-navigation';
import TabBarIcon from './components/TabBarIcon';


import HomeScreen from './App';
import SettingsScreen from './Settings';
import SearchScreen from './Search';
import MovieScreen from './Movie';

const Search = createStackNavigator({
	Search: SearchScreen,
});

Search.navigationOptions = {
	tabBarLabel: ' ',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
		 focused = {focused}
		 name={
		 	Platform.OS==='ios'
		 	? `ios-search${focused ? '' : '-outline'}`
		 	: 'md-search'
		 }
		/>
	),
};


const Settings = createStackNavigator({
	Settings: SettingsScreen,
});

Settings.navigationOptions = {
	tabBarLabel: ' ',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
		 focused = {focused}
		 name={
		 	Platform.OS==='ios'
		 	? `ios-menu${focused ? '' : '-outline'}`
		 	: 'md-menu'
		 }
		/>
	),
};

const Home = createStackNavigator({
	Home: HomeScreen,
});


Home.navigationOptions = {
	tabBarLabel: ' ',
	initialRouteName: 'Home',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
		 focused = {focused}
		 name={
		 	Platform.OS==='ios'
		 	? `ios-home${focused ? '' : '-outline'}`
		 	: 'md-home'
		 }
		/>
	),
};

const MaterialNav =  createMaterialTopTabNavigator({
	Settings,
	Home,
	Search,
}, {
	initialRouteName: 'Home',
	tabBarOptions: {
		showIcon: true,
		showLabel: false,
		activeTintColor: '#FFFFFF',
		indicatorStyle:{
			backgroundColor: '#FFFFFF'
		},
		style:{
			backgroundColor: 'rgb(39,70,125)',
			paddingBottom: Platform.OS === 'ios' ? 40 : 0 
		}
	},
	tabBarPosition: 'bottom',
});

export default createStackNavigator({
    Nav: {screen: MaterialNav, navigationOptions:{header: null}},
    Movie: {screen: MovieScreen},
});