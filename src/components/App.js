import React from "react";
import Navbar from "./Navbar.js"
import Feed from "./Feed.js"

function App(){
  return ( 
    <React.Fragment>
      <Navbar />
      <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
      }}>
        <Feed />
      </div>
    </React.Fragment>
  );
}

export default App;