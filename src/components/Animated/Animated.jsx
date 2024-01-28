/* eslint-disable no-case-declarations */
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import '../home/Home.css'
import gsap from "gsap";
const Animated = () => {
  const comp = useRef(null)
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3
      }).from(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "+=30",
        stagger: 0.5,
      })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        })
    }, comp)
    return () => ctx.revert()
  }, [])
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

  return (
    <div>
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="absolute top-0 left-0 z-10 flex flex-col w-full h-screen gap-10 p-10 tracking-tight bg-gray-50">
        <h1 id="title-1" className="mt-32 lg:mt-0 text-7xl lg:text-9xl">Welcome</h1>
        <h1 id="title-2" className=" text-7xl lg:text-9xl">to my</h1>
        <h1 id="title-3" className=" text-7xl lg:text-9xl">Portfolio</h1>
      </div>
      
      <div className="h-screen bg-gray-950">

        <div className="flex justify-center place-items-center">
          <h1 id="welcome" className="font-bold text-gray-100 text-9xl">
            <div data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0" className="" id="animated-text" style={getAnimationStyles()}>Hi there</div>
          </h1>
        </div>
      </div>    
    </div>
    </div>
  );
};

export default Animated;