import React from 'react';
import { StyleSheet, Text, Button, TouchableHighlight, ScrollView, View, Image } from "react-native";

const Syncapple = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.syncview}>
                    <Text style={styles.syncviewtxt}>SYNC APPLE HEALTH</Text>
                </View>
                <View style={styles.youview}>
                    <Text style={styles.youviewtxt}>(you can do this later in settings)</Text>
                </View>
                <View style={styles.hartview}>
                    <Image source={require('../assets/hartapple.png')} />
                </View>
                <View style={styles.syncyourview}>
                    <Text style={styles.synctxt}>Sync your workout to your apple health</Text>
                    <Text style={styles.synctxt}>App where they will appear as part of your</Text>
                    <Text style={styles.synctxt}>daily actvity</Text>
                </View>
            </ScrollView>
            <View>
                <TouchableHighlight onPress={() => navigation.navigate("Applehealthconnected")}>
                    <View style={styles.button}>
                        <Text style={styles.nexttxt}>CONNECT APPLE HEALTH</Text>
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
    syncviewtxt: {
        fontSize: 18,
    },
    youview: {
        marginTop: 10,
        alignItems: "center",
    },
    hartview: {
        marginTop: 30,
        alignItems: "center"
    },
    syncyourview: {
        marginTop: 30,
        alignItems: "center"
    },  
    youviewtxt: {
        fontSize: 14,
    },
    syncview: {
        marginTop: 69,
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

export default Syncapple;