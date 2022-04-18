import React from "react";
import Post from "./Post.js";

const mainFeed = [
  {
    names: 'Thato and Haley',
    location: '3A',
    image: 'https://static.onecms.io/wp-content/uploads/sites/6/2020/03/25/bob-the-builder.jpg'
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    image: 'https://www.gannett-cdn.com/presto/2020/07/10/USAT/900b5a80-2cb7-462b-972f-e887b9e8db00-Stucka_Mike_FL.jpg?crop=1169,1169,x0,y195'
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    image: 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_09/1542746/rebecca-this-is-us-today-main-200226.jpg'
  }
];


function Feed(){
  return(
    <React.Fragment>
      {mainFeed.map((post, index) => 
        <Post names={post.names}
          location = {post.location}
          image={post.image}
          key = {index}/>
      )}
    </React.Fragment>
  )
}

export default Feed;