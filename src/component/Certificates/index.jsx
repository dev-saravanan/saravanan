import { useState } from "react";
import CertificateItem from "../CertificateItem";

import {
  buildYourOwnStaticWebsite,
  buildYourOwnResponsiveWebsite,
  buildYourOwnDynamicWebsite,
  introToDatabase,
  javascriptEssentials,
  webDesignUsingFlexbox,
} from "../../assets/images/technology-certificates";

import {
  sih,
  ignitra,
  mathTopper,
  codeAsthra,
} from "../../assets/images/achievements-certificate";

const ACTIVE_TAB_CONSTANTS = {
  technology: "TECHNOLOGY",
  achievement: "ACHIEVEMENT",
};

const technolgyCertificateList = [
  {
    id: 1,
    certificateImgUrl: buildYourOwnStaticWebsite,
  },
  {
    id: 2,
    certificateImgUrl: buildYourOwnResponsiveWebsite,
  },
  {
    id: 3,
    certificateImgUrl: buildYourOwnDynamicWebsite,
  },
  {
    id: 4,
    certificateImgUrl: introToDatabase,
  },
  {
    id: 5,
    certificateImgUrl: javascriptEssentials,
  },
  {
    id: 6,
    certificateImgUrl: webDesignUsingFlexbox,
  },
];

const achievementCertificateList = [
  {
    id: 0,
    certificateImgUrl: sih,
  },
  {
    id: 1,
    certificateImgUrl: ignitra,
  },
  {
    id: 2,
    certificateImgUrl: codeAsthra,
  },
  {
    id: 3,
    certificateImgUrl: mathTopper,
  },
];

const Certificates = () => {
  const [activeTab, setActiveTab] = useState(ACTIVE_TAB_CONSTANTS.technology);

  return (
    <div className="flex justify-center items-start min-h-[60vh] md:min-h-[100vh] h-full">
      <div className="w-11/12 md:w-4/5 flex flex-col justify-center items-center">
        <h1 className="text-xl font-raleway font-light text-white my-2">
          Certificates
        </h1>

        <div className="w-4/5 mt-8 flex flex-col justify-start items-center">
          <div className="text-xs font-raleway font-light">
            <button
              onClick={() => setActiveTab(ACTIVE_TAB_CONSTANTS.technology)}
              className={`rounded-full px-4 py-1 border border-slate-100 mx-1 outline-none ${
                activeTab === ACTIVE_TAB_CONSTANTS.technology
                  ? "bg-slate-100 text-black"
                  : "text-slate-100"
              }`}
            >
              Technical
            </button>
            <button
              onClick={() => setActiveTab(ACTIVE_TAB_CONSTANTS.achievement)}
              className={`rounded-full px-4 py-1 border border-slate-100 mx-1 outline-none ${
                activeTab === ACTIVE_TAB_CONSTANTS.achievement
                  ? "bg-slate-100 text-black"
                  : "text-slate-100"
              }`}
            >
              Achievements
            </button>
          </div>

          <div className="mt-5 flex flex-row items-center justify-center flex-wrap">
            {technolgyCertificateList.map((eachCertificate) => (
              <CertificateItem
                key={eachCertificate.id}
                certificateImgUrl={eachCertificate.certificateImgUrl}
                className={
                  activeTab === ACTIVE_TAB_CONSTANTS.technology
                    ? "block"
                    : "hidden"
                }
              />
            ))}

            {achievementCertificateList.map((eachCertificate) => (
              <CertificateItem
                key={eachCertificate.id}
                certificateImgUrl={eachCertificate.certificateImgUrl}
                className={
                  activeTab === ACTIVE_TAB_CONSTANTS.achievement
                    ? "block"
                    : "hidden"
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
