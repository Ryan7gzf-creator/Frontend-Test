import React, {useEffect, useState} from "react";
import {
    ActivityIndicator,
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from "react-native";

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 140,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        backgroundColor: "white"
    },
    character: {
        paddingTop: 30,
        width: 150,
    },
    characterStatus: {
        fontFamily: 'Roboto',
        fontWeight: "Regular",
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.4,
        color: "#6E798C"
    },
    characterName: {
        fontWeight: "Regular",
        fontFamily: "Roboto",
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.15,

    },
    characterDesc: {
        backgroundColor: "white",
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderColor: "#EFEFF4",
        borderWidth: 1,
        height: 82,
        padding: 12
    }
});

const Home = ({navigation}) => {
    let [isLoading, setIsLoading] = useState(true);
    let [error, setError] = useState();
    let [responce, setResponce] = useState();

    useEffect(() => {
        //Fetching Character List from API
        fetch("https://rickandmortyapi.com/api/character")
            .then(res => res.json())
            .then(
                (result) => {
                    setResponce(result);
                    setIsLoading(false);
                },
                (error) => {
                    setError(error);
                    setIsLoading(false);
                }
            )
    }, []);

    const getContent = () => {

        if (isLoading) {
            return <ActivityIndicator size={'large'}/>;
        }
        if (error) {
            return <Text>{error}</Text>
        }
        return (
            <View style={styles.container}>
                {
                    responce["results"].map((character, index) => {
                        return (
                            <TouchableOpacity key={index} style={styles.character}
                                              onPress={() => navigation.navigate("Character", {
                                                  character: character,
                                                  name: character.name
                                              })}>
                                <View>
                                    <Image style={styles.image} source={{uri: character.image}}/>
                                    <View style={styles.characterDesc}>
                                        <Text style={styles.characterStatus}>{character.status}</Text>
                                        <Text style={styles.characterName}>{character.name}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    })
                }
            </View>
        );
    };

    return (
        getContent()
    );
}

export default Home;