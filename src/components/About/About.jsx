import home from '../../assets/about-img/home.png'
import education from '../../assets/about-img/education.png'
import experience from '../../assets/about-img/experinec.png'
import hobby from '../../assets/about-img/hobby.png'
import { FaUserGraduate } from "react-icons/fa6";

import './About.css'
import { FaHome } from 'react-icons/fa';
const About = () => {
    return (
        <div className="pb-10 a-back">
            <div className='flex justify-center pt-12 mb-10' data-aos="fade-down">
                <h1 className='text-3xl font-bold text-white'>About</h1>
            </div>
            <div>
                <div className="flex justify-end w-3/5 mb-2 padding">
                    <h1 className="w-10 p-2 text-center text-white rounded-full bg-slate-950" data-aos="zoom-in">1</h1>
                </div>
                <div className="flex pt-2 ">
                    <div className="w-1/2 p-3" data-aos="zoom-in-right">
                        <div className="ml-16 a-box a-color-box"
                        >
                            <span></span>
                            <div className='p-5 a-content h-60'>
                                <h1 className='text-3xl'><FaHome></FaHome></h1>
                                <p>Hailing from the bustling city of Dhaka in Bangladesh, I am a 22-year-old individual with roots in the picturesque district of Gazipur. Currently residing in Dhaka, this city not only represents my present but also holds the key to my past and future. It is within these lively streets that I have grown up, surrounded by the rich cultural tapestry of Bangladesh, shaping the person I am today.</p>
                            </div>

                        </div>
                    </div>

                    <div className="a-border h-96" data-aos="fade-up">

                    </div>
                    <div className='flex justify-center w-1/2 text-white' data-aos="zoom-in-left">
                        <img className=' w-72 h-72 moving-image' src={home} alt="" />
                    </div>
                </div>
            </div>

            <div>
                <div className="flex justify-end w-3/5 mt-3 mb-2 padding">
                    <h1 className="w-10 p-2 text-center text-white rounded-full bg-slate-950" data-aos="zoom-in">2</h1>

                </div>
                <div className="">
                    <div className="flex justify-end ">
                        <div className='mr-52' data-aos="zoom-in-right">
                            <img src={education} className='w-52 moving-image' alt="" />
                        </div>
                        <div className=" a-border h-96" data-aos="fade-up"></div>
                        <div className="pt-2 pl-3 pr-5 rounded-lg widths" data-aos="zoom-in-left">
                            <div className="a-box b-color-box"
                            >
                                <span></span>
                                <div className='p-5 a-content h-60'>
                                    <h1 className='text-3xl'><FaUserGraduate /></h1>
                                    <p>Having completed my Secondary School Certificate in 2017 and followed by the Higher Secondary Certificate in 2019, I am currently immersed in the academic pursuit of a Bachelor of Social Science (BSS) at the National University. Embarking on my second year, this educational journey not only shapes my intellectual growth but also fuels my curiosity about the intricate dynamics of the social sciences. It is a phase of learning and exploration that I approach with enthusiasm and dedication.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div>
                <div className="flex justify-end w-3/5 mb-2 padding">
                    <h1 className="w-10 p-2 mt-3 text-center text-white rounded-full bg-slate-950" data-aos="zoom-in">3</h1>
                </div>
                <div className="flex pt-2">
                    <div className="w-1/2 p-3" data-aos="zoom-in-right">
                        <div className="ml-16 a-box c-color-box"
                        >
                            <span></span>
                            <div className='p-5 a-content h-60'>
                                <h1>hello</h1>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo accusantium natus laudantium id quos, dolor similique facere quidem est inventore repellendus eos quasi accusamus numquam rerum illum aspernatur alias doloribus ipsa sapiente, obcaecati amet ratione ab. Dignissimos, recusandae ipsam laudantium consectetur fuga cupiditate. Ex beatae saepe mollitia veniam. Atque, nisi.</p>
                            </div>

                        </div>
                    </div>

                    <div className="a-border h-96" data-aos="fade-up">

                    </div>
                    <div className='flex justify-center w-1/2 text-white' data-aos="zoom-in-left">
                        <img className=' w-96 h-72 moving-image' src={hobby} alt="" />
                    </div>
                </div>
            </div>

            <div>
                <div className="flex justify-end w-3/5 mt-3 mb-2 padding">
                    <h1 className="w-10 p-2 text-center text-white rounded-full bg-slate-950" data-aos="zoom-in">4</h1>

                </div>
                <div className="">
                    <div className="flex justify-end ">
                        <div className='mr-52' data-aos="zoom-in-right">
                            <img src={experience} className='w-80 moving-image' alt="" />
                        </div>
                        <div className="a-border h-96" data-aos="fade-up"></div>
                        <div className="pt-2 pl-3 pr-5 rounded-lg widths" data-aos="zoom-in-left">
                            <div className="a-box d-color-box"
                            >
                                <span></span>
                                <div className='p-5 a-content h-60'>
                                    <h1>hello</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo accusantium natus laudantium id quos, dolor similique facere quidem est inventore repellendus eos quasi accusamus numquam rerum illum aspernatur alias doloribus ipsa sapiente, obcaecati amet ratione ab. Dignissimos, recusandae ipsam laudantium consectetur fuga cupiditate. Ex beatae saepe mollitia veniam. Atque, nisi.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;