import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, Button, ScrollView, TouchableHighlight, View, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Asyncstorage = ({ navigation }) => {
    const [name, setName] = useState('');
    // const [input, setInput] = useState('');
    const [storagedata, setStoragedata] = useState([]);
    useEffect(() => {
        async function tempFunction() {
            await getItemList();
        }
        tempFunction();
        return () => {
        }
    });
    const addItemToList = async () => {
        storagedata.push(name);
        // storagedata.push(input);
        const output = JSON.stringify(storagedata);
        await AsyncStorage.setItem('itemList', output);
        setName('')
        // navigation.navigate("Dublicateasync")
        // .catch(console.log(err))
    };
    const getItemList = async () => {
        try {
            const data = await AsyncStorage.getItem('itemList');
            console.log(data)
            const output = JSON.parse(data);    
            setStoragedata(output);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <View style={styles.container}>
            <ScrollView>
                <View >
                    <View style={{ marginBottom: 20, marginTop: 200 }}>
                        <TextInput style={styles.number}
                            autoCapitalize='none'
                            placeholder="name"
                            //  value={password}
                            onChangeText={(name) => setName(name)}
                        />
                    </View>
                    {/* <View>
                        <TextInput style={styles.number}
                            autoCapitalize='none'
                            placeholder="Number"
                            //value={password}
                            onChangeText={(input) => setInput(input)}
                        />
                    </View> */}
                    <TouchableHighlight onPress={() => addItemToList()} >
                        {/* onPress={() => navigation.navigate("Setup")} */}
                        <View style={styles.addbutton}>
                            <Text>Add</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={{
                        alignItems: "center",
                    }}>
                        <Text style={{ color: "white", fontSize: 20 }}>Array list</Text>
                        {storagedata.map((item, index) => {
                            return <Text style={{ color: "white" }}>{item}</Text>
                        })}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center",
    },
    number: {
        width: 313,
        backgroundColor: "white",
        paddingLeft: 10
    },
    addbutton: {
        backgroundColor: "#33EDA8",
        borderRadius: 7,
        padding: 16,
        marginLeft: 18,
        marginTop: 20,
        marginRight: 17,
        alignItems: "center",
    }
});
export default Asyncstorage;