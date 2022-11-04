import React from "react";
import {
    Image, PixelRatio,
    StyleSheet,
    Text, TouchableOpacity, View,
} from "react-native";

const styles = StyleSheet.create({
    image: {
        width: 130 ,
        height: 130 ,
        borderRadius: 103 ,
        borderColor: "#F2F2F7",
        borderWidth: 5 ,
        top: 19 / PixelRatio.get(),
        left: 122.5 / PixelRatio.get(),
        right: 107.5 / PixelRatio.get(),
        position: "absolute"
    },
    locationsContainer: {},
    characterDetails: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 0,
        position: "absolute",
        width: 175,
        height: 68,
        left: 100 / PixelRatio.get(),
        top: 249 / PixelRatio.get()
    },
    status: {
        height: 16,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "Regular",
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.4,
        color: "#6E798C",
        order: 0,
        flexGrow: 0
    },
    name: {
        width: 331,
        height: 36,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "Regular",
        fontSize: 34,
        lineHeight: 36,
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        color: "#081F32"
    },
    species: {
        height: 16,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 13,
        lineHeight: 16,
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        letterSpacing: 1.5,
        textTransform: "uppercase",
        color: "#8E8E93"
    },
    characterStatus: {
        height: 254,
        position: "relative",
        display: "flex",
    },
    information: {

    }
});
const CharacterInfo = ({route}) => {
    const character = route.params.character;

    return (
        <View>
            <View style={styles.characterStatus}>
                <Image style={styles.url} source={{uri: character.url}}/>
                <Image style={styles.image} source={{uri: character.image}}/>
                <View style={styles.characterDetails}>
                    <Text style={styles.status}>{character.status}</Text>
                    <Text style={styles.name}>{character.name}</Text>
                    <Text style={styles.species}>{character.species}</Text>
                </View>
            </View>
            <View style={styles.locationsContainer}>
                <Text style={styles.information}>Informations</Text>
                <Text style={styles.genderTitle}>Gender</Text>
                <Text style={styles.gender}>{character.gender}</Text>
                <Text style={styles.originTitle}>Origin</Text>
                <Text style={styles.origin}>{character.origin.name}</Text>
                <Text style={styles.typeTitle}>Type</Text>
                <Text style={styles.type}>{character.type === "" ? "Unknown" : character.type}</Text>
                <TouchableOpacity>
                    <Text>Location</Text>
                    <Text>{character.location.name}</Text>
                </TouchableOpacity>

                <Text>Episodes</Text>

                {character["episode"].map((episode, key) => {
                    return (
                        <TouchableOpacity key={key}>
                            <Text>episode{key}</Text>
                        </TouchableOpacity>
                    )}
                )}

                <TouchableOpacity>

                </TouchableOpacity>

            </View>
        </View>
    );
}

export default CharacterInfo;