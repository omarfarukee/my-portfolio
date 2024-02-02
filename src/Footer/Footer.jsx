/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import footer from '../assets/Footer-img/footer.png'
import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import './Footer.css'
const Footer = () => {
    return (
        <div className='p-5 bg-black lg:p-8 lg:flex justify-evenly'>
            <div className='lg:w-2/5' data-aos="zoom-in-up">
                <img className='' src={footer} alt="" />
            </div>
            <div className=''>
                <div className='pb-20 lg:ml-20'>
                    <h1 className='text-5xl font-bold text-white ml-7 get lg:ml-0' data-aos="fade-up">Get in Touch</h1>
                    <div data-aos="fade-down">
                        <div className='mt-10 w-36'>
                            <div className=' f-button'>
                                <a className='text-white cursor-pointer ' title='FaceBook' href='https://www.facebook.com/profile.php?id=100064049902400' target='_blank'>
                                    <p className='flex items-center text-3xl face'><FaFacebookSquare /><span className='text-lg'>-FaceBook</span></p>
                                </a>
                            </div>
                        </div>
                        <div className='mt-3 w-36'>
                            <div className=' f-button'>
                                <a className='text-white cursor-pointer ' title='FaceBook' href='https://www.linkedin.com/in/omar-faruk-b66513257/' target='_blank'>
                                    <p className='flex items-center text-3xl Linkedin'><FaLinkedin />
                                        <span className='text-lg'>-Linkedin</span></p>
                                </a>
                            </div>
                        </div>
                        <div className='mt-3 w-36'>
                            <div className=' f-button'>
                                <a className='text-white cursor-pointer ' href='https://github.com/omarfarukee' target='_blank'>
                                    <p className='flex items-center text-3xl git'><FaGithub />
                                        <span className='text-lg'>-GitHub</span></p>
                                </a>
                            </div>
                        </div>
                        <div className='mt-3 '>
                            <div className=' f-button'>
                                <a className='text-white ' target='_blank'>
                                    <p className=' whats'>
                                        <span className='flex items-center text-3xl'>
                                            <FaWhatsapp />
                                            <span className='text-lg'>-What'sApp: +880 1943797513</span>
                                        </span>
                                    </p>

                                </a>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <div className=' f-button'>
                                <a className='text-white '>
                                    <p className=' mail'>
                                        <span className='flex items-center text-3xl'>
                                            <SiGmail />
                                            <span className='text-lg'>-umarfaruque1920@gmail.com</span>
                                        </span>
                                    </p>

                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;