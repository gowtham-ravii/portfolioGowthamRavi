import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Papers and Publications</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Human Pose Estimation"
            subTitle="Filed Patent"
            result="Patent"
            des="Developed Human Pose Estimation system using OpenCV and Python. Implemented detection of human poses, comparing against a predefined model.Contributed to advancing computer vision capabilities for accurate pose recognition."
          />
          <ResumeCard
            title="Human Yoga Pose Estimation"
            subTitle="Publised"
            result="Paper"
            des="Led innovative research utilizing computer vision technologies, specifically MediaPipe and OpenCV, to advance human yoga pose estimation, enhancing accuracy and depth in movement analysis."
          />
          <ResumeCard
            title="New Technology and Innovations"
            subTitle="Published"
            result="Paper"
            des="Pioneered a research paper on emerging technologies and innovations, exploring novel concepts that drive progress and reshape the technological landscape."
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Runner"
            subTitle="Cash prize - Rs.6000"
            result="Visai - 2023"
            des="Secured the 2nd prize at the Veltech-organized Visiai International Hackathon, showcasing an innovative project on virtual librarian that efficiently extracts PDFs based on keywords"
          />
          <ResumeCard
            title="Best Creator Award"
            subTitle="Cash prize - Rs.3000"
            result="Bithack - 2023"
            des="Awarded the Best Creator accolade at Bithack 2023 for spearheading the development of Ride Hub, a revolutionary ride-hailing app, during the intense 48-hour hackathon."
          />
          <ResumeCard
            title="Runner"
            subTitle="Cash prize - Rs.500"
            result="Robofiest-2k22 and Krize 2k22"
            des="Won runner for the the project Telecommunication and visualization in Robofiesta - 2k22 organized by Sri Ramakrishna Institute of Technology and also won 2nd prize for the paper Lung Cancer prediction in Krizen - 2K22! organized by Sri Krishna College of Engineering and Technology."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
