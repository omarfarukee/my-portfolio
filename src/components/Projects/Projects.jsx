/* eslint-disable react/jsx-no-target-blank */
import './Porjects.css'
import gadget from '../../assets/image/gadget.png'
import bike from '../../assets/image/bike.png'
import home from '../../assets/image/homesfood.png'
import img1 from '../../assets/project img/img1.png'
import img2 from '../../assets/project img/img2.png'
import img3 from '../../assets/project img/img3.png'
import img4 from '../../assets/project img/img4.png'
import img5 from '../../assets/project img/img5.png'
import img6 from '../../assets/project img/img6.png'
import { FaEye } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
    return (
        <div className='project-bg'>
            <div className='flex justify-center pt-12' data-aos="fade-up">
                <h1 className='text-3xl font-bold text-white'>My Projects</h1>
            </div>
            <div className='flex mt-16 justify-evenly' data-aos="fade-down">
                <div className='ml-3 p-card'>
                    <div className='p-circle' style={{ '--clr': '#ffff' }}>
                        <img src={gadget} alt="" className='w-40 p-logo' />
                    </div>
                    <div className='p-3 border p-content'>
                       
                        <div className='flex gap-2 p-2 mt-5'>
                            <button className='w-32 p-1 bg-blue-900 rounded-md'><a href="https://gadget-sailor-frontend.vercel.app/" className='flex items-center justify-center gap-2 text-white' target='_blank'><FaEye />Link</a></button>
                            <button className='w-32 p-1 bg-blue-900 rounded-md'><a href="" className='flex items-center justify-center gap-2 text-white'><FaGithub />Client Repo</a></button>
                        </div>
                        <div className='flex justify-center'>
                            <button className='w-32 p-1 bg-blue-900 rounded-md'><a href="" className='flex items-center justify-center gap-2 text-white'><FaGithub />Server Repo</a></button>
                        </div>
                    </div>
                    <img src={img1} alt="" className='p-product-img' />
                    <img src={img2} alt="" className='mt-40 p-product-img1' />
                </div>
                <div className='ml-3 p-card'>
                    <div className='p-circle' style={{ '--clr': '#16a34a' }}>
                        <img src={bike} alt="" className='w-40 p-logo bg-slate-200 rounded-2xl' />
                    </div>
                    <div className='p-3 p-content'>
                    <h1 className='flex justify-center text-2xl font-bold text-white'>Features</h1>
                        <small className='text-white'>
                            <li>• There are three types of products collection, user have 3 roles seller , buyer and admin</li>
                            <li>• Sellers can add products. Buyers can book and pay</li>
                            <li>• Admin can see all users and can delete user</li>
                            <li>• Seller can advertise his new added products</li>
                            <li>• User must be logged in</li>
                        </small>
                        <div className='flex gap-2 p-2 mt-5'>
                            <button className='w-32 p-1 bg-green-700 rounded-md'><a href="https://gadget-sailor-frontend.vercel.app/" className='flex items-center justify-center gap-2 text-white' target='_blank'><FaEye />Link</a></button>
                            <button className='w-32 p-1 bg-green-700 rounded-md'><a href="" className='flex items-center justify-center gap-2 text-white'><FaGithub />Client Repo</a></button>
                        </div>
                        <div className='flex justify-center'>
                            <button className='w-32 p-1 bg-green-700 rounded-md'><a href="" className='flex items-center justify-center gap-2 text-white'><FaGithub />Server Repo</a></button>
                        </div>

                    </div>
                    <img src={img3} alt="" className='p-product-img' />
                    <img src={img4} alt="" className='mt-40 p-product-img1' />
                </div>
                <div className='ml-3 p-card'>
                    <div className='p-circle' style={{ '--clr': '#7faa51' }}>
                        <img src={home} alt="" className='w-40 rounded-lg p-logo' />
                    </div>
                    <div className='p-3 p-content'>
                    <h1 className='flex justify-center text-2xl font-bold text-white'>Features</h1>
                        <small className='text-white'>
                            <li>• Here organized some courses based on 6 topics</li>
                            <li>• User can see specific details about etch courses, React to PDF</li>
                            <li>• User must logged in to see course details.</li>
                            <li>• Dark mood light mood toggle button.</li>
                        </small>
                        <div className='flex gap-2 p-2'>
                            <button className='w-32 p-1 bg-green-900 rounded-md'><a href="https://gadget-sailor-frontend.vercel.app/" className='flex items-center justify-center gap-2 text-white' target='_blank'><FaEye />Link</a></button>
                            <button className='w-32 p-1 bg-green-900 rounded-md'><a href="" className='flex items-center justify-center gap-2 text-white'><FaGithub />Client Repo</a></button>
                        </div>
                        <div className='flex justify-center'>
                            <button className='w-32 p-1 bg-green-900 rounded-md'><a href="" className='flex items-center justify-center gap-2 text-white'><FaGithub />Server Repo</a></button>
                        </div>
                    </div>
                    <img src={img5} alt="" className='p-product-img' />
                    <img src={img6} alt="" className='mt-40 p-product-img1' />
                </div>
            </div>
        </div>
    );
};

export default Projects;