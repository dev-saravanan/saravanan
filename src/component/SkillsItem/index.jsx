import Popup from "reactjs-popup";

const arrowStyle = { color: "rgb(51 65 85)" };

const SkillsItem = (props) => {
  const { imgUrl, skill } = props;

  return (
    <Popup
      trigger={(open) => (
        <li className="bg-slate-800 hover:bg-slate-700 flex justify-center items-center w-12 h-12 p-2 rounded-xl m-2">
          <img className="w-full" src={imgUrl} alt={skill} />
        </li>
      )}
      position="bottom center"
      on={["hover", "focus"]}
      arrowStyle={arrowStyle}
    >
      <span className="text-xs font-raleway bg-slate-700 p-2 rounded-md text-slate-200">
        {skill}
      </span>
    </Popup>
  );
};

export default SkillsItem;
