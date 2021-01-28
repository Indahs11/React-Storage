import React from 'react';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';

class App extends React.Component{
  render() {
    return(
      <div> <hr />
        <Link to ="/">Beranda</Link> |
        <Link to ="/karya">Karya</Link>    |
        <Link to ="/gallery">Gallery</Link>    |
        <Link to ="/cart">Cart</Link>   |
        <Link to ="/tentangsaya">Tentang Saya</Link>   |
        <Link to ="/kontak">Kontak</Link>
        <p><Utama/></p>
      </div>
    );
  }
}


export default App;
