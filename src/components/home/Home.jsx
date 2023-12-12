/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
import { HiMenuAlt1 } from "react-icons/hi";
import './Navbar.css'
import './Home.css'
import React, { useState, useEffect } from 'react';
import { FaHome } from "react-icons/fa";
import Skills from './../Skills/Skills';
const Home = () => {
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

  // const [hide, setHide] = useState('hidden')
  // const hides = () =>{
  //     setHide('block')
  // }
  const [isActive, setIsActive] = useState(false);

  const handleToggleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="home">
      <div className=" background">
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>

          <div className='flex justify-between mt-5'>

            <div className="body">
              {/* <div className="p-1 border rounded-lg w-11">
                      <button className="text-4xl text-white" onClick={hides}><HiMenuAlt1></HiMenuAlt1></button>
                      <div className={`${hide} text-white`}>
                        <div className="flex items-center">
                          <h1 className="items-center ml-2"><FaHome></FaHome></h1>
                          <span className="ml-5">HOME</span>
                        </div>
                      </div>     
                  </div> */}
              <div className={`container ${isActive ? 'active' : ''} border`}>
                <a href="#" className="togglebox" onClick={handleToggleClick}>
                  <span className="icon"></span>
                </a>
                <ul className="navItems">
                  <li>
                    <a href="" className="">
                      <i className="f" style={{ '--i': 1 }}><p><FaHome></FaHome></p></i>
                      <span className="home" style={{ '--g': 1 }}>home</span>
                    </a>
                  </li>
                  <li>
                    <a href="" className="f">
                      <i className="fa fa-home" style={{ '--i': 2 }}>##</i>
                      <span className="home" style={{ '--g': 2 }}>Skills</span>
                    </a>
                  </li>
                  <li>
                    <a href="" className="f">
                      <i className="fa fa-home" style={{ '--i': 3 }}>##</i>
                      <span className="home" style={{ '--g': 3}}>Projects</span>
                    </a>
                  </li>
                  <li>
                    <a href="" className="f">
                      <i className="fa fa-home" style={{ '--i': 4}}>##</i>
                      <span className="home" style={{ '--g': 4}}>home</span>
                    </a>
                  </li>
                  <li>
                    <a href="" className="f">
                      <i className="fa fa-home" style={{ '--i': 5 }}>##</i>
                      <span className="home" style={{ '--g': 5 }}>home</span>
                    </a>
                  </li>
                </ul>
              </div>

            </div>


            <div className='w-2/3 text-white border-t-2'>
              <h1></h1>
            </div>
            <div className='text-3xl text-white '>
              <h1>button</h1>
            </div>
          </div>


        </div>
      </div>
      <div id="animated-text" style={getAnimationStyles()}>Hi there</div>
    </div>
  );
};

export default Home;


