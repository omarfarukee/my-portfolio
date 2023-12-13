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
const Home = () => {
  useEffect(() =>{
    AOS.init({duration: 2000});
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
      <div className=" background">
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>

          <div className='flex justify-between mt-5'>

            <div data-aos="fade-right" className="body">
              <div className={`container ${isActive ? 'active' : ''}`}>
                <div className="flex justify-center mb-5">
                  <div>
                   {!isActive ? <button className="text-4xl text-white " onClick={handleToggleClick}>
                      <HiMenuAlt1 />
                    </button>:
                    <button className="text-3xl text-white border-b-2" onClick={handleToggleClick}>
                      <ImCross />
                    </button>}
                  </div>
                </div>

                <ul className="w-14 navItems">
                  <li className="w-full mb-8 ">
                    <a href="" className="flex w-full h-5">
                      <i className="pb-6 pl-4 pr-10 text-2xl " style={{ '--i': 1 }}><p><FaHome></FaHome></p></i>
                      <span className="h-5 text-sm " style={{ '--g': 1 }}>home</span>
                    </a>
                  </li>
                  <li className="w-full mb-8">
                    <a href="" className="flex w-full h-5">
                      <i className="pb-6 pl-4 pr-10 text-2xl pt-15" style={{ '--i': 2 }}><p><GiSkills />
                      </p></i>
                      <span className="h-5 text-sm" style={{ '--g': 2 }}>Skills</span>
                    </a>
                  </li>
                  <li className="w-full mb-8">
                    <a href="" className="flex w-full h-5">
                      <i className="pb-6 pl-4 pr-10 text-2xl pt-15" style={{ '--i': 3 }}><p><GoProject /></p></i>
                      <span className="h-5 text-sm" style={{ '--g': 3 }}>Projects</span>
                    </a>
                  </li>
                  <li className="w-full mb-8">
                    <a href="" className="flex w-full h-5">
                      <i className="pb-6 pl-4 pr-10 text-2xl pt-15" style={{ '--i': 4 }}><p><BiSolidUserPin /></p></i>
                      <span className="h-5 text-sm" style={{ '--g': 4 }}>About</span>
                    </a>
                  </li>
                  <li className="w-full mb-8">
                    <a href="" className="flex w-full h-5">
                      <i className="pb-6 pl-4 pr-10 text-2xl pt-15" style={{ '--i': 5 }}><p><IoMdContacts /></p></i>
                      <span className="h-5 text-sm" style={{ '--g': 5 }}>Conatact</span>
                    </a>
                  </li>
                </ul>
              </div>

            </div>


            <div data-aos="fade-down" data-aos-duration="1000" className='w-2/3 ml-6 text-white border-t-2'>
              <h1></h1>
            </div>
            <div data-aos="fade-left" className='text-white '>
              <button className="flex items-center p-2 font-bold rounded-lg btn hover:bg-green-300 hover:text-black"><FaRegFilePdf />Resume</button>
            </div>
          </div>


        </div>
      </div>
      <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0" id="animated-text" style={getAnimationStyles()}>Hi there</div>
    </div>
  );
};

export default Home;


