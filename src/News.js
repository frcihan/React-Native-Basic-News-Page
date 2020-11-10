import React from "react";
import { SafeAreaView, View, Text, StyleSheet, FlatList, ScrollView, Dimensions, ImageBackground, StatusBar } from "react-native";

import NewsCard from "./components/NewsCard";

const news_data = [
    {
        id: 0,
        title: 'The role of giant trees in climate change revealed',
        description:
            'Older trees with large diameters store enormous amounts of carbon, according to new research published in the journal Frontiers in Forests and Global Change.',
        imageUrl:
            'https://freenews.live/wp-content/uploads/2020/11/giants-trees.jpg',
    },
    {
        id: 1,
        title: 'Hackers stole source code from US government agencies and private companies',
        description:
            'In the United States, unknown hackers stole the original year and personal data that government agencies and individuals were working with.',
        imageUrl:
            'https://freenews.live/wp-content/uploads/2020/11/source-code.jpg',
    },
    {
        id: 2,
        title: 'Artificial skin can replace electronic watch',
        description:
            "Scientists from the United States have presented artificial skin that may replace fitness devices in the future. It can be stretched without disrupting work.",
        imageUrl:
            'https://freenews.live/wp-content/uploads/2020/11/artificial-skin-1.jpg',
    },
    {
        id: 3,
        title: 'LeBron James’ salary is likely to be cut by $ 7 million',
        description:
            'ESPN finance and contracting NBA journalist Bobby Marks tweeted a few examples to illustrate how the salaries of league players could drop next year.',
        imageUrl: 'https://freenews.live/wp-content/uploads/2020/11/LeBron-James.jpg',
    },
    {
        id: 4,
        title: 'Ariana Grande tops the Billboard Hot 100 with her new song Positions',
        description:
            'Ariana Grande’s career continues to go uphill – it seems that the army of fans of the 27-year-old singer still ensures her worldwide popularity. Ariana’s new single, Positions, debuted immediately from the first line of the authoritative Billboard Hot 100 chart.',
        imageUrl:
            'https://freenews.live/wp-content/uploads/2020/11/ariana-grande-1.jpg',
    },
];
const banner_data = [
    {
        id: 0,
        text: "Justin Bieber’s wife Hailey...",
        imageUrl:
            'https://freenews.live/wp-content/uploads/2020/11/hailey-bieber.jpg',
    },
    {
        id: 1,
        text: "SpaceX’s next launch can be...",
        imageUrl:
            'https://freenews.live/wp-content/uploads/2020/11/spacex.jpg',
    },
    {
        id: 2,
        text: "Luis Suarez: I will defend Atlético...",
        imageUrl:
            'https://freenews.live/wp-content/uploads/2020/11/Luis-Suarez.jpg',
    },
    {
        id: 3,
        text: "The largest iceberg in the world...",
        imageUrl:
            'https://freenews.live/wp-content/uploads/2020/11/isberg.jpg',
    },
    {
        id: 4,
        text: "Djokovic is guaranteed to...",
        imageUrl:
            'https://freenews.live/wp-content/uploads/2020/11/Novak-Djokovic.jpg',
    },
];

const News = () => {
    const renderNewsData = ({item}) => <NewsCard news={item}/>;
    const listHeader = () => {
        return (
            <View>
                <Text style={styles.headerTitle}>News</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        banner_data.map(banner_item => {
                            return (
                                <View key={banner_item.id} style={styles.container}>
                                    <ImageBackground
                                        source={{ uri: banner_item.imageUrl}}
                                        style={styles.image}
                                        imageStyle={{ borderRadius: 10 }}
                                    >
                                        <Text style={styles.bannerText}>{banner_item.text}</Text>
                                    </ImageBackground>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
        )
    }
    return (
        <SafeAreaView style={{ backgroundColor: "#e0e0e0"}}>
            <StatusBar backgroundColor="#7f0000" />
            <FlatList 
                keyExtractor={(_,index) => index.toString()}
                data={news_data}
                renderItem={renderNewsData}
                ListHeaderComponent={listHeader}
                numColumns={2}
            />
        </SafeAreaView>
    )
}

export default News;

const styles = StyleSheet.create({
    headerTitle: {
        fontWeight: "bold",
        fontSize: 50,
        paddingHorizontal: 10,
        backgroundColor: "#b71c1c",
        color: "#fff",
    },
    container: {
        flex: 1,
    },
    bannerText: {
        fontSize: 20,
        height: Dimensions.get("window").height / 25,
        color: "#fff",
        backgroundColor: "#11111180",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingHorizontal: 10,
        textAlignVertical: "center",
    },
    image: {
        width: Dimensions.get("window").width * 0.80,
        height: Dimensions.get("window").height / 5,
        flex: 1,
        margin: 5,
        resizeMode: "cover",
        justifyContent: "flex-end"
    }
})
