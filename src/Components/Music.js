import React from 'react';
import { SafeAreaView, View, VirtualizedList, StyleSheet, Pressable, Text, StatusBar, Image } from 'react-native';

//========================list otver=====================
const DATA = [];

const getItem = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index + 1}`
});
const getItemCount = (data) => { };

const RenderList = ({setRenderName}) => {
    return (
        <VirtualizedList
        style={{marginBottom:130,}}
            data={DATA}
            initialNumToRender={4}
            renderItem={({ item, index }) => <Item setRenderName={setRenderName} index={index} />}
            keyExtractor={(item, index) => index.toString()}
            getItemCount={() => 14}
            getItem={getItem}
        />
    )
}


const Item = ({ index ,setRenderName}) => (
    <View style={styles.component} >
        <View style={styles.image}>
            <Image
                style={{ height: 70, width: 70, borderRadius: 50 }}
                source={{ uri: ("https://www.billboard.com/wp-content/uploads/2022/07/drake-pr-cr-univseral-music-2022-billboard-1548.jpg") }}
            />
        </View>
        <View style={styles.album_details}>
            <Text style={{ fontSize: 20, marginVertical: 5 }}>Playlist {index}</Text>
            <Text style={{ fontSize: 14 }}>Artist Name</Text>
        </View>
        <Pressable  onPress={() => {
            // setRenderName("Music_list")
        }}>
            <View style={styles.next_page}>
                <Image
                    style={{ height: 40, width: 40 }}
                    source={require("../Icons/play_icon.png")}
                />
            </View>
        </Pressable>


    </View>
);
//=========================================================

export const Music = ({ setRenderName }) => {

    return (
        <View style={styles.main}>

            <View style={styles.container}>
                <View style={styles.header_text} >
                    <Text style={styles.text}>Your playlists:</Text>
                </View>
                <RenderList setRenderName={setRenderName}></RenderList>

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "center",
        height: '100%',
    },
    container: {
        width: "100%",
        paddingHorizontal: 20,
    },
    header_text: {
        width: "100%",
        height: 60,
        marginTop: 10,
        ackgroundColor: 'skyblue',
        alignItems: 'flex-start', 
        backgroundColor: 'rgba(100, 100, 180, 0.5)', 
        borderRadius:10
    },
    text: {
        width: "100%",
        fontSize: 19,
        color: "#fff",
        marginLeft: '5%'
    },
    component: {
        marginTop: 10,
        width: '100%',
        height: 70,
        backgroundColor: 'rgba(100,100,100,.5)',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius:10,
    },
    image: {
        height: '100%',
    },
    album_details: {
        flex: 5,
        height: '100%',
        width: '80%',
        paddingLeft: 20,
        flexDirection: 'column',
    },
    next_page: {

        height: '100%',
        width: 50,
        justifyContent: 'center',
        alignItems: 'flex-end'

    }

});
