/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import { FiLoader } from "react-icons/fi";
import './Contact.css'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  const [spin, setSpin] = useState('hidden');
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2osiuyr', 'template_r78nv93', form.current, 'zX_s9wlDIJmN1qe6c')
      .then((result) => {
        if (result) {
          toast.success("message sent successfully");
          location.reload();
        } else {
          toast.error("message did not send successfully");
        }
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  const loading = () => {
    setSpin('block text-2xl animate-spin');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const isFormValid = () => {
    return formData.from_name !== '' && formData.from_email !== '' && formData.message !== '';
  };

  return (
    <div className="c-back">
      <div className='flex justify-center pt-12 mb-10 text-3xl font-bold text-white'data-aos="fade-down">
        Leave a Message
      </div>
      <div className='flex justify-evenly'>
        <div data-aos="fade-up">
          <div className='wrapper'>
            <form action="" ref={form} onSubmit={sendEmail}>
              <div className='inputBox'>
                <input name="from_name" type="text" value={formData.from_name} onChange={handleChange} required />
                <span>Your Name</span>
              </div>
              <div className='inputBox'>
                <input name="from_email" type="text" value={formData.from_email} onChange={handleChange} required />
                <span>Your Email</span>
              </div>
              <div className='inputBox'>
                <input name="message" type="text" value={formData.message} onChange={handleChange} required className='h-20' />
                <span>Your Message</span>
              </div>
              <button type='submit' className={`flex items-center justify-center gap-3 text-white c-button ${!isFormValid() ? 'disabled' : ''}`} onClick={loading} disabled={!isFormValid()}>
                Submit
                <span className={spin}><FiLoader /></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;