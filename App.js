import React from 'react';
import { SafeAreaView, View, StyleSheet, StatusBar, ImageBackground ,Animated} from 'react-native';
import { useState, useEffect ,useRef} from 'react';
import { Render } from './src/Render/Rendering.js'
import { Navbar } from './src/Components/Navbar';
import { Audio } from 'expo-av';

const App = () => {
  const [renderName, setRenderName] = useState("");
  //=================== music player===================
  const [sound, setSound] = useState();
  const [on, setOn] = useState('');

  function playControl(mp3) {
    if (on != mp3) {
      setOn(mp3);
      playSound(mp3);
    }
    else {
      setOn('');
      sound.unloadAsync();
    }
  }

  async function playSound(mp3) {
    await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(mp3);
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }


  React.useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);


  //===================================================
  const [mainPosition,setMainPosition]=useState(0);

//   const fadeAnim = useRef(new Animated.Value(0)).current;

//   const fadeIn = (info) => {
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration:500,
//       useNativeDriver: true,
//     }).start();
//   };

//   useEffect(()=>{
   
//      fadeIn();
//   console.log(fadeAnim);
// },[mainPosition]);

  return (
    <>

      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          style={{ flex: 1 }}
          source={require('./src/file/background_photo.jpg')}
          blurRadius={1}  >
          <Animated.View style={[styles.main,{  left: mainPosition+'%' }]}>
            <View style={styles.container}>
        
              {Render({ renderName: "Home", setRenderName, playControl,setMainPosition })}
            </View>
            <View style={styles.container}>
              {Render({ renderName: "Search", setRenderName, playControl ,setMainPosition})}
            </View>
            <View style={styles.container}>
              {Render({ renderName: "Music", setRenderName, playControl ,setMainPosition})}
            </View>
            <View style={styles.container}>
              {Render({ renderName: "Account", setRenderName, playControl,setMainPosition })}
            </View>
            <View style={styles.container}>
              {Render({ renderName: "Settings", setRenderName, playControl,setMainPosition })}
            </View>
            <View style={styles.container}>
              {Render({ renderName: "Music_list", setRenderName, playControl,setMainPosition })}
            </View>
            <View style={styles.container}>
             
            </View>
          </Animated.View>
          <Navbar setRenderName={setRenderName } setMainPosition={setMainPosition} />
          
            { //Render({ renderName:renderName, setRenderName, playControl,setMainPosition })}
}
        </ImageBackground>
      </SafeAreaView>

    </>
  );
  
  
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "rgba(0,0,0,0)",
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  main: {
    position:"absolute",
    width: "700%",
    height:"100%",
    flexDirection: "row",
  }
});



export default App;