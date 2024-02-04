import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive,projectSix} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
      <ProjectsCard
  title="RIDE-HUB, TAP ride enjoy"
  des="Engineered advanced ride-hailing platform with React Native , FireBase and Node.js. Prioritized data privacy in ride requests, driver tracking, and secure payments.Innovated MapView features for the app.!"
  src={projectOne}
  githubLink="https://github.com/gowtham-ravii/RideHub"
  websiteLink="https://www.yourwebsite.com"
/>

<ProjectsCard
  title="Health Booker - MERN"
  des="HealthBooker, A MERN-based solution for effortless hospital appointment bookings, enhancing healthcare accessibility. Streamline scheduling and elevate patient care with this intuitive and efficient web application."
  src={projectTwo}
  githubLink="https://github.com/gowtham-ravii/HealthBooker"
  websiteLink="https://www.yourwebsite.com"
/>

<ProjectsCard
  title="Human Yoga Pose Estimation"
  des="Developed web application for user and landmark detection. Implemented pose prediction with recognition of perfect asanas. Output refinement for accurate asana naming unknown for imperfect poses."
  src={projectThree}
  githubLink="https://github.com/gowtham-ravii/yoga-pose-estimation"
  websiteLink="https://hariharanm95.github.io/Yoga-Pose-Estimation/"
/>

<ProjectsCard
  title="the Virtual Libraian"
  des="Engineered AI-powered document retrieval system for local network. Implemented self-learning software to identify keywords in PDFs. Facilitated manual addition of user-specific folders for enhanced accessibility. "
  src={projectFour}
  githubLink="https://github.com/gowtham-ravii/VIRTUAL-LIBRARIAN-/tree/main/virtual_librarian_bit-main"
  websiteLink="https://www.yourwebsite.com"
/>
<ProjectsCard
  title="Safe She, Android APp"
  des="Created SafeShe Android app with panic button for instant SMS and calls. Integrated SMSManager and ACTION_CALL intent for efficiency. Ensured privacy compliance and user-friendly interfaces. Proficient in Android Studio, Firebase, and user-centric design."
  src={projectFive}
  githubLink="https://github.com/gowtham-ravii/SafeShe"
  websiteLink="https://www.yourwebsite.com"
/>

<ProjectsCard
  title="Telecommunication Visulization"
  des="Predicted telecom churn using machine learning (Linear Regression, Logistic Regression, Random Forest, Decision Trees).Employed Matplotlib for result visualization. Enhanced decision-making through data-driven insights in telecommunications."
  src={projectSix}
  githubLink="https://github.com/gowtham-ravii/TelecommunicationVisualization"
  websiteLink="https://www.yourwebsite.com"
/>

      </div>
    </section>
  );
}

export default Projects