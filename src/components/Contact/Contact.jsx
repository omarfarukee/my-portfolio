
import './Contact.css'
import contact from '../../assets/contact-img/420797817_2073469626385685_3776584553687943742_n-removebg-preview.png'
const Contact = () => {
    return (
        <div className="c-back">
            <div className='flex justify-center pt-12 mb-10 text-3xl text-white'>
                Contact
            </div>
            <div className='flex c-back justify-evenly'>
                <div className='border rounded-full c-img'>
                    <img src={contact} className='w-96' alt="" />
                </div>
            <div className='wrapper'>
                <form action="">
                    <div className='input-box'>
                        <input type="text" placeholder='your email' />
                    </div>
                    <div className='input-box'>
                        <input type="text" placeholder='Subject' />
                    </div>
                    <div className='input-box'>
                        <input type="text" placeholder='you message' />
                    </div>
                    <button type='submit' className='text-white c-button'>Submit</button>
                </form>
            </div>
            </div>
            

        </div>
    );
};

export default Contact;