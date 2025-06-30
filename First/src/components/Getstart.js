import React from 'react';
import { StyleSheet, Text, Button, TouchableHighlight, View, Image, Animated } from "react-native";

const Getstart = ({ navigation }) => {
    // const position = new Animated.ValueXY({ x: 100, y: 0 })
    // Animated.timing(position, {
    //     toValue: { x: 100, y: 250 },
    //     duration: 2000
    //     // stiffness:2000
    // }).start();
    return (
        <View style={styles.container}>
            {/* <Animated.View style={position.getLayout()}>
                <View>
                    <Image source={require('../assets/applogo.png')} />
                </View>
            </Animated.View> */}
            <View style={styles.imagelogo}>
                <Image source={require('../assets/applogo.png')} />
            </View>
            <View style={styles.titlegose}>
                <Text style={styles.title}>TITLE GOES HERE</Text>
                <Text style={styles.tagline}>TAGLINE GOES HERE</Text>
            </View>
            {/* <Button
        title="Go to Details"   
        onPress={() => props.navigation.navigate('Login')}
      /> */}
            <View style={styles.letsbutton}>
            <TouchableHighlight onPress={() => navigation.navigate("Login")} >
                {/* <TouchableHighlight onPress={() => navigation.navigate("Login")}> */}
                    <View style={styles.button}>
                        <Text style={styles.textstarted}>Let's get started</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0F0829"
    },
    imagelogo: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 185
    },
    titlegose: {
        justifyContent: "center",
        alignItems: "center",
        marginTop:30,
        marginBottom:90,
    },
    title: {
        fontWeight: "bold",
        color: "white",
        fontSize: 30,
        fontFamily: 'Metropolis',
    },
    tagline: {
        fontSize: 20,
        color: "white",
        fontFamily: 'Metropolis',
    },
    letsbutton: {
        marginLeft: 18,
        marginRight: 17,
        // marginTop: 106,
        marginBottom: 68
    },
    button: {
        alignItems: "center",
        backgroundColor: "#33EDA8",
        paddingTop: 16,
        paddingBottom: 18,
        borderRadius: 7,
    },
    textstarted: {
        fontWeight: "bold",
        fontSize: 15,
    }
});

export default Getstart;