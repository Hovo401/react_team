import React from 'react';
import { Home } from '../Components/Home';
import { Search } from '../Components/Search';
import { Music } from '../Components/Music';
import { Account } from '../Components/Account';
import { Settings } from '../Components/Settings';

export const Render = ({renderName,setRenderName}) => {

    const Rendr_stranic = {
        Home: () => { return <Home key={'home'} /> },
        Search: () => { return <Search key={'edewew'} /> },
        Music: () => { return <Music key={'hoewfewfme'} /> },
        Account: () => { return <Account setRenderName={setRenderName} key={'we'} /> },
        Settings: () => { return <Settings setRenderName={setRenderName} key={'tfgg'} /> },
    }
console.log(setRenderName);

    for (var data in Rendr_stranic) {
        if (data == renderName) {
            return Rendr_stranic[data]()
        }
    }
}
