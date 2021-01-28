import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Beranda from './beranda';
import Karya from './karya';
import TentangSaya from './tentangsaya';
import Kontak from './kontak';
import Gallery from './gallery';
import Cart from './cart'

const Utama = () => (
    <switch>
        <Route exact path = "/" component={Beranda} />
        <Route path = "/karya" component={Karya}/>
        <Route path = "/gallery" component={Gallery}/>
        <Route path = "/cart" component={Cart}/>
        <Route path = "/tentangsaya" component={TentangSaya}/>
        <Route path = "/kontak" component={Kontak}/>
    </switch>
)

export default Utama;