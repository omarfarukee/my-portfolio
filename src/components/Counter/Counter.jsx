import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import './Counter.css'
import project from '../../assets/counter-img/project.png'
import github from '../../assets/counter-img/pngwing.com (2).png'
import clock from '../../assets/counter-img/fast-time-clock-ui-icon-sign-symbol-3d-rendering-removebg-preview.png'
import { GoProject } from "react-icons/go";
import { FaGithub, FaUserClock } from "react-icons/fa";

const Counter = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)}>
            <div className="pt-10 pb-10 bg-black">
                <div className='flex justify-center pt-12 mb-10' data-aos="fade-down">
                    <h1 className='text-3xl font-bold text-white'>Dedication</h1>
                </div>
                <div className="flex items-center justify-around p-5 lg:h-96"data-aos='fade-up'>
                    <div className="">
                        <div className="flex">
                            <img src={project} className="rounded-full w-52 " alt="" />
                            {counterOn &&
                                <div className="mt-5 ml-2"><p className="mt-2 font-extrabold text-7xl nion"><CountUp start={0} end={25} duration={4} delay={0} />+</p>
                                    <p className="flex items-center gap-2 mt-2 font-bold text-green-200 uppercase"><span className="text-lg text-green-200 animate-bounce"><GoProject /></span>Poroject Complete
                                    </p></div>
                            }
                        </div>

                    </div>
                    <div className="">
                        <div className="flex">
                            <img src={clock} className="rounded-full w-44" alt="" />
                            {counterOn &&
                                <div className="mt-5 ml-2"><p className="mt-2 font-extrabold text-7xl nion-2"><CountUp start={0} end={2500} duration={7} delay={0} />+</p>
                                    <p className="flex items-center gap-2 mt-2 font-bold text-pink-300 uppercase"><span className="text-lg text-pink-300 animate-bounce"><FaUserClock/></span>Learnig Hours</p></div>
                            }
                        </div>

                    </div>
                    <div className="">
                        <div className="flex">
                            <img src={github} className="rounded-full w-36" alt="" />
                            {counterOn &&
                                <div className="mt-5 ml-2"><p className="mt-2 font-extrabold text-7xl nion-3"><CountUp start={0} end={905} duration={5} delay={0} />+</p>
                                    <p className="flex items-center gap-2 mt-2 font-bold text-indigo-300 uppercase"><span 
                                    className="text-lg text-indigo-300 animate-bounce"><FaGithub/></span>GitHub commits</p></div>
                            }
                        </div>

                    </div>

                </div>

            </div>
        </ScrollTrigger>
    );
};

export default Counter;