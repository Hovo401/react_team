import React from 'react';
import { SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar,ImageBackground } from 'react-native';
import { useState, useEffect } from 'react';
import { Render } from './src/Render/Rendering.js'
import { Navbar } from './src/Components/Navbar';


const App = () => {
  const [renderName, setRenderName] = useState("Home");
  //=================== music player===================


  //===================================================
  return (
    <>

      <SafeAreaView style={{  flex: 1 }}>
        <ImageBackground
          style={{ flex: 1 }}
          source={require('./src/file/background_photo.jpg')}
          blurRadius={10}  >
          <View style={styles.container}>
            {Render({ renderName, setRenderName, })}
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