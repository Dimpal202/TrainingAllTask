import React from 'react';
import { StyleSheet, Text, Button,ImageBackground, TouchableHighlight, View, Image } from "react-native";

const Imagebackground = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/maskg.png')} style={{flex:1, justifyContent:"center", alignItems: "center"}} >
            <Text style={{color:"red",fontSize:50}}>hello</Text>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"

    },
});
export default Imagebackground;