import React, { useEffect } from 'react';
import Metaverse from '../assets/images/meta.png';
import AI from '../assets/images/ai.png';
import Game from '../assets/images/Game.png';
import SectionHeader from '../components/SectionHeader';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Work = () => {
  useEffect(() => {
    Aos.init({ duration: 4000 });
  }, []);

  const Works_List = [
    {
      img: Metaverse,
      heading: 'Metaverse',
      subHeading: 'Metaverse unlocks a realm of unparalleled opportunities.',
      text: [
        'Metaverse unlocks a realm of unparalleled opportunities.',
        'It ushers in a new era in marketing and advertising, offering greater customer engagement, the power to craft immersive and unique experiences, access to a vibrant community of users and potential clients, and the means to expand your business in the virtual world.',
        'Metaverse provides a valuable touchpoint for the organization. We specialize in selecting the most suitable Metaverse platforms, designing exceptional experiences, and crafting 3D environments that deliver tangible value for your business.',
        'Metaverse can be made more potent with AI integration. ',
      ],
    },
    {
      img: AI,
      heading: 'AI Tool',
      subHeading: 'Make experiences interactive and customisable ',
      text: [
        'AI is used to make experiences interactive and customizable for users by using deep learning, NLP, machine vision, and speech recognition. AI-enhanced experiences connect you with a vibrant user community and open doors to virtual expansion.',
        'We can integrate your websites with chatbots and virtual assistants, and provide virtual experiences of your products. We can also help in demand forecasting and trend analysis through AI at an affordable price.',
      ],
    },
    {
      img: Game,
      heading: 'Gaming',
      subHeading: 'Immersive learning experience .',
      text: [
        'Gaming can be used to create immersive learning experiences. We can even gamify your existing products to make them interactive',
      ],
    },
  ];
  return (
    <div className='w-full items-center my-10'>
      <SectionHeader headerText='What Do We Leverage' />
      <div
        className='w-full flex flex-col gap-6
      items-center
    '
      >
        {Works_List.map((item, index) => (
          <div
            key={index}
            className={[
              'flex w-11/12 flex-col sm:flex-row',
              index === 1
                ? 'flex-col-reverse sm:flex-row-reverse'
                : 'flex-col sm:flex-row',
            ]}
          >
            <div
              data-aos='fade-left'
              className='w-full sm:w-1/2 flex flex-col justify-center text-justify items-start p-4'
            >
              <span className='font-semibold text-white w-full sm:w-9/12 text-headerResized my-5  text-center sm:text-start'>
                {item.heading}
              </span>
              <span className='text-transparent font-medium text-contentResized w-full bg-gradient-to-r from-gradientFont1 via-gradientFont2 to-gradientFont3 bg-clip-text text-center sm:text-start'>
                {item.subHeading}
              </span>
              {item.text.map((item, index) => (
                <p className='font-normal text-white w-full text-smallResized my-1 text-center sm:text-start'>
                  {item}
                </p>
              ))}
            </div>
            <div
              data-aos='zoom-out'
              className='w-full sm:w-1/2 flex justify-center items-center'
            >
              <img src={item.img} className='w-9/12' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
