import React from 'react';
import { FlatList, ScrollView, Image, SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar } from 'react-native';

//========================
const DATA = [];

// for (let i = 1; i <= 10; i++) {
//   DATA.push(  <View style={styles.item}>
//     <Text style={styles.title}>Title</Text>
//   </View>);
// }

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};




//========================

export const Home = () => {

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.contain}>
        <Image style={styles.image1} source={require("../Icons/mainLogo.png")}></Image>
        <Image style={styles.logo} source={require("../Icons/person.png")}></Image>
      </View>
      <View style={{ flex: 5 }}>
      <Text style={
          [styles.text1]
        }>Popular playlists</Text>
        <ScrollView horizontal={true} >
   
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
   
  
  </ScrollView>
        <Text style={
          [styles.text1]
        }>Today's hits</Text> 
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  contain: {
    flex: 1,
    alignItems: "flex-end",
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  item: {
    backgroundColor: 'rgba(.2,.2,.2,.6)',
    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 32,
  },
  text1: {
    color: "white",
    marginLeft: 10,
    marginVertical: 10,
    fontSize: 25,
  },
  image1: {
    resizeMode: "contain",
    height: 100,
    width: 200


  },
  logo: {
    //justifyContent: 'center', 
    marginVertical: 5,
    height: 100,
    width: 100,
    borderRadius: 50,

  },
});