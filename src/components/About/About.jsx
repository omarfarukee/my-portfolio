import home from '../../assets/about-img/home.png'
import education from '../../assets/about-img/education.png'
import './About.css'
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
                                <h1>hello</h1>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo accusantium natus laudantium id quos, dolor similique facere quidem est inventore repellendus eos quasi accusamus numquam rerum illum aspernatur alias doloribus ipsa sapiente, obcaecati amet ratione ab. Dignissimos, recusandae ipsam laudantium consectetur fuga cupiditate. Ex beatae saepe mollitia veniam. Atque, nisi.</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className="a-border h-96" data-aos="fade-up">

                    </div>
                    <div className='flex justify-center w-1/2 text-white'>
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
                        <div className='mr-52'  data-aos="fade-up">
                            <img src={education} className='w-52 moving-image' alt="" />
                        </div>
                        <div className=" a-border h-96" data-aos="fade-up"></div>
                        <div className="pt-2 pl-3 pr-5 rounded-lg widths" data-aos="zoom-in-left">
                        <div className="a-box b-color-box"
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
                    <div className='flex justify-center w-1/2 text-white'>
                        <img className=' w-72 h-72 moving-image' src={home} alt=""/>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex justify-end w-3/5 mt-3 mb-2 padding">
                    <h1 className="w-10 p-2 text-center text-white rounded-full bg-slate-950" data-aos="zoom-in">4</h1>
                   
                </div>
                <div className="">
                    <div className="flex justify-end ">
                        <div className='mr-52'  data-aos="fade-up">
                            <img src={education} className='w-52 moving-image' alt="" />
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