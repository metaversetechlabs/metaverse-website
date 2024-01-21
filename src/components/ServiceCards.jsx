import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
const ServiceCards = ({ item }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      data-aos='zoom-in'
      className='sm:w-72 sm:h-72 w-[80%] flex flex-col text-center sm:text-start justify-start items-center sm:items-start mb-10 sm:mb-0 sm:mr-10 sm:min-w-72 p-6 rounded-xl shadow-lg shadow-slate-500/25 bg-gray-800 hover:bg-gray-700'
    >
      {item.icon}
      <h5 className='my-2 text-smResized font-bold tracking-tight text-white'>
        {item.name}
      </h5>
      <p className='font-normal text-resized text-gray-700 dark:text-gray-400'>
        {item.details}
      </p>
    </div>
  );
};

export default ServiceCards;
