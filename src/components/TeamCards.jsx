import React, { useEffect } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import Aos from 'aos';
import 'aos/dist/aos.css';

const TeamCards = ({ item }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      data-aos='zoom-out'
      className='flex sm:min-h-64 flex-row p-6 rounded-xl w-[80%] sm:w-[30%] h-fit shadow-lg shadow-slate-500/25 bg-gray-800'
    >
      <div className='w-[25%] flex flex-col justify-start items-center h-20'>
        <div className='w-14 h-14 sm:w-16 sm:h-16 md:w-18 lg:w-20 md:h-18 lg:h-20 rounded-full overflow-hidden'>
          <img src={item.img} className='object-cover' />
        </div>
      </div>
      <div className='w-[75%] px-4  flex flex-col justify-start items-center'>
        <div className='w-full h-20 flex flex-col justify-around items-start'>
          <span className='text-smResized font-bold tracking-tight text-white'>
            {item.name}
          </span>
          <span className='font-medium text-resized text-gray-400'>
            {item.position}
          </span>
          <div className='h-[2px] w-1/3 rounded-xl bg-[#718CFF]' />
        </div>
        <div className='text-resized font-normal pt-2 pb-3 tracking-tight text-white'>
          {item.about}
        </div>
        <div className='flex w-full flex-row justify-start items-center gap-5'>
          <a
            href={item.links[0]}
            target='_blank'
            className={` ${
              item.links.length === 0 && 'pointer-events-none'
            } p-3 rounded-full bg-slate-300  cursor-pointer delay-100 hover:bg-gray-400 flex justify-start items-center`}
          >
            <FaLinkedin className='text-gray-800' size={22} />
          </a>
          {item.links[1] && (
            <a
              href={item.links[1]}
              target='_blank'
              className={` ${
                item.links.length === 0 && 'pointer-events-none'
              } p-3 rounded-full bg-slate-300  cursor-pointer delay-100 hover:bg-gray-400 flex justify-start items-center`}
            >
              <FaSquareXTwitter className='text-gray-800' size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCards;
