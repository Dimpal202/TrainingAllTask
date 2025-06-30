import React from 'react';
import { StyleSheet, Text, Button, TouchableHighlight, View, Image } from "react-native";

const Buttonexample = (navigation) => {
    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={navigation.onPress}>
                <View style={styles.button}>
                    <Text style={styles.nexttxt}>{navigation.textData}</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    nexttxt: {
        fontSize: 18,
        color: "#0F0829"
    },
    button: {
        alignItems: "center",
        backgroundColor: "#33EDA8",
        paddingTop: 20,
        paddingBottom: 22,
        paddingLeft: 162,
        paddingRight: 162

    },
});

export default Buttonexample;