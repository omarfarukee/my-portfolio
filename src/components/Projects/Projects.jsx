import './Porjects.css'
import gadget from '../../assets/image/gadget.png'
import bike from '../../assets/image/bike.png'
import img1 from '../../assets/project img/img1.png'
import img2 from '../../assets/project img/img2.png'
import img3 from '../../assets/project img/img3.png'
import img4 from '../../assets/project img/img4.png'
const Projects = () => {
    return (
        <div className='project-bg'>
            <div className='flex justify-center pt-5' data-aos="fade-up">
                <h1 className='text-3xl font-bold text-white'>My Projects</h1>
            </div>
            <div className='flex mt-16 justify-evenly' data-aos="fade-down">
                <div className='ml-3 p-card'>
                    <div className='p-circle' style={{'--clr':'#ffff'}}>
                        <img src={gadget} alt="" className='w-40 p-logo' />
                    </div>
                    <div className='p-content'>
                        <h2 className='text-2xl font-bold'>Coca cola</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias ipsum cupiditate nihil quas ut delectus natus accusantium aliquid, ab distinctio.</p>
                        <button className='p-3 border'><a href="">explore more</a></button>
                    </div>
                    <img src={img1} alt="" className='p-product-img' />
                    <img src={img2} alt="" className='mt-40 p-product-img1' />
                </div>
                <div className='ml-3 p-card'>
                    <div className='p-circle' style={{'--clr':'#16a34a'}}>
                        <img src={bike} alt="" className='w-40 p-logo bg-slate-200 rounded-2xl' />
                    </div>
                    <div className='p-content'>
                        <h2 className='text-2xl font-bold'>Coca cola</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias ipsum cupiditate nihil quas ut delectus natus accusantium aliquid, ab distinctio.</p>
                        <button className='p-3 border'><a href="">explore more</a></button>
                    </div>
                    <img src={img3} alt="" className='p-product-img' />
                    <img src={img4} alt="" className='mt-40 p-product-img1' />
                </div>
                <div className='ml-3 p-card'>
                    <div className='p-circle' style={{'--clr':'#ffff'}}>
                        <img src={gadget} alt="" className='w-40 p-logo' />
                    </div>
                    <div className='p-content'>
                        <h2 className='text-2xl font-bold'>Coca cola</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias ipsum cupiditate nihil quas ut delectus natus accusantium aliquid, ab distinctio.</p>
                        <button className='p-3 border'><a href="">explore more</a></button>
                    </div>
                    <img src={img1} alt="" className='p-product-img' />
                    <img src={img2} alt="" className='mt-40 p-product-img1' />
                </div>
            </div>
        </div>
    );
};

export default Projects;