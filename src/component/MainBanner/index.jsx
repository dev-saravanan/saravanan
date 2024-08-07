import profileImg from "../../assets/images/profile-img.webp";

const MainBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <div className="flex flex-col md:flex-row items-center justify-center w-4/5 md:w-3/5">
        <div className="font-inter flex flex-col items-start justify-start w-full lg:w-3/4">
          <h1 className="text-white text-xl md:text-2xl font-semibold">
            Hello, I'm
          </h1>
          <h1 className="mt-1 text-white text-3xl md:text-4xl font-semibold">
            Saravanan K
          </h1>
          <h1 className="mt-2 text-slate-300 text-xl md:text-2xl font-semibold">
            Frontend Developer
          </h1>

          <a
            href="https://drive.google.com/drive/folders/13tfTOrE0_A_dOhw4YwCecnW53DhmI9fC"
            target="_blank"
            className="font-inter font-light bg-slate-800 hover:bg-slate-700 px-5 py-3 rounded-md mt-5"
          >
            Resume
          </a>
        </div>

        <div className="flex flex-row items-center justify-center mt-5 md:mt-1 w-full lg:w-2/5">
          <img className="w-3/4 md:w-full" src={profileImg} alt="profile-img" />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
