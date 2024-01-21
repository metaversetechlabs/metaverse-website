import React from 'react';
import Icon from '../assets/images/Icon.png';
const Footer = () => {
  return (
    <div className='bg-dark w-full h-fit p-10 flex flex-col justify-center items-center space-y-5'>
      <div className='w-full flex flex-col items-center justify-center text-center'>
        <img src={Icon} className='h-52 sm:h-56 md:h-60 lg:h-64' />
        <span className='text-white font-semibold text-mdResized'>
          Reimagining Possibilities
        </span>
      </div>
      {/* <div className='w-full h-[1px] bg-white' />
      <div className='flex flex-col space-y-6 sm:space-y-0 sm:flex-row justify-center items-center sm:space-x-10'>
        <span className='text-white text-resized sm:underline underline-offset-4 cursor-pointer'>
          Cookie policy
        </span>
        <span className='text-white text-resized sm:underline underline-offset-4 cursor-pointer'>
          Legal Notice
        </span>
        <span className='text-white text-resized sm:underline underline-offset-4 cursor-pointer'>
          Terms & conditions
        </span>
      </div> */}
    </div>
  );
};

export default Footer;
