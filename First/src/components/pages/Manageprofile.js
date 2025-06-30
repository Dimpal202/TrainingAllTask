import React from 'react';
import { StyleSheet, Text, StatusBar, Button, SectionList,ScrollView, TouchableHighlight, View, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Manageprofile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.manageproview}>
                <View style={styles.managepro}>
                    <Icon name="angle-left" size={25} onPress={()=> navigation.navigate("Getstart")}/>
                    <Text style={styles.manageprotxt}>manage profile</Text>
                </View>
            </View>
            <ScrollView>
            <View style={styles.accountview}>
                <Text style={styles.accounttxt}>Account</Text>
            </View>
            <TouchableOpacity onPress={()=> navigation.navigate("Editprofile")}>
                <View style={styles.editprofilemainview}>
                        <Text style={styles.editprofilemaintxt}>Edit profile</Text>
                        <Icon name="angle-right" size={25} color="#0F0829" />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate("Createliveworkout")}>
                <View style={styles.editprofilemainview}>
                        <Text style={styles.editprofilemaintxt}>Workout Settings</Text>
                        <Icon name="angle-right" size={25} color="#0F0829"/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.editprofilemainview}>
                        <Text style={styles.editprofilemaintxt}>Sync health app</Text>
                        <Icon name="angle-right" size={25} color="#0F0829"/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.editprofilemainview}>
                        <Text style={styles.editprofilemaintxt}>Notifications</Text>
                        <Icon name="angle-right" size={25} color="#0F0829"/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.editprofilemainview}>
                        <Text style={styles.editprofilemaintxt}>My wallet</Text>
                        <Icon name="angle-right" size={25} color="#0F0829"/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.editprofilemainview}>
                        <Text style={styles.editprofilemaintxt}>Subscriptions</Text>
                        <Icon name="angle-right" size={25} color="#0F0829"/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.editprofilemainview}>
                        <Text style={styles.editprofilemaintxt}>Join premiumship</Text>
                        <Icon name="angle-right" size={25} color="#0F0829"/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.editprofilemainview}>
                        <Text style={styles.editprofilemaintxt}>Sign out</Text>
                        <Icon name="angle-right" size={25} color="#0F0829"/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.editprofilemainview}>
                        {/* <Text style={styles.editprofilemaintxt}>Sign out</Text>
                        <Icon name="angle-right" size={25} color="#0F0829"/> */}
                </View>
            </TouchableOpacity>

            {/* //============ */}


            <View style={styles.accountview}>
                <Text style={styles.accounttxt}>help</Text>
            </View>
            <TouchableOpacity>
                <View style={styles.editprofilemainview}>
                        <Text style={styles.editprofilemaintxt}>Support center</Text>
                        <Icon name="angle-right" size={25} color="#0F0829"/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.editprofilemainview}>
                        <Text style={styles.editprofilemaintxt}>Frequently asked questions</Text>
                        <Icon name="angle-right" size={25} color="#0F0829"/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.editprofilemainview}>
                        <Text style={styles.editprofilemaintxt}>Send feedback</Text>
                        <Icon name="angle-right" size={25} color="#0F0829"/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.editprofilemainview}>
                        {/* <Text style={styles.editprofilemaintxt}>Sign out</Text>
                        <Icon name="angle-right" size={25} color="#0F0829"/> */}
                </View>
            </TouchableOpacity> 

            {/* ///================= */}

            <View style={styles.accountview}>
                <Text style={styles.accounttxt}>legal</Text>
            </View>
            <TouchableOpacity>
                <View style={styles.editprofilemainview}>
                        <Text style={styles.editprofilemaintxt}>Terms and conditions</Text>
                        <Icon name="angle-right" size={25} color="#0F0829"/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.editprofilemainview}>
                        <Text style={styles.editprofilemaintxt}>Privacy and  policy</Text>
                        <Icon name="angle-right" size={25} color="#0F0829"/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.editprofilemainview}>
                        {/* <Text style={styles.editprofilemaintxt}>Sign out</Text>
                        <Icon name="angle-right" size={25} color="#0F0829"/> */}
                </View>
            </TouchableOpacity> 

            {/* //================ */}

            <View style={styles.accountview}>
                <Text style={styles.accounttxt}>danger zone</Text>
            </View>
            <TouchableOpacity>
                <View style={styles.editprofilemainview}>
                        <Text style={styles.editprofilemaintxt}>Delete account</Text>
                        <Icon name="angle-right" size={25} color="#0F0829"/>
                </View>
            </TouchableOpacity>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    managepro: {
        width: "65%",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 20,
    },
    manageproview: {
        backgroundColor: "#FFFFFF",
        justifyContent: "flex-start",
        paddingTop: 17,
        paddingBottom: 15,
        flexDirection: "row",
        width: "100%"
    },
    manageprotxt: {
        fontSize: 16,
        fontWeight: "bold",
        textTransform: "uppercase",
        color:"#0F0829"
    },
    accountview: {
        // backgroundColor: "gray",
        paddingTop: 16,
        paddingLeft: 20,
        paddingBottom: 10

    },
    accounttxt: {
        fontSize: 14,
        textTransform: "uppercase",
        color:"#0F0829"
    },
    editprofilemainview: {
        flexDirection: "row",
        // backgroundColor: "yellow",
        paddingTop: 16,
        paddingBottom: 11,
        marginLeft: 20,
        marginRight: 20,
        borderTopWidth: 1,
        borderColor: "#EDEDF0",
        justifyContent:"space-between"
    },
    editprofilemaintxt:{
        fontWeight:"bold",
        color:"#0F0829"
    }
    

});

export default Manageprofile;