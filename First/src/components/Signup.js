import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, ToastAndroid, ScrollView, TouchableOpacity, TextInput, View, Image, KeyboardAvoidingView } from "react-native";

const Signup = ({ navigation }) => {
    const [yourname, setYourname] = useState('');
    const [youremail, setYouremail] = useState('');
    const [youreusername, setYourusername] = useState('');
    const [yourepassword, setYourepassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const [visiblepassword, setVisiblepassword] = useState(true);
    const [visibleconfirm, setVisiblecinfirm] = useState(true);


    const signupfun = () => {
        const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
        if (yourname.length == 0) {
            ToastAndroid.show('Please enter your name',
                ToastAndroid.LONG,
            )
        }
        else if (youremail.length == 0) {
            ToastAndroid.show('Please enter your email',
                ToastAndroid.LONG,
            )
        }
        else if (youreusername.length == 0) {
            ToastAndroid.show('Please enter your username',
                ToastAndroid.LONG,
            )
        }
        else if (yourepassword.length == 0) {
            ToastAndroid.show('Please enter your password ',
                ToastAndroid.LONG,
            )
        }
        else if (confirm.length == 0) {
            ToastAndroid.show('Please enter your confirm password ',
                ToastAndroid.LONG,
            )
        }
        else if (strongRegex.test(youremail) === false) {
            ToastAndroid.show('Please enter valid email',
                ToastAndroid.LONG,
            )
        }
        else if (yourepassword.length < 8 || yourepassword.length > 16) {
            ToastAndroid.show('The Password must be 8 to 16 characters',
                ToastAndroid.LONG,
            )
        }
        else if (yourepassword !== confirm) {
            ToastAndroid.show('Passwoad and confirm password should be same.',
                ToastAndroid.LONG,
            )
        } else {
            // navigation.navigate("Setup")
            navigation.navigate("Pickerimg")
        }
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView >
                <ScrollView>
                    <View style={styles.signview}>
                        <Text style={styles.signuptext}>SIGN UP</Text>
                    </View>
                    <View>
                        <TextInput
                            style={styles.wname}
                            placeholder="What's your name?"
                            onChangeText={(yourname) => setYourname(yourname)}
                        />
                    </View>
                    <View>
                        <TextInput
                            style={styles.wname}
                            placeholder="Email"
                            keyboardType='email-address'
                            autoCapitalize='none'
                            onChangeText={(youremail) => setYouremail(youremail)}
                        />
                    </View>
                    <View>
                        <TextInput
                            style={styles.wname}
                            placeholder="Username"
                            onChangeText={(youreusername) => setYourusername(youreusername)}
                        />
                    </View>
                    <View style={styles.user1}>
                        <View>
                            <TextInput style={styles.pass}
                                secureTextEntry={visiblepassword}
                                autoCapitalize='none'
                                placeholder="Password"
                                onChangeText={(yourepassword) => setYourepassword(yourepassword)} />
                        </View>
                         <View style={styles.usereye} >
                            <TouchableOpacity onPress={() => { setVisiblepassword(!visiblepassword) }}>
                                <Image source={(visiblepassword) ? require('../assets/iconeye.png') : require('../assets/visible.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.user1}>
                        <View>
                            <TextInput style={styles.pass}
                                secureTextEntry={visibleconfirm}
                                autoCapitalize='none'
                                placeholder="Confirm"
                                onChangeText={(confirm) => setConfirm(confirm)} />
                        </View>
                        <View style={styles.usereye} >
                            <TouchableOpacity onPress={() => { setVisiblecinfirm(!visibleconfirm) }}>
                                <Image source={(visibleconfirm) ? require('../assets/iconeye.png') : require('../assets/visible.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <TouchableHighlight onPress={() => { signupfun() }} >
                            {/* onPress={() => navigation.navigate("Setup")} */}
                            <View style={styles.signup}>
                                <Text style={styles.textsign}>Sign Up</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.orcontinue}>
                        <Text style={styles.ortext}>--------------- OR CONTINUE WITH -----------------</Text>
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
                    <View style={styles.loginview}>
                        <View>
                            <Text style={styles.already}>Already have an account?</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate("Login")}><Text style={styles.login} > Login</Text></TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0F0829"
    },
    signview: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 67,
        marginBottom: 59
    },
    signuptext: {
        color: "white",
        fontSize: 32,
        fontFamily: "HalvarStnclBreit-MdMaxG"
    },
    wname: {
        backgroundColor: "#FFFFFF",
        marginLeft: 18,
        marginRight: 17,
        borderRadius: 7,
        marginBottom: 15,
        paddingLeft: 13,
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
    name2: {
        backgroundColor: "#FFFFFF",
        width: "11%",
        height: "76%",
        borderBottomRightRadius: 7,
        borderTopRightRadius: 7,
        justifyContent: "center"
    },
    password: {
        flex: 1,
        flexDirection: "row",
        width: "100%",
        marginRight: 17,
    },
    signup: {
        backgroundColor: "#33EDA8",
        borderRadius: 7,
        padding: 16,
        marginLeft: 18,
        marginRight: 17,
        justifyContent: "center",
        alignItems: "center"
    },
    textsign: {
        fontSize: 16
    },
    ortext: {
        color: "white",
        marginTop: 40,
        fontSize: 16,
    },
    orcontinue: {
        justifyContent: "center",
        alignItems: "center"
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
    already: {
        color: "#FFFFFF",
        fontSize: 16,
    },
    login: {
        color: "#33EDA8",
        fontSize: 16,
    },
    loginview: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 28,
        marginBottom: 23,
        flexDirection: "row"
    }
});
export default Signup;