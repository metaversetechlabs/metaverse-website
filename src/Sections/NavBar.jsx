import React, { useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross1 } from 'react-icons/rx';
import { Link } from 'react-scroll';
import { IoCall } from 'react-icons/io5';
import { Link as GoTo, useLocation } from 'react-router-dom';
import Icon from '../assets/images/Icon.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Nav_List = [
  {
    text: 'Who we are',
    to: 'aboutus',
  },
  {
    text: 'What we do',
    to: 'services',
  },
];
const NavBar = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [open, setOpen] = useState(false);
  const location = useLocation();
  return (
    <div className='w-full h-fit bg-light'>
      <div
        data-aos='zoom-in'
        className='py-2 sm:justify-between items-center sm:flex sm:px-10 bg-light sm:z-auto z-[-1] w-full left-0 '
      >
        <GoTo to='/'>
          <div className='pl-10 sm:pl-0 '>
            <img src={Icon} className='h-16 sm:h-20' />
          </div>
        </GoTo>
        <div
          onClick={() => setOpen(!open)}
          className='absolute right-8 top-6 cursor-pointer sm:hidden'
        >
          {open ? (
            <RxCross1 color='white' size={30} />
          ) : (
            <RxHamburgerMenu color='white' size={30} />
          )}
        </div>
        <div
          className={`flex sm:flex-row flex-col gap-7 sm:gap-10 sm:items-center sm:py-0 py-10 absolute sm:static bg-light w-full sm:w-auto sm:pl-0 pl-10 transition-all duration-1000 ease-in ${
            open ? 'top-100 opacity-100' : 'top-[-500px]'
          } `}
        >
          {Nav_List.map((item, index) => (
            <div
              onClick={() => setOpen(!open)}
              key={index}
              className='p-[1px] bg-gradient-to-r w-fit from-gradientFont1 to-gradientFont3 rounded-md'
            >
              {location.pathname === '/' ? (
                <Link
                  activeClass='active'
                  to={item.to}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={0}
                  // duration={500}
                  // delay={1000}
                  isDynamic={true}
                  spyThrottle={500}
                >
                  <div
                    onClick={() => setOpen(!open)}
                    className='cursor-pointer px-6 w-fit bg-light py-2 text-resized text-white rounded-md'
                  >
                    {item.text}
                  </div>
                </Link>
              ) : (
                <GoTo to='/'>
                  <div
                    onClick={() => setOpen(!open)}
                    className='cursor-pointer px-6 w-fit bg-light py-2 text-resized text-white rounded-md'
                  >
                    {item.text}
                  </div>
                </GoTo>
              )}
            </div>
          ))}
          {location.pathname === '/' && (
            <GoTo to='/contact'>
              <div
                onClick={() => setOpen(!open)}
                className='w-fit text-resized font-semibold text-white justify-center items-center px-6 py-3 rounded-md flex flex-row gap-4 bg-gradient-to-r from-gradientFont1 to-gradientFont3 '
              >
                Make A Call
                <span>
                  <IoCall className=' text-xl sm:text-2xl' color='white' />
                </span>
              </div>
            </GoTo>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
