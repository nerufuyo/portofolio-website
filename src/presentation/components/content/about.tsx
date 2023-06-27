import {
  DiDart,
  DiReact,
  DiJavascript,
  DiFirebase,
  DiMysql,
} from "react-icons/di";

const About = () => {
  return (
    <section
      className={
        "flex flex-col w-screen h-screen items-start justify-center px-4 gap-10 bg-bgColor sm:px-6 md:px-8 md:gap-16 lg:px-12 xl:px-16"
      }
    >
      <h1
        className={
          "font-montserrat font-bold text-4xl text-secondaryColor md:text-7xl"
        }
      >
        About Me
      </h1>
      <div className={"flex flex-col gap-2"}>
        <p
          className={
            "font-montserrat text-lg text-secondaryColor text-justify md:text-2xl"
          }
        >
          Hello again, I'm{" "}
          <span className={"text-primaryColor"}>Listyo Adi Pamungkas</span>. I'm
          a programmer who has an interest in mobile development. I studied many
          programming languages and the one I'm most interested in is{" "}
          <span className={"text-primaryColor"}>Dart</span>.
        </p>
        <p
          className={
            "font-montserrat text-lg text-secondaryColor text-justify md:text-2xl"
          }
        >
          As you can see, I have created many projects using this language. I
          also learned many other things like{" "}
          <span className={"text-primaryColor"}>
            "How to implement Clean Code and Clean Architecture"
          </span>{" "}
          and many other things. If you are interested in me, I am open to work
          with anyone✌️.
        </p>
      </div>
      <div
        className={
          "flex flex-row flex-wrap w-full items-center justify-center gap-2"
        }
      >
        <p className={"text-6xl text-secondaryColor md:text-7xl"}>
          <DiDart />
        </p>
        <p className={"text-6xl text-secondaryColor md:text-7xl"}>
          <DiReact />
        </p>
        <p className={"text-6xl text-secondaryColor md:text-7xl"}>
          <DiJavascript />
        </p>
        <p className={"text-6xl text-secondaryColor md:text-7xl"}>
          <DiFirebase />
        </p>
        <p className={"text-6xl text-secondaryColor md:text-7xl"}>
          <DiMysql />
        </p>
      </div>
    </section>
  );
};

export default About;
