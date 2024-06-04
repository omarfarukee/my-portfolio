/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css'
import React, { useState, useEffect } from 'react';
import Parallax from "../Parallax/Parallax";
import Skills from './../Skills/Skills';
import Projects from "../Projects/Projects";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Animated from "../Animated/Animated";
import Counter from '../Counter/Counter';
import Footer from '../../Footer/Footer'
import ScrollToTop from 'react-scroll-to-top';
import { FaArrowTurnUp } from 'react-icons/fa6';
const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  })
  const [animationIndex, setAnimationIndex] = useState(0);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setAnimationIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);
    return () => clearInterval(animationInterval);
  }, []);
  return (
    <div className="w-full">
      <ScrollToTop
        className='hidden lg:block'
      smooth top="500" 
        component={<button className="p-3 font-bold text-black bg-white rounded-md border-arrow"><span ><FaArrowTurnUp className="animate-bounce" /></span></button>}
        width="50"/>
      <div className="" id='home'>
        <Animated></Animated>
      </div>
      <div>
      </div>
      <div className="">
        <Parallax></Parallax>
      </div>
      <div id="skills">
        <Skills></Skills>
      </div>
      <div id="projects">
        <Projects></Projects>
      </div>
      <div id="about">
        <About></About>
      </div>
      <div id='counter'>
        <Counter></Counter>
      </div>
      <div id="mail" className="">
        <Contact></Contact>
      </div>
      <div id='footer'>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;


