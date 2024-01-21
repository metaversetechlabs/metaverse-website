import React, { useEffect } from 'react';
import SectionHeader from '../components/SectionHeader';
import Connect from '../assets/images/Connect.png';
import About from '../assets/images/aboutUs.png';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const AboutSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='w-full  items-center' id='aboutus'>
      <SectionHeader headerText={'About Us'} />
      <div className='w-full sm:my-20 justify-center flex flex-col-reverse sm:flex-row'>
        <div
          data-aos='zoom-out'
          className='w-full sm:flex-1 flex justify-center items-center'
        >
          <img className='w-3/5 h-full' src={About} />
        </div>
        <div
          data-aos='fade-left'
          className='sm:w-1/2 space-y-4 my-7 sm:my-0 flex flex-col px-10 items-center sm:items-start justify-center'
        >
          <p className='text-white text-smallResized text-center sm:text-justify'>
            MetAIverse Tech Labs Pvt Ltd is a pioneering technology company
            dedicated to creating immersive Metaverse, AI & Gaming experiences
            which aims to bridge the physical and digital worlds together.
            <br />
            Our primary mission will be to connect people globally through
            cutting-edge virtual environments, fostering new forms of social
            interaction, commerce, and entertainment. By leveraging
            state-of-the-art technologies, we are committed to revolutionizing
            the way individuals engage, collaborate, and communicate within the
            metaverse. In short, we intend to make Metaverse, AI and Gaming
            accessible to all.
            <br /> Our shareholders play a pivotal role in shaping the future of
            this exciting venture, as we continue to explore innovative avenues
            in metaverse development and connectivity.
          </p>
          <Link to='/contact'>
            <div className='flex justify-center items-center text-white text-resized font-semibold gap-2 w-fit px-4 py-2 bg-gradient-to-r to-gradientFont3 from-gradientFont1 rounded-lg '>
              Get in touch
              <img src={Connect} className='w-4 sm:w-6' />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
