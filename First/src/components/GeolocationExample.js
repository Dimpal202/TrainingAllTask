import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, ActivityIndicator, Button, TouchableHighlight, View, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Callout, Circle, Marker } from 'react-native-maps';
//https://developerplus.com.br/como-usar-a-geolocalizacao-no-react-native/

const initialState = {
    latitude: null,
    longitude: null,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
}
const GeolocationExample = () => {
    const [currentposition, setcurrentposition] = useState(initialState);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) =>{
            alert(JSON.stringify(position))
        },
            error => alert(error.message),
            { timeout: 20000, maximumAge: 1000 }
        )
        setcurrentposition({
            ...currentposition,
            latitude: 23.0225,
            longitude: 72.5714,
        })
    }, [])
    return currentposition.latitude ? (
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.container}
                // showsUserLocation
                initialRegion={currentposition}
            />
    ) : <ActivityIndicator style={{ flex: 1 }} animating size="large"></ActivityIndicator>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"

    },
});
export default GeolocationExample;