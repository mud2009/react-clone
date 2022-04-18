import React from "react";
import Navbar from "./Navbar.js"
import Feed from "./Feed.js"
import Profile from "./Profile.js"

function App(){
  return ( 
    <React.Fragment>
      <Navbar />
      <div className="row">
        <div className="col-4">
          <Profile />
        </div>
        {/* <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }}> */}
        <div className="col-4">
          <Feed />
        </div>
        <div className="col-4">
          
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;