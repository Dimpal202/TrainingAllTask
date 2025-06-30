import React from 'react';
import { StyleSheet, Text, Button, TextInput, TouchableHighlight, View, Image } from "react-native";


const ForgotPassword = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={styles.headignforgot} >FORGOT YOUR PASSWORD?</Text>
            </View>
            <View style={styles.nopro}>
                <Text style={styles.emailins}>No problem. just enter your email below and we'll send instructions to reset.</Text>
            </View>
            <View style={styles.emailview}>
                <TextInput
                    style={styles.email}
                    placeholder='Email'
                />
            </View>
            <View style={styles.letsbutton}>
                <TouchableHighlight onPress={() => navigation.navigate("Wew")}>
                    <View style={styles.button}>
                        <Text style={styles.textstarted}>Send</Text>
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
    heading: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 60,
    },
    headignforgot: {
        fontSize: 32,
        color: "#FFFFFF",
        fontFamily: "HalvarStnclBreit-MdMaxG"
    },
    nopro: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 25,
        marginLeft: 20,
        marginRight: 17,
    },
    emailins: {
        fontSize: 16,
        color: "#FFFFFF",
    },
    emailview: {
        marginTop: 34,
    },
    email: {
        backgroundColor: "white",
        marginLeft: 18,
        marginRight: 17,
        borderRadius: 7,
        padding: 13
    },
    letsbutton: {
        marginLeft: 18,
        marginRight: 17,
        marginTop:15
    },
    button: {
        alignItems: "center",
        backgroundColor: "#33EDA8",
        paddingTop: 16,
        paddingBottom: 18,
        borderRadius: 7,
    },
});

export default ForgotPassword;