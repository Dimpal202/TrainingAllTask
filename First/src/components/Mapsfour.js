import React, { useState } from 'react';
import { StyleSheet, Text, Button, TouchableHighlight, View, Image } from "react-native";
import MapView, { Callout, Circle, Marker } from 'react-native-maps';


const Mapsfour = ({navigation}) => {
    const [pin, setPin] = useState({ latitude: 19.0760, longitude: 72.8777 })
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 19.0760,
                    longitude: 72.8777,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}>  
              <Marker
                    coordinate={pin}
                    pinColor="black"
                    draggable={true}
                    onDragStart={(e) => {
                        console.log("drag start", e.nativeEvent.coordinate)
                    }}
                    onDragEnd={(e) => {
                        setPin({
                            latitude: e.nativeEvent.coordinate.latitude,
                            longitude: e.nativeEvent.coordinate.longitude
                        })
                    }}
                >
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
export default Mapsfour;

