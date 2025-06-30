import React, { useState } from 'react';
import { View, Button,Text, Platform, SafeAreaView, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
//https://www.tutorialspoint.com/how-to-display-date-and-time-picker-in-reactnative
 const Dt = ({navigation})=> {
    const [mydate, setDate] = useState(new Date());
    const [displaymode, setMode] = useState('date');
    const [isDisplayDate, setShow] = useState(false);
    const [text, setText]=useState('Empty');

    const changeSelectedDate = (event, selectedDate) => {
        const currentDate = selectedDate || mydate;
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        let fTime='Hours: ' + tempDate.getHours() + '| Minutes: ' + tempDate.getMinutes();
        setText(fDate + '\n' + fTime)

        console.log(fDate + '(' + fTime +')')
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }
    // const displayDatepicker = () => {
    //     showMode('date');
    // };
    return (
        <View>
            <Text>{text}</Text>
            <View style={{padding:20}}>
                <Button onPress={()=>showMode('date')} title="date picker!" />
            </View>
            <View style={{padding:20}}>
            <Button onPress={()=>showMode('time')} title="  time picker!" />
            </View>
            {
                isDisplayDate &&
                (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={mydate}
                        mode={displaymode}
                        is24Hour={true}
                        display="default"
                        onChange={changeSelectedDate}
                    />
                )
            }
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
});

export default Dt;