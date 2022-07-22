
import {useState, useRef } from 'react'
import {Animated,StyleSheet, Text, View ,TextInput,Button,Image,SafeAreaView } from 'react-native';

export const Navbar=()=>{
    
  

    return(

        <View style={stylesr.navbar}>


          
            <View style={stylesr.alignitems}>
                <View  style={stylesr.button}>
                <Image style={stylesr.image} source={require("../Image/itunes.png")}></Image>
                </View>
                <View  style={stylesr.button}>
                <Image style={stylesr.image} source={require("../Image/itunes.png")}></Image>
                </View>
                <View  style={stylesr.button}>
                <Image style={stylesr.image} source={require("../Image/itunes.png")}></Image>
                </View>
            </View>
        </View>
    )
}


  const stylesr = StyleSheet.create({
    navbar:{
        width:"100%",
        height:60,
        backgroundColor:"#770022",
        alignItems:"center",
        justifyContent:"center",
    },
    alignitems:{
        flexWrap:"wrap",  
        height:50,
    },
    button:{
        color:"#fff",
        width:70,
        height:50,
        // backgroundColor:"#aaa",
        // borderColor:"#000",
        // borderWidth:5,
        marginHorizontal:20,
        alignItems:"center",
        justifyContent:"center",
        
    },
    image:{
        height:50,
        width:50
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
    backgroundColor: "powderblue"
  },
  fadingText: {
    fontSize: 28
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16
  }
});