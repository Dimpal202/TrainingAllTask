import React, { useState,useEffect } from "react";
import { View, Text, TouchableHighlight, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput, KeyboardAvoidingView, ToastAndroid } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useSelectore, useDispatch} from 'react-redux';
// import { setName,setPassword } from "../redux/actions";

const Login = ({ navigation }) => {

    // const {email, password} = useSelectore(state=>state.useReducer);
    //  const dispatch=useDispatch();  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [visiblepassword, setVisiblepassword] = useState(true);
    // const [submitted, SetSubmitted] = useState(false);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value !== null) {
                        navigation.navigate('TabNavigation')
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }
    const loginfun = async () => {
        const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
        if (email.length == 0) {
            ToastAndroid.show('Please enter email',
                ToastAndroid.LONG,
            )
        } else if (password.length == 0) {
            ToastAndroid.show('Please enter password',
                ToastAndroid.LONG,
            )
        } else if (strongRegex.test(email) === false) {
            ToastAndroid.show('Please enter valid email',
                ToastAndroid.LONG,
            )
        } else if (password.length < 8 || password.length > 16) {
            ToastAndroid.show('The Password must be 8 to 16 characters',
                ToastAndroid.LONG,
            )
        } else {
            // SetSubmitted(!submitted);
            try {
                var user = {
                    Emailid:email,
                    UserPassword:password
                }
                await AsyncStorage.setItem('UserData', JSON.stringify(user));
                navigation.navigate("TabNavigation")
            }
            catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <ScrollView>
                    <View style={styles.welcome}>
                        <Text style={styles.welcomeback}>WELCOME BACK</Text>
                    </View>
                    <View style={styles.userview}>
                        <TextInput
                            style={styles.user}
                            placeholder="Username or Email"
                            keyboardType='email-address'
                            autoCapitalize='none'
                            // value={email}
                            onChangeText={(email) => setEmail(email)}
                        // onBlur={()=>{validateemail}}
                        />
                    </View>
                    <View style={styles.user1}>
                        <View>
                            <TextInput style={styles.pass}
                                secureTextEntry={visiblepassword}
                                autoCapitalize='none'
                                placeholder="Password"
                                //  value={password}
                                onChangeText={(password) => setPassword(password)}
                            />
                        </View>
                        <View style={styles.usereye} >
                            <TouchableOpacity onPress={() => { setVisiblepassword(!visiblepassword) }}>
                                <Image source={(visiblepassword) ? require('../assets/iconeye.png') : require('../assets/visible.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.letsbutton}>
                        <TouchableHighlight onPress={() => { loginfun() }}>
                            <View style={styles.button}>
                                <Text style={styles.textstarted}>Log in</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
                            <View style={styles.forgot}>
                                <Text style={styles.forgottext}>Forgot your password?</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={styles.or}>
                            <Text style={styles.orcontinue}>-------------- OR CONTINUE WITH -------------</Text>
                        </View>
                        <View style={styles.imageall}>
                            <View style={styles.appleborder}>
                                <Image source={require('../assets/apple.png')} style={styles.apple} />
                            </View>
                            <View style={styles.facebookborder}>
                                <Image source={require('../assets/facebook.png')} style={styles.apple} />
                            </View>
                            <View style={styles.googleborder}>
                                <Image source={require('../assets/google.png')} style={styles.apple} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.accountdont}>
                        <View>
                            <Text style={styles.donthaveacount}>Don't have an account?</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate("Signup")}><Text style={styles.signup}>Signup</Text></TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0F0829"
    },
    welcome: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 67,
        marginBottom: 59
    },
    welcomeback: {
        fontSize: 32,
        color: "white",
        fontFamily: "HalvarStnclBreit-MdMaxG"
    },
    userview: {
        marginBottom: 16
    },
    user: {
        backgroundColor: "#FFFFFF",
        borderRadius: 7,
        marginLeft: 18,
        marginRight: 17,
        paddingLeft: 13,
    },
    eye: {
        justifyContent: "center",
        marginRight: 14,
    },
    user1: {
        backgroundColor: "#FFFFFF",
        borderRadius: 7,
        marginLeft: 18,
        marginRight: 17,
        paddingLeft: 13,
        marginBottom: 16,
        flexDirection: "row",
        borderWidth: 1,
    },
    pass: {
        width: 313
    },
    usereye: {
        justifyContent: "center",
    },
    letsbutton: {
        marginLeft: 18,
        marginRight: 17,
        marginBottom: 22,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#33EDA8",
        paddingTop: 16,
        paddingBottom: 18,
        borderRadius: 7,
    },
    forgot: {
        justifyContent: "center",
        alignItems: "center"
    },
    forgottext: {
        color: "white"
    },
    or: {
        alignItems: "center",
        marginTop: 60,
    },
    orcontinue: {
        color: "#EEEDF0",
        fontSize: 16
    },
    imageall: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 16,
        marginRight: 50,
        marginLeft: 50,
    },
    appleborder: {
        borderWidth: 1,
        padding: 15,
        borderColor: "#FFFFFF"
    },
    facebookborder: {
        borderWidth: 1,
        padding: 15,
        borderColor: "#6E38F7"
    },
    googleborder: {
        borderWidth: 1,
        padding: 15,
        borderColor: "#33EDA8",
    },
    apple: {
        height: 20,
        width: 20,
    },
    accountdont: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 94,
        marginBottom: 23,
        flexDirection: "row"
    },
    donthaveacount: {
        color: "white",
        fontSize: 15
    },
    signup: {
        fontSize: 15,
        color: "#33EDA8"
    }
});

export default Login;