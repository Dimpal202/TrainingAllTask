import React, { useState } from 'react';
import { StyleSheet, Text, Button, TouchableHighlight, View, Image } from "react-native";
import MapView, { Callout, Circle, Marker } from 'react-native-maps';


const Maps = ({ navigation }) => {
    const [pin, setPin] = useState({ latitude: 23.0225, longitude: 72.5714 })
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 23.0225,
                    longitude: 72.5714,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                provider="google">
                <Marker
                    coordinate={pin}
                    pinColor="blak"
                    draggable={true}
                    onDragStart={(e) => {
                        console.log("drag start", e.nativeEvent.coordinate)
                    }}
                    onDragEnd={(e) => {
                        setPin({
                            latitude: e.nativeEvent.coordinate.latitude,
                            longitude: e.nativeEvent.coordinate.longitude
                        })
                    }}>
                    <Image source={require('../assets/pin.png')} style={{height: 40, width:40 }} />
                    <Callout>
                        <Text>I am here...</Text>
                    </Callout>
                </Marker>
                <Circle center={pin}
                    radius={1000}
                />
            </MapView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    map: {
        width: "100%",
        height: "100%"
    }
});
export default Maps;

