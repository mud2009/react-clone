import React from "react";
import PropTypes from "prop-types";

function Post(props){
  return(
    <React.Fragment>
      <h3>{props.names} - {props.location}</h3>
      <img src={props.image} />
    </React.Fragment>
  )
}

Post.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  image: PropTypes.string
}

export default Post;