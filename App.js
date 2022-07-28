import React from 'react';
import { SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar } from 'react-native';
import { useState, useEffect } from 'react';
import { Render } from './src/Render/Rendering.js'
import { Navbar } from './src/Components/Navbar';
import {Audio} from "expo-av"

const App = () => {
  const [renderName, setRenderName] = useState("Home");
  //=================== music player===================

  const [recording, setRecording]= useState();
  async function startRecordin(){
    try{
      console.log('miacav');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS:true,
        playsInSilentModeIOS:true,
      });
      console.log('start music...');
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recording.startAsync();
      setRecording(recording);
      console.log('serRecording');
    }catch(err){
      console.error("err ", err)
    }
  }
  async function stopRecording(){
    console.log("stoping");
    setRecording(undefined);
    await recording.stopAndunloadAsync();
    const url = recording.getURL();
    console.log('stop tr');
  }

  //===================================================
  return (
    <>
    <SafeAreaView style={{backgroundColor:"#010101",flex:1}}>

       <View style={styles.container}>
        {Render({renderName,setRenderName,recording, setRecording,stopRecording,startRecordin})}
       </View>

      <Navbar setRenderName={setRenderName} />
     </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#151515",
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default App;