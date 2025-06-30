import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Button, FlatList, TouchableHighlight, View, Image } from "react-native";

// https://www.youtube.com/watch?v=DTQ7EceGACM
//https://stackoverflow.com/questions/66337972/react-js-search-in-array-character-by-character
//https://stackoverflow.com/questions/59613913/styling-only-first-letter-from-an-array-of-strings-in-react-native
//https://www.google.com/search?channel=fs&client=ubuntu&q=get+array+start+with+character+react+native

const movieURL = "https://reactnative.dev/movies.json";

const Apicall = () => {
    const [data, setData] = useState([]);
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);

    useEffect(() => {
        fetch(movieURL)
            .then((Response) => Response.json())
            .then((json) => {
                setData(json.movies)
                setTitle(json.title)
                setDescription(json.description)
            })
            .catch((error) => alert(error))
            .finally(() => setLoading(false));
    }, []);
    return (
        <View style={styles.container}>
            <Text style={styles.titletxt}>{title}</Text>
            <FlatList
                // data={data.sort((a, b) => a.title.localeCompare(b.title))}             
                data={data.filter((a) => a.title.match("I"))}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                    <Text style={styles.nametxt}>{item.title}</Text>
                )}
            />
            <Text style={styles.titletxt}>{description}</Text>
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
    },
    nametxt: {
        fontSize: 20,
    }
});

export default Apicall;