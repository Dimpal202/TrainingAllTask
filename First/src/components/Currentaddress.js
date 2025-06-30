import React from 'react';
import { StyleSheet, Text, Button, TouchableOpacity, TouchableHighlight, View, Image } from "react-native";
import Geocoder from 'react-native-geocoding';
// Geocoder.setApikey('AIzaSyBmMXgWb-pvze8Lyzk5b6Ge4mWMcbp01lo')
//https://www.youtube.com/watch?v=u8NQblfHlYs
//https://www.youtube.com/watch?v=bkUL2gDCplA

const Currentaddress = () => {
   Geocoder.init("AIzaSyBmMXgWb-pvze8Lyzk5b6Ge4mWMcbp01lo");
    const getData = () => {
        // console.log("aaa");
     
        Geocoder.from(23.0095233, 72.5057571)
            .then(json => {
                var addressComponent = json.results[0].address_components[0];
                console.log(addressComponent);
            })
            .catch(error => console.warn(error));
    }
    // Geocoder.from([23.0095233, 72.5057571]);
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ alignItems: "center", marginTop: 300 }} onPress={() => getData()}>
                <Text style={{ fontSize: 20, }}>Get Address</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"

    },
});
export default Currentaddress;