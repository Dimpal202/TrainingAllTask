import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text, Button, TouchableHighlight, View, Image, ImagePickerIOS } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { launchImageLibrary } from 'react-native-image-picker';
import 'react-native-get-random-values';
import { WebView } from 'react-native-webview';
// import { v4 as uuidv4 } from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

//https://www.youtube.com/watch?v=XMhkqymZ6fw
//https://www.youtube.com/watch?v=3evAglVMt0M
const CreateContact = ({ navigation }) => {

    const [imageURI, setImageURI] = useState('dsaasd');
    const [state, setState] = useState(false);
    // const [image, setImage] = useState(null);
    const [name, setName] = useState(null);
    const [number, setNumber] = useState(null);

    const addContact = () => {
        let data = { imageURI, name, number };
        console.log(data);
        if (imageURI && name && number) {
            AsyncStorage.setItem(uuidv4(),JSON.stringify(data))
            console.log(uuidv4,"sdfsdf")
                .then(() =>console.log("data saved"))
                .catch(console.log(err));

            //     //     try {
            //     //     //    AsyncStorage.setItem(uuidv4())
            //     //             // .then(() => navigation.navigate("Contact"))
            //     //             // .catch(console.log(err));
            //     //     }
            //     //     catch(error){
            //     //         console.log("error", error);
            //     //     }
        }
    };

    const pickImage = async () => {
        const options = {
            storageOptions: {
                path: 'images',
                mediaType: 'photo'
            },
            includeBase64: true,
        };
        setState(!state)
        launchImageLibrary(options, response => {
            if (response.didCancel) {
                console.log('user cancelled image picker');
            } else if (response.error) {
                console.log('image picker error', response.error);
            } else if (response.customButton) {
                console.log('user tapped custom button', response.customButton);
            } else {
                setImageURI({ uri: response.assets[0].uri })
            }
        });
    };
    // const removeImage=()=>{
    //     setState(false) 
    //        console.log("removed image");
    //    }
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={() => pickImage()}>
                    <Image source={{ uri: imageURI.uri }}
                        style={{ height: 250, width: 250, borderWidth: 3, borderColor: "black" }} />
                </TouchableOpacity>
            </View>
            <View>
                <TextInput style={styles.name}
                    autoCapitalize='none'
                    placeholder="Name"
                    //  value={password}
                    onChangeText={(name) => setName(name)}
                />
            </View>
            <View>
                <TextInput style={styles.number}
                    autoCapitalize='none'
                    placeholder="Number"
                    //  value={password}
                    onChangeText={(number) => setNumber(number)}
                />
            </View>
            <View>
                <TouchableHighlight onPress={() => addContact()} >
                    {/* onPress={() => navigation.navigate("Setup")} */}
                    <View style={styles.addbutton}>
                        <Text style={styles.textsign}>Add Contact</Text>
                    </View>
                </TouchableHighlight>
            </View>

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
    name: {
        width: 313,
        backgroundColor: "white",
        marginTop: 50,
        marginBottom: 20,
        paddingLeft: 10
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
        justifyContent: "center",
        alignItems: "center",

    }
});

export default CreateContact;