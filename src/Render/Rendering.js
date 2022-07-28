import React from 'react';
import { Home } from '../Components/Home';
import { Search } from '../Components/Search';
import { Music } from '../Components/Music';
import { Account } from '../Components/Account';
import { Settings } from '../Components/Settings';
import {Music_list} from "../Components/Music_list"

export const Render = ({renderName,setRenderName,playControl}) => {

    const Rendr_stranic = {
        Home: () => { return <Home key={'home'} /> },

        Search: () => { return <Search key={'edewew'} playControl={playControl}/> },
        Music: () => { return <Music setRenderName={setRenderName} key={'hoewfewfme'} playControl={playControl} /> },
        Account: () => { return <Account setRenderName={setRenderName} key={'we'} /> },
        Settings: () => { return <Settings setRenderName={setRenderName} key={'tfgg'} /> },
        Music_list:()=>{return <Music_list  key={'trhgergre'} playControl={playControl}></Music_list>}
    }

    for (var data in Rendr_stranic) {
        if (data == renderName) {
            return Rendr_stranic[data]()
        }
    }
}
