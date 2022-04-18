import React from "react";

function Profile(){
  return(
    <React.Fragment>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row'
        }}>
        <img id="profile-image" src="https://images.squarespace-cdn.com/content/v1/5c5b582151f4d44f83bfedda/1579715977049-AP9KRKUIZJKMNRN1L8KE/ME+Logo_4945.jpg?format=1000w" />
        <h5>Me</h5>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </React.Fragment>
  )
}

export default Profile;