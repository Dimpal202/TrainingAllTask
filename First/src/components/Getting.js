import React, { useState } from "react";
import { StyleSheet, Text, Button, TextInput, TouchableOpacity, FlatList, TouchableHighlight, View, ScrollView } from "react-native";
const Getting = ({ navigation }) => {
    const [colorIsRed, setColorIsRed] = React.useState(false);
    const [active, setActive] = useState(true);

    const [selectedItem, setSelectedItem] = useState();
    const [work, setWork] = useState([
        { name: 'Female', id: '1' },
        { name: 'Male', id: '2' },
        { name: 'Other', id: '3' },
    ])
    const [selectedItemheight, setSelectedItemheight] = useState();
    const [height, setHeight] = useState([
        { name: 'lb', id: '1' },
        { name: 'k g', id: '2' },
    ])
    const [selectedItemweight,setSelectedItemweight] = useState();
    const [weight, setweight] = useState([
        { name: 'ft', id: '1' },
        { name: 'cm', id: '2' },
    ])

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.weare}>
                    <Text style={styles.weretxt}>We're almost there</Text>
                </View>
                <View style={styles.gettingview}>
                    <Text style={styles.gettingtxt}>GETTING TO KNOW YOU BETTER</Text>
                </View>
                {/* <TouchableOpacity style={{ backgroundColor: colorIsRed ? "red" : "white", }} onPress={() => { setColorIsRed(!colorIsRed) }}>
                    <Text >Female</Text>
                </TouchableOpacity> */}
                <View>
                    <Text style={styles.gendertxt}>Gender</Text>
                </View>
                <View style={styles.fmo}>
                    {/* <View style={styles.viewlose}>
                        <TouchableHighlight style={styles.inputlose}>
                                <Text style={styles.texteasy}>Female</Text>                           
                        </TouchableHighlight>
                    </View>
                    <View style={styles.viewlose}>
                        <TouchableHighlight style={styles.inputlose} >            
                                <Text style={styles.texteasy}>Male</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.viewlose}>
                        <TouchableHighlight style={styles.inputlose}>
                                <Text style={styles.texteasy}>Other</Text>
                        </TouchableHighlight>
                    </View> */}
                    <View style={{ paddingLeft:10}}>
                    <FlatList
                        keyExtractor={(item) => item.id}
                        data={work}
                        horizontal
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => setSelectedItem(item)} style={styles.inputlose}>
                                <Text style={item === selectedItem ? styles.texteasya : styles.texteasy}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                    </View>
                </View>
                <View style={styles.heightview}>
                    <Text style={styles.heighttxt}>Height</Text>
                </View>
                <View style={styles.fmo}>
                    <View style={{flexDirection:"row", marginLeft: 20,}}>
                        {/* <TouchableHighlight >
                            <View style={styles.oview}>
                                <Text style={styles.otext}>O</Text>
                            </View>
                        </TouchableHighlight> */}
                        <TextInput 
                        style={{borderWidth:2,borderColor:"black",borderRadius:7,paddingTop:13,paddingLeft:52,paddingBottom:13,marginTop:10,marginRight:10,marginBottom:10}}
                         keyboardType='numeric'
                         placeholder="0"
                        />   
                         <FlatList
                        keyExtractor={(item) => item.id}
                        data={height}
                        horizontal
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => setSelectedItemheight(item)} style={styles.inputlose}>
                                <Text style={item === selectedItemheight ? styles.texteasya : styles.texteasy}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                    </View>
                    {/* <View style={styles.ftview}>
                        <TouchableHighlight >
                            <View style={styles.inputlose}>
                                <Text style={styles.texteasy}>ft</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View>
                        <TouchableHighlight >
                            <View style={styles.viewcm}>
                                <Text style={styles.txtcm}>cm</Text>
                            </View>
                        </TouchableHighlight>
                    </View> */}
                </View>
                <View style={styles.heightview}>
                    <Text style={styles.heighttxt}>Weight</Text>
                </View>
                <View style={styles.fmo}>
                    <View style={{flexDirection:"row", marginLeft: 20,}} >
                        {/* <TouchableHighlight >
                            <View style={styles.oview}>
                                <Text style={styles.otext}>O</Text>
                            </View>
                        </TouchableHighlight> */}
                         <TextInput 
                        style={{borderWidth:2,borderColor:"black",borderRadius:7,paddingTop:13,paddingLeft:52,paddingBottom:13,marginTop: 10,marginRight:10,marginBottom:10}}
                         keyboardType='numeric'
                         placeholder="0"
                        />  
                         <FlatList
                        keyExtractor={(item) => item.id}
                        data={weight}
                        horizontal
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => setSelectedItemweight(item)} style={styles.inputlose}>
                                <Text style={item === selectedItemweight ? styles.texteasya : styles.texteasy}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                    </View>
                    {/* <View style={styles.ftview}>
                        <TouchableHighlight >
                            <View style={styles.inputlose}>
                                <Text style={styles.texteasy}>lb</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View>
                        <TouchableHighlight >
                            <View style={styles.viewcm}>
                                <Text style={styles.txtcm}>k g</Text>
                            </View>
                        </TouchableHighlight>
                    </View> */}
                </View>
            </ScrollView>
            <View>
                <TouchableHighlight onPress={() => navigation.navigate("Discoverimg")}>
                    <View style={styles.button}>
                        <Text style={styles.nexttxt}>DONE</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    texta: {
        color: "red"
    },
    textb: {
        color: "green"
    },
    weare: {
        marginTop: 66,
        alignItems: "center"
    },
    weretxt: {
        fontSize: 16
    },
    gettingview: {
        alignItems: "center"
    },
    gettingtxt: {
        fontSize: 18
    },
    gendertxt: {
        fontSize: 16,
        marginTop: 41,
        marginLeft: 20,
    },
    fmo: {
        marginTop: 10,
        flexDirection: "row",
        // backgroundColor:"red"
    },
    viewlose: {
        marginRight: 20,
        width: "30%"
    },
    // inputlose: {
    //     backgroundColor: "#F2EDFF",
    //     borderWidth: 2,
    //     borderColor: "#6E38F7",
    //     borderRadius: 7,
    //     paddingTop: 17,
    //     paddingBottom: 17,
    //     paddingLeft: 20,
    //     paddingRight: 20,
    //     alignItems: "center"
    // },
    inputlose: {
        margin: 10,
    },
    texteasy: {
        backgroundColor: "#F2EDFF",
        fontSize: 16,
        borderWidth: 2,
        borderRadius: 7,
        paddingTop: 17,
        paddingBottom: 17,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: "center",
        borderColor: "#6E38F7",
        fontSize: 16,
        color: "#6E38F7"
    },
    texteasya: {
        backgroundColor: "#6E38F7",//blue
        fontSize: 16,
        borderWidth: 2,
        borderRadius: 7,
        paddingTop: 17,
        paddingBottom: 17,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: "center",
        borderColor: "#6E38F7",
        fontSize: 16,
        color: "#F2EDFF"
    },
    heightview: {
        marginTop: 25,
        marginLeft: 20
    },
    heighttxt: {
        fontSize: 18
    },
    oview: {
        backgroundColor: "#FFFFFF",
        borderWidth: 2,
        borderColor: "#0F0829",
        borderRadius: 7,
        paddingTop: 17,
        paddingBottom: 17,
        paddingLeft: 52,
        paddingRight: 17,
        alignItems: "center"
    },
    otext: {
        color: "#0F0829",
        fontSize: 16
    },
    ftview: {
        marginLeft: 11,
        marginRight: 10,

    },
    viewcm: {
        backgroundColor: "#6E38F7",
        borderWidth: 2,
        borderColor: "#6E38F7",
        borderRadius: 7,
        paddingTop: 17,
        paddingBottom: 17,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: "center"
    },
    txtcm: {
        color: "#FFFFFF",
        fontSize: 16
    },
    nexttxt: {
        fontSize: 18,
        color: "#0F0829",
        alignItems: "center",
        textAlign: "center"
    },
    button: {
        backgroundColor: "#33EDA8",
        paddingTop: 20,
        paddingBottom: 22,
    },
});

export default Getting;