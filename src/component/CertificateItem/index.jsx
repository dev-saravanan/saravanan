import Popup from "reactjs-popup";
import { CgClose } from "react-icons/cg";

const overlayStyle = { background: "rgba(0,0,0,0.5)" };

const CertificateItem = (props) => {
  const { certificateImgUrl, className } = props;

  return (
    <Popup
      trigger={
        <button
          className={`w-32 h-22 md:w-44 md:h-28 lg:w-64 lg:h-44 m-1 outline-none ${className}`}
        >
          <img className="w-full h-full" src={certificateImgUrl} />
        </button>
      }
      modal
      overlayStyle={overlayStyle}
    >
      {(close) => (
        <div className="w-[50vw] bg-white p-1 rounded relative">
          <button
            className="bg-black text-white opacity-60 hover:opacity-80 p-1 md:p-3 rounded-full absolute top-3 right-3 outline-none"
            onClick={() => {
              close();
            }}
          >
            <CgClose />
          </button>
          <img className="w-full h-full rounded" src={certificateImgUrl} />
        </div>
      )}
    </Popup>
  );
};

export default CertificateItem;
