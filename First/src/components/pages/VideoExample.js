import React, { useState, useRef } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Video from 'react-native-video';
// import vid from '../assets/small.mp4';
const { width: screenWidth } = Dimensions.get('screen');
const { height: screenHeight } = Dimensions.get('screen');

const VideoExample = () => {
    return (
        <View style={styles.container}>
            <Video style={styles.vid}
                // video = {require('./src/assets/small.mp4')}
                // source={vid} 
                source={{ uri: 'https://flutter.github.io/assets-for-api-docs/assets/videos/bee.mp4' }}
                defaultMuted={false}
                // repeat={true}
                // paused={true}
                audioOnly={true}
                controls   
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "red"
    },
    vid:{ 
        width: screenWidth, 
        // height:screenHeight,
        height: 200 
    },
});

export default VideoExample;