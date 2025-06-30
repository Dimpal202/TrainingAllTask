import React from 'react';
import { StyleSheet, Text, Button, TouchableHighlight, ScrollView, View, Image } from "react-native";

const Applehealthconnected = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.syncview}>
                    <Text style={styles.syncviewtxt}>APP HEALTH CONNECTED</Text>
                </View>
                <View style={styles.hartview}>
                    <View style={styles.herdimg}>
                        <View>
                            <Image source={require('../assets/hartapple.png')} />
                        </View>
                        <View style={styles.progressaimg}>
                            <Image source={require('../assets/progressa.png')} />
                        </View>

                    </View>
                </View>
                <View style={styles.Yourview}>
                    <Text style={styles.synctxt}>Your app is now synced with Apple Health.</Text>
                </View>
            </ScrollView>
            <View>
                <TouchableHighlight onPress={() => navigation.navigate("Getting")}>
                    <View style={styles.button}>
                        <Text style={styles.nexttxt}>NEXT</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"

    },
    syncview: {
        marginTop: 69,
        alignItems: "center"
    },
    syncviewtxt: {
        fontSize: 18,
    },

    hartview: {
        marginTop: 58,
        alignItems: "center",
    },
    herdimg: {
        marginTop: 0,
    },
    progressaimg: {
        position: "absolute",
        top: 94,
        left: 119
    },
    Yourview: {
        marginTop: 30,
        alignItems: "center"
    },
    synctxt: {
        fontSize: 14
    },
    nexttxt: {
        fontSize: 18,
        color: "#0F0829",
        alignItems: "center",
        textAlign: "center"
    },
    button: {
        backgroundColor: "#33EDA8",
        paddingTop: 20,
        paddingBottom: 22,
    },
});

export default Applehealthconnected;