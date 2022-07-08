import './App.css';
import React, { useRef, forwardRef } from "react";
import Navbar from "./components/NavbarPhone";
import AboutMe from "./components/AboutMe";
import Posts from "./components/Posts";
import Contact from "./components/Contact";
import NavbarPhone from './components/NavbarPhone';
import NavbarWeb from './components/NavbarWeb';
import Header from './components/Header';
import Quote from './components/Quote';
import ScrollToTop from './components/ScrollToTop';

function App() {

  const workRef = useRef();
  const aboutMeRef = useRef();
  const contactRef = useRef();

  function workBackClick() {
    workRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  function aboutMeBackClick() {
    aboutMeRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  function contactBackClick() {
    contactRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (

    <div className="App bg-black">
      <ScrollToTop />
      <div className="grid lg:grid-cols-6 justify-center fadeIn">
        <Header />
        <div className="lg:col-span-3 justify-center">
          <NavbarWeb onWorkClick={workBackClick} onAboutMeClick={aboutMeBackClick} onContactClick={contactBackClick}/>
        </div>
      </div>
      <Quote />  
      <NavbarPhone onWorkClick={workBackClick} onAboutMeClick={aboutMeBackClick} onContactClick={contactBackClick}/>
      <AboutMe ref={aboutMeRef}/>
      <Posts ref={workRef} />
      <Contact ref={contactRef}/> 
    </div>  
  );
}

export default App;
