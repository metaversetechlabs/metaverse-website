import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ServiceCards from '../components/ServiceCards';
import { CgWebsite } from 'react-icons/cg';
import { AiFillHtml5 } from 'react-icons/ai';
import { SiBmcsoftware } from 'react-icons/si';
import { SiJirasoftware } from 'react-icons/si';
import { GiArtificialHive } from 'react-icons/gi';
import { FaAppStoreIos } from 'react-icons/fa';
import { TbCloudComputing } from 'react-icons/tb';
import { FaGamepad } from 'react-icons/fa';
import { FaPhotoVideo } from 'react-icons/fa';
import { SiAdobeindesign } from 'react-icons/si';

const Service_List = [
  {
    icon: <AiFillHtml5 size={40} color='white' />,
    name: 'Website Development',
    details:
      'Craft your digital ecosystem & elevate your brand with secure, scalable and conversion-driven websites through bespoke web solutions from simple landing pages to complex enterprise platforms',
  },
  {
    icon: <FaAppStoreIos size={40} color='white' />,
    name: 'App Development',
    details:
      'Transform innovative ideas into native or web apps that engage your audience and achieve business goals.',
  },
  {
    icon: <TbCloudComputing size={40} color='white' />,
    name: 'Cloud Solutions Optimization',
    details:
      'Unleash the power of the cloud with expert consulting; maximizing performance, reducing costs, and ensuring security.',
  },
  {
    icon: <GiArtificialHive size={40} color='white' />,
    name: 'AI/Gen AI Implementation',
    details:
      ' Utilize AI and Generative AI for automation, insights, and personalized experiences. We create tailored solutions for your business challenges.',
  },
  {
    icon: <SiBmcsoftware size={40} color='white' />,
    name: 'SaaS Consulting',
    details:
      'Expert guidance from ideation to market launch, optimisation strategy, development, and user acquisition.',
  },
  {
    icon: <SiJirasoftware size={40} color='white' />,
    name: 'SaaS Product Development',
    details:
      'We engineer secure, high-performing, and future-proof platforms for your users to rely on.',
  },
  {
    icon: <SiAdobeindesign size={40} color='white' />,
    name: 'UI/UX Design',
    details:
      'We design elegant and functional interfaces that prioritize usability, accessibility, and conversion optimization',
  },
  {
    icon: <FaPhotoVideo size={40} color='white' />,
    name: 'Video Editing/Animation',
    details:
      'Captivate your audience and communicate your brand message with professional video editing and animation',
  },
  {
    icon: <FaGamepad size={40} color='white' />,
    name: 'Gamification',
    details: 'Gamify websites to books, educational material to arts',
  },
];

const Services = () => {
  return (
    <div className='w-full items-center justify-center my-10' id='services'>
      <SectionHeader headerText='Services' />
      <div className='w-full px-10 my-5 text-center font-normal text-white text-resized'>
        Discover unparalleled business elevation with our diverse array of
        strategic services. Specializing in avant-garde technology solutions and
        comprehensive advisory services, we tailor our expertise to propel your
        business to new heights.
      </div>

      <div className='w-full py-10 items-center flex flex-col sm:flex-row overflow-x-auto sm:pl-10 '>
        {Service_List.map((item, index) => (
          <ServiceCards key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
