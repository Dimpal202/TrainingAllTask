import React from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableHighlight, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput, KeyboardAvoidingView } from "react-native";

const Often = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.oftenview}>
                <Text style={styles.oftentxt}>HOW OFTEN DO YOU WORKOUT</Text>
            </View>
            <View style={styles.main}> 
                <View style={styles.viewlose}>
                    <TouchableHighlight onPress={() => navigation.navigate("Twoxweek")}>
                        <View style={styles.inputlose}>
                            <Text style={styles.texteasy}>2x a week</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.viewlose}>
                    <TouchableHighlight onPress={() => navigation.navigate("Twoxweek")}>
                        <View style={styles.inputlose}>
                            <Text style={styles.texteasy}>3x a week</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.viewlose}>
                    <TouchableHighlight onPress={() => navigation.navigate("Twoxweek")}>
                        <View style={styles.inputlose}>
                            <Text style={styles.texteasy}>5x a week</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.viewlose}>
                    <TouchableHighlight onPress={() => navigation.navigate("Twoxweek")}>
                        <View style={styles.inputlose}>
                            <Text style={styles.texteasy}>Almost everyday</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.viewlose}>
                    <TouchableHighlight onPress={() => navigation.navigate("Twoxweek")}> 
                        <View style={styles.inputlose}>
                            <Text style={styles.texteasy}>Hardly ever, but want to change   </Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F2F2"
    },
    oftenview: {
        marginTop: 69,
        alignItems: "center",
    },
    oftentxt: {
        fontSize: 18,
        color: "#0F0829",
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

export default Often;