import React from 'react';
import { StyleSheet, Text, Button, TouchableHighlight, View, Image, TouchableOpacity } from "react-native";
//https://www.youtube.com/watch?v=AzjWv1X-uyg

const Map = ({navigation}) => {
    return (
        <View style={styles.container}>
           <TouchableOpacity onPress={()=>navigation.navigate("Maps")} style={styles.viewsub}>
            <Text style={styles.textstyle}>Ahmedabad</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate("Mapstwo")} style={styles.viewsub}>
            <Text style={styles.textstyle}>Surat</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate("Mapsthree")} style={styles.viewsub}>
            <Text style={styles.textstyle}>Rajkot</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate("Mapsfour")} style={styles.viewsub}>
            <Text style={styles.textstyle}>Mumbai</Text>
           </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems:"center",
        justifyContent:"center",
    },
    textstyle:{
fontSize:20,
margin:10,
padding:20,
borderWidth:2,
borderColor:"gray",
borderRadius:10,
backgroundColor:"orange",
color:"white"
    },
    viewsub:{
        width:300
    }
});
export default Map;

