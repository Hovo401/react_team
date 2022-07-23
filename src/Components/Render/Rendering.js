import React from 'react';
import { Navbar } from '../Navbar';
import { Home } from '../Home';
import { Search } from '../Search';
import { Music } from '../Music';
import { Account } from '../Account';


export const Render = (Name_stranic) => {

    const Rendr_stranic = {
        Home: () => { return <Home key={'home'} /> },
        Search: () => { return <Search key={'edewew'} /> },
        Music: () => { return <Music key={'hoewfewfme'} /> },
        Account: () => { return <Account key={'we'} /> },
    }

    for (var data in Rendr_stranic) {
        if (data == Name_stranic) {
            return Rendr_stranic[data]()
        }
    }
}
