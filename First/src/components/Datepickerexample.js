import React, { useState } from 'react';
import { StyleSheet, Text, Button, TextInput, TouchableHighlight, View, Image } from "react-native";
import DatePicker from 'react-native-date-picker';

const Datepickerexample = ({ navigation }) => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const getDate = () => {
        let tempDate = date.toString().split(' ');
        return date !== ''
            ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
            : '';
    };
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                value={getDate()}
            />
            <Button title="datepicker" onPress={() => setOpen(true)} />
            <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={(date) => {
                    setOpen(false)
                    console.log("add date to holidays array", date)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
});

export default Datepickerexample;