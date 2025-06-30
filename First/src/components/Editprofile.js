import React, { useState, useEffect, useRef, } from "react";
import { StyleSheet, Modal, Text, Button, FlatList, TouchableOpacity, KeyboardAvoidingView, TouchableHighlight, TextInput, View, ScrollView, ToastAndroid, Image, Alert, Platform, Keyboard } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import ActionSheet from 'react-native-actionsheet';
import * as ImagePicker from 'react-native-image-picker';

//https://www.youtube.com/watch?v=QLR2UZKe6iE

const Editprofile = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [type, settype] = useState('');
    const [txtValue, SetTxtValue] = useState('');
    const [datePicker, setDatePicker] = useState(false);
    const [date, setDate] = useState(new Date());
    // const [username, setusername] = useState('')
    // const [name, setname] = useState('')

    const [typeOfKeyboard, settypeOfKeyboard] = useState('');
    const [submittedtext, setsubmittedtext] = useState('stewmiiller22');
    const [submittedtextname, setsubmittedtextname] = useState('Stewart');
    const [submittedtextemail, setsubmittedtextemail] = useState('Stewartmiller@platformstudio.com');
    const [submittedtextpass, setsubmittedtextpass] = useState('ghjdkflsv');
    const [submittedtextphone, setsubmittedtextphone] = useState('+27 72 378 9911');
    // const [submittedtextlocation, setsubmittedtextlocation] = useState('Johannesburg, ZA');
    // const [submittedtextbirthday, setsubmittedtextbirthday] = useState('22 Dec 1998');
    const [shouldshowgender, setshouldshowgender] = useState(false);
    const [selectedValuesave, setSelectedValuesave] = useState("Female");

    const [submitkg, setsubmitkg] = useState('66');
    const [shouldshow, setshouldshow] = useState(false);
    const [selectedItemweight, setSelectedItemweight] = useState();
    const [weight, setweight] = useState([
        { name: 'lb', id: '1' },
        { name: 'kg', id: '2' },
    ])
    const [submitft, setsubmitft] = useState('5.5');
    const [shouldshowmft, setshouldshowmft] = useState(false);
    const [selectedItemheight, setSelectedItemheight] = useState();
    const [height, setheight] = useState([
        { name: 'm', id: '1' },
        { name: 'ft', id: '2' },
    ])
    const Buttongender = () => {
        setSelectedValuesave(selectedValuesave);
        setshouldshowgender(!shouldshowgender);
    }
    const Buttonweight = () => {
        setsubmitkg(submitkg);
        setshouldshow(!shouldshow);
    }
    const Buttonheight = () => {
        setsubmitft(submitft);
        setshouldshowmft(!shouldshowmft);
    }
    const handleChange = (text) => {
        SetTxtValue(text)
    }
    const clickButton = () => {
        if (type == 'username') {
            setsubmittedtext(txtValue)
        } else if (type == 'name') {
            setsubmittedtextname(txtValue)
        } else if (type == 'email') {
            setsubmittedtextemail(txtValue)
        } else if (type == 'password') {
            setsubmittedtextpass(txtValue)
        } else if (type == 'phone') {
            setsubmittedtextphone(txtValue)
        }
        // else if (type == 'location') {
        //     setsubmittedtextlocation(txtValue)
        // }
        setModalVisible(false);
    }

    const onButtonAction = (type) => {
        console.log('type is:', type)
        if (type == 'username') {
            settypeOfKeyboard('default');
            SetTxtValue(submittedtext)
        } else if (type == 'name') {
            settypeOfKeyboard('default');
            SetTxtValue(submittedtextname)
        } else if (type == 'email') {
            settypeOfKeyboard('email-address');
            SetTxtValue(submittedtextemail)
        } else if (type == 'password') {
            settypeOfKeyboard('default');
            SetTxtValue(submittedtextpass)
        } else if (type == 'phone') {
            SetTxtValue(submittedtextphone)
            settypeOfKeyboard('numeric');
        }
        //  else if (type == 'location') {
        //     settypeOfKeyboard('default');
        //     SetTxtValue(submittedtextlocation)
        // } 
        settype(type);
        // setModalVisible(true)
        setModalVisible(!modalVisible);
    }
    function showDatePicker() {
        setDatePicker(true);
    };
    function onDateSelected(event, value) {
        setDate(value);
        setDatePicker(false);
    };

    const saveData = () => {
        const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
        if (submittedtext.length == 0) {
            ToastAndroid.show('Enter UserName',
                ToastAndroid.LONG,
            )
        } else if (submittedtextname.length == 0) {
            ToastAndroid.show('Please enter Name',
                ToastAndroid.LONG,
            )
        } else if (submittedtextemail.length == 0) {
            ToastAndroid.show('Please enter email',
                ToastAndroid.LONG,
            )
        } else if (submittedtextpass.length == 0) {
            ToastAndroid.show('Please enter password',
                ToastAndroid.LONG,
            )
        } else if (submittedtextphone.length == 0) {
            ToastAndroid.show('Please enter phone',
                ToastAndroid.LONG,
            )
        }
        // else if (submittedtextlocation.length == 0) {
        //     ToastAndroid.show('Please enter location',
        //         ToastAndroid.LONG,
        //     )
        // } 
        else if (submitkg.length == 0) {
            ToastAndroid.show('Please selecte weight',
                ToastAndroid.LONG,
            )
        } else if (submitft.length == 0) {
            ToastAndroid.show('Please selecte weight',
                ToastAndroid.LONG,
            )
        } else if (strongRegex.test(submittedtextemail) === false) {
            ToastAndroid.show('Please enter valid email',
                ToastAndroid.LONG,
            )
        } else if (submittedtextpass.length < 8 || submittedtextpass.length > 16) {
            ToastAndroid.show('The Password must be 8 to 16 characters',
                ToastAndroid.LONG,
            )
        }
        else if (submittedtextphone.length < 11) {
            ToastAndroid.show('The Password must be 11',
                ToastAndroid.LONG,
            )
        } else {
            navigation.navigate("Manageprofile")
        }
    }

    const [galary, setgalary] = useState('adasd');
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
                setgalary({ uri: response.assets[0].uri })
            }
        });
    };
    const [selected, setselected] = useState('Ahmedabad');
    const [buttonIndex, setButtonindex] = useState('');
    let actionSheet = useRef();
    let optionArray = ['Ahmedabad', 'Surat', 'Vadodara', 'cancel']
    const showActinSheet = () => {
        actionSheet.current.show()
    }
    const handlepress = (index) => {
        setselected(optionArray[index])
        setButtonindex(index)
    }
    return (
        <View style={styles.container}>
            <View style={styles.subeditpro}>
                <Icon name="angle-left" size={25} color="#FFFFFF" onPress={() => navigation.navigate("Manageprofile")} />
                <Text style={styles.edittxt}>edit profile</Text>
                <TouchableOpacity onPress={() => { saveData() }}>
                    <Text style={styles.savetxt}>Save</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.imagepro}>
                <View style={{ flexDirection: "row" }}>
                    <View>
                        <Image  source={{ uri: galary.uri }} style={{ height: 100, width: 100, borderRadius: 100, borderWidth: 2, borderColor: "#33EDA8", }} />
                    </View>
                    <TouchableOpacity onPress={() => openGallery()} style={{ top: 65, left: 74, position: "absolute", }}>
                        <Image source={require('../assets/group.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <KeyboardAvoidingView>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        // Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={{ paddingBottom: 20, alignItems: "flex-end" }}>
                                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                    <Image source={require('../assets/close.png')} style={{ height: 20, width: 20 }} />
                                </TouchableOpacity>
                            </View>
                            <TextInput
                                style={styles.modalText}
                                value={txtValue}
                                onChangeText={handleChange}
                                keyboardType={typeOfKeyboard}
                            // secureTextEntry={visiblepassword}
                            >
                            </TextInput>
                            <TouchableOpacity
                                style={styles.buttonClose}
                                onPress={() => clickButton()}>
                                <Text style={styles.savetextStyle}>save data</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </KeyboardAvoidingView>
            {/* <View style={{ flex: 1, backgroundColor: "red", }}> */}
            <ScrollView>
                <View style={styles.userviewmain}>
                    <View style={styles.userviewsub}>
                        <TouchableOpacity onPress={() => onButtonAction('username')}>
                            <View style={styles.userchildview}>
                                <Text style={styles.usernametxt}>Username</Text>
                                <Text style={styles.stewtxt}>{submittedtext}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onButtonAction('name')}>
                            <View style={styles.nameview}>
                                <Text style={styles.usernametxt}>Name</Text>
                                <Text style={styles.stewtxt}>{submittedtextname}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onButtonAction('email')}>
                            <View style={styles.nameview}>
                                <Text style={styles.usernametxt}>Email</Text>
                                <Text style={styles.stewtxt}>{submittedtextemail}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onButtonAction('password')}>
                            <View style={styles.nameview}>
                                <Text style={styles.usernametxt}>Password</Text>
                                <Text style={styles.stewtxt}>{submittedtextpass}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onButtonAction('phone')}>
                            <View style={styles.nameview}>
                                <Text style={styles.usernametxt}>Phone</Text>
                                <Text style={styles.stewtxt}>{submittedtextphone}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => showActinSheet()}>
                            <View style={styles.nameview}>
                                <Text style={styles.usernametxt}>Location</Text>
                                <Text style={styles.stewtxt}>{selected}</Text>
                                {/* <Text style={styles.stewtxt}>{submittedtextlocation}</Text> */}
                            </View>
                        </TouchableOpacity>
                        <ActionSheet
                            ref={actionSheet}
                            title={'Which one do you like ?'}
                            options={optionArray}
                            cancelButtonIndex={3}
                            destructiveButtonIndex={buttonIndex}
                            // onPress={(index) => { alert(optionArray[index]) }}
                            onPress={handlepress}
                            
                        />
                        {/* {!datePicker && ( */}
                        <TouchableOpacity onPress={showDatePicker}>
                            <View style={styles.nameview}>
                                <Text style={styles.usernametxt}>Birthday</Text>
                                <Text style={styles.stewtxt}>{date.toDateString()}</Text>
                            </View>
                        </TouchableOpacity>
                        {/* )} */}
                        {datePicker && (
                            <DateTimePicker
                                value={date}
                                mode={'date'}
                                // is24Hour={true}
                                onChange={onDateSelected}
                            />
                        )}
                        <TouchableOpacity style={styles.nameview} onPress={() => setshouldshowgender(!shouldshowgender)}>
                            <Text style={styles.usernametxt}>Gender</Text>
                            <Text style={styles.stewtxt}>{selectedValuesave}</Text>
                        </TouchableOpacity>
                        {
                            shouldshowgender ? (
                                <View style={{ alignItems: "center", marginBottom: 20 }}>
                                    <Picker
                                        selectedValue={selectedValuesave}
                                        style={{ height: 50, alignSelf: 'center', opacity: 1, marginBottom: 30, width: 250 }}
                                        onValueChange={(itemValue, itemIndex) => setSelectedValuesave(itemValue)}
                                    >
                                        <Picker.Item label="Female" value="Female" />
                                        <Picker.Item label="Male" value="Male" />
                                    </Picker>
                                    <TouchableOpacity
                                        style={styles.buttonClose}
                                        onPress={() => Buttongender()}>
                                        <Text style={styles.savetextStyle}>Done</Text>
                                    </TouchableOpacity>
                                </View>
                            ) : null
                        }
                        <TouchableOpacity style={styles.nameviewwehe} onPress={() => setshouldshow(!shouldshow)}>
                            <View style={styles.namemainviewthree}>
                                <View>
                                    <Text style={styles.usernametxt}>Weight</Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={styles.stewtxt}>{submitkg}</Text>
                                    <Text style={styles.stewtxt}>{selectedItemweight}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.hidemainview}>
                            {
                                shouldshow ? (

                                    <View style={styles.lbkgview}>
                                        <TextInput
                                            style={styles.txt}
                                            keyboardType={"numeric"}
                                            placeholderTextColor="#0F0829"
                                            onChangeText={(text) => setsubmitkg(text)}
                                            defaultValue={submitkg}
                                        >
                                        </TextInput>
                                        <FlatList
                                            keyExtractor={(item) => item.id}
                                            data={weight}
                                            horizontal
                                            renderItem={({ item }) => (
                                                <TouchableOpacity onPress={() => setSelectedItemweight(item.name)} >
                                                    <Text style={item.name === selectedItemweight ? styles.texteasya : styles.texteasy}>{item.name}</Text>
                                                </TouchableOpacity>
                                            )}
                                        />
                                        <TouchableOpacity
                                            style={styles.buttonClose}
                                            onPress={() => Buttonweight()}>
                                            <Text style={styles.savetextStyle}>Done</Text>
                                        </TouchableOpacity>
                                    </View>
                                ) : null
                            }
                        </View>

                        <TouchableOpacity style={styles.nameviewwehe} onPress={() => setshouldshowmft(!shouldshowmft)}>
                            <View style={styles.namemainviewthree}>
                                <View>
                                    <Text style={styles.usernametxt}>Height</Text>
                                </View>
                                <View style={{ flexDirection: "row", }}>
                                    <Text style={styles.stewtxt}>{submitft}</Text>
                                    <Text style={styles.stewtxt}>{selectedItemheight}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.hidemainview}>
                            {
                                shouldshowmft ? (
                                    <View style={styles.lbkgview}>
                                        <TextInput
                                            style={styles.txt}
                                            keyboardType={"numeric"}
                                            // placeholder="5.5"
                                            placeholderTextColor="#0F0829"
                                            onChangeText={(text) => setsubmitft(text)}
                                            defaultValue={submitft}
                                        >
                                        </TextInput>
                                        <FlatList
                                            keyExtractor={(item) => item.id}
                                            data={height}
                                            horizontal
                                            renderItem={({ item }) => (
                                                <TouchableOpacity onPress={() => setSelectedItemheight(item.name)} >
                                                    <Text style={item.name === selectedItemheight ? styles.texteasya : styles.texteasy}>{item.name}</Text>
                                                </TouchableOpacity>
                                            )}
                                        />
                                        <TouchableOpacity
                                            style={styles.buttonClose}
                                            onPress={() => Buttonheight()}>
                                            <Text style={styles.savetextStyle}>Done</Text>
                                        </TouchableOpacity>
                                    </View>
                                ) : null
                            }
                        </View>
                        <View style={styles.nameview}>
                            <Text style={styles.usernametxt}></Text>
                            {/* <TextInput style={styles.stewtxt}> </TextInput> */}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>

        // </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "white"
        backgroundColor: "#0F0829"
    },
    subeditpro: {
        // backgroundColor: "yellow",
        flexDirection: "row",
        marginLeft: 20,
        marginTop: 17,
        marginBottom: 15,
        marginRight: 20,
        justifyContent: "space-between"
    },
    edittxt: {
        textTransform: "uppercase",
        fontSize: 16,
        color: "#FFFFFF"
    },
    savetxt: {
        color: "black",
        fontSize: 14,
        color: "#FFFFFF",
    },
    imagepro: {
        alignItems: "center",
        marginTop: 34,
        marginBottom: 19,
    },
    userviewmain: {
        backgroundColor: "white",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    userviewsub: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    userchildview: {
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    usernametxt: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#0F0829",
        alignItems: "center",
        paddingTop: 15,
        paddingBottom: 11,
    },
    stewtxt: {
        fontSize: 14,
        color: "#0F0829",
        paddingTop: 15,
        paddingBottom: 11,
    },
    nameview: {
        borderTopWidth: 1,
        borderColor: "#EDEDF0",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    nameviewwehe: {
        borderTopWidth: 1,
        borderColor: "#EDEDF0",
        flexDirection: "row",
    },
    namemainviewthree: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    hidemainview: {
        alignItems: "center"
    },
    txt: {
        borderWidth: 2,
        borderRadius: 7,
        paddingLeft: 50,
        paddingRight: 50,
        textAlign: "center"
    },
    lbkgview: {
        alignItems: "center",
        width: 150
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
        marginTop: 9,
        marginBottom: 20,
        marginLeft: 3,
        marginRight: 3,
    },
    texteasya: {
        backgroundColor: "#6E38F7",
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
        color: "#F2EDFF",
        marginTop: 9,
        marginBottom: 20,
        marginLeft: 3,
        marginRight: 3,
    },
    //=========modal
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
        padding: 25,
        width: '100%',
    },
    modalText: {
        textAlign: "center",
        borderWidth: 2,
        borderColor: "black",
        marginBottom: 15,
        borderRadius: 10,
    },
    buttonClose: {
        backgroundColor: "#33EDA8",
        borderRadius: 10,
    },
    savetextStyle: {
        textAlign: "center",
        padding: 15,
    },
});
export default Editprofile;