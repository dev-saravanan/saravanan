import Certificates from "../Certificates";
import Contact from "../Contact";
import MainBanner from "../MainBanner";
import Projects from "../Projects";
import RandomQuotes from "../RandomQuotes";
import Skills from "../Skills";

const Home = () => {
  return (
    <>
      <MainBanner />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <RandomQuotes />
    </>
  );
};

export default Home;
