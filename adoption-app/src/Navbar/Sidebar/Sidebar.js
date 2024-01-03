import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, 
    SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'
import  Modal  from 'react-modal'
import { useState } from 'react'

const Sidebar = ({isOpen, toggle}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);

  return (
    <SidebarContainer isOpen={isOpen} onClick = {toggle}>
      <Icon onclick = {toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink to = "/adoption" onClick={toggle}>
                Adopt
            </SidebarLink>
            <SidebarLink to = "/procedure" onClick={toggle}>
                Procedure
            </SidebarLink>
            <SidebarLink to = "/about" onClick={toggle}>
                About us
            </SidebarLink>
       </SidebarMenu>

        <SideBtnWrap>
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

              </form>
              <button className='btn' onClick={() => setModalIsOpen(false)}>Submit</button>
            </Modal>
            <SidebarRoute onClick={() => setModalIsOpen(true)}> Sign up</SidebarRoute>

            <Modal className = "Modal" isOpen={modalIsOpen2} onRequestClose={()=> setModalIsOpen2(false)}>
              <form onSubmit = {""}>
                <label> Username</label>
                <input type = "text" required/>
                <label> Password</label>
                <input type = "text" required/>
              </form>
              <button className='btn' onClick={() => setModalIsOpen2(false)}>Submit</button>
              </Modal>
              <SidebarRoute onClick={() => setModalIsOpen2(true)}> Sign in</SidebarRoute>
            {/* <SidebarRoute to = "/signin"> Sign In</SidebarRoute> */}
        </SideBtnWrap>
            
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
