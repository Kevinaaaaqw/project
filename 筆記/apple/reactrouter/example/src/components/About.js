import React from 'react';
 
const About = (props) => {
    let aa = props.match.params.apple
    return (
       <div>
          <h1>About {aa}</h1>
          <p>About US page body content</p>
       </div>
    );
}
 
export default About;