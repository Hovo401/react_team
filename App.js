import React from 'react';
import { SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar } from 'react-native';
import { useState, useEffect } from 'react';
import { Render } from './src/Render/Rendering.js'
import { Navbar } from './src/Components/Navbar';


const App = () => {
  const [renderName, setRenderName] = useState("Home");

  return (
    <>
      <SafeAreaView style={styles.container}>
        {Render(renderName)}
      </SafeAreaView>

      <Navbar setRenderName={setRenderName} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default App;