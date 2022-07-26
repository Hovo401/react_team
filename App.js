import React from 'react';
import { SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar } from 'react-native';
import { useState, useEffect } from 'react';
import { Render } from './src/Render/Rendering.js'
import { Navbar } from './src/Components/Navbar';


const App = () => {
  const [renderName, setRenderName] = useState("Home");

  return (
    <>
    <SafeAreaView style={{backgroundColor:"#010101",flex:1}}>

       <View style={styles.container}>
        {Render(renderName)}
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