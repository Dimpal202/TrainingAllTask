import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, ActivityIndicator, Button, TouchableHighlight, View, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Callout, Circle, Marker } from 'react-native-maps';
//https://developerplus.com.br/como-usar-a-geolocalizacao-no-react-native/
//https://www.youtube.com/watch?v=kPD08dyP_rQ
import Geolocation from '@react-native-community/geolocation'

const Geolocationex = () => {
    const [info, setinfo] = useState(0)
    const [longi,setlongi]=useState(0)
    Geolocation.getCurrentPosition(data => {
        setinfo(data.coords.latitude)
        setlongi(data.coords.longitude)
    })
    // console.warn("Geolocation")
    return (
        <View>
            <Text style={{fontSize:20,fontWeight:"bold"}}>Latitude:{info}</Text>
            <Text style={{fontSize:20,fontWeight:"bold"}}>Longitude:{longi}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"

    },
});
export default Geolocationex;