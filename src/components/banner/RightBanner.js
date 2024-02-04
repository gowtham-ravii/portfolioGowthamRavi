import React from 'react';
import { me } from '../../assets/index';

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[225px] h-[300px] lgl:w-[375px] lgl:h-[510px] z-10"
        src={me}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[262.5px] h-[225px] lgl:w-[375px] lgl:h-[375px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
