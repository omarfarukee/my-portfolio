import  { useEffect } from 'react';
import { FaHome } from 'react-icons/fa';
import './Navbar.css';

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
    <div className='flex justify-center mt-10'>
      <div>
        <ul className='p-5'>
          <li><a ><span><FaHome /></span><text>HOME</text></a></li>
          <li><a><span><FaHome /></span><text>HOME</text></a></li>
          <li className='active'><a><span><FaHome /></span><text>HOME</text></a></li>
          <li><a ><span><FaHome /></span><text>HOME</text></a></li>
          <li><a><span><FaHome /></span><text>HOME</text></a></li>
          <div id='marker'><span></span></div>
        </ul>
      </div>
    </div>
  );
};

export default Navber;
