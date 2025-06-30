import React, { useState } from 'react';
import { StyleSheet, Text, Modal, TouchableOpacity, ScrollView, FlatList, TextInput, View, Image, Keyboard, Alert } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { useNavigation } from '@react-navigation/native';

const Createliveworkout = ({ navigation }) => {
    const [should, setshould] = useState(false);

    const [equip, setequip] = useState([
        { name: 'Bike', id: '1', selected: false },
        { name: 'Dumbbells', id: '2', selected: false },
        { name: 'None', id: '3', selected: false },
        { name: 'Skipping rope', id: '4', selected: false },
        { name: 'Workout mat', id: '5', selected: false },
    ])
    const onselectedequi = (item, index) => {
        let arr = [...equip]
        if (equip[index].selected == true) {
            if (true == true) {
                arr[index].selected = false
            } else {
                arr[index].selected = true
            }
        } else {
            if (true == true) {
                arr[index].selected = true
            } else {
                arr[index].selected = false
            }
        }
        setequip(arr)
        console.log("aaa", arr)
    }

    // const result = equip.filter(check);
    // function check(a) {
    //     return a
    // }
    // console.log(result)

    const [descrip, setdescript] = useState(false);
    const [selectedinten, setSelectedinten] = useState();
    const [intensitv, setintensitv] = useState([
        { name: 'Easy', id: '1' },
        { name: 'Medium', id: '2' },
        { name: 'Hard', id: '3' },
    ])

    const [barre, setbarre] = useState([
        { name: 'Barre', id: '1', selected: false },
        { name: 'Booty burn', id: '2', selected: false },
        { name: 'Cycle', id: '3', selected: false },
        { name: 'Mirror-Hiil', id: '4', selected: false },
        { name: 'Pilates', id: '5', selected: false },
        { name: 'Strength & core', id: '6', selected: false },
        { name: 'Yoga', id: '7', selected: false },
    ])

    const onselectedclasstype = (item, index) => {
        let arr = [...barre]
        if (barre[index].selected == true) {
            if (true == true) {
                arr[index].selected = false
            } else {
                arr[index].selected = true
            }
        } else {
            if (true == true) {
                arr[index].selected = true
            } else {
                arr[index].selected = false
            }
        }
        setbarre(arr)
        console.log("aaa", arr)
    }
    const [thumb, setthumb] = useState(false);
    const [equipment, setequipment] = useState(false);
    const [inten, setinten] = useState(false);
    const [datePicker, setDatePicker] = useState(false);
    const [date, setDate] = useState(new Date());
    function showDatePicker() {
        setDatePicker(true);
    };
    function onDateSelected(event, value) {
        setDate(value);
        setDatePicker(false);
    };
    const [timePicker, setTimePicker] = useState(false);
    const [time, setTime] = useState(new Date(Date.now()));
    function showTimePicker() {
        setTimePicker(true);
    };
    function onTimeSelected(event, value) {
        setTime(value);
        setTimePicker(false);
    };
    const [duration, setduration] = useState(false);
    const [classtype, setclasstype] = useState(false);
    const [dateandtime, setdateandtime] = useState(false);
    const [camera, setCamera] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const [titlename, settitlename] = useState('');
    const [descriptionname, setdescriptionname] = useState('');
    const [durationtxt, setdurationtxt] = useState('');
    const [durationtxtmin, setdurationtxtmin] = useState('');
    // const navigation = useNavigation();
    const createButton = () => {
        const listSelected = equip.filter(item => item.selected == true)
        let selectedvalue = '';
        listSelected.forEach(item => {
            selectedvalue = selectedvalue + `${item.id}.` + item.name + '\n';
        })
        // Alert.alert(selectedvalue);
        const listSelectedbarre = barre.filter(item => item.selected == true)
        let selectedvaluebarre = '';
        listSelectedbarre.forEach(item => {
            selectedvaluebarre = selectedvaluebarre + `${item.id}.` + item.name + '\n';
        })
        
        navigation.navigate("Createliveworkdetails",
            {
                title: titlename,
                description: descriptionname,
                thumbnail: { uri: camera.uri },
                // equipments: equip,
                selecteddata: selectedvalue,
                intensity: selectedinten,
                // class: barre,
                classtype:selectedvaluebarre,
                duration: durationtxt,
                durationminute: durationtxtmin,
                dateand: date.toDateString(),
                timeand: time.toLocaleTimeString('en-US'),
            });
        console.log(equip)
    };
    const openCamera = () => {
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
                setModalVisible(!modalVisible);
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
                setCamera({ uri: response.assets[0].uri })
                setModalVisible(!modalVisible);
            }
        });
    };
    return (
        <View style={styles.container}>
            <View style={styles.liveworkoutview}>
                <View style={styles.createliveview}>
                    <Text style={styles.liveworkouttxt}>CREATE LIVE WORKOUT</Text>
                </View>
                <View >
                    <Image source={require('../assets/closecircle.png')} style={styles.imagestyle} />
                </View>
            </View>
            <ScrollView>
                <View style={styles.maintitleview}>
                    <TouchableOpacity onPress={() => setshould(!should)} >
                        <View style={styles.titleview}>
                            <Text style={styles.texttitle}>TITLE</Text>
                            <Image source={(should) ? require('../assets/up.png') : require('../assets/down.png')} />
                        </View>
                    </TouchableOpacity>
                    {
                        should ? (
                            <TextInput
                                style={styles.textinputtitle}
                                value={titlename}
                                onChangeText={(text) => settitlename(text)}
                            />
                        ) : null
                    }
                    <TouchableOpacity onPress={() => setdescript(!descrip)}>
                        <View style={styles.descriptionview}>
                            <Text style={styles.texttitle}>DESCRIPTION</Text>
                            <Image source={(descrip) ? require('../assets/up.png') : require('../assets/down.png')} />
                        </View>
                    </TouchableOpacity>
                    {
                        descrip ? (
                            <TextInput
                                style={styles.textdescription}
                                multiline={true}
                                value={descriptionname}
                                onChangeText={(text) => setdescriptionname(text)}
                            // numberOfLines={4}
                            />
                        ) : null
                    }
                    <TouchableOpacity onPress={() => setthumb(!thumb)}>
                        <View style={styles.descriptionview}>
                            <Text style={styles.texttitle}>THUMBNAIL</Text>
                            <Image source={(thumb) ? require('../assets/up.png') : require('../assets/down.png')} />
                        </View>
                    </TouchableOpacity>
                    {
                        thumb ? (
                            // <View style={{borderRadius: 7, height: 185, width: 370, marginBottom: 30, backgroundColor: "orange", }}>
                            //     <TouchableOpacity onPress={() => openGallery()} >
                            //         <Image
                            //             source={{ uri: camera.uri }}
                            //             style={styles.viewthumbnail}
                            //         />
                            //     </TouchableOpacity>
                            //     <Image source={require('../assets/opengalary.png')} style={{ position: "absolute", left: "90%", top: 140, height: 20, width: 20 }} />
                            // </View>
                            <View style={{ borderRadius: 7, height: 185, marginBottom: 15, backgroundColor: "orange", }}>
                                <Image
                                    source={{ uri: camera.uri }}
                                    style={styles.viewthumbnail}
                                />
                                <TouchableOpacity onPress={() => setModalVisible(true)} style={{ position: "absolute", left: "90%", top: 140, height: 20, width: 20 }}>
                                    <Image source={require('../assets/opengalary.png')} />
                                </TouchableOpacity>
                                <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={modalVisible}
                                    onRequestClose={() => {
                                        // Alert.alert("Modal has been closed.");
                                        setModalVisible(false);
                                    }}>
                                    <View style={styles.centeredView}>
                                        <View style={styles.modalView}>
                                            <View style={{ marginLeft: 40 }}>
                                                <TouchableOpacity >
                                                    <Icon name="camera" size={40} onPress={() => openCamera()} />
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{ marginRight: 40 }}>
                                                <TouchableOpacity>
                                                    <Icon name="image" size={40} onPress={() => openGallery()} />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </Modal>
                            </View>
                        ) : null
                    }
                    <TouchableOpacity onPress={() => setequipment(!equipment)}>
                        <View style={styles.descriptionview}>
                            <Text style={styles.texttitle}>EQUIPMENT</Text>
                            <Image source={(equipment) ? require('../assets/up.png') : require('../assets/down.png')} />
                        </View>
                    </TouchableOpacity>
                    {
                        equipment ? (
                            <View>
                                <FlatList
                                    keyExtractor={(item) => item.id}
                                    data={equip}
                                    numColumns={3}
                                    renderItem={({ item, index }) => (
                                        <TouchableOpacity onPress={() => onselectedequi(item, index)} >
                                            <Text style={item.selected === true ? styles.texteasya : styles.texteasy}>{item.name}</Text>
                                        </TouchableOpacity>
                                    )}
                                />

                            </View>

                        ) : null
                    }
                    <TouchableOpacity onPress={() => setinten(!inten)}>
                        <View style={styles.descriptionview}>
                            <Text style={styles.texttitle}>INTENSITV</Text>
                            <Image source={(inten) ? require('../assets/up.png') : require('../assets/down.png')} />
                        </View>
                    </TouchableOpacity>
                    {
                        inten ? (
                            <FlatList
                                keyExtractor={(item) => item.id}
                                data={intensitv}
                                horizontal
                                renderItem={({ item }) => (
                                    <TouchableOpacity onPress={() => setSelectedinten(item.name)} >
                                        <Text style={item.name === selectedinten ? styles.texteasya : styles.texteasy}>{item.name}</Text>
                                    </TouchableOpacity>
                                )}
                            />
                        ) : null
                    }
                    <TouchableOpacity onPress={() => setclasstype(!classtype)}>
                        <View style={styles.descriptionview}>
                            <Text style={styles.texttitle}>CLASS TYPE</Text>
                            <Image source={(classtype) ? require('../assets/up.png') : require('../assets/down.png')} />
                        </View>
                    </TouchableOpacity>
                    {
                        classtype ? (
                            <FlatList
                                keyExtractor={(item) => item.id}
                                data={barre}
                                numColumns={3}
                                renderItem={({ item, index }) => (
                                    <TouchableOpacity onPress={() => onselectedclasstype(item, index)} >
                                        <Text style={item.selected === true ? styles.texteasya : styles.texteasy}>{item.name}</Text>
                                    </TouchableOpacity>
                                )}
                            />
                        ) : null
                    }
                    <TouchableOpacity onPress={() => setduration(!duration)}>
                        <View style={styles.descriptionview}>
                            <Text style={styles.texttitle}>DURATION</Text>
                            <Image source={(duration) ? require('../assets/up.png') : require('../assets/down.png')} />
                        </View>
                    </TouchableOpacity>
                    {
                        duration ? (
                            <View style={styles.minuteview}>
                                <View style={{ width: "60%", }}>
                                    <TextInput
                                        style={styles.minutextext}
                                        placeholder="10 minutes"
                                        value={durationtxt}
                                        onChangeText={(text) => setdurationtxt(text)}
                                    ></TextInput>
                                </View>
                                <View style={{ width: "60%" }}>
                                    <TextInput style={styles.mintext}
                                        placeholder="30 minutes"
                                        value={durationtxtmin}
                                        onChangeText={(text) => setdurationtxtmin(text)}
                                    ></TextInput>
                                </View>
                            </View>
                        ) : null
                    }
                    <TouchableOpacity onPress={() => setdateandtime(!dateandtime)}>
                        <View style={styles.descriptionview}>
                            <Text style={styles.texttitle}>DATE AND TIME</Text>
                            <Image source={(dateandtime) ? require('../assets/up.png') : require('../assets/down.png')} />
                        </View>
                    </TouchableOpacity>
                    {datePicker && (
                        <DateTimePicker
                            value={date}
                            mode={'date'}
                            is24Hour={true}
                            onChange={onDateSelected}
                        />
                    )}
                    {timePicker && (
                        <DateTimePicker
                            value={time}
                            mode={'time'}
                            is24Hour={false}
                            onChange={onTimeSelected}
                        />
                    )}
                    {
                        dateandtime ? (
                            <View style={styles.dateview}>
                                <TouchableOpacity style={styles.dateviewstyle} onPress={showDatePicker}>
                                    <Text style={styles.datetext}>{date.toDateString()}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.timeviewstyle} onPress={showTimePicker}>
                                    <Text style={styles.datetext}>{time.toLocaleTimeString('en-US')}</Text>
                                </TouchableOpacity>
                            </View>
                        ) : null
                    }
                    <TouchableOpacity>
                        <View style={styles.dateview}>

                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <TouchableOpacity onPress={createButton}>
                <View style={styles.buttonview}>
                    <Text style={styles.createtext}>CREATE</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    liveworkoutview: {
        flexDirection: "row",
        marginTop: 17,
    },
    liveworkouttxt: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#0F0829",
        // textTransform:"uppercase"
    },
    createliveview: {
        marginRight: 80,
        marginLeft: 92,
    },
    imagestyle: {
        height: 20,
        width: 20,
    },
    maintitleview: {
        backgroundColor: "#FFFFFF",
        margin: 20,
    },
    titleview: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 15,
        paddingBottom: 15,
    },
    descriptionview: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 15,
        paddingBottom: 15,
        borderTopWidth: 1,
        borderColor: "#EDEDF0",
    },
    dateview: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 15,
        paddingBottom: 15,
        borderTopWidth: 1,
        borderColor: "#EDEDF0",
        marginBottom: 195
    },
    texttitle: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#0F0829",
    },
    buttonview: {
        backgroundColor: "#33EDA8",
        paddingTop: 20,
        paddingBottom: 20,
        alignItems: "center",
    },
    createtext: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#0F0829",

    },
    textinputtitle: {
        borderWidth: 2,
        borderColor: "#0F0829",
        borderRadius: 7,
        marginBottom: 15,
        paddingLeft: 10,
    },
    textdescription: {
        borderWidth: 2,
        borderColor: "#0F0829",
        borderRadius: 7,
        marginBottom: 15,
        height: 100,
        paddingLeft: 10,
        textAlignVertical: 'top'
    },
    viewthumbnail: {
        borderWidth: 1,
        borderColor: "#0F0829",
        borderRadius: 7,
        height: 185,
        marginBottom: 15,
    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "#00000099",
    },
    modalView: {
        backgroundColor: "white",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        alignItems: "center",
        justifyContent: "space-between",
        width: '50%',
        height: '20%',
        flexDirection: "row"
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
    dateview: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    dateviewstyle: {
        borderWidth: 2,
        borderColor: "black",
        paddingTop: 13,
        paddingBottom: 13,
        alignItems: "center",
        width: "49%",
        borderRadius: 7,
    },
    datetext: {
        color: "#0F0829",
        fontSize: 16
    },
    timeviewstyle: {
        borderWidth: 2,
        borderColor: "black",
        paddingTop: 13,
        paddingBottom: 13,
        alignItems: "center",
        width: "49%",
        borderRadius: 7,
    },
    minuteview: {
        alignItems: "center",
    },
    minutextext: {
        fontSize: 18,
        color: "#10072B",
        borderTopWidth: 1,
        borderColor: "#EDEDF0",
        padding: 8,
        marginTop: 31,
        textAlign: "center"
    },
    mintext: {
        fontSize: 14,
        color: "#10072B",
        borderTopWidth: 1,
        borderColor: "#EDEDF0",
        padding: 8,
        marginBottom: 15,
        textAlign: "center"
    }
});

export default Createliveworkout;