import { CiLocationOn, CiMail } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-start text-white min-h-[50vh]">
      <h1 className="text-xl font-raleway font-light my-4">Contact</h1>

      <div className="flex flex-col items-start md:flex-row md:items-center justify-evenly w-4/5 md:w-1/2 mt-8">
        <div className="flex flex-row items-center justify-start w-64 my-3 md:my-0">
          <CiLocationOn className="text-2xl m-2" />
          <div>
            <h1 className="text-base text-white font-raleway font-normal my-0.5">
              Location
            </h1>
            <p className="text-base text-slate-300 font-raleway font-light my-0.5">
              Chennai, India
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-start w-64 my-3 md:my-0">
          <CiMail className="text-2xl m-2" />
          <div>
            <h1 className="text-base text-white font-raleway font-normal my-0.5">
              Mail
            </h1>
            <p className="text-base text-slate-300 font-raleway font-light my-0.5">
              kvsaravanan716@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
