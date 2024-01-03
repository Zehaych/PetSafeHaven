import React from 'react'

const About = () => {
  return (
    <div className = "AboutSection">
    <h1> About us </h1>
      <div className = "AboutContainer">
        <div className = "AboutContainerMission">
          <img src = "img/volunteer1.png" alt =""></img>
          <div className = "AboutContainerContent">
          <h1>Mission</h1>
          <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>
        </div>
      </div>
      <div className = "AboutContainer">
        <div className = "AboutContainerStory">
        <div className = "AboutContainerContent">
        <h1> Our Story</h1>
        <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
        <img src = "img/volunteer2.jpg" alt =""></img>
        </div>
      </div>

    </div>
  )
}

export default About