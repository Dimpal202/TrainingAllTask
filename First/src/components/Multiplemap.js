import React, { useState } from 'react';
import { StyleSheet, Text, Button, TouchableHighlight, View, Image } from "react-native";
import MapView, { Callout, Circle, Marker } from 'react-native-maps';


const Multiplemap = ({navigation}) => {
    const [pin, setPin] = useState({ latitude: 23.0225, longitude: 72.5714 })
    const [surat,setSurat]=useState({latitude: 21.1702,longitude: 72.8311})
    const [rajkot,setrajkot]=useState({latitude: 22.3039,longitude: 70.8022})
    const [mumbai,setmumbai]=useState({latitude: 19.0760,longitude: 72.8777})
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 23.0225,
                    longitude: 72.5714,
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
                     <Image source={require('../assets/pin.png')} style={{height: 20, width:20 }} />   
                </Marker>
               
                <Marker
                    coordinate={surat}
                    pinColor="black"
                    draggable={true}
                    onDragStart={(e) => {
                        console.log("drag start", e.nativeEvent.coordinate)
                    }}
                    onDragEnd={(e) => {
                        setSurat({
                            latitude: e.nativeEvent.coordinate.latitude,
                            longitude: e.nativeEvent.coordinate.longitude
                        })
                    }}
                >
                     <Image source={require('../assets/pin.png')} style={{height: 20, width:20 }} />   
                </Marker>
              
                <Marker
                    coordinate={rajkot}
                    pinColor="black"
                    draggable={true}
                    onDragStart={(e) => {
                        console.log("drag start", e.nativeEvent.coordinate)
                    }}
                    onDragEnd={(e) => {
                        setrajkot({
                            latitude: e.nativeEvent.coordinate.latitude,
                            longitude: e.nativeEvent.coordinate.longitude
                        })
                    }}
                >
                     <Image source={require('../assets/pin.png')} style={{height: 20, width:20 }} />   
                </Marker>
              
                <Marker
                    coordinate={mumbai}
                    pinColor="black"
                    draggable={true}
                    onDragStart={(e) => {
                        console.log("drag start", e.nativeEvent.coordinate)
                    }}
                    onDragEnd={(e) => {
                        setmumbai({
                            latitude: e.nativeEvent.coordinate.latitude,
                            longitude: e.nativeEvent.coordinate.longitude
                        })
                    }}
                >
                     <Image source={require('../assets/pin.png')} style={{height: 20, width:20 }} />   
                </Marker>
              
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
export default Multiplemap;

