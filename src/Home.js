import React from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {

    const navigate =useNavigate();

    const Name="Sheikh Faisal Nadeem"

    const goToAbout =()=>{
        navigate("/about", { state : { Name : Name } }    )
    }


  return (
    <div className='Home' >
      <h2>Home Page</h2>
    <button onClick={goToAbout} >Go to About Page</button>
    </div>
  );
}

export default Home;
