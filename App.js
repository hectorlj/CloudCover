import React from 'react';
import {VirtualizedList, Image, ScrollView, FlatList, ActivityIndicator, Button, StyleSheet, Text, View, StatusBar } from 'react-native';
import { LinearGradient } from 'expo';
import { connect } from 'react-redux';

class App extends React.Component {

    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props);
        this.state = {isLoading: true}
    }

    concatServices(responseJson) {
        var currentMovies = []
        var plex = []
        var hulu = []
        var netflix = []
        var amazon = []
        var returnArray = []
        for (i in responseJson) {
            if (i % 4 == 0)
                plex.push(i)
            else if (i % 3 == 0) 
                hulu.push(i)
            else if (i % 2 == 0)
                netflix.push(i)
            else
                amazon.push(i)
        }

        if (this.props.content.filters['plex'] == true)
            currentMovies = currentMovies.concat(plex)
        if (this.props.content.filters['hulu'] == true)
            currentMovies = currentMovies.concat(hulu)
        if (this.props.content.filters['netflix'] == true)
            currentMovies = currentMovies.concat(netflix)
        if (this.props.content.filters['amazon'] == true)
            currentMovies = currentMovies.concat(amazon)

        currentMovies.sort(function(a, b) {
            return parseInt(a) - parseInt(b)
        });

        currentMovies.forEach(function(i) {
            returnArray.push(responseJson[i])
        });

        return returnArray
    }

    getContinue(responseJson) {
        var returnArray = []
        for (i in responseJson) {
            for (y in this.props.content.continueWatching) {
                if (responseJson[i].Title == this.props.content.continueWatching[y])
                    returnArray.push(responseJson[i])
            }
        }
        return returnArray
    }

    getYourList(responseJson) {
        var returnArray = []
        for (i in responseJson) {
            for (y in this.props.content.yourList) {
                if (responseJson[i].Title == this.props.content.yourList[y])
                    returnArray.push(responseJson[i])
            }
        }
        return returnArray
    }

    componentDidMount(){
        return fetch('https://codegarage.org/plex/allmovies.json')
        .then((response) => response.json())
        .then((responseJson) => {

            var currentMovies = this.concatServices(responseJson)
            var continueWatching = this.getContinue(currentMovies)
            var yourList = this.getYourList(currentMovies)
            this.setState({
                isLoading: false,
                currentMovies: currentMovies,
                continueWatching: continueWatching,
                yourList: yourList
            }, 
            function(responseJson){
            });
        })
        .catch((error) => {
            console.error(error)
        });
    }

    render() {
        this.componentDidMount()
        if (this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 50}}>
                <ActivityIndicator/>
                </View>
                )
        }
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
            <ScrollView>


            <Text style={{paddingTop: 50, paddingLeft: 10, color: 'white', fontSize: 25}}>Continue Watching</Text>
            <VirtualizedList
            style={{flex:1, paddingTop: 5, margin: 0, paddingLeft: 10}}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            maxToRenderPerBatch={4}
            data = {this.state.continueWatching}
            getItemCount={(data) => {
                return data.length
            }}
            getItem={(data, index) => {
                return data[index]
            }}
            keyExtractor={(item, index) =>{
                return item.Title
            }}
            initialNumToRender = { 4 }
            updateCellsBatchingPeriod = { 1 }
            windowSize={4}
            renderItem = {({item}) => {
                return (
                    <View style={{margin: 10, marginBottom: 0}}>
                    <Image
                    style={{width: 120, height: 180}}
                    source={{uri: item.Poster}}
                    />
                    <Text style={{color: 'white', width: 120, marginTop: 5}}>{item.Title}</Text>
                    </View>
                    )
            }}
            />


            <Text style={{paddingTop: 30, paddingLeft: 10, color: 'white', fontSize: 25}}>Your List</Text>
            <VirtualizedList
            style={{flex:1, paddingTop: 5, margin: 0, paddingLeft: 10}}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            maxToRenderPerBatch={4}
            data = {this.state.yourList}
            getItemCount={(data) => {
                return data.length
            }}
            getItem={(data, index) => {
                return data[index]
            }}
            keyExtractor={(item, index) =>{
                return item.Title
            }}
            initialNumToRender = { 4 }
            updateCellsBatchingPeriod = { 1 }
            windowSize={4}
            renderItem = {({item}) => {
                return (
                    <View style={{margin: 10}}>
                    <Image
                    style={{width: 120, height: 180}}
                    source={{uri: item.Poster}}
                    />
                    <Text style={{color: 'white', width: 120, marginTop: 5}}>{item.Title}</Text>
                    </View>
                    )
            }}
            />
            

            <Text style={{paddingTop: 30, paddingLeft: 10, color: 'white', fontSize: 25}}>For You</Text>
            <VirtualizedList
            style={{flex:1, paddingTop: 5, margin: 0, paddingLeft: 10}}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            maxToRenderPerBatch={4}
            data = {this.state.currentMovies}
            getItemCount={(data) => {
                return data.length
            }}
            getItem={(data, index) => {
                return data[index]
            }}
            keyExtractor={(item, index) =>{
                return item.Title
            }}
            initialNumToRender = { 4 }
            updateCellsBatchingPeriod = { 1 }
            windowSize={4}
            renderItem = {({item}) => {
                return (
                    <View style={{height:200, margin: 10, marginBottom: 40}}>
                    <Image
                    style={{width: 120, height: 180}}
                    source={{uri: item.Poster}}
                    />
                    <Text style={{color: 'white', width: 120, marginTop: 5}}>{item.Title}</Text>
                    </View>
                    )
            }}
            />
            </ScrollView>
            </LinearGradient>
            );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},
});

const mapStateToProps = (state) => {
    const { content } = state
    return { content }
}

export default connect(mapStateToProps)(App);



//?X-Plex-Token=41SURguGvcq4ZSrUX7SU