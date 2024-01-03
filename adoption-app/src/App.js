import './App.css';
import Navbar from './Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Adopt from './pages/adoption';
import Contact from './pages/procedure';
import Donate from './Footer/footer';
import ScrollToTop from './Navbar/ScrollToTop';
import Sidebar from './Navbar/Sidebar/Sidebar';
import { useState } from 'react';

function App() {

  const[isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Sidebar isOpen = {isOpen} toggle = {toggle}/>
      <Navbar toggle ={toggle}/>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/about" element = {<About/>} />
        <Route path = "/adoption" element = {<Adopt/>} />
        <Route path = "/procedure" element = {<Contact/>} />
      </Routes>
      <Donate />
    </BrowserRouter>
  );
}

export default App;
