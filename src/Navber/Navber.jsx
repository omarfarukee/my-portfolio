import  { useEffect } from 'react';
import { FaHome } from 'react-icons/fa';
import './Navbar.css';
import { BiSolidUserPin } from "react-icons/bi";
import { FaProjectDiagram } from "react-icons/fa";
import { BsBarChartLineFill } from "react-icons/bs";
import { BiSolidMessageDots } from "react-icons/bi";

const Navber = () => {
  useEffect(() => {
    const marker = document.getElementById('marker');
    const list = document.querySelectorAll('ul li');

    function moveInDetector(e) {
      marker.style.left = e.offsetLeft + 'px';
      marker.style.width = e.offsetWidth + 'px';
    }

    function activeLink() {
      list.forEach(item => item.classList.remove('active'));
      this.classList.add('active');
    }

    list.forEach(link => {
      link.addEventListener('click', e => {
        moveInDetector(e.target);
      });
    });
    const homeItem = document.querySelector('ul li.active');
    if (homeItem) {
      moveInDetector(homeItem);
    }
    list.forEach(item => item.addEventListener('click', activeLink));

    return () => {
      list.forEach(link => {
        link.removeEventListener('click', e => {
          moveInDetector(e.target);
        });
      });

      list.forEach(item => item.removeEventListener('click', activeLink));
    };
  }, []);

  return (
    <div className='mt-6'>
      <div>
        <ul className=''>
          <li><a href='#about'><span><BiSolidUserPin /></span><text>About</text></a></li>
          <li><a href='#projects'><span ><FaProjectDiagram /></span><text>Projects</text></a></li>
          <li className='active'><a href='#home'><span><FaHome /></span><text>HOME</text></a></li>
          <li><a href='#skills'><span><BsBarChartLineFill /></span><text>Skills</text></a></li>
          <li><a href='#contact'><span><BiSolidMessageDots /></span><text>Contact</text></a></li>
          <div id='marker'><span></span></div>
        </ul>
      </div>
    </div>
  );
};

export default Navber;
