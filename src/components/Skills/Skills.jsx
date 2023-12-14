// eslint-disable-next-line no-unused-vars
// import React from 'react';
// import './Skills.css'
// const Skills = () => {
//     return (
//         <div className='mb-10 skills-top skills-bg'>
//             <div className='flex justify-center pt-5'data-aos="fade-up">
//                 <h1 className='text-3xl font-bold text-white'>Skills Analaysis</h1>
//             </div>
//             <div className='skill-container'>
//                     <div data-aos="fade-right"  className='w-40 h-40 p-5 ml-10 border shadow-2xl card'>
//                             <div className='percent right-4 bottom-3' style={{'--clr':'#04fc42', '--num':'85'}}>
//                                 <div className='dot'></div>
//                                 <svg className='relative'>
//                                     <circle cx={"70"} cy={"70"} r={'70'}></circle>
//                                     <circle cx={"70"} cy={"70"} r={'70'}></circle>
//                                 </svg>
//                                 <div className='number'>
//                                         <h2>85 <span>%</span></h2>
//                                         <p>HTML</p>
//                                 </div>
//                             </div>
//                     </div>
//             </div>
//         </div>
//     );
// };

// export default Skills;

import  { useEffect} from 'react';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      // Add the 'animate' class to start the animation
      const dot = document.querySelector('.dot');
      dot.classList.add('animate');
    }
  }, [inView]);

  return (
    <div className='mb-10 skills-top skills-bg'>
      <div className='flex justify-center pt-5' data-aos="fade-up">
        <h1 className='text-3xl font-bold text-white'>Skills Analysis</h1>
      </div>
      <div className='skill-container'>
        <div
          ref={ref}
          className='w-40 h-40 p-5 ml-10 border shadow-2xl card'
        >
          <div className='percent right-4 bottom-3' style={{ '--clr': '#04fc42', '--num': '85' }}>
            <div className='dot'></div>
            <svg className='relative'>
              <circle cx={"70"} cy={"70"} r={'70'}></circle>
              <circle cx={"70"} cy={"70"} r={'70'}></circle>
            </svg>
            <div className='number'>
              <h2>85 <span>%</span></h2>
              <p>HTML</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
