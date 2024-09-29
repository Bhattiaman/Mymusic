import React from 'react';
import './Css/style.css';
import './Css/utility.css';
import Left from './Compoents/Left';
// import Header from './Compoents/Header';
import Right from './Compoents/Right';

import Api from './Playlist/api';

const App = () => {
  

  return (
    <>
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </div>
      {/* <Header /> */}
      <Api/>
      
      <div className="container flex bg-black">
        <Left />
        <Right />

        
      </div>
    </>
  );
}

export default App;
