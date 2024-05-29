import React, { useState,useRef } from 'react';
import { animate, motion } from "framer-motion"
import emailjs from '@emailjs/browser'
const GetInTouchCard = () => {
  const form=useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const initialFormData = {
    name: '',
    email: '',
    message: ''
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const response= emailjs
      .sendForm('service_jiv8m25', 'template_tcavhpr', form.current, {
        publicKey: 'Xe9O1n0u6ZDTsTA2t',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      setFormData(initialFormData);
      alert('Message sent successfully');
     
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message');
    }
  };

  return (
    <section id='contact'>
      <div className="flex items-center justify-center mt-8">
      <div className="w-full max-w-2xl p-8 space-y-6">
        <motion.h1
          whileInView={{opacity:1, y:0}}
          initial={{opacity:0, y:-100}}
          transition={{duration:0.5}}
          className='my-10 text-center text-4xl'
        >
          Contact Me
        </motion.h1>
        <p className="text-center text-white">Please fill out the form below to discuss any work opportunities.</p>
        <form ref={form} className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="sr-only">Your name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="px-4 py-2 text-gray-300 bg-gray-900 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              style={{ width: '40rem' }}
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="px-4 py-2 text-gray-300 bg-gray-900 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              style={{ width: '40rem' }}
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="px-4 py-2 text-gray-300 bg-gray-900 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              style={{ width: '40rem' }}
            ></textarea>
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="px-6 py-3 font-bold text-white bg-gray-900  rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              style={{ width: '12rem', height: '3rem' }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </section>
    
  );
};

export default GetInTouchCard;
