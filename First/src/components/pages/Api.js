import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const Api = ({ navigation }) => {

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

    // const onePic = ({ item }) => (
    //     <View style={{  marginBottom: 20, flex: 1,  }}>
    //         <View style={{backgroundColor: "yellow", flexDirection: "row", padding:10}}>
    //         <View>
    //             <Image source={{ uri: item.coverImage }} style={{ height: 100, width: 100, }} />
    //         </View>
    //         <View style={{backgroundColor:"red",margin:10,width:200}}>
    //             <Text style={styles.fontsname}>{item.firstName}</Text>
    //             <Text style={styles.fontsbio} numberOfLines={2} ellipsizeMode='tail'>{item.bio.replace(/<[^>]+>/g,'')}</Text>
    //         </View>
    //         </View>        
    //     </View>
    // )
        var imgViews = [];
        const imagePress = (item, index) => {    
                imgViews.push(item)
                imgViews.push(data[index+1])
                imgViews.push(data[index+2])
            console.log('imgview is',imgViews)
            navigation.navigate("Apiscreen", imgViews)
    }
    // console.log({ uri: item.coverImage +1 })
    // console.log({ uri: item.coverImage +2 })

    // var imgViews = [];
    // const imagePress = (item, index) => {
    //     navigation.navigate("Apiscreen", item)
    //     for(var i=0;i<2;i++)
    //     imgViews.push()
    // }
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={({ id }, index) => id}
                // renderItem={onePic}
                renderItem={({ item, index }) => (
                    <View style={{ flex: 1, marginBottom: 20, backgroundColor: "yellow", flexDirection: "row", padding: 10 }}>
                        <TouchableOpacity onPress={() => imagePress(item, index)} style={{ width: "30%" }}>
                            <Image source={{ uri: item.coverImage }} style={{ height: 100, width: 100, }} />
                        </TouchableOpacity>
                        {/* <TouchableOpacity onPress={() => navigation.navigate("Apiscreen", item)} style={{ backgroundColor: "red", justifyContent: "center", padding: 10, width: "70%" }}>
                            <Text style={styles.fontsname}>{item.firstName}</Text>
                            <Text style={styles.fontsbio} numberOfLines={2} ellipsizeMode='tail'>{item.bio.replace(/<[^>]+>/g,'')}</Text>
                        </TouchableOpacity> */}
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
export default Api;