import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList, ImageBackground, Image, TouchableOpacity } from 'react-native';

const Apiimagefatch = ({ navigation }) => {

    //https://www.pluralsight.com/guides/display-a-list-using-the-flatlist-component-in-react-native
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const requestOptions = {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "query": "query{\n coaches {\n id\n username\n firstName\n lastName\n bio\n coverImage\n userIds\n createdAt\n updatedAt\n featured\n }\n}" })
    };
    useEffect(() => {
        fetch('http://graphql-dot-platform-fit-dev.oa.r.appspot.com', requestOptions)
            .then(response => response.json())
            .then((json) => {
                console.log("hifgdgdf", json)
                setData(json.data.coaches)
            })
            .catch((error) => console.log("dfhjgd", error))
            .finally(() => setLoading(false))
    }, []);
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                // keyExtractor={({ id }, index) => id}
                // renderItem={onePic}     
                renderItem={({ item, index }) => (
                    <View>
                        {index % 2 == 0 ?
                            <View style={{marginBottom: 15,}}>
                                <Image source={{ uri: item.coverImage }} style={{ height: 260, width: 360, marginRight: 53 }} />
                                <View style={{ position: "absolute", top: 5, flex: 1, flexDirection: "row", width: "82%", justifyContent: "space-between", marginLeft: 15, }}>
                                    <Text style={{ fontSize: 12, color: "white" }}>Series</Text>
                                    <Image source={require('../assets/icona.png')} />
                                </View>
                                {item.firstName === 'Muhala Mtonga' ?  <TouchableOpacity style={{ position: "absolute", top: 152, left: 100 }}  onPress={() => navigation.navigate("Test")}>
                                    <Text style={{ color: "white", fontSize: 18, fontWeight: "bold", }}>{item.firstName}</Text>
                                </TouchableOpacity> 
                                :
                                 <View style={{ position: "absolute", top: 152, left: 100 }} >
                                    <Text style={{ color: "white", fontSize: 18, fontWeight: "bold", }}>{item.firstName}</Text>
                                </View>}   
                                <View style={{ position: "absolute", top: 183, left: 125 }}>
                                    <Text style={{color:"white",alignItems:"center"}}>{item.username}</Text>
                                </View>
                                <View style={{ position: "absolute", top: 230, left: 20, flex: 1, flexDirection: "row", alignItems: "center", }}>
                                    <Image source={require('../assets/c.png')} style={{ height: 20, width: 20, }} />
                                    <Text style={{ fontSize: 16, marginLeft: 5, fontWeight: "bold", color: "white" }}>350</Text>
                                </View>
                                <View style={{ position: "absolute", top: 210, left: 270, }}>
                                    <TouchableOpacity style={{ backgroundColor: "#33EDA8", paddingTop: 9, paddingBottom: 9, paddingLeft: 6, paddingRight: 6, borderRadius: 7, }}>
                                        <Text style={{ color: '#0F0829', fontSize: 14, }}>Purchase</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            :
                            <View  style={{marginBottom: 15,}}>
                                <Image source={{ uri: item.coverImage }} style={{ height: 260, width: 360, marginLeft: 53 }} />
                                <View style={{ position: "absolute", top: 5, flex: 1, flexDirection: "row", width: "82%",justifyContent: "space-between", marginLeft: 68, }}>
                                    <Text style={{ fontSize: 12, color: "white" }}>Series</Text>
                                    <Image source={require('../assets/icona.png')} />
                                </View>
                                <View style={{ position: "absolute", top: 152, left: 170 }}>
                                    <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>{item.firstName}</Text>
                                </View>
                                <View style={{ position: "absolute", top: 183, left: 195 }}>
                                <Text style={{color:"white",alignItems:"center"}}>{item.username}</Text>
                                </View>
                                <View style={{ position: "absolute", top: 230, left: 80, flex: 1, flexDirection: "row", alignItems: "center", }}>
                                    <Image source={require('../assets/c.png')} style={{ height: 20, width: 20, }} />
                                    <Text style={{ fontSize: 16, marginLeft: 5, fontWeight: "bold", color: "white" }}>350</Text>
                                </View>
                                <View style={{ position: "absolute", top: 210, left: 325, }}>
                                    <TouchableOpacity style={{ backgroundColor: "#33EDA8", paddingTop: 9, paddingBottom: 9, paddingLeft: 6, paddingRight: 6, borderRadius: 7, }}>
                                        <Text style={{ color: '#0F0829', fontSize: 14, }}>Purchase</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        }
                    </View>
                )}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
    },
    titletxt: {
        fontSize: 30,
        backgroundColor: "red",
        margin: 20
    },
    nametxt: {
        fontSize: 20,
    },
    fontsname: {
        fontWeight: "bold"
    },
    fontsbio: {
        fontWeight: "bold",
    }
});
export default Apiimagefatch;