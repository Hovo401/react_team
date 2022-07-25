import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image, Pressable } from 'react-native';
//import { SafeAreaView } from 'react-native-safe-area-context';
//import * as Font from 'expo-font';

export const Account = () => {
    // this.state={
    //     fontLoaded: false
    //  }
    //  async ()=> {
    //        await Font.loadAsync({
    //          'OpenSans-Bold': require('../../assets/fonts/OpenSans/OpenSans-Bold.ttf')
    //        });

    //          this.setState({ fontLoaded: true });

    //      }

    return (
        <View style={styles.container}>

            <View style={styles.firstDiv}>
                <Text style={
                    [styles.text1]
                }>Account</Text>

            </View>

            
            <View style={styles.thirdDiv}>
            <View style={styles.alignHorizontal}>
            <Image style={styles.image1} source={require("../Icons/edit.png")}></Image>
            <Image style={styles.logo} source={require("../Icons/person.png")}></Image>
            <Image style={styles.image1} source={require("../Icons/settings.png")}></Image>
            </View>
            
                <Text>Username</Text>
                <Text>e-mail@gmail.com</Text>
                <View style={{alignSelf: "flex-start", margin:10}}>
                <Pressable style={styles.button}>
                
                    <Image style={styles.image} source={require("../Icons/folder.png")}></Image>
                    <Text style={{width:"74%",}}>My songs</Text>
                    <Image style={[styles.next, styles.image]} source={require("../Icons/nextArrow.png")}></Image>
                </Pressable>
                <Pressable style={styles.button}>
                    <Image style={styles.image} source={require("../Icons/share.png")}></Image>
                    <Text style={{width:"74%",}}>Share with friends</Text>
                    <Image style={[styles.next, styles.image]} source={require("../Icons/nextArrow.png")}></Image>
                </Pressable>
                <Pressable style={styles.button}>
                    <Image style={styles.image} source={require("../Icons/folder.png")}></Image>
                    <Text style={{width:"74%",}}>Help</Text>
                    <Image style={[styles.next, styles.image]} source={require("../Icons/nextArrow.png")}></Image>
                </Pressable>
                </View>
               
            </View>
            <View style = {{flex:1}}></View>



        </View>

    )
}
const styles = StyleSheet.create({
    button:{
        alignItems: "flex-end",
        flexDirection: 'row',
        marginBottom: 6,
    },
    alignHorizontal:{
        alignItems: "flex-end",
        flexDirection: 'row',
        justifyContent: 'space-between',
         
        width:'100%'
    },
    container: {
        backgroundColor: "white",
        flex: 1,
        alignItems: 'center',
    },
    text1: {
        color: "white",
        marginLeft: 10,
        fontSize: 25,
    },
    // font:{
    //     fontFamily: 'OpenSans-Bold'
    // },
    image1: {
        
        height: 30,
        width: 30,
        marginHorizontal:"5%",
    },
    image: {
        
        height: 30,
        width: 30,
        marginRight:"5%",
    },
    firstDiv: {
        justifyContent: 'center',
        padding:10,
        width: "100%",
        flex: 1,
        backgroundColor: "black",

    },
   
    logo: {
        //justifyContent: 'center', 
        marginVertical:5,
        height: 100,
        width: 100,
        borderRadius: 50,
        
    },
   
    thirdDiv: {
        alignItems: 'center',
        backgroundColor: "#D2CFD6",
        
        flex: 4,
        width: "80%",

    },
    next:{
        width:"20%",
    }
});