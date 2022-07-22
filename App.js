import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Text_test} from './src/Components/Text_test';
import {Navbar} from './src/Components/Navbar'
import {useEffect} from 'react'
import axios from 'axios'
export default function App() {
  // useEffect(()=>{
  //   (async function(){
  //     const headers = {
  //       'Accept': '*/*',
  //       'Accept-Encoding': 'gzip, deflate, br',
  //       'Accept-Language': 'en-US,en;q=0.9',
  //       'Access-Control-Allow-Origin' : '*',
  // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  //       'Connection': 'keep-alive',
  //       'Content-Length': '25',
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //       'Cookie': '_ym_uid=1658483642634109205; _ym_d=1658483642; _ym_isad=2; _ga=GA1.2.1657865156.1658483642; _gid=GA1.2.2120285770.1658483642; _gat_gtag_UA_113473729_2=1',
  //       'Host': 'vrit.me',
  //       'Origin': 'https://vrit.me',
  //       'Referer': 'https://vrit.me/?q=asd',
  //       'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
  //       'sec-ch-ua-mobile': '?0',
  //       'sec-ch-ua-platform': "macOS",
  //       'Sec-Fetch-Dest': 'empty',
  //       'Sec-Fetch-Mode': 'cors',
  //       'Sec-Fetch-Site': 'same-origin',
  //       'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36',
  //       'X-Requested-With': 'XMLHttpRequest',
  //   };

  //   await axios.post(
  //       'https://vrit.me/action.php',
  //       {
  //         method: 'audio.search',
  //         q: 'miban'
  //       },
  //       {headers}
  //       ).then(response => {
  //           console.log("Success ========>", response);
  //       })
  //       .catch(error => {
  //           console.log("Error ========>", error);
  //       }
  //   )
      
  //   })()
  // })
  return (
    <>
    <View style={styles.container}>
      <Text_test key={465}/>
      
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
