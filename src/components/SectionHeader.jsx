import React from 'react';

const SectionHeader = ({ headerText }) => {
  return (
    <div className='w-full relative flex flex-row justify-center items-center'>
      <div className='flex-1 rounded-xl h-[2.5px] bg-gradient-to-r from-white to-gradientFont1' />
      <div className=' h-fit px-4'>
        <span className='text-transparent font-bold text-lgResized bg-gradient-to-r from-gradientFont1 via-gradientFont2 to-gradientFont3 bg-clip-text'>
          {headerText}
        </span>
      </div>
      <div className='flex-1 rounded-xl h-[2.5px] bg-gradient-to-r to-white from-gradientFont3' />
    </div>
  );
};

export default SectionHeader;
