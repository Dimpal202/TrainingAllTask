import React, { useState } from "react";
import { View, StyleSheet,TouchableOpacity, Text, Image, TextInput, ScrollView, TouchableHighlight } from "react-native";
const Intense = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.andview}>
                    <Text style={styles.andtxt}>AND HOW INTENSE</Text>
                </View>
                <View style={styles.viewlose1}>
                    <View style={styles.viewlose}>
                      <TouchableHighlight onPress={() => navigation.navigate("Often")}>
                        <View  style={styles.inputlose}>
                            <Text style={styles.texteasy}>Easy</Text>
                        </View>
                      </TouchableHighlight>
                    </View>
                    <View style={styles.viewlose}>
                      <TouchableHighlight onPress={() => navigation.navigate("Syncapple")}>
                      {/* <TouchableHighlight onPress={() => navigation.navigate("Apicall")}> */}
                        <View  style={styles.inputlose}>
                            <Text style={styles.texteasy}>Medium</Text>
                        </View>
                      </TouchableHighlight>
                    </View>
                    <View style={styles.viewlose}>
                      <TouchableHighlight onPress={() => navigation.navigate("Often")}>
                        <View  style={styles.inputlose}>
                            <Text style={styles.texteasy}>Hard</Text>
                        </View>
                      </TouchableHighlight>
                    </View>
                    <View style={styles.viewlose}>
                      <TouchableHighlight onPress={() => navigation.navigate("Often")}>
                        <View  style={styles.inputlose}>
                            <Text style={styles.texteasy}>Depends on my mood</Text>
                        </View>
                      </TouchableHighlight>
                    </View>

                </View>

            </ScrollView>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F2F2"
    },
    andview: {
        marginTop: 69,
        marginLeft: 18,
        marginRight: 17,
        width: 377,

    },
    andtxt: {
        fontSize: 18,
        color: "#10072B",
        textAlign: "center"
    },
    viewlose1: {
        marginTop: 62,
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
      alignItems:"center"
    },
    texteasy:{
        fontSize:16,
        color:"#6E38F7"
    }

});

export default Intense;