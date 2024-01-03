import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
background: linear-gradient(90deg, orange, antiquewhite);
height: 80px;
display: flex;
justify-content: space-between;
padding: 0.5rem calc((100vw - 1000px) / 2);
z-index: 10;
border-bottom: 2px solid black;
`

export const Navlink = styled(Link)`
 color: black;
 text-shadow: 0px 0 0 #000, 0 1px 0 #000, 0 1px 0 #000, 1x 0 0 #000;
 display: flex;
 align-items: center;
 text-decoration: none;
 padding: 0 1rem;
 height: 100%;
 cursor: pointer;
 font-size: 22px;
 &.active{
    color: #fff;

`


export const Bars = styled(FaBars)`
display: none;
color: #000;

@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    
    &:hover{
        transition: all 0.2s ease-in-out;
        color: orange;
    }

    &.active{
        background-color: white;
    }
}
`
export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
    
@media screen and (max-width: 768px){
    display: none;
`


export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width: 768px){
    display: none;
}
`

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: linear-gradient(120deg, antiquewhite, #fff);
margin-right: 15px;
padding 10px 20px;
color: #000;
border: 2px solid #000;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background: orange;
    color: #010606;
}
`