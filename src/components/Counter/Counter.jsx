import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import './Counter.css'
const Counter = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)}>
            <div className="pt-10 pb-10 bg-black">
                <div className='flex justify-center pt-12 mb-10' data-aos="fade-down">
                    <h1 className='text-3xl font-bold text-white'>Dedication</h1>
                </div>
                <div>
                    <div className="flex justify-center">
                        <div className="p-3 border rounded-lg">
                            <h1 className="text-3xl font-bold text-white">projects</h1>
                            <hr />
                            {counterOn &&
                            <p  className="flex justify-center mt-2 text-3xl font-extrabold nion"><CountUp start={0} end={100} duration={3} delay={0} />+</p>
                        }
                        </div>
                      
                    </div>

                </div>

            </div>
        </ScrollTrigger>
    );
};

export default Counter;