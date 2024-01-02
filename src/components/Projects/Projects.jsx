import './Porjects.css'
import coca from '../../assets/image/coca.png'
import glass from '../../assets/image/glass.png'
const Projects = () => {
    return (
        <div className='project-bg'>
            <div className='flex justify-center pt-5' data-aos="fade-up">
                <h1 className='text-3xl font-bold text-white'>My Projects</h1>
            </div>
            <div>
                <div className='ml-3 p-card'>
                    <div className='p-circle' style={{'--clr':'#f40103'}}>
                        <img src={coca} alt="" className='p-logo' />
                    </div>
                    <div className='p-content'>
                        <h2>Coca cola</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias ipsum cupiditate nihil quas ut delectus natus accusantium aliquid, ab distinctio.</p>
                        <a href="">explore more</a>
                    </div>
                    <img src={glass} alt="" className='p-product-img' />
                </div>
            </div>
        </div>
    );
};

export default Projects;