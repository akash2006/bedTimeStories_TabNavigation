import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class WriteScreen extends React.Component{
    render(){
        return(
            <View>
                <Text style={{alignSelf:"center", marginTop:200}}>Write your story here</Text>
            </View>
        )
    }
}