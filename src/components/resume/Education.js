import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BE Information Science and Engineering"
            subTitle="Bannari Amman Institute of Technology(2021 - 2025)"
            result="8.95 CGPA"
            des="This course enhanced my computing and problem solving skills with abundant knowledge of computer and information science."
          />
          <ResumeCard
            title="Higher Secondary School Education(CBSE)"
            subTitle="Shree Sarasswathi Vidhyaah Mandheer ,Mettupalayam (2020 - 2021)"
            result="93%"
            des=""
          />
          <ResumeCard
            title="Secondary School Education(CBSE)"
            subTitle="Shree Sarasswathi Vidhyaah Mandheer,Mettupalayam (2018 - 2019)"
            result="94.4%"
            des=""
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Personal Details</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Place of Birth"
            subTitle="Hosur,TamilNadu"
            result="28/07/2003"
            des="Languages Known : English (R,W,S), Tamil (R,W,S), Telugu(S), Hindi(R,W)"
          />
          <ResumeCard
            title="Soft Skills"
            subTitle=""
            result=""
            des="LeaderShip Qualities,
                 Projcet Management,
                 Adaptablity,
                 Self Dependent,
                 Team Player"
          />
          <ResumeCard
            title="Hobbies"
            subTitle=""
            result=""
            des="VolleyBall,
                 Exploring Film Making,
                 Event Organization(Organized events such as Elanza 2023 and Ignis 2023 )"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education