import React from 'react';
import { View, Text, StyleSheet,Image,Pressable} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Font from 'expo-font';

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
        <SafeAreaView style={styles.container}>
            
            <View style={styles.firstDiv}>
                <Text style = {
                    [styles.text1]
                }>Account</Text>
                
            </View>
            <View style={styles.secondDiv}>
            <View style = {styles.accountPic}>
                <Image style = {styles.logo}source={require("../Icons/person.png")}></Image>
            </View>
            <View style={styles.thirdDiv}>
            <Text>Account</Text>
            <Pressable style={styles.button}>
            <Image style={styles.image} source={require("../Icons/account.png")}></Image>
            <Text>My songs</Text>
            <Image style={[styles.next, styles.image]} source={require("../Icons/account.png")}></Image>
          </Pressable>
            </View>
                
            </View>
            
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container:{
       
        flex:1,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    text1:{
        color: "white",
        marginLeft: 10,
    },
    // font:{
    //     fontFamily: 'OpenSans-Bold'
    // },
    image: {
   
        height: 30,
        width: 30
      },
    firstDiv:{
        justifyContent: 'center', 
        
        width: "100%",
        flex: 1,
        backgroundColor: "black",
        
    },
    secondDiv:{
        flex: 2,
        overflow:'visible',
        backgroundColor: "gray",
        justifyContent: 'center', 
        alignItems: 'center',
    },
    logo:{
        //justifyContent: 'center', 
    width:100,
    height:10,
    borderRadius :50,
    overflow:'visible'
   },
    accountPic:{
        
        
        justifyContent: 'center', 
        alignItems: 'center',
       overflow:'visible',

    },
    thirdDiv:{
        marginTop:50,
        flex:1,
        backgroundColor: "blue",
        width: "100%",
       
    }
});