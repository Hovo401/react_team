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
            <Image style={styles.logo} source={require("../Icons/person.png")}></Image>
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



        </View>

    )
}
const styles = StyleSheet.create({
    button:{
        alignItems: "flex-end",
        flexDirection: 'row',
        marginBottom: 6,
    },
    container: {

        flex: 1,
        alignItems: 'center',
    },
    text1: {
        color: "white",
        marginLeft: 10,
    },
    // font:{
    //     fontFamily: 'OpenSans-Bold'
    // },
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
        height: 100,
        width: 100,
        borderRadius: 50,
        
    },
   
    thirdDiv: {
        alignItems: 'center',
        backgroundColor: "gray",
        
        flex: 4,
        width: "80%",

    },
    next:{
        width:"20%",
    }
});