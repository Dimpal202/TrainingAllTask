import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList,TouchableOpacity, ScrollView, TouchableHighlight, Alert } from "react-native";
// import Buttonexample from "./Buttonexample";

const Workout = ({navigation}) => {
    const [ selectedItem, setSelectedItem ] = useState();
    const [work, setWork] = useState([
        { name: 'Lose Weight', id: '1' },
        { name: 'Feel healthier', id: '2' },
        { name: 'Get fitter', id: '3' },
        { name: 'Get stronger', id: '4' },
        { name: 'Train to compete', id: '5' },
        { name: 'Train for an event', id: '6' },
    ])
    // const pressHandler = (id) => {
    //     console.warn(id);
    // }
    // console.warn( work,['key']);
    return (
        <View style={styles.container}>
            <ScrollView nestedScrollEnabled={true}>
                <View style={styles.whatview}>
                    <Text style={styles.whattxt}>WHAT ARE YOUR WORKOUT</Text>
                    <Text style={styles.whattxt}>GOALS?</Text>
                </View>
                <View style={styles.viewlose1}>
                    <FlatList
                        keyExtractor={(item) => item.id}
                        data={work}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => setSelectedItem(item)} style={styles.viewlose}>
                                <Text style={item === selectedItem ? styles.selectedText : styles.normalText}>{item.name}</Text>
                            </TouchableOpacity>
                        )}

                        // renderItem={({ item }) => (
                        //     <TouchableOpacity onPress={() => pressHandler(item.id)} style={styles.viewlose}>
                        //         <Text style={styles.inputlose}>{item.name}</Text>
                        //     </TouchableOpacity>
                        // )}
                    />
                    
                    {/* {work.map((item) => {
                        return (
                            <View key={item.key} style={styles.viewlose}>
                                <Text style={styles.inputlose}>{item.name}</Text>                       
                            </View>                       
                        )
                    })} */}
                </View>
            </ScrollView>
            {/* <View>
            <Buttonexample textData="Next" onPress={() => {navigation.navigate('Intense')}}/>
            </View> */}
                 
            <View>
                <TouchableHighlight onPress={() => navigation.navigate("Intense")}>
                    <View style={styles.button}>
                        <Text style={styles.nexttxt}>NEXT</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View> 
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F2F2"
    },
    whatview: {
        marginTop: 69,
        marginLeft: 18,
        marginRight: 17,
        marginBottom:9,
        alignItems: "center",
    },
    whattxt: {
        fontSize: 18,
        width: 300,
        textAlign: "center",
        color: "#0F0829"
    },
    viewlose1: {
        marginTop: 44,
        marginBottom: 83,
    },
    selectedText: {
        color: 'blue',
        backgroundColor: "#6E38F7",
        color:"#F2EDFF",
        borderWidth: 2,
        borderRadius: 7,
        paddingTop: 17,
        paddingBottom: 17,
        textAlign: "center",
        fontSize: 16,
      },
      normalText: {
        backgroundColor: "#F2EDFF",
        borderWidth: 2,
        borderColor: "#6E38F7",
        color: "#6E38F7",
        borderRadius: 7,
        paddingTop: 17,
        paddingBottom: 17,
        textAlign: "center",
        fontSize: 16,
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
        color: "#6E38F7",
        borderRadius: 7,
        paddingTop: 17,
        paddingBottom: 17,
        textAlign: "center",
        fontSize: 16,
    },
    // texteasy: {
    //     fontSize: 16,
    //     color: "#6E38F7"
    // },
    nexttxt: {
        fontSize: 18,
        color: "#0F0829"
    },
    // letsbutton: {
    //     marginTop: 83,
    // },
    button: {
        alignItems: "center",
        backgroundColor: "#33EDA8",
        paddingTop: 20,
        paddingBottom: 22,
        paddingLeft: 162,
        paddingRight: 162

    },
});

export default Workout;