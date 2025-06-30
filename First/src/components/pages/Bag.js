import React from 'react';
import { StyleSheet, Text, Button, TouchableHighlight, View, Image } from "react-native";

const Bag = () => {
    return (
        <View style={styles.container}>
          <Text>bag</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"

    },
});
export default Bag;