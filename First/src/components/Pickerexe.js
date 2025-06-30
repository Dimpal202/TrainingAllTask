import React, { useState } from 'react';
import { StyleSheet, Text,  Button, TouchableHighlight, View, Image } from "react-native";
import { Picker } from '@react-native-picker/picker';

const Pickerexe = ({ navigation }) => {
    const [svalue, setValue] = useState('');

    return (
        <View style={styles.container}>                
            <Picker 
         title="City"
            placeholder={{ label: "Select you favourite language", values: null }} 
            style={styles.pickerpro}
            selectedValue={svalue}
            onValueChange={(itemValue)=>{setValue(itemValue)}}
            >
                <Picker.Item label="java" value="java" />
                <Picker.Item label="c" value="c" />
                <Picker.Item label="c#" value="c#" />
            </Picker>
            <View style={styles.View}>
            <Text style={styles.txt}>{svalue}</Text>
            </View>
          
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    pickerpro:{
        // backgroundColor:"red",
        margin:20,
    },View:{
        alignItems:"center",
    },
    txt:{
        fontSize:20,
    }
});

export default Pickerexe;