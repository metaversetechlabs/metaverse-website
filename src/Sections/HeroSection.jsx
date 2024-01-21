import React, { useEffect } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import Hero from '../assets/images/heroImg.png';
import { Link } from 'react-scroll';
import Aos from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      data-aos='zoom-in'
      className='w-full flex flex-col-reverse sm:flex-row my-10'
    >
      <div className='w-full sm:w-1/2 flex flex-col px-8 sm:pl-20 justify-center items-center sm:items-start text-center sm:text-start'>
        <div className='text-xlResized font-extrabold text-white'>
          Met<span className='text-[#718CFF]'>AI</span>verse{' '}
          <span className='text-transparent bg-gradient-to-r from-gradientFont1  to-gradientFont3 bg-clip-text'>
            TechLabs
          </span>
        </div>
        <span className='text-white font-semibold text-mdResized mt-3 mb-6'>
          Reimagining Possibilities
        </span>
        <span className='text-white font-medium text-smResized '>
          We are a democratic tech lab which leverages the possibilities that
          comes with Metaverse, AI and Gaming in digital humanities, education,
          hospitality and other domains.
        </span>
        <div className='cursor-pointer mt-5  text-white text-resized font-semibold w-fit px-4 py-2 bg-gradient-to-r to-gradientFont3 from-gradientFont1 rounded-lg '>
          <Link
            activeClass='active'
            to={'aboutus'}
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            // duration={500}
            // delay={1000}
            isDynamic={true}
            className='flex justify-center items-center gap-2 '
            spyThrottle={500}
          >
            Explore
            <FaArrowRightLong color='white' />
          </Link>
        </div>
      </div>
      <div className='cursor-pointer w-full sm:w-1/2 flex justify-center items-center'>
        <img src={Hero} className='w-9/12' />
      </div>
    </div>
  );
};

export default HeroSection;
