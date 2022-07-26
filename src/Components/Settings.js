import React from 'react';
import { SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar,Pressable,Image} from 'react-native';


export const Settings = ({setRenderName}) => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Pressable onPress={() => {
                console.log(setRenderName);
                
            setRenderName("Account");
          
          }}><Image style={styles.image1} source={require("../Icons/left-arrow.png")} ></Image></Pressable>
            <Text style={styles.text1}>Settings</Text>
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      //alignItems: 'center',
      backgroundColor: "black" 
    },
    header:{
        alignItems: "flex-start",
        flexDirection: 'row',
    },
    text1: {
        color: "white",
        marginLeft: 10,
        fontSize: 25,
        alignSelf: 'center'
    },
    image1: {
        height: 30,
        width: 30,
        marginHorizontal:"5%",
    },
  });