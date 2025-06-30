import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, TouchableHighlight, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput, KeyboardAvoidingView, Alert } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        getData();
    }, [])
    const getData = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value !== null) {
                        let user = JSON.parse(value);
                        setEmail(user.Emailid);
                        setPassword(user.UserPassword);
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }
    
    // const updateData = async () => {
    //     try {
    //         var user={
    //             Emailid:email
    //         }
    //         await AsyncStorage.mergeItem('UserData',JSON.stringify(user));
    //         Alert.alert('success!','your data has been updated.')
    //         // navigation.navigate("Login")
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }

    // }
    // const removeData = async () => {
    //     try {
    //         await AsyncStorage.removeItem('UserData');
    //         navigation.navigate("Login")
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // }
    return (
        <View style={styles.container}>
            <Text>welcome:{email}</Text>
            <Text>welcome:{password}</Text>
            {/* <Text>welcome:{email}</Text>
            <Text>welcome:{password}</Text>
            <TextInput
                            style={styles.user}
                            placeholder="Username or Email"
                            keyboardType='email-address'
                            autoCapitalize='none'
                            // value={email}
                            onChangeText={(email) => setEmail(email)}
                        // onBlur={()=>{validateemail}}
                        />
                        <View style={{margin:20}}>
                        <TouchableHighlight onPress={updateData} >
                                <View style={styles.live}>
                                    <Text style={styles.textlive}>Update</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={{margin:20}}>
                        <TouchableHighlight onPress={removeData} >
                                <View style={styles.live}>
                                    <Text style={styles.textlive}>Remove</Text>
                                </View>
                            </TouchableHighlight>
                        </View> */}
            
            <View style={styles.headerprofile}>
                <View style={styles.imgview}>
                    <Image source={require('../../assets/platform.png')} />
                </View>
                <View style={styles.imageuserview}>
                    <Image style={styles.imageprofile} source={require('../../assets/user.jpeg')} />
                </View>
            </View>
            <ScrollView>
                <View style={styles.viewprogress}>
                    <Text style={styles.textmyprogress}>My progress</Text>
                </View>
                <View style={styles.imagetwo}>
                    <View style={styles.workview}>
                        <View>
                            <Image source={require('../../assets/work.png')} style={{ resizeMode: 'stretch', width: 185, height: 100 }} />
                        </View>
                        <View style={styles.workout}>
                            <Image source={require('../../assets/workout.png')} />
                        </View>
                    </View>
                    <View style={styles.savedView}>
                        <View>
                            <Image source={require('../../assets/saved.png')} style={{ resizeMode: 'stretch', width: 185, height: 100 }} />
                        </View>
                        <View style={styles.save}>
                            <Image source={require('../../assets/save.png')} />
                        </View>
                    </View>
                </View>
                <View style={styles.recommendedview}>
                    <View style={styles.recjust}>
                        <Text style={styles.just}>Recommended just for you</Text>
                    </View>
                    <View style={styles.imgicon}>
                        <Image source={require('../../assets/icon.png')} />
                    </View>
                </View>
                <View style={styles.upmainview}>
                    <View style={styles.upview}>
                        <Text style={styles.upfont}>UPCOMING</Text>
                    </View>
                    <View style={styles.errowview}>
                        <Image source={require('../../assets/backerrow.png')} />
                    </View>
                </View>
                <ScrollView horizontal={true}>
                    <View >
                        <View style={styles.mask}>
                            <Image source={require('../../assets/Mask.png')} />
                        </View>
                        <View style={styles.maskbtn}>
                            <TouchableHighlight >
                                <View style={styles.live}>
                                    <Text style={styles.textlive}>Live</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.icona}>
                            <Image source={require('../../assets/icona.png')} />
                        </View>
                        <View style={styles.workoutname}>
                            <Text style={styles.worktxt}>WORKOUT NAME</Text>
                        </View>
                        <View style={styles.coachname}>
                            <Image source={require('../../assets/coach.png')} />
                        </View>
                    </View>
                    <View >
                        <View style={styles.mask1}>
                            <Image source={require('../../assets/Mask.png')} />
                        </View>
                        <View style={styles.maskbtn2}>
                            <TouchableHighlight >
                                <View style={styles.live}>
                                    <Text style={styles.textlive}>Live</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.iconaa}>
                            <Image source={require('../../assets/icona.png')} />
                        </View>
                        <View style={styles.workoutname1}>
                            <Text style={styles.worktxt}>WORKOUT NAME</Text>
                        </View>
                        <View style={styles.coachname1}>
                            <Image source={require('../../assets/coach.png')} />
                        </View>

                        <View style={styles.footer}>
                            <View style={styles.footerimg}>
                                <Image source={require('../../assets/Rectangle.png')} />
                            </View>
                            <View style={styles.startingview}>
                                <Text style={styles.starting}>starting in</Text>
                                <Text style={styles.starting}>05:58</Text>
                            </View>
                            <View style={styles.Scheduleview}>
                                <TouchableHighlight style={styles.Scheduletouch}>
                                    <View>
                                        <Text style={styles.Schedule}>Schedule</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                    <View >
                        <View style={styles.mask}>
                            <Image source={require('../../assets/Mask.png')} />
                        </View>
                        <View style={styles.maskbtn}>
                            <TouchableHighlight >
                                <View style={styles.live}>
                                    <Text style={styles.textlive}>Live</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.icona}>
                            <Image source={require('../../assets/icona.png')} />
                        </View>
                        <View style={styles.workoutname}>
                            <Text style={styles.worktxt}>WORKOUT NAME</Text>
                        </View>
                        <View style={styles.coachname}>
                            <Image source={require('../../assets/coach.png')} />
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.upmainview}>
                    <View style={styles.upview}>
                        <Text style={styles.upfont}>SERIES</Text>
                    </View>
                    <View style={styles.errowview}>
                        <Image source={require('../../assets/backerrow.png')} />
                    </View>
                </View>

                <ScrollView horizontal={true}>
                    <View>
                        <View style={styles.mask}>
                            <Image source={require('../../assets/maskgroupa.png')}
                                style={styles.imgmskgroup} />
                        </View>
                        <View style={styles.maskbtn}>
                            <TouchableHighlight >
                                <View >
                                    <Text style={styles.textlive}>Series</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.icona}>
                            <Image source={require('../../assets/icona.png')} />
                        </View>
                        <View style={styles.workoutname}>
                            <Text style={styles.worktxt}>WORKOUT NAME</Text>
                        </View>
                        <View style={styles.coachname}>
                            <Image source={require('../../assets/coach.png')} />
                        </View>
                    </View>
                    <View>
                        <View style={styles.mask1}>
                            <Image source={require('../../assets/maskgroupa.png')}
                                style={styles.imgmskgroup} />
                        </View>
                        <View style={styles.maskbtn2}>
                            <TouchableHighlight >
                                <View>
                                    <Text style={styles.textlive}>Series</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.iconaa}>
                            <Image source={require('../../assets/icona.png')} />
                        </View>
                        <View style={styles.workoutname1}>
                            <Text style={styles.worktxt}>WORKOUT NAME</Text>
                        </View>
                        <View style={styles.coachname1}>
                            <Image source={require('../../assets/coach.png')} />
                        </View>


                        <View style={styles.footer}>
                            <View style={styles.footerimg1}>
                                <Image source={require('../../assets/Rectangle.png')} />
                            </View>
                            <View style={styles.startingview1}>
                                <Image source={require('../../assets/c.png')} style={styles.cimg} />
                                <Text style={styles.starting1}>350</Text>
                            </View>
                            <View style={styles.Scheduleview}>
                                <TouchableHighlight style={styles.Scheduletouch}>
                                    <View>
                                        <Text style={styles.Schedule}>Purchase</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>

                    <View >
                        <View style={styles.mask}>
                            <Image source={require('../../assets/maskgroupa.png')}
                                style={styles.imgmskgroup} />
                        </View>
                        <View style={styles.maskbtn}>
                            <TouchableHighlight >
                                <View>
                                    <Text style={styles.textlive}>Series</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.icona}>
                            <Image source={require('../../assets/icona.png')} />
                        </View>
                        <View style={styles.workoutname}>
                            <Text style={styles.worktxt}>WORKOUT NAME</Text>
                        </View>
                        <View style={styles.coachname}>
                            <Image source={require('../../assets/coach.png')} />
                        </View>
                    </View>
                </ScrollView>
                {/* 7688888888880=---------------------------------------------------------------------- */}
                {/* ============================================================ */}
                <View style={styles.upmainview}>
                    <View style={styles.upview}>
                        <Text style={styles.upfont}>BOOTY BURN</Text>
                    </View>
                    <View style={styles.errowview}>
                        <Image source={require('../../assets/backerrow.png')} />
                    </View>
                </View>
                <ScrollView horizontal={true}>
                    <View >
                        <View style={styles.mask}>
                            <Image source={require('../../assets/maskg.png')} />
                        </View>
                        <View style={styles.maskbtn}>
                            <TouchableHighlight >
                                <View style={styles.ondemand}>
                                    <Text style={styles.textlive1}>On Demand</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.icona}>
                            <Image source={require('../../assets/icona.png')} />
                        </View>
                        <View style={styles.workoutname}>
                            <Text style={styles.worktxt}>WORKOUT NAME</Text>
                        </View>
                        <View style={styles.coachname}>
                            <Image source={require('../../assets/coach.png')} />
                        </View>
                    </View>
                    <View >
                        <View style={styles.mask1}>
                            <Image source={require('../../assets/maskg.png')} />
                        </View>
                        <View style={styles.maskbtn2}>
                            <TouchableHighlight >
                                <View style={styles.ondemand}>
                                    <Text style={styles.textlive1}>On Demand</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.iconaa}>
                            <Image source={require('../../assets/icona.png')} />
                        </View>
                        <View style={styles.workoutname1}>
                            <Text style={styles.worktxt}>WORKOUT NAME</Text>
                        </View>
                        <View style={styles.coachname1}>
                            <Image source={require('../../assets/coach.png')} />
                        </View>

                        <View style={styles.footer}>
                            <View style={styles.footerimg}>
                                <Image source={require('../../assets/Rectangle.png')} />
                            </View>
                            <View style={styles.startingview2}>
                                <Image source={require('../../assets/premiuma.png')} />
                            </View>
                            <View style={styles.Scheduleview1}>
                                <TouchableHighlight style={styles.Scheduletouch}>
                                    <View>
                                        <Text style={styles.Schedule}>Start</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View>

                    </View>
                    <View >
                        <View style={styles.mask}>
                            <Image source={require('../../assets/maskg.png')} />
                        </View>
                        <View style={styles.maskbtn}>
                            <TouchableHighlight >
                                <View style={styles.ondemand}>
                                    <Text style={styles.textlive1}>On Demand</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.icona}>
                            <Image source={require('../../assets/icona.png')} />
                        </View>
                        <View style={styles.workoutname}>
                            <Text style={styles.worktxt}>WORKOUT NAME</Text>
                        </View>
                        <View style={styles.coachname}>
                            <Image source={require('../../assets/coach.png')} />
                        </View>
                    </View>
                </ScrollView>
                {/* -------------------------------------------------------------------------- */}
                <View style={styles.upmainview}>
                    <View style={styles.upview}>
                        <Text style={styles.upfont}>YOGA</Text>
                    </View>
                    <View style={styles.errowview}>
                        <Image source={require('../../assets/backerrow.png')} />
                    </View>
                </View>
                <ScrollView horizontal={true}>
                    <View >
                        <View style={styles.mask}>
                            <Image source={require('../../assets/maskg.png')} />
                        </View>
                        <View style={styles.maskbtn}>
                            <TouchableHighlight >
                                <View style={styles.ondemand}>
                                    <Text style={styles.textlive1}>On Demand</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.icona}>
                            <Image source={require('../../assets/icona.png')} />
                        </View>
                        <View style={styles.workoutname}>
                            <Text style={styles.worktxt}>WORKOUT NAME</Text>
                        </View>
                        <View style={styles.coachname}>
                            <Image source={require('../../assets/coach.png')} />
                        </View>
                    </View>
                    <View >
                        <View style={styles.mask1}>
                            <Image source={require('../../assets/maskg.png')} />
                        </View>
                        <View style={styles.maskbtn2}>
                            <TouchableHighlight >
                                <View style={styles.ondemand}>
                                    <Text style={styles.textlive1}>On Demand</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.iconaa}>
                            <Image source={require('../../assets/icona.png')} />
                        </View>
                        <View style={styles.workoutname1}>
                            <Text style={styles.worktxt}>WORKOUT NAME</Text>
                        </View>
                        <View style={styles.coachname1}>
                            <Image source={require('../../assets/coach.png')} />
                        </View>

                        <View style={styles.footer}>
                            <View style={styles.footerimg}>
                                <Image source={require('../../assets/Rectangle.png')} />
                            </View>
                            <View style={styles.startingview2}>
                                <Image source={require('../../assets/premiuma.png')} />
                            </View>
                            <View style={styles.Scheduleview1}>
                                <TouchableHighlight style={styles.Scheduletouch}>
                                    <View>
                                        <Text style={styles.Schedule}>Start</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View>

                    </View>
                    <View >
                        <View style={styles.mask}>
                            <Image source={require('../../assets/maskg.png')} />
                        </View>
                        <View style={styles.maskbtn}>
                            <TouchableHighlight >
                                <View style={styles.ondemand}>
                                    <Text style={styles.textlive1}>On Demand</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.icona}>
                            <Image source={require('../../assets/icona.png')} />
                        </View>
                        <View style={styles.workoutname}>
                            <Text style={styles.worktxt}>WORKOUT NAME</Text>
                        </View>
                        <View style={styles.coachname}>
                            <Image source={require('../../assets/coach.png')} />
                        </View>
                    </View>
                </ScrollView>
            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F2F2"
    },
    headerprofile: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 10,
        backgroundColor: "#FFFFFF"
    },
    imgview: {
        marginLeft: 17,
        marginTop: 12,
    },
    imageuserview: {
        marginRight: 17,
        marginTop: 10,
    },
    imageprofile: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    viewprogress: {
        marginLeft: 19,
        marginBottom: 9,
    },
    textmyprogress: {
        fontSize: 14,
    },
    imagetwo: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    workview: {
        marginLeft: 16,
    },
    workout: {
        position: "absolute",
        left: 35,
        top: 25,
    },
    savedView: {
        marginRight: 19,
    },
    save: {
        position: "absolute",
        left: 40,
        top: 25,
    },
    recommendedview: {
        flexDirection: "row",
    },
    recjust: {
        marginTop: 15,
        marginLeft: 20,
    },
    just: {
        fontSize: 14
    },
    imgicon: {
        marginLeft: 17,
        marginTop: 17
    },
    upmainview: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    upview: {
        marginLeft: 20,
    },
    upfont: {
        fontSize: 38,
    },
    errowview: {
        marginRight: 10,
        justifyContent: "center"
    },

    mask: {
        marginTop: 50,
        marginRight: 10,
    },
    imgmskgroup: {
        height: 220,

    },
    maskbtn: {
        position: "absolute",
        top: 60,
        left: 10
    },
    ondemand: {
        backgroundColor: "#33EDA8",
        borderRadius: 3,
    },
    icona: {
        position: "absolute",
        top: 60,
        right: 21
    },
    iconaa: {
        position: "absolute",
        top: 10,
        right: 21
    },
    live: {
        backgroundColor: "#6E38F7",

    },
    textlive: {
        fontSize: 12,
        color: "#FFFFFF",
        paddingTop: 5,
        paddingLeft: 7,
        paddingRight: 8,
        paddingBottom: 3,
    },
    textlive1: {
        fontSize: 12,
        paddingTop: 5,
        paddingLeft: 7,
        paddingRight: 8,
        paddingBottom: 3,
    },
    workoutname: {
        position: "absolute",
        top: 202,
        left: 80
    },
    worktxt: {
        fontSize: 18,
        color: "#FFFFFF"
    },
    coachname: {
        position: "absolute",
        top: 233,
        left: 105
    },
    mask1: {
        marginTop: 1,
        marginRight: 10,
    },
    footerimg: {
        marginRight: 10,
    },
    footerimg1: {
        marginRight: 10,
        borderTopWidth: 1,
        borderColor: "gray"
    },
    maskbtn2: {
        position: "absolute",
        top: 10,
        left: 10
    },
    workoutname1: {
        position: "absolute",
        top: 152,
        left: 80
    },
    coachname1: {
        position: "absolute",
        top: 183,
        left: 105
    },
    startingview: {
        position: "absolute",
        left: 10,
        top: 9,
        bottom: 8,

    },
    startingview1: {
        position: "absolute",
        left: 10,
        top: 15,
        bottom: 15,
        flexDirection: "row",
    },
    startingview2: {
        position: "absolute",
        left: 21,
        top: 15,
        bottom: 15,

    },
    starting: {
        color: "#FFFFFF",
        fontSize: 12,
    },
    starting1: {
        color: "#FFFFFF",
        fontSize: 16,
    },
    cimg: {
        marginRight: 5,
    },
    footer: {
        flexDirection: "row"
    },
    Scheduleview: {
        position: "absolute",
        top: 8,
        left: 255,
        bottom: 7,
        right: 21

    },
    Scheduleview1: {
        position: "absolute",
        top: 8,
        left: 280,
        bottom: 7,
        right: 21

    },
    Scheduletouch: {
        backgroundColor: "#33EDA8",
        paddingTop: 9,
        paddingBottom: 9,
        paddingLeft: 6,
        paddingRight: 6,
        borderRadius: 7,
    },
    Schedule: {
        color: '#0F0829',
        fontSize: 14,
    },
    user: {
        backgroundColor: "#FFFFFF",
        borderRadius: 7,
        marginLeft: 18,
        marginRight: 17,
        paddingLeft: 13,
    },

});

export default Home;