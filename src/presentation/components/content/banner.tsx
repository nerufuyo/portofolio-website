import { FaGithub, FaGg } from "react-icons/fa";
import { motion } from "framer-motion";
import "./content.css";

const Banner = () => {
  return (
    <section
      className={
        "flex flex-col relative w-screen h-screen items-center justify-center p-4 bg-bgColor"
      }
    >
      <div
        className={
          "absolute bottom-[-3rem] flex flex-row w-screen gap-1 overflow-hidden"
        }
      >
        <p className={"font-montserrat font-bold text-8xl text-stroke"}>ART</p>
        <p className={"font-montserrat font-bold text-8xl text-stroke"}>ART</p>
        <p className={"font-montserrat font-bold text-8xl text-stroke"}>ART</p>
        <p className={"font-montserrat font-bold text-8xl text-stroke"}>ART</p>
      </div>
      <div
        id="hiContainer"
        className={"flex flex-row w-screen items-start px-4"}
      >
        <h1
          id="hiText"
          className={"font-montserrat font-bold text-5xl text-secondaryColor"}
        >
          Hi,
        </h1>
      </div>
      <p
        id="descriptionText"
        className={"font-montserrat font-bold text-2xl text-secondaryColor"}
      >
        I'm{" "}
        <span id="nameText" className={"text-primaryColor"}>
          Listyo Adi Pamungkas
        </span>
        , a computer science graduate who loves creating software and mobile
        apps. I specialize in using{" "}
        <span className={"px-1 text-bgColor bg-secondaryColor"}>
          Flutter & Riverpod
        </span>
        , and I'm always working on new projects and getting better at these
        technologies.
      </p>
      <div
        id="descriptionButton"
        className={"flex flex-row w-screen px-4 gap-2 mt-4"}
      >
        <motion.a
          href=""
          whileHover={{ scale: 1.025 }}
          transition={{ type: "spring", stiffness: 500, damping: 10 }}
          className={
            "flex flex-row items-center justify-center font-montserrat text-md p-2 border-2 gap-2 text-secondaryColor hover:bg-secondaryColor hover:text-bgColor border-secondaryColor rounded-md"
          }
        >
          <FaGg />
          Contact
        </motion.a>
        <motion.a
          href=""
          whileHover={{ scale: 1.025 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className={
            "flex flex-row items-center justify-center font-montserrat text-md p-2 border-2 gap-2 text-secondaryColor hover:bg-secondaryColor hover:text-bgColor border-secondaryColor rounded-md"
          }
        >
          <FaGithub />
          Github
        </motion.a>
      </div>
    </section>
  );
};

export default Banner;
