/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
import { FaRegFilePdf } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { HiMenuAlt1 } from "react-icons/hi";
import { BiSolidUserPin } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { GoProject } from "react-icons/go";
import { IoMdContacts } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Navbar.css'
import './Home.css'
import React, { useState, useEffect } from 'react';
import { FaHome } from "react-icons/fa";
import Parallax from "../Parallax/Parallax";
import Skills from './../Skills/Skills';
import Projects from "../Projects/Projects";
import About from "../About/About";
import Contact from "../Contact/Contact";
import AnimatedParallax from "../AnimatedParallax/AnimatedParallax";
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

  const getAnimationStyles = () => {
    switch (animationIndex) {
      case 0:
        return {
          fontSize: `10vw * ${Math.sin(Date.now() / 500) + 1.2}`,
        };
      case 1:
        const angle = Date.now() / 1000;
        const radius = 50;
        const xOffset = Math.cos(angle) * radius;
        const yOffset = Math.sin(angle) * radius;
        return {
          transform: `translate(${xOffset}px, ${yOffset}px) scale(0.5)`,
          borderRadius: '50%',
        };
      case 2:
        return {
          letterSpacing: '10px',
          animation: 'separateLetters 3s ease-in-out infinite',
        };
      default:
        return {};
    }
  };
  const [isActive, setIsActive] = useState(false);

  const handleToggleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="home">
      <div>
        <AnimatedParallax></AnimatedParallax>
        <div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quisquam? Esse nostrum perspiciatis accusantium, aut modi atque non sint consequatur amet vero, architecto possimus dolorem sed tempore alias, reprehenderit reiciendis.</p>
        </div>
      </div>
      <div data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0" className="pb-24" id="animated-text" style={getAnimationStyles()}>Hi there</div>
        <div>
        </div>
      <div className="hidden lg:block">
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
      <div id="contact" className="">
        <Contact></Contact>
      </div>
      
    </div>
  );
};

export default Home;


