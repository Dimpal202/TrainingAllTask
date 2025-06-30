import React from 'react';
import { StyleSheet, Text, Button, TouchableHighlight, View, Image } from "react-native";


const Twoxweek = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.howdo}>
                <Text style={styles.howdotxt}>HOW LONG DO YOU WANT TO</Text>
                <Text style={styles.howdotxt}>WORKOUT FOR?</Text>
            </View>
            <View style={styles.main}>
                <View style={styles.viewlose}>
                    <TouchableHighlight onPress={() => navigation.navigate("Syncapple")}>
                        <View style={styles.inputlose}>
                            <Text style={styles.texteasy}>10 minutes</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.viewlose}>
                    <TouchableHighlight onPress={() => navigation.navigate("Syncapple")}>
                        <View style={styles.inputlose}>
                            <Text style={styles.texteasy}>30 minutes</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.viewlose}>
                    <TouchableHighlight onPress={() => navigation.navigate("Syncapple")}>
                        <View style={styles.inputlose}>
                            <Text style={styles.texteasy}>45-60 minutes</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.viewlose}>
                    <TouchableHighlight onPress={() => navigation.navigate("Syncapple")}>
                        <View style={styles.inputlose}>
                            <Text style={styles.texteasy}>More than 60 minutes</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"

    },
    howdo:{
marginTop:69,
alignItems:"center",
    },
    howdotxt:{
fontSize:18,


    },
    main:{
        marginTop: 62
    },
    viewlose: {
        marginLeft: 17,
        marginRight: 18,
        marginBottom: 15,
    },
    inputlose: {
        backgroundColor: "#F2EDFF",
        borderWidth: 2,
        borderColor: "#6E38F7",
        borderRadius: 7,
        paddingTop: 17,
        paddingBottom: 17,
        alignItems: "center"
    },
    texteasy: {
        fontSize: 16,
        color: "#6E38F7"
    }
});

export default Twoxweek;