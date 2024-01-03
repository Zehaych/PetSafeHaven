import React from 'react'
import { Navlink } from '../Navbar/NavbarElement';

const Home = () => {
    const myStyle={
        backgroundImage: 
        "url('https://img.freepik.com/free-vector/adopt-pet-concept_23-2148523582.jpg?w=2000')",
        height:'100vh',
        marginTop:'10px',
        fontSize:'25px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'flex-start'
    };

    function handleScroll() {
      window.scroll({
        top: document.body.offsetHeight,
        left: 0, 
        behavior: 'smooth',
      });
    }
  


  return (
    // <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
    //   <h1> Home </h1>
    // </div>
    <div style={myStyle}>
      <div className = "home">
        <div className="home-box">
            <h1> Adopt </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <Navlink className= "btn" to = "/adoption" activeStyle> Adopt Now! </Navlink>
        </div>

        <div className="home-box2">
            <h1> 24/7 Rescues</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <button type="button" onClick={handleScroll}>Contact us</button>
         </div>

        <div className="home-box3">
            <h1> Volunteer </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <Navlink className= "btn" to = "/procedure" activeStyle> Volunteer Now! </Navlink>
        </div>
      </div>
    </div>
  )
}

export default Home
