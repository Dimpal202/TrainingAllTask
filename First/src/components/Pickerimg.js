import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, TouchableHighlight, ToastAndroid, Alert } from "react-native";
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import * as ImagePicker from 'react-native-image-picker';

const Pickerimg = ({ navigation }) => {
    const [camera, setCamera] = useState('adasd');
    // const [imageURI, setImageURI] = useState('dsaasd');

    // useEffect(()=>{
    //     console.log("Image: ", camera);
    // },[camera])
    
    // useEffect(()=>{
    //     console.log("Image: ", imageURI);
    // },[imageURI])
    const openCamera = () => {
        const options = {
            storageOptions: {
                path: 'images',
                mediaType: 'photo',
                width: 300,
                height: 400,
                cropping:true,
            },
            includeBase64: true,
        };
        ImagePicker.launchCamera(options, response => {
            // console.log(response, "ahdjshdjfh");
            if (response.didCancel) {
                console.log('user cancelled image picker');
            } else if (response.error) {
                console.log('image picker error', response.error);
            } else if (response.customButton) {
                console.log('user tapped custom button', response.customButton);
            } else {
                // console.log('image picker response1: ', JSON.stringify(response));
                setCamera({ uri: response.assets[0].uri })
                // setCamera({uri: response.uri})
            }
        });
    };
    const openGallery = () => {
        const options = {
            storageOptions: {
                path: 'images',
                mediaType: 'photo',
                width: 300,
                height: 400,
                cropping: true,
            },
            includeBase64: true,
        };
        ImagePicker.launchImageLibrary(options, response => {
            // console.log(response, "ahdjshdjfh");
            if (response.didCancel) {
                console.log('user cancelled');
            } else if (response.error) {
                console.log('image picker error', response.error);
            } else if (response.customButton) {
                console.log('user tapped custom button', response.customButton);
            } else {
                // const source = { uri: response.uri };
                // setImageURI({ uri: "file:///data/user/0/com.firstscreens/cache/rn_image_picker_lib_temp_98915ad4-0cfe-4ed8-bed6-76715806af3b.jpg" });
                // setTimeout(() => {
                //     console.log(response.width, "image responsive")
                // }, 1000)
                // const source = { uri: response.uri };
                // setImageURI(response.assets[0].uri);
                // console.log(source);
                setCamera({ uri: response.assets[0].uri })
            }
        });
    };
    const removeImage = () => {
        Alert.alert("oops","Are you sure you want to delete ?",[
            {text:"Yes", onPress:()=>setCamera('')},
            {text:"No", onPress:()=>console.log("no is pressed")},
        ]);
        // setCamera('')
        // console.log("removed image");
    }
    return (
        <View style={styles.container}>
            <ScrollView >
                <View style={styles.setupview}>
                    <Text style={styles.setup}>SET UP YOUR PROFILE</Text>
                </View>
                {/* <View style={styles.cameraviewback}>
                    <Image source={require('../assets/avatar.png')} />
                </View>
                <View style={styles.cameraview}>
                    <Image source={require('../assets/iconcamera.png')} />
                </View> */}
                <View style={{ alignItems: "center", }}>
                    <TouchableOpacity onPress={() => openGallery()}>
                        <Image
                            source={{ uri: camera.uri }}
                            style={{ height: 150, width: 150, borderRadius: 100, backgroundColor: "#33EDA8" }}
                        />
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row", justifyContent: "space-between",width:250 }}>
                        <TouchableOpacity onPress={() => openGallery()}>
                            <View style={styles.uploadview}>
                                <Text style={styles.uploadtxt}>Upload</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => openCamera()}>
                            <View style={styles.uploadview}>
                                <Text style={styles.uploadtxt}>Camera</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => removeImage()}>
                            <View style={styles.uploadview}>
                                <Text style={styles.uploadtxt}>remove</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.tapview}>
                    <Text style={styles.taptxt}>Tap the camera button to upload a photo of yourself</Text>
                </View>
            </ScrollView>
            <View style={styles.letsbutton}> 
            <TouchableHighlight onPress={() => navigation.navigate("Workout")}>
                {/* <TouchableHighlight onPress={() => navigation.navigate("Workout")}> */}
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
    circle: {
        underlayColor: "rgba(0,0,0,0)",
        alignItems: "center",
        justifyContent: "center"
    },
    setupview: {
        marginTop: 69,
        // marginTop: 54,
        alignItems: "center"
    },
    setup: {
        fontSize: 18,
        color: "#0F0829"
    },
    cameraviewback: {
        marginTop: 98,
        alignItems: "center"
    },
    cameraview: {
        position: "absolute",
        top: 227,
        left: 187,
        right: 171,
    },
    uploadview: {
        marginTop: 16,
        alignItems: "center"
    },
    uploadtxt: {
        fontSize: 18,
        color: "#0F0829",
    },
    tapview: {
        marginTop: 15,
        // marginLeft: 66,
        // marginRight: 67,
        alignItems: "center",
    },
    taptxt: {
        fontSize: 16,
        color: "#0F0829",
        textAlign: "center",
        width: 240,
    },
    nexttxt: {
        fontSize: 18,
        color: "#0F0829"
    },
    letsbutton: {
        marginTop: 242,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#33EDA8",
        paddingTop: 20,
        paddingBottom: 23,
        paddingLeft: 162,
        paddingRight: 162
    },
});
export default Pickerimg;