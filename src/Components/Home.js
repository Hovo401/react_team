import React from 'react';
import { FlatList, ScrollView, Image, SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar } from 'react-native';

//========================
const DATA = [];

for (let i = 1; i <= 10; i++) {
  DATA.push('arbitrary datam #' + (i + 1));
}



//========================

export const Home = () => {

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.contain}>
        <Image style={styles.image1} source={require("../Icons/mainLogo.png")}></Image>
        <Image style={styles.logo} source={require("../Icons/person.png")}></Image>
      </View>
      <View style={{ flex: 4 }}>
      <Text style={
          [styles.text1]
        }>Popular playlists</Text>
        <ScrollView horizontal={true} >
        
        {DATA.map((item, index) => {
                    return (
                      <View style={styles.item} key = {index}>
                      <Text style={styles.title}>{item}</Text>
                    </View>
                    );
                })}
   
  
  </ScrollView>
        
      </View>
      <View style={{ flex: 4 }}>
      <Text style={
          [styles.text1]
        }>Today's hits</Text> 
        <ScrollView horizontal={true} >
        
        {DATA.map((item, index) => {
                    return (
                      <View style={styles.item} key = {index}>
                      <Text style={styles.title}>{item}</Text>
                    </View>
                    );
                })}
   
  
  </ScrollView>
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
    height: 300,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 12,
    color: "white",
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