import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import mountainThree from "../../assets/Parallax/mountain-3.svg"
import mountainTwo from "../../assets/Parallax/mountain-2.svg"
import mountainOne from "../../assets/Parallax/mountain-1.svg"
import suns from "../../assets/Parallax/sun.svg"
import cloudsB from "../../assets/Parallax/clouds-bottom.svg"
import cloundsl from "../../assets/Parallax/clouds-left.svg"
import cloundsR from "../../assets/Parallax/clouds-right.svg"
import star from "../../assets/Parallax/stars.svg"
import moon from "../../assets/Parallax/pngwing.com (4).png"
import './AniamtedParallax.css'
const AnimatedParallax = () => {
    const [background, setBackground] = useState(20)

    const parallaxRef = useRef(null);
    const mountain3 = useRef(null);
    const mountain2 = useRef(null);
    const mountain1 = useRef(null);
    const cloudsBottom = useRef(null);
    const cloudsLeft = useRef(null);
    const cloudsRight = useRef(null);
    const stars = useRef(null);
    const sun = useRef(null);
    const copy = useRef(null);
    const btn = useRef(null);
    const moons = useRef(null);
    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            var tl = gsap.timeline({
                defaults: { duration: 1 },
                scrollTrigger: {
                    trigger: parallaxRef.current,
                    start: "top top",
                    end: "5000 bottom",
                    scrub: true,
                    pin: true,
                    onUpdate: (self) => {
                        setBackground(Math.ceil(self.progress * 100 + 20))
                    },
                },
            });
            tl.to(
                mountain3.current,
                {
                    y: "-=80",
                },
                0
            );
            tl.to(
                mountain2.current,
                {
                    y: "-=30",
                },
                0
            );
            tl.to(
                mountain1.current,
                {
                    y: "+=50",
                },
                0
            );
            tl.to(
                stars.current,
                {
                    top: 0,
                },
                0.5
            );
            tl.to(
                cloudsBottom.current,
                {
                    opacity: 0,
                    duration: 0.5
                },
                0
            );
            tl.to(
                cloudsLeft.current,
                {
                    x: "-20%",
                    opacity: 0,
                },
                0
            );
            tl.to(
                cloudsRight.current,
                {
                    x: "20%",
                    opacity: 0,
                },
                0
            );
            tl.to(
                sun.current,
                {
                    y: "+=210",
                },
                0
            );
            tl.to(
                copy.current,
                {
                    y: "-80%",
                    opacity: 2
                },
                0
            );
            tl.to(
                moons.current,
                {
                    y: "-100%",
                    opacity: 2
                },
                0
            );
            tl.to(
                btn.current,
                {
                    opacity: 1,
                },
                1.5
            );
        });
        return () => ctx.revert();
    }, []);

    return (
        <div>
            <div className="parallax-outer">
                <div ref={parallaxRef} style={{ background: `linear-gradient(#0F2B9C, #673D7D ${background}%, #A74A67, #EDFC54 )` }} className='parallax'>
                    <img ref={mountain3} className='mountain-3' src={mountainThree} />
                    <img ref={mountain2} className='mountain-2' src={mountainTwo} />
                    <img ref={mountain1} className='mountain-1' src={mountainOne} />
                    <img ref={sun} className='sun' src={suns} />
                    <img ref={cloudsBottom} className='clouds-bottom' src={cloudsB} />
                    <img ref={cloudsLeft} className='clouds-left' src={cloundsl} />
                    <img ref={cloudsRight} className='clouds-right' src={cloundsR} />
                    <img ref={stars} className='stars' src={star} />
                    <div ref={moons} className='moons'>
                         <img className='w-72' src={moon} alt="" />
                    </div>
                    <div ref={copy} className="copy">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimatedParallax;