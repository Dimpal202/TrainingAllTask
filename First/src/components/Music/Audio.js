import React, { useContext, useState } from 'react';
import { StyleSheet, Text, Button, TouchableHighlight, View, Image, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Slider from '@react-native-community/slider';
import PlayerButtons from './PlayerButtons';

// import {AudioContext} from '../context/AudioProvider';
const { width } = Dimensions.get("window")
//https://www.youtube.com/watch?v=03UxueCCFCo
//https://www.youtube.com/watch?v=A1h8jKzFtHQ
//https://www.youtube.com/watch?v=vh-9myT8-yc
//https://www.youtube.com/watch?v=FcKwSrdzqg8

const Audio = () => {
    // const [currntPosition, setCurrentPosition] = useState(0)
    // const context = useContext(AudioContext);
    // const { PlaybackPosition, playbackDuration } = context;
    // const calculateSeeBar = () => {
    //     if (PlaybackPosition !== null && playbackDuration !== null) {
    //         return PlaybackPosition / playbackDuration;
    //     }
    //     return 0;
    // };



    return (
        <View style={styles.container}>
            <Text style={{ textAlign: "right", padding: 15, color: "green", fontSize: 14 }}>1 / 99</Text>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Icon name="music" size={200} color="green" />
            </View>
            <View>
                <Text numberOfLines={1} style={{ fontSize: 16, padding: 15 }}>Audio file name</Text>

                <Slider
                    style={{ width: width, height: 40 }}
                    minimumValue={0}
                    maximumValue={1}
                    // value={calculateSeeBar()}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                // onValueChange={(value) => {
                //     setCurrentPosition(convertTime(value * context.currentAudio.duration))
                // }}
                />
            </View>
            <View style={{width, flexDirection:"row",justifyContent:"center",alignItems:"center", paddingBottom:20}}>
                <PlayerButtons iconType='PREVIOUS'/>
                <PlayerButtons onPress={()=>console.log('playing')} style={{marginHorizontal:25}} iconType='PLAY'/>
                <PlayerButtons iconType='NEXT'/>
                {/* <PlayerButtons iconType='PAUSE'/> */}

            </View>
          
           

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"

    },
});

export default Audio;