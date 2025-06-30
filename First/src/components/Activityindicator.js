import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, Button, ActivityIndicator, TouchableHighlight, View, Image } from "react-native";

const Activityindicator = () => {
    const [text, setText] = useState('');
    const [animate, setAnimate] = useState(true);
    
    useEffect(()=>{
        setTimeout(()=>{
            setText("Value updated successfully");
            setAnimate(false);
        }, 6000);
    })
    return (
        <View style={styles.container}>
                {/* <ActivityIndicator animating={animate} />
             <ActivityIndicator size="large" /> */}
             <ActivityIndicator size="small" color="#0000ff" animating={animate}/>
             <Text style={styles.text}>{text}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"

    },
});
export default Activityindicator;