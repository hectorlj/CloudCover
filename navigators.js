import React from 'react';
import {Platform} from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import TabBarIcon from './components/TabBarIcon';


import HomeScreen from './App';
import SettingsScreen from './Settings';
import SearchScreen from './Search';

const HomeStack = createStackNavigator({
	Home: HomeScreen,
});

HomeStack.navigationOptions = {
	tabBarLabel: ' ',
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

const SearchStack = createStackNavigator({
	Search: SearchScreen,
});

SearchStack.navigationOptions = {
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

const SettingsStack = createStackNavigator({
	Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
	tabBarLabel: ' ',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
		 focused = {focused}
		 name={
		 	Platform.OS==='ios'
		 	? `ios-settings${focused ? '' : '-outline'}`
		 	: 'md-settings'
		 }
		/>
	),
};

export default createMaterialTopTabNavigator({
	SettingsStack,
	HomeStack,
	SearchStack,
}, {
	initialRouteName: 'HomeStack',
	tabBarOptions: {
		showIcon: true,
		showLabel: false,
		activeTintColor: '#FFFFFF',
		indicatorStyle:{
			backgroundColor: '#FFFFFF'
		},
		style:{
			backgroundColor: 'rgb(39,70,125)'
		}
	},
	tabBarPosition: 'bottom',
})