/* eslint-disable react/prop-types */
//eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const SkillCard = ({ color, percentage, skillName }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className='w-40 h-40 p-5 shadow-2xl rounded-xl card'>
      <div className='percent right-4 bottom-3' style={{ '--clr': color, '--num': percentage }}>
        <div className={`dot ${inView ? 'animate' : ''}`}></div>
        <svg className='relative'>
          <circle cx={"70"} cy={"70"} r={'70'}></circle>
          <circle cx={"70"} cy={"70"} r={'70'}></circle>
        </svg>
        <div className='number'>
          <h2>{percentage} <span>%</span></h2>
          <p>{skillName}</p>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className='mb-10 skills-top skills-bg'>
      <div className='flex justify-center pt-5' data-aos="fade-up">
        <h1 className='text-3xl font-bold text-white'>Skills Analysis</h1>
      </div>
      <div className='flex justify-center gap-5 mt-10 skill-container' data-aos="fade-up">
        <SkillCard color='#04fc42' percentage='85' skillName='HTML' />
        <SkillCard color='#f542a1' percentage='60' skillName='CSS' />
        <SkillCard color='#f542a1' percentage='75' skillName='js' />
        <SkillCard color='#f542a1' percentage='95' skillName='nodejs' />
        <SkillCard color='#f542a1' percentage='95' skillName='express js' />
        {/* Add more SkillCard components as needed */}
      </div>
    </div>
  );
};

export default Skills;

// import './Skills.css'
// const Skills = () => {
//     return (
//         <div className='mb-10 skills-top skills-bg'>
//             <div className='flex justify-center pt-5'data-aos="fade-up">
//                 <h1 className='text-3xl font-bold text-white'>Skills Analaysis</h1>
//             </div>
//             <div className='skill-container'>
//                     <div   className='w-40 h-40 p-5 ml-10 border shadow-2xl card'>
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
//                     <div   className='w-40 h-40 p-5 ml-10 border shadow-2xl card'>
//                             <div className='percent right-4 bottom-3' style={{'--clr':'#f542a1', '--num':'60'}}>
//                                 <div className='dot'></div>
//                                 <svg className='relative'>
//                                     <circle cx={"70"} cy={"70"} r={'70'}></circle>
//                                     <circle cx={"70"} cy={"70"} r={'70'}></circle>
//                                 </svg>
//                                 <div className='number'>
//                                         <h2>60 <span>%</span></h2>
//                                         <p>HTML</p>
//                                 </div>
//                             </div>
//                     </div>
//             </div>
//         </div>
//     );
// };

// export default Skills;
