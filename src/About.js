import React from 'react';
import { useLocation } from 'react-router-dom';

const About = () => {

      const location =useLocation();

      const Name=location.state.Name;

  return (
    <div className='About'>
      <h2>About Page</h2>
      <p>This is the About Page </p>
      <p>  My Name is {Name}  </p>
    </div>
  );
}

export default About;
