import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, Button } from "react-native";
import { Checkbox, RadioButton, } from 'react-native-paper';

const Radio = ({ navigation }) => {
    const [male, setMale] = useState(false);
    const [female, setFemale] = useState(false);
    const [other, setOther] = useState(false);
    const [value, setValue] = useState('');

    const [checked, setChecked] = React.useState('first');
    const gender = []
    const click = () => {
        if (male === true) {
            gender.push("male")
        }
        if (female === true) {
            gender.push("female")
        }
        if (other === true) {
            gender.push("other")
        }

        // Alert.alert("gender", "selected value is:" + gender.toString())
        setValue(gender.toString())
    }

    return (
        <View style={styles.container}>
            <Text style={styles.txttitle}>Checkbox</Text>
            <View style={styles.maleview}>
                <Checkbox
                    status={male ? 'checked' : null}
                    onPress={() => {
                        setMale(!male);
                        console.log(male)
                    }}
                />
                <Text onPress={() => {
                    setMale(!male);
                }}>male</Text>
                {/* <Text>{male ? {onValueChange} : null}</Text> */}
            </View>
            <View style={styles.maleview}>
                <Checkbox
                    status={female ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setFemale(!female);
                    }}
                />
                <Text onPress={() => {
                    setFemale(!female);
                }}>female</Text>
            </View>
            <View style={styles.maleview}>
                <Checkbox
                    status={other ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setOther(!other);
                    }}
                />
                <Text onPress={() => {
                    setOther(!other);
                }}>other</Text>
            </View>
            <Button title="click" onPress={click} />
        <Text>{value}</Text>
        
            {/* <View style={{alignItems:"center"}}>
                <Text style={styles.txttitle}>Radiobutton</Text>
                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                    <View style={styles.maleview}>
                        <RadioButton value="first" />
                        <Text>first</Text>
                    </View>
                    <View style={styles.maleview}>
                        <RadioButton value="second" />
                        <Text>second</Text>
                    </View>
                    <View style={styles.maleview}>
                        <RadioButton value="third" />
                        <Text>third</Text>
                    </View>
                </RadioButton.Group>
            </View>
            <View>
                <Text style={{fontSize:30}}>{value}</Text>
            </View> */}


            <View style={{marginTop:30}}>
            <Text style={styles.txttitle}>RadioButton</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <RadioButton
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                    />
                    <Text onPress={() => setChecked('first')}>first</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <RadioButton
                        value="second"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}
                    />
                    <Text onPress={() => setChecked('second')}>second</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <RadioButton
                        value="third"
                        status={checked === 'third' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('third')}
                    />
                    <Text onPress={() => setChecked('third')}>third</Text>
                </View>
            </View>
            <View>
                <Text>{checked}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    },
    txttitle: {
        fontSize: 30,
        marginTop: 40
    },
    maleview: {
        flexDirection: "row",
        alignItems: "center",
        width: 80,
    },

});

export default Radio;