import React from 'react';
import { StyleSheet, Text, Button, TouchableHighlight, View, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const PlayerButtons = (props) => {
    const {
        iconType,
        size = 40,
        color = "green",
        onPress,
        otherProps
    } = props
    const getIconName = (type) => {
        switch (type) {
            case 'PLAY':
                return 'pause';
            case 'PAUSE':
                return 'play'
            case 'NEXT':
                return 'forward';
            case 'PREVIOUS':
                return 'backward';
        }
    }
    return (
        <Icon {...props} onPress={onPress} name={getIconName(iconType)} size={30} color="green" {...otherProps} />
    );
}
export default PlayerButtons;