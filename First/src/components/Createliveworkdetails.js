import { useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, Button, FlatList, TouchableOpacity, ScrollView, TouchableHighlight, View, Image } from "react-native";

const Createliveworkdetails = ({ navigation, route }) => {
    // const route = useRoute();
    // const {equipments} =route.params;
    return (
        <View style={styles.container}>
            <View style={styles.subview}>
                <ScrollView>
                    <View style={styles.titleviewtwo}>
                        <Text style={styles.titletext}>Title</Text>
                        <Text style={styles.titlename}>{route.params.title}</Text>
                    </View>
                    <View style={styles.titleviewtwo}>
                        <Text style={styles.titletext}>Description</Text>
                        <Text style={styles.titlename}>{route.params.description}</Text>
                    </View>
                    <View style={styles.titleviewtwo}>
                        <Text style={styles.titletext}>Image</Text>
                        <Image source={route.params.thumbnail} style={{ height: 150, width: 200, borderRadius: 20, margin: 10 }} />
                    </View>
                    <View style={styles.titleviewtwo}>
                        <Text style={styles.titletext}>Equipmenr</Text>
                        {/* <FlatList 
                         keyExtractor={(item) => item.id}
                         data={route.params.equipments}
                         numColumns={3}
                         renderItem={({ item, index }) => (
                                 <Text style={item.selected === true ? styles.texteasya : styles.texteasy}>{item.name}</Text>
                         )}/>    */}
                        <Text style={styles.titlename}>{route.params.selecteddata}</Text>
                    </View>
                    <View style={styles.titleviewtwo}>
                        <Text style={styles.titletext}>Intensitv</Text>
                        <Text style={styles.titlename}>{route.params.intensity}</Text>
                    </View>
                    <View style={styles.titleviewtwo}>
                        <Text style={styles.titletext}>Class type</Text>
                        {/* <FlatList
                                keyExtractor={(item) => item.id}
                                data={route.params.class}
                                numColumns={3}
                                renderItem={({ item, index }) => (
                                        <Text style={item.selected === true ? styles.texteasya : styles.texteasy}>{item.name}</Text>
                                )}
                            /> */}
                        <Text style={styles.titlename}>{route.params.classtype}</Text>
                    </View>
                    <View style={styles.titleviewtwo}>
                        <Text style={styles.titletext}>Duration</Text>
                        <Text style={styles.titlename}>{route.params.duration}</Text>
                        <Text style={styles.titlename}>{route.params.durationminute}</Text>
                    </View>
                    <View style={styles.titleviewtwo}>
                        <Text style={styles.titletext}>Date And Time</Text>
                        <Text style={styles.titlename}>{route.params.dateand}</Text>
                        <Text style={styles.titlename}>{route.params.timeand}</Text>
                    </View>
                </ScrollView>
            </View>
            {/* <Text style={{ fontSize: 20, color: "black" }}>Title : {route.params.title}</Text>
            <Text style={{ fontSize: 20, color: "black" }}>Description : {route.params.description}</Text>
            <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 20, color: "black" }}>Image : </Text>
                <Image source={route.params.thumbnail} style={{ height: 150, width: 200 }} />
            </View>
            <Text style={{ fontSize: 20, color: "black" }}>Equipmenr : {route.params.equipment}</Text>
            <Text style={{ fontSize: 20, color: "black" }}>Intensitv : {route.params.intensity}</Text>
            <Text style={{ fontSize: 20, color: "black" }}>Class type : {route.params.class}</Text>
            <Text style={{ fontSize: 20, color: "black" }}>Duration : {route.params.duration}</Text>
            <Text style={{ fontSize: 20, color: "black" }}>{route.params.durationminute}</Text>
            <Text style={{ fontSize: 20, color: "black" }}>Date And Time : {route.params.dateand}</Text>
            <Text style={{ fontSize: 20, color: "black" }}>Date And Time{route.params.timeand}</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#33EDA8",
    },
    titleviewtwo: {
        backgroundColor: "gray",
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginLeft: 30,
        marginRight: 30,
        borderWidth: 2,
        marginTop: 10,
        marginBottom: 10,
        borderColor: "white",
        paddingTop: 20,
        paddingBottom: 20
    },
    titletext: {
        fontSize: 20,
        color: "#33EDA8",
        paddingLeft: 10,
        textAlign: "center",
        textTransform: 'uppercase'
    },
    titlename: {
        fontSize: 20,
        color: "white",
        paddingLeft: 10,
    },
    texteasya: {
        fontSize: 16,
        borderWidth: 2,
        borderRadius: 7,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: "center",
        borderColor: "#33EDA8",
        fontSize: 16,
        color: "#33EDA8",
        marginBottom: 15,
        marginLeft: 3,
        marginRight: 3,
    },
    texteasy: {
        backgroundColor: "#F2EDFF",
        fontSize: 16,
        borderWidth: 2,
        borderRadius: 7,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: "center",
        borderColor: "#6E38F7",
        fontSize: 16,
        color: "#6E38F7",
        marginBottom: 15,
        marginLeft: 3,
        marginRight: 3,
    },
});

export default Createliveworkdetails;