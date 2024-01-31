/* eslint-disable react/jsx-no-target-blank */
import './Porjects.css'
import gadget from '../../assets/image/gadget.png'
import bike from '../../assets/image/bike.png'
import home from '../../assets/image/homesfood.png'
import quick from '../../assets/image/quick.png'
import glob from '../../assets/image/campus.png'
import img1 from '../../assets/project img/img1.png'
import img2 from '../../assets/project img/img2.png'
import img3 from '../../assets/project img/img3.png'
import img4 from '../../assets/project img/img4.png'
import img5 from '../../assets/project img/img5.png'
import img6 from '../../assets/project img/img6.png'
import img9 from '../../assets/project img/img9.png'
import img10 from '../../assets/project img/img10.png'
import img11 from '../../assets/project img/img11.png'
import img12 from '../../assets/project img/img12.png'
import { FaEye } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useState } from 'react'

const Projects = () => {

    const [full, setFull] = useState('blcok')
    const [front, setFront] = useState('hidden')
    const fullStack = () => {
        setFront('hidden')
        setFull('blcok')
    }
    const frontEnd = () => {
        setFront('blcok')
        setFull('hidden')
    }
    const [b1, setB1] = useState('w-40 p-3 font-bold rounded-lg b1 project-btn transition duration-500')
    const [b2, setB2] = useState('w-40 p-3  rounded-lg')
    const button1 = () => {
        setB2('w-40 p-3 rounded-lg')
        setB1('w-40 p-3 font-bold rounded-lg b1 project-btn transition duration-500')
    }
    const button2 = () => {
        setB2('w-40 p-3 font-bold rounded-lg b1  project-btn transition duration-500')
        setB1('w-40 p-3 rounded-lg')
    }

    return (
        <div className='project-bg'>
            <div className='flex justify-center pt-12' data-aos="fade-up">
                <h1 className='text-3xl font-bold text-white'>My Projects</h1>
            </div>
            <div className='flex justify-center mt-5 text-white'>
                <div className='flex gap-6'>
                    <button onClick={() => { fullStack(); button1() }} className={b1}>Full-Stack</button>
                    <button onClick={() => { frontEnd(); button2() }} className={b2}>Front-End</button>
                </div>
            </div>
            <div className={full}>
                <div className='flex flex-col items-center lg:items-start lg:flex-row lg:mt-16 mt-28 lg:justify-evenly' data-aos="fade-down">
                    <div className='mb-20 lg:ml-3 p-card'>
                        <div className='p-circle' style={{ '--clr': '#ffff' }}>
                            <img src={gadget} alt="" className='w-28 lg:w-40 p-logo' />
                        </div>
                        <div className='p-3 p-content'>
                        <h1 className='flex justify-center text-2xl font-bold '>Features</h1>
                            <small className=''>
                                <li> Categorization and filtering options for streamlined navigation</li>
                                <li> Admin capabilities for adding, updating, and deleting products</li>
                                <li> Admin capabilities for adding, updating, and deleting products</li>
                                <li> Inclusion of a review system for buyers to share feedback.Multiple payment choices, including credit/debit cards, for flexibility.</li>
                            </small>
                            <div className='flex justify-between gap-2 p-2 lg:justify-start'>
                                <button className='w-32 p-1 bg-blue-900 rounded-md'><a href="https://gadget-sailor-frontend.vercel.app/" className='flex items-center justify-center gap-2 text-white' target='_blank'><FaEye />Link</a></button>
                                <button className='w-32 p-1 bg-blue-900 rounded-md'><a href="" className='flex items-center justify-center gap-2 text-white'><FaGithub />Client Repo</a></button>
                            </div>
                            <div className='flex justify-center'>
                                <button className='w-32 p-1 bg-blue-900 rounded-md'><a href="" className='flex items-center justify-center gap-2 text-white'><FaGithub />Server Repo</a></button>
                            </div>
                        </div>
                        <img src={img1} alt="" className='p-product-img' />
                        <img src={img2} alt="" className='hidden mt-40 p-product-img1 lg:block' />
                    </div>
                    <div className='mb-20 lg:ml-3 p-card'>
                        <div className='p-circle' style={{ '--clr': '#16a34a' }}>
                            <img src={bike} alt="" className='w-40 p-logo bg-slate-200 rounded-2xl' />
                        </div>
                        <div className='p-3 p-content'>
                            <h1 className='flex justify-center text-2xl font-bold text-white'>Features</h1>
                            <small className='text-white'>
                                <li> There are three types of products collection, user have 3 roles seller , buyer and admin</li>
                                <li> Sellers can add products. Buyers can book and pay</li>
                                <li> Admin can see all users and can delete user</li>
                                <li> Seller can advertise his new added products</li>
                                <li> User must be logged in</li>
                            </small>
                            <div className='flex justify-between gap-2 p-2 lg:justify-start'>
                                <button className='w-32 p-1 bg-green-700 rounded-md'><a href="https://bike-frenzy-7b4f7.web.app/" className='flex items-center justify-center gap-2 text-white' target='_blank'><FaEye />Link</a></button>
                                <button className='w-32 p-1 bg-green-700 rounded-md'><a href="" className='flex items-center justify-center gap-2 text-white'><FaGithub />Client Repo</a></button>
                            </div>
                            <div className='flex justify-center'>
                                <button className='w-32 p-1 bg-green-700 rounded-md'><a href="" className='flex items-center justify-center gap-2 text-white'><FaGithub />Server Repo</a></button>
                            </div>

                        </div>
                        <img src={img3} alt="" className='p-product-img' />
                        <img src={img4} alt="" className='hidden mt-40 p-product-img1 lg:block' />
                    </div>
                    <div className=' lg:ml-3 p-card'>
                        <div className='p-circle' style={{ '--clr': '#7faa51' }}>
                            <img src={home} alt="" className='w-40 rounded-lg p-logo' />
                        </div>
                        <div className='p-3 p-content'>
                            <h1 className='flex justify-center text-2xl font-bold text-white'>Features</h1>
                            <small className='text-white'>
                                <li> User can see the items he wants to know</li>
                                <li> Can review the specific item he wants to</li>
                                <li> User can add item</li>
                                <li> User should be logged in before reviewing or adding</li>
                            </small>
                            <div className='flex justify-between gap-2 p-2 lg:justify-start'>
                                <button className='w-32 p-1 bg-green-900 rounded-md'><a href="https://homes-food.web.app/" className='flex items-center justify-center gap-2 text-white' target='_blank'><FaEye />Link</a></button>
                                <button className='w-32 p-1 bg-green-900 rounded-md'><a href="" className='flex items-center justify-center gap-2 text-white'><FaGithub />Client Repo</a></button>
                            </div>
                            <div className='flex justify-center'>
                                <button className='w-32 p-1 bg-green-900 rounded-md'><a href="" className='flex items-center justify-center gap-2 text-white'><FaGithub />Server Repo</a></button>
                            </div>
                        </div>
                        <img src={img5} alt="" className='p-product-img' />
                        <img src={img6} alt="" className='hidden mt-40 p-product-img1 lg:block' />
                    </div>
                </div>
            </div>
            <div className={front}>
                <div className='flex flex-col items-center lg:items-start lg:flex-row lg:mt-16 mt-28 lg:justify-evenly'>

                    <div className='mb-20 lg:ml-3 p-card'>
                        <div className='p-circle' style={{ '--clr': '#b24cbf' }}>
                            <img src={quick} alt="" className='w-40 rounded-lg p-logo' />
                        </div>
                        <div className='p-3 p-content'>
                            <h1 className='flex justify-center text-2xl font-bold text-white'>Features</h1>
                            <small className='text-white'>
                                <li> The site is comport to Visit and its UI is very <span className='ml-2'>massive .</span></li>
                                <li> In here we gave you Some common quiz that you <span className='ml-2'>can justify yourself in this way how you good at <span className='ml-2'>his.</span></span> </li>
                                <li> The site is stunning for you .</li>
                            </small>
                            <div className='flex justify-between gap-2 p-2 lg:justify-start'>
                                <button className='w-32 p-1 bg-purple-900 rounded-md'><a href="https://cosmic-quick-quiz-detector-qui-55c193.netlify.app/home" className='flex items-center justify-center gap-2 text-white' target='_blank'><FaEye />Link</a></button>
                                <button className='w-32 p-1 bg-purple-900 rounded-md'><a href="https://github.com/omarfarukee/Quick-Quiz-Detector" target='_blank' className='flex items-center justify-center gap-2 text-white'><FaGithub />Client Repo</a></button>
                            </div>
                        </div>
                        <img src={img9} alt="" className='p-product-img' />
                        <img src={img10} alt="" className='hidden mt-40 p-product-img1 lg:block' />
                    </div>
                    <div className='lg:ml-3 p-card'>
                        <div className='p-circle' style={{ '--clr': '#0dcaf0' }}>
                            <img src={glob} alt="" className='w-40 rounded-lg p-logo' />
                        </div>
                        <div className='p-3 p-content'>
                            <h1 className='flex justify-center text-2xl font-bold text-white'>Features</h1>
                            <small className='text-white'>
                                <li> Its a one landig page design</li>
                               
                            </small>
                            <div className='flex justify-between gap-2 p-2 lg:justify-start'>
                                <button className='w-32 p-1 rounded-md bg-cyan-600'><a href="https://campus-sia-396920.netlify.app/" className='flex items-center justify-center gap-2 text-white' target='_blank'><FaEye />Link</a></button>
                                <button className='w-32 p-1 rounded-md bg-cyan-600'><a href="https://github.com/omarfarukee/campus-sia" target='_blank' className='flex items-center justify-center gap-2 text-white'><FaGithub />Client Repo</a></button>
                            </div>

                        </div>
                        <img src={img11} alt="" className='p-product-img' />
                        <img src={img12} alt="" className='hidden mt-40 p-product-img1 lg:block' />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;