import React, { useState } from 'react';
import { StyleSheet, Text, Button, TouchableHighlight, View, Image } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

const DateTime = ({ navigation }) => {

    const [datePicker, setDatePicker] = useState(false);
    const [date, setDate] = useState(new Date());
    const [timePicker, setTimePicker] = useState(false);
    const [time, setTime] = useState(new Date(Date.now()));

    function showDatePicker() {
        setDatePicker(true);
    };
    function showTimePicker() {
        setTimePicker(true);
    };
    function onDateSelected(event, value) {
        setDate(value);
        setDatePicker(false);
    };
    function onTimeSelected(event, value) {
        setTime(value);
        setTimePicker(false);
    };

    return (
        <View style={styles.container}>
            <Text >Date = {date.toDateString()}</Text>
            <Text >Time = {time.toLocaleTimeString('en-US')}</Text>

            {datePicker && (
                <DateTimePicker
                    value={date}
                    mode={'date'}
                    // display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    is24Hour={true}
                    onChange={onDateSelected}

                />
            )}

            {timePicker && (
                <DateTimePicker
                    value={time}
                    mode={'time'}
                    // display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    is24Hour={false}
                    onChange={onTimeSelected}
                />
            )}

            {!datePicker && (
                <View style={{ margin: 10 }}>
                    <Button title="Show Date Picker" color="green" onPress={showDatePicker} />
                </View>
            )}

            {!timePicker && (
                <View style={{ margin: 10 }}>
                    <Button title="Show Time Picker" color="green" onPress={showTimePicker} />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    button: {
        backgroundColor: "red",
        borderRadius: 10,
        margin: 10,
        padding: 10,
        alignItems: "center",
        color: "white"
    },
});

export default DateTime;