import React from 'react';
import { StyleSheet, Text, ScrollView, Button, TouchableHighlight, View, Image } from "react-native";

const Basicpro = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.letsbutton}>
                    <TouchableHighlight onPress={() => navigation.navigate("Apicall")}>
                        <View style={styles.button}>
                            <Text style={styles.textstarted}>Apicall</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.letsbutton}>
                    <TouchableHighlight onPress={() => navigation.navigate("Radio")}>
                        <View style={styles.button}>
                            <Text style={styles.textstarted}>Radio</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.letsbutton}>
                    <TouchableHighlight onPress={() => navigation.navigate("Pickerexe")}>
                        <View style={styles.button}>
                            <Text style={styles.textstarted}>Pickerexe</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.letsbutton}>
                    <TouchableHighlight onPress={() => navigation.navigate("DateTime")}>
                        <View style={styles.button}>
                            <Text style={styles.textstarted}>DateTime</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.letsbutton}>
                    <TouchableHighlight onPress={() => navigation.navigate("Dt")}>
                        <View style={styles.button}>
                            <Text style={styles.textstarted}>Dt</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.letsbutton}>
                    <TouchableHighlight onPress={() => navigation.navigate("Datepickerexample")}>
                        <View style={styles.button}>
                            <Text style={styles.textstarted}>Datepickerexample</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"

    },
    letsbutton: {
        margin: 10,
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

export default Basicpro;