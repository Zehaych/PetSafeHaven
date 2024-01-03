import React from 'react'
import {Nav, Navlink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElement'
import  Modal  from 'react-modal'
import { useState } from 'react'

const Navbar = ({toggle}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);

  return (
    <>
      <Nav>
        <Navlink to ="/">
           <h1>Pet Safe Haven</h1>
        </Navlink>
        <Bars onClick = {toggle}/>
        <NavMenu>
            <Navlink to = "/adoption" activeStyle>
                Gallery
            </Navlink>
            <Navlink to = "/procedure" activeStyle>
                Procedures
            </Navlink>
            <Navlink to = "/about" activeStyle>
                About us
            </Navlink>
        </NavMenu>
        <NavBtn>
            <Modal className = "Modal" isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)}>
              <form >
                <label> Username</label>
                <input type = "text" required />
                <label> Password</label>
                <input type = "text" required/>
                <label> Confirm Password</label>
                <input type = "text" required/>
                <label> Email Address</label>
                <input type = "Email Address" required/>
                <button> Submit</button>
              </form>
            </Modal>
            
            <NavBtnLink onClick={() => setModalIsOpen(true)}> Sign up</NavBtnLink>

            <Modal className = "Modal" isOpen={modalIsOpen2} onRequestClose={()=> setModalIsOpen2(false)}>
              <form onSubmit = {""}>
                <label> Username</label>
                <input type = "text" required/>
                <label> Password</label>
                <input type = "text" required/>
                <button> Submit </button>
              </form>
              
              </Modal>
              <NavBtnLink onClick={() => setModalIsOpen2(true)}> Sign in</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar