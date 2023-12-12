/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */




// const Home = () => {
//   return (
//     <div className="home">
//       <div className="background">
//         <div className="lines">
//           <div className="line"></div>
//           <div className="line"></div>
//           <div className="line"></div>
//         </div>
//       </div>
//       <div id="animated-text">Hi there</div>
//     </div>
//   );
// };

// export default Home;
import React, { useState, useEffect } from 'react';

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
          animation: 'separateLetters 2s ease-in-out infinite',
        };
      default:
        return {};
    }
  };

  return (
    <div className="home">
      <div className="background">
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <div id="animated-text" style={getAnimationStyles()}>Hi there</div>
    </div>
  );
};

export default Home;


