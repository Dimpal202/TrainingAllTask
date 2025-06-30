import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, Button, TouchableHighlight, View, FlatList, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Dublicateasync = ({ navigation }) => {
    const [storagedata, setStoragedata] = useState([]);

    useEffect(() => {
        async function tempFunction() {
            await getItemList();
        }
        tempFunction();
        return () => {
        }
    })
    const getItemList = async () => {
        try {
            const data = await AsyncStorage.getItem('itemList');
            const output = JSON.parse(data);
            setStoragedata(output);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={{
                    alignItems: "center",
                }}>
                    <Text style={{ color: "white", fontSize: 20 }}>Array list</Text>
                    {storagedata.map((item, index) => {
                        return <Text style={{ color: "white" }} key={index}>{item}</Text>

                    })}
                </View>
            </ScrollView>
          
            {/* <FlatList
                data={storagedata}
                renderItem={({ item }) => {
                    return (
                        <Text>{item.name},{item.input}</Text>
                    )
                   
                    const output = JSON.parse(setStoragedata);
                    setStoragedata(output);
                    return (
                        <View>
                            <View>
                                <Image source={{ uri: output.imageURI }} />
                            </View>
                            <View>
                                <Text>Name:{output.name}</Text>
                                <Text>Number:{output.input}</Text>
                            </View>
                        </View>
                    )
                }}
            /> */}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "gray"

    },
});
export default Dublicateasync;
