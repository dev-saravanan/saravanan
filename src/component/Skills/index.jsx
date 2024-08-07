import {
  reactLogo,
  html,
  css,
  js,
  bootstrap,
  tailwindcss,
  photoshop,
  canva,
} from "../../assets/images/frontend-skills";

import {
  nodejs,
  expressjs,
  postgresql,
  ubuntu,
  aws,
  postman,
  python,
} from "../../assets/images/backend-skills";

import SkillsItem from "../SkillsItem";

const frontendSkills = [
  {
    id: 1,
    imgUrl: html,
    skill: "HTML",
  },
  {
    id: 2,
    imgUrl: css,
    skill: "CSS",
  },
  {
    id: 3,
    imgUrl: js,
    skill: "Javascript",
  },
  {
    id: 4,
    imgUrl: reactLogo,
    skill: "ReactJS",
  },
  {
    id: 5,
    imgUrl: tailwindcss,
    skill: "Tailwind CSS",
  },
  {
    id: 6,
    imgUrl: bootstrap,
    skill: "Bootstrap",
  },
  {
    id: 7,
    imgUrl: photoshop,
    skill: "Photoshop",
  },
  {
    id: 8,
    imgUrl: canva,
    skill: "Canva",
  },
];

const otherSkills = [
  {
    id: 1,
    imgUrl: nodejs,
    skill: "NodeJS",
  },
  {
    id: 2,
    imgUrl: expressjs,
    skill: "ExpressJS",
  },
  {
    id: 3,
    imgUrl: postgresql,
    skill: "PostgreSQL",
  },
  {
    id: 4,
    imgUrl: ubuntu,
    skill: "Ubuntu",
  },
  {
    id: 5,
    imgUrl: aws,
    skill: "AWS",
  },
  {
    id: 6,
    imgUrl: postman,
    skill: "Postman",
  },
  {
    id: 7,
    imgUrl: python,
    skill: "Python",
  },
];

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-[50vh] md:min-h-[60vh] h-full">
      <div className="flex flex-col items-center justify-center w-11/12 md:4/5">
        <h1 className="text-xl font-raleway font-light text-white my-2">
          Frontend Technologies
        </h1>

        <ul className="flex flex-row items-center justify-center flex-wrap list-style-none">
          {frontendSkills.map((eachSkill) => (
            <SkillsItem key={eachSkill.id} {...eachSkill} />
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-center justify-center mt-8  w-11/12 md:4/5">
        <h1 className="text-xl font-raleway font-light text-white my-2">
          Other Technologies
        </h1>

        <ul className="flex flex-row items-center justify-center flex-wrap list-style-none">
          {otherSkills.map((eachSkill) => (
            <SkillsItem key={eachSkill.id} {...eachSkill} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
