import React from 'react';
import { StyleSheet, Text, Button, TouchableHighlight, View, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Callout, Circle, Marker } from 'react-native-maps';

const Arraymaps = () => {
    const coordinate = [
        { name: 1, latitude: 23.0225, longitude: 72.5714 },
        { name: 2, latitude: 21.1702, longitude: 72.8311 },
        { name: 3, latitude: 22.3039, longitude: 70.8022 },
        { name: 4, latitude: 19.0760, longitude: 72.8777 }
    ]
    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                    latitude: 23.0225,
                    longitude: 72.5714,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }} >
                {/* <Marker
                    coordinate={{ latitude: 23.0225, longitude: 72.5714 }}
                    title={"hello"}
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
                    <Image source={require('../assets/pin.png')} style={{ height: 40, width: 40 }} />
                </Marker> */}
                {
                    coordinate.map(marker => (
                        <Marker
                            key={marker.name}
                            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }} >
                                <Image source={require('../assets/pin.png')} style={{ height: 40, width: 40 }} />
                        </Marker>
                    ))
                }
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
export default Arraymaps;