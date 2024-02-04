import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Online Internship"
            subTitle=" J.P. Morgan Software Engineering Virtual Experience"
            result="Forage"
            des="For 15 days i took the internship provided by forage.com based on Software Engiineering by J P Morgan"
          />
          <ResumeCard
            title="Online Internship"
            subTitle="Accenture North America Data Analytics and  Visualization"
            result="Accenture Forage"
            des="Took an online intern on data visulaization and analytics based on Accentur North America's Syllabus."
          />
          <ResumeCard
            title="Extra Activites."
            subTitle="2021-2024"
            result="In college"
            des="Had been a student trainer for my juniors on certain skills such as , C Programming and Full Stack Development."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Courses and Certifications</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Python for DataScience and Python for Visualization"
            subTitle="Online Course(2 weeks)"
            result="Coginitve Class"
            des="Completed 2 courses on intensive Python for Data Science, gaining expertise in data manipulation, analysis, and visualization, bolstering skills crucial for deriving insights and making informed decisions in the field of data science."
          />
          <ResumeCard
            title="Programming using Java"
            subTitle="Online Course(2 weeks)"
            result="Infosys SpringBoard"
            des="Excelled in the Infosys Springboard online course for Java programming, mastering key concepts such as object-oriented programming, data structures, and algorithmic problem-solving to build a strong foundation in versatile software development"
          />
          <ResumeCard
            title="Digital Skills: Artificial Intelligence"
            subTitle="Online Couse(3 weeks)"
            result="Accenture"
            des="This online course helped discover the potential of Artificial Intelligence (AI) and how it can change the workplace. It enhanced understanding of AI with interesting facts, trends, and insights, and helped to explore the working relationship between humans and AI."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
