import React, { useEffect, useState } from 'react';
import Contact from '../assets/images/contact.jpg';
import Contact1 from '../assets/images/contact1.jpg';
import { RiLoader2Fill } from 'react-icons/ri';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ContactUs = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [formData, setFormData] = useState({
    First_Name: '',
    Last_Name: '',
    Mobile_No: '',
    Email_ID: '',
    Organization: '',
    Query: '',
  });
  const [submitText, setSubmitText] = useState('Submit your query');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    fetch(
      'https://sheet.best/api/sheets/802a4436-4f05-4b7d-81aa-6c9143ba4583',
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    )
      .then((r) => r.json())
      .then((data) => {
        // The response comes here
        setSubmitText('Submitted');
        setFormData({
          First_Name: '',
          Last_Name: '',
          Mobile_No: '',
          Email_ID: '',
          Organization: '',
          Query: '',
        });
      })
      .catch((error) => {
        // Errors are reported there
        console.log(error);
      });
  };

  const { First_Name, Last_Name, Mobile_No, Email_ID, Organization, Query } =
    formData;
  return (
    <div className='h-fit w-full flex justify-center p-4 sm:p-10]'>
      <div className='rounded-3xl sm:w-4/5 w-full h-fit sm:h-screen bg-[#171717] flex flex-col-reverse sm:flex-row justify-center items-center overflow-hidden'>
        <div className='w-full sm:w-[45%] h-full'>
          {/* <img
            src={Contact}
            className='w-full h-full object-cover hidden sm:visible'
          />
          <img
            src={Contact1}
            className='w-full h-full object-cover visible sm:hidden'
          /> */}
          <picture>
            <source
              media='(max-width: 640px)'
              className='w-full h-full object-cover'
              srcSet={Contact1}
            />
            <img src={Contact} className='w-full h-full object-cover' />
          </picture>
        </div>
        <div className='w-full sm:w-[55%] p-4 sm:p-6 h-full flex flex-col justify-center items-center'>
          <span className='text-smResized text-white font-bold'>
            Need to contact us ?
          </span>
          <form className='w-full mt-6 sm:mt-10 h-fit' onSubmit={handleSubmit}>
            <div className='flex mb-5 sm:flex-row flex-col gap-5 sm:gap-0 justify-center items-center w-full'>
              <div className='flex pl-2 flex-col justify-center items-start gap-2 w-full sm:w-1/2'>
                <label
                  htmlFor='firstname'
                  className='text-smallResized font-medium text-white'
                >
                  First Name *
                </label>
                <input
                  onChange={handleChange}
                  type='text'
                  id='fname'
                  name='First_Name'
                  value={First_Name}
                  className='w-full text-slate-300 font-medium text-resized border-2 px-4 border-[#282B2F] bg-[#121212]  rounded-md h-10'
                  placeholder='Enter your first name'
                  required
                />
              </div>
              <div className='flex pl-2 flex-col justify-center items-start gap-2 w-full sm:w-1/2'>
                <label
                  htmlFor='lastname'
                  className='text-smallResized font-medium text-white'
                >
                  Last Name *
                </label>
                <input
                  onChange={handleChange}
                  type='text'
                  id='lname'
                  name='Last_Name'
                  value={Last_Name}
                  className='w-full text-slate-300 font-medium text-resized border-2 px-4 border-[#282B2F] bg-[#121212]  rounded-md h-10'
                  placeholder='Enter your last name'
                  required
                />
              </div>
            </div>
            <div className='flex mb-5 sm:flex-row flex-col gap-5 sm:gap-0 justify-center items-center w-full'>
              <div className='flex pl-2 flex-col justify-center items-start gap-2 w-full sm:w-1/2'>
                <label
                  htmlFor='firstname'
                  className='text-smallResized font-medium text-white'
                >
                  Phone Number *
                </label>
                <input
                  onChange={handleChange}
                  type='text'
                  id='pnumber'
                  name='Mobile_No'
                  value={Mobile_No}
                  className='w-full text-slate-300 font-medium text-resized border-2 px-4 border-[#282B2F] bg-[#121212]  rounded-md h-10'
                  placeholder='Enter your phone number'
                  required
                />
              </div>
              <div className='flex pl-2 flex-col justify-center items-start gap-2 w-full sm:w-1/2'>
                <label
                  htmlFor='email'
                  className='text-smallResized font-medium text-white'
                >
                  E-mail Id *
                </label>
                <input
                  onChange={handleChange}
                  type='email'
                  id='email'
                  name='Email_ID'
                  value={Email_ID}
                  className='w-full text-slate-300 font-medium text-resized border-2 px-4 border-[#282B2F] bg-[#121212]  rounded-md h-10'
                  placeholder='Enter your email id'
                  required
                />
              </div>
            </div>
            <div className='flex pl-2 flex-col mb-5 justify-center items-start gap-2 w-full'>
              <label
                htmlFor='company'
                className='text-smallResized font-medium text-white'
              >
                Organization
              </label>
              <input
                onChange={handleChange}
                type='text'
                id='Organization'
                name='Organization'
                value={Organization}
                className='w-full text-slate-300 font-medium text-resized border-2 px-4 border-[#282B2F] bg-[#121212]  rounded-md h-10'
                placeholder='Enter your Organization'
              />
            </div>
            <div className='flex pl-2 flex-col mb-5 justify-center items-start gap-2 w-full'>
              <label
                htmlFor='query'
                className='text-smallResized font-medium text-white'
              >
                Query *
              </label>
              <textarea
                type='text'
                id='query'
                name='Query'
                onChange={handleChange}
                value={Query}
                className='w-full text-slate-300  align-text-top font-medium text-resized border-2 p-4 border-[#282B2F] bg-[#121212]  rounded-md h-52'
                placeholder='Enter your Organization'
                required
              />
            </div>
            <div className='p-[2px] bg-gradient-to-r from-gradientFont1 via-gradientFont2 to-gradientFont3 rounded-md'>
              <button
                type='submit'
                className='rounded-md text-white text-resized font-semibold w-full h-8 sm:h-12 bg-[#121212]'
              >
                {submitText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
