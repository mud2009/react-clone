import React from "react";

function Navbar(){
  return(
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/">React clone site</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mr-auto">
            <a className="nav-item nav-link" href="/Treats">Feed</a>
          </div>
          <div class="navbar-nav">
            <a class="nav-item nav-link" href="/Account">Account</a>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Navbar;