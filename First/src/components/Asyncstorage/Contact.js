import React, { useState,useEffect,Component } from "react";
import { StyleSheet, Text, Button, FlatList, TouchableHighlight, View, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';


const Contact = ({ navigation }) => {
    const [contacts, setContacts] = useState([]);

    useEffect (()=>{
        getContacts();
        navigation.addListener("focus",()=>{
            getContacts();
        });
    },[]);
    const getContacts = () => {
        AsyncStorage.getAllKeys().then((keys) => {
            AsyncStorage.multiGet(keys).then((data) => {
                setContacts(
                    sata.sort(function (a, b) {
                        if (JSON.parse(a[1]).name < JSON.parse(b[1]).name) {
                            return -1;
                        }
                        if (JSON.parse(a[1]).name > JSON.parse(b[1]).name) {
                            return 1;
                        }
                    })
                );
            }).catch((err) => console.log(err));
        }).catch((err) => console.log(err));
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={contacts}
                renderItem={() => {
                    const contact = JSON.parse(data.item[1]);
                    return (
                        <View>
                            <View>
                                <Image source={{ uri: contact.imageURI }} />
                            </View>
                            <View>
                                <Text>Name:{contact.name}</Text>
                                <Text>Number:{contact.number}</Text>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"

    },
});

export default Contact;