import React from 'react';
import { StyleSheet, Text, Button, Animated,TouchableHighlight, View, Image } from "react-native";
// https://www.youtube.com/watch?v=JnI5n4gPZsY
const Splash = () => {
    const position = new Animated.ValueXY({x:100,y:0})
    Animated.timing(position,{
    toValue:{x:100,y:250},
    duration:2000
    // stiffness:2000
}).start();
    return (
        <View style={styles.container}>
             <Animated.View style={position.getLayout()}>
                <View>
                    <Image source={require('../assets/applogo.png')} />
                </View>
            </Animated.View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#10072B"
    },
});

export default Splash;