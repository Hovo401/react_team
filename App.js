import React from 'react';
import { SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar,ImageBackground } from 'react-native';
import { useState, useEffect } from 'react';
import { Render } from './src/Render/Rendering.js'
import { Navbar } from './src/Components/Navbar';
import { Audio } from 'expo-av';

const App = () => {
  const [renderName, setRenderName] = useState("Home");
  //=================== music player===================
  const [sound, setSound] = useState();
  const[on,setOn]=useState('');

  function playControl(mp3){
    if (on!=mp3){
      setOn(mp3);
      playSound(mp3);
    }
    else{
      setOn('');
      sound.unloadAsync(); 
    }
  }

  async function playSound(mp3) {
    await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( mp3);
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); 
  }
  

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);
  

  //===================================================
  return (
    <>

      <SafeAreaView style={{  flex: 1 }}>
        <ImageBackground
          style={{ flex: 1 }}
          source={require('./src/file/background_photo.jpg')}
          blurRadius={0}  >
          <View style={styles.container}>
            {Render({ renderName, setRenderName, playControl})}
          </View>

          <Navbar setRenderName={setRenderName} />
          </ImageBackground>
      </SafeAreaView>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0)",
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default App;