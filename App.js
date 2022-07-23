import React from 'react';
import { SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar } from 'react-native';
import { useState, useEffect } from 'react';
// your components
import { Navbar } from './src/Components/Navbar';
import { Home } from './src/Components/Home';
import { Search } from './src/Components/Search';
import { Music } from './src/Components/Music';
import { Account } from './src/Components/Account';

//========= Render Stranic =========
const Rendr_stranic={
Home :()=> { return <Home key={'home'}/> },
Search :()=> { return <Search key={'edewew'}/> },
Music :()=> { return <Music key={'hoewfewfme'}/> },
Account :()=> { return <Account key={'we'}/> },
}
 const Render = (Name_stranic)=>{
   for(var data in Rendr_stranic){
     if (data==Name_stranic){
       return Rendr_stranic[data]()
     }
   }
 }
//==================================

const App = () => {


  const [renderName, setRenderName] = useState("Home");


  return (
    <>
      <View style={styles.container}>
     { Render(renderName)}
      </View>
      
      <Navbar setRenderName={setRenderName} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default App;