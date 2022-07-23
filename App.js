import { StyleSheet, Text, View } from 'react-native';
import {Text_test} from './src/Components/Text_test';
import {Navbar} from './src/Components/Navbar'
import {useEffect} from 'react'
import axios from 'axios'

export default function App() {
  
  return (
    <>
    <View style={styles.container}>
      {/* <Text_test key={465}/> */}
      <StatusBar style="auto" />
      
    </View>
    <Navbar key="navbar"></Navbar>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
