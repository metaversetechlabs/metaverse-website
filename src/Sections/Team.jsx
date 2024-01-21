import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Team1 from '../assets/images/team1.jpg';
import Team2 from '../assets/images/team2.jpeg';
import Team3 from '../assets/images/team3.jpeg';
import TeamCards from '../components/TeamCards';
const Team = () => {
  const Team_Data = [
    {
      img: Team3,
      name: 'Rohan Chakraborty',
      position: 'Chief Operating Office',
      about:
        'Expert in strategy execution who bridges the gap between technology and business.',
      links: [
        'https://www.linkedin.com/in/rohanchakraborty1',
        'https://x.com/procliner?t=bo4AaLdSC-ws38hjqF26fg&s=09',
      ],
    },
    {
      img: Team2,
      name: 'Trisha De Niyogi',
      position: ' Co-founder',
      about: 'Storyteller focusing on brand communication',
      links: [
        'https://in.linkedin.com/in/trishadeniyogi',
        'https://twitter.com/Trisha_Niyogi',
      ],
    },
    {
      img: Team1,
      name: 'Raghav Arora',
      position: 'Chief Product Officer',
      about:
        'Visionary product manager with expertise in both finance and technology.',
      links: ['https://www.linkedin.com/in/raghavarora1308/'],
    },
  ];
  return (
    <div className='w-full flex flex-col items-center justify-center my-10'>
      <SectionHeader headerText={'Meet Our Team'} />
      <div className='w-full sm:w-4/5 px-5 text-center my-6 '>
        <p className='text-white text-resized '>
          A diverse team, uniting a range of expertise, collaboratively steers
          innovation and success. Through a blend of skills and perspectives, we
          navigate challenges together.
        </p>
      </div>
      <div className='w-full pb-10 sm:justify-evenly sm:w-[90%] flex flex-col  gap-10 sm:gap-0 items-center sm:flex-row  justify-center'>
        {Team_Data.map((item, index) => (
          <TeamCards key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Team;
