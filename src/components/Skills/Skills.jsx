/* eslint-disable react/prop-types */
//eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Skills.css';
import html from '../../assets/skills/pngwing.com.png'
import css from '../../assets/skills/css.png'
import boot from '../../assets/skills/boot.png'
import tailwind from '../../assets/skills/Tailwind-img.png'
import js from '../../assets/skills/js.png'
import fire from '../../assets/skills/fire.png'
import reacts from '../../assets/skills/react.png'
import typescript from '../../assets/skills/types.png'
import node from '../../assets/skills/node.png'
import express from '../../assets/skills/express.png'
import mongodb from '../../assets/skills/mongodb-logo.png'
import mongoo from '../../assets/skills/mongoose5_62x30_transparent.png'
import nexts from '../../assets/skills/next.jpg'
import dom from '../../assets/skills/dom-removebg-preview.png'
import { SkillBar } from 'react-skillbars';
import ScrollTrigger from "react-scroll-trigger";
const SkillCard = ({ color, percentage, image, skillName }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div>
      <div ref={ref} className='hidden w-40 h-40 p-5 shadow-2xl rounded-xl card lg:block'>
        <div className='percent right-4 bottom-3' style={{ '--clr': color, '--num': percentage }}>
          <div className={`dot ${inView ? 'animate' : ''}`}></div>
          <svg className='relative'>
            <circle cx={"70"} cy={"70"} r={'70'}></circle>
            <circle cx={"70"} cy={"70"} r={'70'}></circle>
          </svg>
          <div className='number'>

            <img className='w-12' src={image} alt="" />
            <p>{skillName}</p>
            <h2>{percentage} <span>%</span></h2>


          </div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skills = [
    { type: 'HTML', level: 98 },
    { type: 'CSS', level: 90 },
    { type: 'Javascript', level: 85 },
    { type: 'React', level: 85 },
    { type: 'Node.js', level: 85 },
    { type: 'TailWind ', level: 90 },
    { type: 'Bootstrap', level: 92 },
    { type: 'Firebase', level: 85 },
    { type: 'Express.js', level: 80 },
    { type: 'MongoDB', level: 92 },
    { type: 'TypeScript', level: 82 },
    { type: 'R-roter', level: 88 },
    { type: 'Mongoose', level: 65 },
    { type: 'Next.js', level: 60 }
  ];
  const colors = {
    bar: '#3E3232',
    title: {
      text: {
        hue: {
          minimum: 10,
          maximum: 10,
        },
        saturation: 10,
        level: {
          minimum: 50,
          maximum: 70,
        },
      },
      background: {
        hue: 10,
        saturation: 10,
        level: 10,
      },
    },
  };
  const [animationOn, setAnimationOn] = useState(false)
  return (
    <ScrollTrigger onEnter={() => setAnimationOn(true)}>
      <div className=' skills-top skills-bg'>
        <div className='flex justify-center pt-5' data-aos="fade-up">
          <h1 className='text-3xl font-bold text-white skills-texts'>Skills Analysis</h1>
        </div>
        <div className='block mt-12 lg:hidden'>
          <div data-aos='fade-down' className='lg:w-96'>
            <SkillBar skills={skills} height={40} colors={colors} className='border' />
          </div>
        </div>


        <div className='mt-10 skill-container' data-aos='fade-down'>
          {animationOn &&
            <div>
              <div className='flex justify-center gap-10'>
                <SkillCard color='#e14000' percentage='98' skillName='HTML' image={html} />
                <SkillCard color='#595bff' percentage='90' skillName='CSS' image={css} />
                <SkillCard color='#b583f9' percentage='92' skillName='Boostrap' image={boot} />
                <SkillCard color='#3bb0af' percentage='90' skillName='Tailwind' image={tailwind} />
                <SkillCard color='#fff13e' percentage='85' skillName='Java Script' image={js} />
                <SkillCard color='#ffca28' percentage='85' skillName='Firebase' image={fire} />
              </div>
              <div className='flex justify-center gap-10 mt-5 mb-5'>
                <SkillCard color='#7a78ff' percentage='85' skillName='React js' image={reacts} />
                <SkillCard color='#8c2829' percentage='88' skillName='React Router' image={dom} />
                <SkillCard color='#76c1e7' percentage='82' skillName='TypeScript' image={typescript} />
                <SkillCard color='#7bb265' percentage='85' skillName='Node js' image={node} />
                <SkillCard color='#949492' percentage='80' skillName='Express js' image={express} />


              </div>
              <div className='flex justify-center gap-10'>
                <SkillCard color='#81c564' percentage='92' skillName='MongoDB' image={mongodb} />
                <SkillCard color='#880000' percentage='75' skillName='Mongoose' image={mongoo} />
                <SkillCard color='#d0d0d0' percentage='60' skillName='Next js' image={nexts} />
              </div>
            </div>
          }
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Skills;


