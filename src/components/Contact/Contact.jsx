
import './Contact.css'
const Contact = () => {
    return (
        <div className="c-back">
            <div className='flex justify-center pt-12 mb-10 text-3xl text-white'>
                Contact
            </div>
            <div className='flex justify-evenly'>
               
                <div className='wrapper' data-aos="fade-up">
                    <form action="">
                        < div className='inputBox'>
                            <input type="text" required />
                            <span>Your email</span>
                        </div>
                        < div className='inputBox'>
                            <input type="text" required />
                            <span>Subject</span>
                        </div>
                        < div className='inputBox'>
                            <input type="text" required className='h-20'/>
                            <span>YOUR message</span>
                        </div>
                        <button type='submit' className='text-white c-button'>Submit</button>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default Contact;