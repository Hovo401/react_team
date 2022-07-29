import React from 'react';
import { Home } from '../Components/Home';
import { Search } from '../Components/Search';
import { Music } from '../Components/Music';
import { Account } from '../Components/Account';
import { Settings } from '../Components/Settings';
import {Music_list} from "../Components/Music_list"
import { SafeAreaView, View, StyleSheet, StatusBar, ImageBackground ,Animated} from 'react-native';

export const Render = ({renderName,setRenderName,playControl,setMainPosition}) => {

    const Rendr_stranic = {
        Home: () => { return <Home   setMainPosition={setMainPosition}  setRenderName={setRenderName}  key={'home'} /> },
        Search: () => { return <Search   setMainPosition={setMainPosition}  setRenderName={setRenderName}   key={'edewew'} playControl={playControl}/> },
        Music: () => { return <Music   setMainPosition={setMainPosition}  setRenderName={setRenderName}   setRenderName={setRenderName} key={'hoewfewfme'} playControl={playControl} /> },
        Account: () => { return <Account   setMainPosition={setMainPosition}   setRenderName={setRenderName} key={'we'} /> },
        Settings: () => { return (
            <View style={{position :"absolute",bottom:60,width:"100%",bottom:60,top: StatusBar.currentHeight}}>
        <Settings  setMainPosition={setMainPosition} setRenderName={setRenderName} key={'tfgg'} />
        </View>
        );
     },
        Music_list:()=>{return (
            <View style={{position :"absolute",bottom:60,width:"100%",bottom:60,top: StatusBar.currentHeight}}>
                 <Music_list  key={'trhgergre'} playControl={playControl}  setRenderName={setRenderName}  />
                 </View>
        )}
    }

    for (var data in Rendr_stranic) {
        if (data == renderName) {
            return Rendr_stranic[data]()
        }
    }
}
