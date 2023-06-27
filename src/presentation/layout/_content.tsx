import Banner from "../components/content/banner";
import Project from "../components/content/project";
import About from "../components/content/about";
import Contact from "../components/content/contact";

const Content = () => {
  return (
    <section className={"w-screen"}>
      <Banner />
      <Project />
      <About />
      <Contact />
    </section>
  );
};

export default Content;
