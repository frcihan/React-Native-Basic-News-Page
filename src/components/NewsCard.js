import React from "react";
import {View, Text, StyleSheet, Image, Dimensions,} from "react-native";

const NewsCard = (props) => {
    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: props.news.imageUrl }}
                style={styles.image}
            />
            <Text style={styles.title}>{props.news.title}</Text>
            <Text>{props.news.description}</Text>
        </View>
    )
}

export default NewsCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#aeaeae",
        padding: 5,
        margin: 5,
        borderRadius: 5,
        backgroundColor: "#fff"
    },
    image: {
        height: Dimensions.get("window").height * 0.30,
        borderRadius: 5,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
    }
})