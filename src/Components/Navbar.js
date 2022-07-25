
import { useState} from 'react'
import {  StyleSheet,  View,  Image, Pressable } from 'react-native';
export const Navbar = ({ setRenderName }) => {

const [active,setActive]=useState([stylesr.active]);

  return (
      <View style={stylesr.navbar}>

        <View style={stylesr.alignitems}>

          <Pressable style={[stylesr.button, active[0]]} onPress={() => {
            setRenderName("Home")
            setActive([stylesr.active]);
          }}>
            <Image style={stylesr.image} source={require("../Icons/home.png")}></Image>
          </Pressable>
          <Pressable style={[stylesr.button,active[1]]} onPress={() => {
            setRenderName("Search");
            setActive([,stylesr.active]);
          }}>

            <Image style={stylesr.image} source={require("../Icons/search.png")}></Image>
          </Pressable>
          <Pressable style={[stylesr.button,active[2]]} onPress={() => {
            setRenderName("Music");
            setActive([,,stylesr.active]);
          }}>
            <Image style={stylesr.image} source={require("../Icons/music.png")}></Image>
          </Pressable>
          <Pressable style={[stylesr.button,active[3]]} onPress={() => {
            setRenderName("Account");
            setActive([,,,stylesr.active]);
          }}>
            <Image style={stylesr.image} source={require("../Icons/account.png")}></Image>
          </Pressable>
        </View>
      </View>


  )
}


const stylesr = StyleSheet.create({
  active:{
    backgroundColor:"#444444",
  },
  navbar: {
    width: "100%",
    height: 60,
    backgroundColor: "#242424",
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