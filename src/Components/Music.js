import React from 'react';
import { SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar, Image } from 'react-native';

//========================list otver=====================
const DATA = [];

const getItem = (data, index) => ({
 id: Math.random().toString(12).substring(0),
 title: `Item ${index + 1}`
});
const getItemCount = (data) =>{};

const RenderList=()=>{
    return(
        <VirtualizedList
        data={DATA}
        initialNumToRender={4}
        renderItem={({ item ,index}) => <Item index={index} />}
        keyExtractor={(item, index) => index.toString()}
        getItemCount={()=>14}
        getItem={getItem}
    />
    )
}


const Item = ({ index}) => (
<View style={styles.component} >
                    <View style={styles.image}>
                        <Image
                        style={{height:70, width:70, borderRadius:50}}
                            source={{uri:("https://www.billboard.com/wp-content/uploads/2022/07/drake-pr-cr-univseral-music-2022-billboard-1548.jpg")}}
                        />
                    </View>
                    <View>
                    <Text style={{ fontSize: 25 }}>song{index}</Text>
                    </View>
                    
                     <View style={styles.image}>
                        <Image
                        style={{height:40, width:40}}
                            source={require("../Icons/heart.png")}
                        />
                    </View>


                </View> 
);
//=========================================================

export const Music = () => {

    return (
        <View style={styles.main}>

            <View style={styles.container}>
                <View style={styles.header_text} >
                    <Text style={styles.text}>Your playlists:</Text>
                </View>
                <RenderList></RenderList>
                
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
        paddingHorizontal:20,
    },
    header_text: {
        width: "100%",
        height: 60,
        marginTop:10,
        ackgroundColor: 'skyblue',
        alignItems: 'flex-start'
    },
    text: {
        width: "100%",
        fontSize: 19,
        color:"#fff",
        marginLeft: '5%'
    },
    component: {
        marginTop:10,
        width: '90%',
        height: 70,
        backgroundColor: 'skyblue',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    image: {
        flex: 1,
        height: 50,
        width: 50,
        marginRight: "5%",
    }

});
