
import { useState, useRef } from 'react'
import { Animated, StyleSheet, Text, View, TextInput, Button, Image, Pressable } from 'react-native';
export const Navbar = ({ setRenderName }) => {



  return (
      <View style={stylesr.navbar}>

        <View style={stylesr.alignitems}>

          <Pressable style={stylesr.button} onPress={() => {
            setRenderName("Home")
          }}>
            <Image style={stylesr.image} source={require("../Icons/home.png")}></Image>
          </Pressable>
          <Pressable style={stylesr.button} onPress={() => {
            setRenderName("Search")
          }}>

            <Image style={stylesr.image} source={require("../Icons/search.png")}></Image>
          </Pressable>
          <Pressable style={stylesr.button} onPress={() => {
            setRenderName("Music")
          }}>
            <Image style={stylesr.image} source={require("../Icons/music.png")}></Image>
          </Pressable>
          <Pressable style={stylesr.button} onPress={() => {
            setRenderName("Account")
          }}>
            <Image style={stylesr.image} source={require("../Icons/account.png")}></Image>
          </Pressable>
        </View>
      </View>


  )
}


const stylesr = StyleSheet.create({
  navbar: {
    width: "100%",
    height: 60,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  alignitems: {
    flexWrap: "wrap",
    width: "100%",
    height: 50,
  },
  button: {
    color: "#fff",
    
    width: "20%",
    height: 50,
    // backgroundColor:"#aaa",
    // borderColor:"#000",
    // borderWidth:5,
    marginHorizontal: "2.5%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",

  },
  image: {
   
    height: 30,
    width: 30
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "#333"
  },
  fadingText: {
    fontSize: 28
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    
  }
});