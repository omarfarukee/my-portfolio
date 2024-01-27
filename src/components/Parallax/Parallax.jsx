import './Parallax.css'
import 'aos/dist/aos.css';
import img from '../../assets/image/imgggg.d6e8e528c9b80d07b72d.jpg'
import { TypeAnimation } from 'react-type-animation';
const Parallax = () => {

    return (
        <div>
             <section className=' relative bg-[url("https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] bg-fixed bg-cover bg-no-repeat bg-center h-96 md:h-[520px] duration-300'>
            {/* Opacity controller */}
            <div className="absolute inset-0 bg-black bg-opacity-80"></div>
            <div  className='absolute text-white duration-300 lg:pl-40 top-10 md:transform md:-translate-x-1/2 md:-translate-y-1/2'>
                <div className="items-center w-full px-3 lg:flex justify-evenly name ">
                    <div className='w-1/2'>
                        <h1  className='text-2xl'><TypeAnimation
                                sequence={[
                                    'Hello, I am Omar Faruk',
                                    1500,
                                    '',
                                    1000
                                ]}
                                speed={50}
                                style={{ fontSize: '' }}
                                wrapper="span"
                                repeat={Infinity}
                            /></h1>
                        <h2 className='font-extrabold cursor-pointer lg:text-3xl h2'><span>A</span> Full-Stack<span> Web developer</span></h2>
                      <p className='mt-10'>
                        Becoming a good minded developer requires the right intention, hard work and practice. So for almost a long year I was able to identify myself as a Full-Stack web developer by adopting that consistency. I have learned a lot in my journey as a developer and am still learning and will learn in the future.</p>  
                    </div>
                    <div className='rounded-full'>
                            <img src={img}  className='border-2 rounded-full w-72' alt="" />
                    </div>           
                </div>
            </div>
        </section>
        </div>
    );
};

export default Parallax;