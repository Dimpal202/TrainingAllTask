import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Text, Button, TouchableOpacity, View, Image } from "react-native";


const Apiscreen = ({ navigation, route }) => {
    // const [imgViews, setimgViews] = useState([]);
    // var item = route.params;
    var imgViews = route.params;
    
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("Api")}>
                    <Text style={{ fontSize: 30, fontWeight: "bold" }}>back</Text>
                </TouchableOpacity>
            </View>
            {/* <View style={styles.img}>
                <Image source={{ uri: item.coverImage }} style={{ height: 200, width: 200, }} />
            </View>
            <View style={styles.firsttextview}>
                <Text style={styles.firsttext}>{item.firstName}</Text>
                <Text style={styles.firsttext}>{item.bio.replace(/<[^>]+>/g, '')}</Text>
            </View> */}
            {/* <View>
                <View>
                    <Image source={{ uri: imgViews[0].coverImage }} style={{ height: 100, width: 100, }} />
                </View>
                <View >
                    <Image source={{ uri: imgViews[1].coverImage }} style={{ height: 100, width: 100, }} />
                </View>
                <View >
                    <Image source={{ uri: imgViews[2].coverImage }} style={{ height: 100, width: 100, }} />
                </View>
            </View> */}

            <FlatList
             data={imgViews}
             horizontal
             keyExtractor={({ id }, index) => id}
             renderItem={({ item ,index}) => (
                <View style={{  marginBottom: 20,  flexDirection: "row", padding: 10 }}>
                        <Image source={{ uri:item.coverImage }} style={{ height: 100, width: 100, }} />
                </View>
            )}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    img: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50
    },
    firsttextview: {
        margin: 10
    },
    firsttext: {
        fontWeight: "bold"
    },
});
export default Apiscreen;