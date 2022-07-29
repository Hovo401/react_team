import React from 'react';
import {ScrollView, SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar, Pressable, Image } from 'react-native';

//========================list otver=====================
const DATA = {title:["App Language","App Theme","Share profile","Manage subscribation","Permissions","About","Rate our page","Invite friends","Support","Privacy Policy","Terms and conditions"],}
   

    const getItem = (data, index) => ({
        id: Math.random().toString(12).substring(0),
        title: `Item ${index + 1}`
       });

const RenderList=()=>{
    return(
        <VirtualizedList
        data={DATA}
        initialNumToRender={4}
        renderItem={({ item ,index}) => <Item title={DATA.title[index]+""} />}
        keyExtractor={(item, index) => index.toString()}
        getItemCount={()=>DATA.title.length}
        getItem={getItem}
    />
    )
}


const Item = ({ title}) => (
    <>
    <Pressable style={styles.button}>
    <Text style={styles.text2}>{title}</Text>
    
    <Image style={[styles.next, styles.image]} source={require("../Icons/next-white.png")}></Image>
</Pressable>
<View  style={styles.div1}/>
    </>
    
   

);
//=========================================================
export const Settings = ({ setRenderName,setMainPosition }) => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => {
                    console.log(setRenderName);

                    setRenderName("");
                    setMainPosition(-300)
                        
                }}><Image style={styles.image1} source={require("../Icons/left-arrow.png")} ></Image></Pressable>
                <Text style={styles.text1}>Settings</Text>
                <View style={{ width: '20%' }}></View>
            </View>
            <View style={styles.main}>
                
                <RenderList></RenderList>
                <Pressable >
                <View style = {styles.log}>
                <Text style = {styles.logText}>Log Out</Text>
                </View>
               
            </Pressable>
                
              
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        //alignItems: 'center',
    },
    header: {
        alignItems: "flex-end",
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    text1: {
        color: "white",
        marginLeft: 10,
        fontSize: 25,
        alignSelf: 'center',

    },
    image1: {
        height: 30,
        width: 30,
        marginHorizontal: "5%",
    },
    main: {
        padding: "5%"
    },
    button: {
        alignItems: "flex-end",
        flexDirection: 'row',
        marginBottom: 6,

    },
    next: {
        width: "20%",
    },
    image: {
        height: 40,
        width: 40,

    },
    text2: {
        flex: 2,
        color: "white",
        fontSize: 25
    },
    log:{
        alignItems: 'center', marginVertical:"10%"
    },
    logText:{
        fontSize:25
    },
    div1:{
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    }
});