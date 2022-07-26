import React from 'react';
import {ScrollView, SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar, Pressable, Image } from 'react-native';


export const Settings = ({ setRenderName }) => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => {
                    console.log(setRenderName);

                    setRenderName("Account");

                }}><Image style={styles.image1} source={require("../Icons/left-arrow.png")} ></Image></Pressable>
                <Text style={styles.text1}>Settings</Text>
                <View style={{ width: '20%' }}></View>
            </View>
            <View style={styles.main}>
                <ScrollView>
                <Pressable style={styles.button}>
                    <Text style={styles.text2}>App Language</Text>
                    <Image style={[styles.next, styles.image]} source={require("../Icons/next-white.png")}></Image>
                </Pressable>
                <View
                    style={{
                        borderBottomColor: 'white',
                        borderBottomWidth: 1,
                    }}
                /> 
           
                
                <Pressable style={styles.button}>
                    <Text style={styles.text2}>App Theme</Text>
                    <Image style={[styles.next, styles.image]} source={require("../Icons/next-white.png")}></Image>
                </Pressable>
                <View
                    style={{
                        borderBottomColor: 'white',
                        borderBottomWidth: 1,
                    }}
                />
                <Pressable style={styles.button}>
                    <Text style={styles.text2}>Share profile</Text>
                    <Image style={[styles.next, styles.image]} source={require("../Icons/next-white.png")}></Image>
                </Pressable>
                <View
                    style={{
                        borderBottomColor: 'white',
                        borderBottomWidth: 1,
                    }}
                />
                <Pressable style={styles.button}>
                    <Text style={styles.text2}>Manage subscribation</Text>
                    <Image style={[styles.next, styles.image]} source={require("../Icons/next-white.png")}></Image>
                </Pressable>
                <View
                    style={{
                        borderBottomColor: 'white',
                        borderBottomWidth: 1,
                    }}
                />
                <Pressable style={styles.button}>
                    <Text style={styles.text2}>Permissions</Text>
                    <Image style={[styles.next, styles.image]} source={require("../Icons/next-white.png")}></Image>
                </Pressable>
                <View
                    style={{
                        borderBottomColor: 'white',
                        borderBottomWidth: 1,
                    }}
                />
                <Pressable style={styles.button}>
                    <Text style={styles.text2}>About</Text>
                    <Image style={[styles.next, styles.image]} source={require("../Icons/next-white.png")}></Image>
                </Pressable>
                <View
                    style={{
                        borderBottomColor: 'white',
                        borderBottomWidth: 1,
                    }}
                />
                <Pressable style={styles.button}>
                    <Text style={styles.text2}>Rate our page</Text>
                    <Image style={[styles.next, styles.image]} source={require("../Icons/next-white.png")}></Image>
                </Pressable>
                <View
                    style={{
                        borderBottomColor: 'white',
                        borderBottomWidth: 1,
                    }}
                />
                <Pressable style={styles.button}>
                    <Text style={styles.text2}>Invite friends</Text>
                    <Image style={[styles.next, styles.image]} source={require("../Icons/next-white.png")}></Image>
                </Pressable>
                <View
                    style={{
                        borderBottomColor: 'white',
                        borderBottomWidth: 1,
                    }}
                />
                <Pressable style={styles.button}>
                    <Text style={styles.text2}>Support</Text>
                    <Image style={[styles.next, styles.image]} source={require("../Icons/next-white.png")}></Image>
                </Pressable>
                <View
                    style={{
                        borderBottomColor: 'white',
                        borderBottomWidth: 1,
                    }}
                />
                <Pressable style={styles.button}>
                    <Text style={styles.text2}>Privacy Policy</Text>
                    <Image style={[styles.next, styles.image]} source={require("../Icons/next-white.png")}></Image>
                </Pressable>
                <View
                    style={{
                        borderBottomColor: 'white',
                        borderBottomWidth: 1,
                    }}
                />
                <Pressable style={styles.button}>
                    <Text style={styles.text2}>Terms and conditions</Text>
                    <Image style={[styles.next, styles.image]} source={require("../Icons/next-white.png")}></Image>
                </Pressable>
                <View
                    style={{
                        borderBottomColor: 'white',
                        borderBottomWidth: 1,
                    }}
                />
                <Pressable >
                <View style = {styles.log}>
                <Text style = {styles.logText}>Log Out</Text>
                </View>
               
            </Pressable>
                </ScrollView>
              
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        //alignItems: 'center',
        backgroundColor: "black"
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
        backgroundColor:"white",alignItems: 'center', marginVertical:"10%"
    },
    logText:{
        fontSize:25
    }
});