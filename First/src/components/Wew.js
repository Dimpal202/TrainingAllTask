import React from 'react';
import { StyleSheet, Text, Button, TextInput, TouchableHighlight, View, Image } from "react-native";


const Wew = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.weve}>
                <Text style={styles.wevefont}> WE'VE SENT IT </Text>
            </View>
            <View style={styles.checkview}>
                <Text style={styles.check}>check your inbox then follow the</Text>
                <Text style={styles.check}>instructions to reset your password.</Text>
            </View>
            <View style={styles.mailview}>
                <Image source={require('../assets/mail.png')} />
            </View>
            <View style={styles.letsbutton}>
                        <TouchableHighlight onPress={() => navigation.navigate("Login")}>
                            <View style={styles.button}>
                                <Text style={styles.textstarted}>Login</Text>
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
    weve: {
        marginTop: 67,
        justifyContent: "center",
        alignItems: "center",

    },
    wevefont: {
        fontSize: 32,
        color: "#FFFFFF",
        fontFamily: "HalvarStnclBreit-MdMaxG"
    },
    checkview: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 13
    },
    check: {
        fontSize: 16,
        color: "#FFFFFF"
    },
    mailview:{
        justifyContent:"center",
        alignItems:"center"
    },
    letsbutton: {
        marginLeft: 18,
        marginRight: 17,
    marginTop:14
    },
    button: {
        alignItems: "center",
        backgroundColor: "#33EDA8",
        paddingTop: 16,
        paddingBottom: 18,
        borderRadius: 7,
    },

});

export default Wew;