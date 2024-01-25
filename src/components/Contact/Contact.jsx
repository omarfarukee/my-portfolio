
import { useRef } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2osiuyr', 'template_r78nv93', form.current, 'zX_s9wlDIJmN1qe6c')
      .then((result) => {
        if (result){
            toast.success("message sent successfully")
        }else{
            toast.error("message did not send successfully")
        }
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <div className="c-back">
            <div className='flex justify-center pt-12 mb-10 text-3xl text-white'>
                Contact
            </div>
            <div className='flex justify-evenly'>
                <div data-aos="fade-up">
                    <div className='wrapper' >
                        <form action="" ref={form} onSubmit={sendEmail}>
                            < div className='inputBox'>
                                <input name="from_name" type="text" required />
                                <span>Your Name</span>
                            </div>
                            < div className='inputBox'>
                                <input name="from_email" type="email" required />
                                <span>your email</span>
                            </div>
                            < div className='inputBox'>
                                <input name="message" type="text" required className='h-20' />
                                <span>YOUR message</span>
                            </div>
                            <button type='submit' className='text-white c-button'>Submit</button>
                        </form>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Contact;