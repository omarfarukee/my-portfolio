import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)}>
        <div>
          {counterOn && <h1><CountUp start={0} end={100} duration={4} delay={0} /></h1>}  
        </div>
        </ScrollTrigger>
    );
};

export default Counter;