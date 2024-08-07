import { PiLineVerticalLight } from "react-icons/pi";

const ProjectItem = (props) => {
  const { name, description, thumbnailUrl, githubUrl, liveUrl } = props;

  return (
    <li className="bg-slate-800 rounded-xl h-auto w-4/5 md:w-56 mt-4 md:mt-0 m-3">
      <img className="rounded-t-xl" src={thumbnailUrl} alt={name} />

      <div className="flex flex-col justify-between p-2">
        <div className="">
          <h1 className="text-white font-inter text-base font-light">{name}</h1>
          <p className="font-inter text-xs font-extralight text-slate-400 my-2 h-20 overflow-hidden">
            {description}
          </p>
        </div>

        <div className="flex flex-row items-center justify-evenly text-white border-t border-white w-full mt-8 p-1 pt-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              className="text-base font-inter font-extralight"
            >
              Github
            </a>
          )}
          {githubUrl && liveUrl && <PiLineVerticalLight className="text-xl" />}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              className="text-base font-inter font-extralight"
            >
              View
            </a>
          )}
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
