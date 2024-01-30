import home from '../../assets/about-img/home.png'
import education from '../../assets/about-img/education.png'
import experience from '../../assets/about-img/experinec.png'
import hobby from '../../assets/about-img/hobby.png'
import { FaUserGraduate } from "react-icons/fa6";
import { GiPerpendicularRings } from "react-icons/gi";
import { FaUsersGear } from "react-icons/fa6";
import './About.css'
import { FaHome } from 'react-icons/fa';
const About = () => {
    return (
        <div className="pb-10 a-back">
            <div className='flex justify-center pt-12 mb-10' data-aos="fade-down">
                <h1 className='text-3xl font-bold text-white'>About</h1>
            </div>
            <div className='hidden lg:block'>
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
                                    <div className='mb-2 text-3xl'><h1 className='flex items-center gap-2 font-bold text-green-400 border-b-2'><FaHome></FaHome>HOME</h1></div>
                                    <p>Hailing from the bustling city of Dhaka in Bangladesh, I am a 22-year-old individual with roots in the picturesque district of Gazipur. Currently residing in Dhaka, this city not only represents my present but also holds the key to my past and future. It is within these lively streets that I have grown up, surrounded by the rich cultural tapestry of Bangladesh, shaping the person I am today.</p>
                                </div>

                            </div>
                        </div>
                        <div className="a-border h-96" data-aos="fade-up">
                        </div>
                        <div className='flex justify-center w-1/2 text-white' data-aos="flip-right">
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
                            <div className='mr-52' data-aos="flip-left">
                                <img src={education} className='w-80 moving-image' alt="" />
                            </div>
                            <div className=" a-border h-96" data-aos="fade-up"></div>
                            <div className="pt-2 pl-3 pr-5 rounded-lg widths" data-aos="zoom-in-left">
                                <div className="a-box b-color-box"
                                >
                                    <span></span>
                                    <div className='p-5 a-content h-60'>
                                        <div className='mb-2 text-3xl'><h1 className='flex items-center gap-2 font-bold text-orange-400 border-b-2'><FaUserGraduate />EDUCATION</h1></div>
                                        <p>Having completed my Secondary School Certificate in 2017 and followed by the Higher Secondary Certificate in 2019, I am currently immersed in the academic pursuit of a Bachelor of Social Science (BSS) at the National University. Embarking on my second year, this educational journey not only shapes my intellectual growth but also fuels my curiosity about the intricate dynamics of the social sciences.</p>
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
                                    <div className='mb-2 text-3xl'><h1 className='flex items-center gap-2 text-purple-400 border-b-2'><GiPerpendicularRings />HOBBIES</h1></div>
                                    <p>
                                        From an early age, drawing has been my creative refuge, allowing me to bring imagination to paper. I am also passionate about singing, enjoy outdoor activities like walking, and actively participate in sports like cricket, football, and badminton during my free time.</p>
                                </div>

                            </div>
                        </div>

                        <div className="a-border h-96" data-aos="fade-up">

                        </div>
                        <div className='flex justify-center w-1/2 text-white' data-aos="flip-right">
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
                            <div className='mr-52'  data-aos="flip-left">
                                <img src={experience} className='w-80 moving-image' alt="" />
                            </div>
                            <div className="a-border h-96" data-aos="fade-up"></div>
                            <div className="pt-2 pl-3 pr-5 rounded-lg widths" data-aos="zoom-in-left">
                                <div className="a-box d-color-box"
                                >
                                    <span></span>
                                    <div className='p-5 a-content h-60'>
                                        <div className='mb-2 text-3xl'><h1 className='flex items-center gap-2 text-yellow-500 border-b-2'><FaUsersGear />EXPERIENCE</h1></div>
                                        <p>With nearly two years of experience in web development, I have actively contributed to various group projects, honing my skills and gaining valuable insights. A one-month internship further enriched my understanding of the field. I am highly focused on achieving my goals in the dynamic world of web development.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='block lg:hidden'>
                <div>
                    <div className='flex items-center mb-2'>
                        <div className=''>
                            <h1 className="w-10 p-2 text-center text-white rounded-full bg-slate-950" data-aos="zoom-in">1</h1>
                            <div className='mt-5 ml-5 ' data-aos="fade-up">
                                <h1 className='w-0 border h-96'></h1>
                            </div>
                        </div>
                        <div className="p-2 mt-12"  data-aos="flip-right">
                            <div className="a-box a-color-box"
                            >
                                <span></span>
                                <div className='w-full p-5 a-content'>
                                    <div className='mb-2 text-3xl'><h1 className='flex items-center gap-2 font-bold text-green-400 border-b-2'><FaHome></FaHome>HOME</h1></div>
                                    <p>Hailing from the bustling city of Dhaka in Bangladesh, I am a 22-year-old individual with roots in the picturesque district of Gazipur. Currently residing in Dhaka, this city not only represents my present but also holds the key to my past and future. It is within these lively streets that I have grown up, surrounded by the rich cultural tapestry of Bangladesh, shaping the person I am today.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='flex items-center mb-2'>
                        <div className=''>
                            <h1 className="w-10 p-2 text-center text-white rounded-full bg-slate-950" data-aos="zoom-in">2</h1>
                            <div className='mt-5 ml-5 ' data-aos="fade-up">
                                <h1 className='w-0 border h-96'></h1>
                            </div>
                        </div>
                        <div className="p-2 mt-12"  data-aos="flip-right">
                            <div className="a-box b-color-box"
                            >
                                <span></span>
                                <div className='w-full p-5 a-content'>
                                <div className='mb-2 text-3xl'><h1 className='flex items-center gap-2 font-bold text-orange-400 border-b-2'><FaUserGraduate />EDUCATION</h1></div>
                                        <p>Having completed my Secondary School Certificate in 2017 and followed by the Higher Secondary Certificate in 2019, I am currently immersed in the academic pursuit of a Bachelor of Social Science (BSS) at the National University. Embarking on my second year, this educational journey not only shapes my intellectual growth but also fuels my curiosity about the intricate dynamics of the social sciences.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='flex mb-2'>
                        <div className=''>
                            <h1 className="w-10 p-2 text-center text-white rounded-full bg-slate-950" data-aos="zoom-in">3</h1>
                            <div className='mt-5 ml-5 ' data-aos="fade-up">
                                <h1 className='w-0 border h-80'></h1>
                            </div>
                        </div>
                        <div className="p-2 mt-12"  data-aos="flip-right">
                            <div className="a-box c-color-box"
                            >
                                <span></span>
                                <div className='w-full p-5 a-content'>
                                <div className='mb-2 text-3xl'><h1 className='flex items-center gap-2 text-purple-400 border-b-2'><GiPerpendicularRings />HOBBIES</h1></div>
                                    <p>
                                        From an early age, drawing has been my creative refuge, allowing me to bring imagination to paper. I am also passionate about singing, enjoy outdoor activities like walking, and actively participate in sports like cricket, football, and badminton during my free time.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='flex mb-2'>
                        <div className=''>
                            <h1 className="w-10 p-2 text-center text-white rounded-full bg-slate-950" data-aos="zoom-in">4</h1>
                            <div className='mt-5 ml-5 ' data-aos="fade-up">
                                <h1 className='w-0 border h-80'></h1>
                            </div>
                        </div>
                        <div className="p-2 mt-12"  data-aos="flip-right">
                            <div className="a-box d-color-box"
                            >
                                <span></span>
                                <div className='w-full p-5 a-content'>
                                <div className='mb-2 text-3xl'><h1 className='flex items-center gap-2 text-yellow-500 border-b-2'><FaUsersGear />EXPERIENCE</h1></div>
                                        <p>With nearly two years of experience in web development, I have actively contributed to various group projects, honing my skills and gaining valuable insights. A one-month internship further enriched my understanding of the field. I am highly focused on achieving my goals in the dynamic world of web development.</p>
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