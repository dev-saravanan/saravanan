import {
  jobPortal,
  financeTrackerUi,
  weatherUi,
} from "../../assets/images/projects-thumbnail";

import ProjectItem from "../ProjectItem";

const projectDetails = [
  {
    id: 1,
    name: "Weather Updates",
    description:
      "Developed a weather app using OpenWeatherMap API, providing real-time weather updates and local time for 100+ global locations, enhancing worldwide weather awareness.",
    thumbnailUrl: weatherUi,
    githubUrl: "https://github.com/dev-saravanan/weather-webapp",
    liveUrl: "https://weather-webapp-ashy.vercel.app/",
  },
  {
    id: 2,
    name: "Finance Tracker",
    description:
      "Developed a web application with an interactive UI and secure REST APIs that utilizes OCR (Optical Character Recognition) for bill recognition, automating the finance tracking process.",
    thumbnailUrl: financeTrackerUi,
    githubUrl: "https://github.com/dev-saravanan/Finance-Management-System",
    liveUrl: null,
  },
  {
    id: 3,
    name: "Job Search Portal",
    description:
      "Built an easy-to-use job platform using REST APIs for efficient job searching and applications, improving accessibility and efficiency in the job market by giving exceptional user experience.",
    thumbnailUrl: jobPortal,
    githubUrl: null,
    liveUrl: "https://svjobportal.ccbp.tech/",
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-start my-24">
      <h1 className="text-xl font-raleway font-light text-white my-4">
        Projects
      </h1>

      <ul className="flex flex-row items-center justify-center flex-wrap list-style-none">
        {projectDetails.map((eachProject) => (
          <ProjectItem key={eachProject.id} {...eachProject} />
        ))}
      </ul>
    </div>
  );
};

export default Projects;
