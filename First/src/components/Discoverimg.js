import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Dimensions, ScrollView, Text, Button, TouchableHighlight, View, Image, ImageBackground, ImageStore } from "react-native";

//https://stackoverflow.com/questions/60696659/flatlist-image-source-in-react-native
//https://blog.logrocket.com/implement-react-native-snap-carousel/ 

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')
const Discoverimg = ({ navigation }) => {
    const [active, notactive] = useState(0);

    const [images, img] = useState([
        { src: require('../assets/first.png'), },
        { src: require('../assets/sport.png'), },
        { src: require('../assets/saved.png'), }
        // 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg',
        // 'https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=',
        // 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
        //source={{ uri: image }}
    ]);
    const onchange = (nativeEvent) => {
        if (nativeEvent) {
            const slid = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slid != active) {
                notactive(slid);
            }
        }
    }
    return (
        <View>
            <ScrollView
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                horizontal
                onScroll={({ nativeEvent }) => onchange(nativeEvent)}
            >
                <ImageBackground
                    // key={image} 
                    source={require('../assets/first.png')}
                    style={styles.imagea}>
                    <View style={{ marginLeft: 20, marginRight: 20, alignItems: "center", marginTop: "90%", }}>
                        <Text style={styles.textdiscover}>Discover amazing coaches and brand</Text>
                        <Text style={styles.textdiscover}>new workouts</Text>
                    </View>
                </ImageBackground>
                <ImageBackground
                    // key={image} 
                    source={require('../assets/sport.png')}
                    style={styles.imagea}>
                    <View style={{alignItems:"center",marginTop:"140%"}}>
                        <Text style={styles.textbook}>Book extra classes</Text>
                        <Text style={styles.textbook}>with fitcoin</Text>
                    </View>
                </ImageBackground>
                <ImageBackground
                    // key={image} 
                    source={require('../assets/saved.png')}
                    style={styles.imagea}>
                    <View style={{ marginLeft: 20, marginRight: 20, alignItems: "center", marginTop: "80%", justifyContent: "center" }}>
                        <Text style={styles.text}>find something that</Text>
                        <Text style={styles.text}>clicks for you</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate("TabNavigation")}style={styles.button}>
                            <Text style={styles.nexttxt}>Let's go</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                {/* {
                    images.map((image, index) => (
                        <ImageBackground
                            // key={image} 
                            source={image.src}
                            style={styles.imagea}>
                            <View style={{ marginLeft: 20, marginRight: 20, alignItems: "center", marginTop: 460, marginBottom: 230, }}>
                                <Text style={styles.text}>find something that</Text>
                                <Text style={styles.text}>clicks for you</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate("TabNavigation")}>
                                <View style={styles.button}>
                                    <Text style={styles.nexttxt}>Let's go</Text>
                                </View>
                            </TouchableOpacity>
                        </ImageBackground>
                    ))
                } */}
            </ScrollView>
            <View style={styles.paging} >
                {
                    images.map((i, k) => (
                        <Text key={k}
                            style={k == active ? styles.pagingActivetxt : styles.pagingtxt}>
                        </Text>
                    ))
                }
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    imagea: {
        width: screenWidth,
        height: screenHeight,
    },
    paging: {
        flexDirection: "row",
        position: "absolute",
        bottom: 200,
        alignSelf: "center",
    },
    pagingtxt: {
        // marginTop:56,
        marginLeft: 14,
        height: 20,
        width: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#32ECAA",
        backgroundColor: "#E1FDF4",
    },
    pagingActivetxt: {
        marginLeft: 14,
        height: 20,
        width: 20,
        borderRadius: 20,
        backgroundColor: "#32ECAA",
    },
    textdiscover: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 20,
        alignItems: "center",
    },
    textbook: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 24,
        alignItems: "center",
        textTransform:'uppercase',
    },
    text: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 24,
        alignItems: "center",
        textTransform: 'uppercase',
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#33EDA8",
        marginTop:"55%",
        marginLeft:18,
        marginRight:17,
        paddingTop: 16,
        paddingBottom: 16,
        borderRadius: 7,
        position:"relative",
    },
    nexttxt: {
        fontSize: 16,
        color: "#0F0829",
        alignItems: "center",
        textAlign: "center",
    },
});
export default Discoverimg;