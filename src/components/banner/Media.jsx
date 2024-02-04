import React from 'react';
import { FaInstagram, FaLinkedinIn, FaReact, FaGithub,FaNodeJs } from 'react-icons/fa';
import { SiFigma, SiJava, SiAndroidstudio, SiC, SiPython,  SiVisualstudiocode,SiHtml5 } from 'react-icons/si';

const Media = () => {
  return (
    <div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between mb-6">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
          <div className="flex gap-4">
            <a href="https://github.com/gowtham-ravii" rel="noreferrer" target="_blank" className="bannerIcon">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/gowtham-r-a30546229" rel="noreferrer" target="_blank" className="bannerIcon">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/gowth.am_28/"  rel="noreferrer" target="_blank" className="bannerIcon">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">Best Skills</h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaNodeJs/>
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
            <span className="bannerIcon">
              <SiJava />
            </span>
            <span className="bannerIcon">
              <SiAndroidstudio />
            </span>
            <span className="bannerIcon">
              <SiC />
            </span>
            <span className="bannerIcon">
              <SiPython />
            </span>
            <span className="bannerIcon">
              <SiHtml5 />
            </span>
            <span className="bannerIcon">
              <SiVisualstudiocode />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
