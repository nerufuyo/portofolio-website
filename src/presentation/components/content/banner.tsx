import { FaGithub, FaGg } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import "./content.css";

const Banner = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0.75, 0], [0, 400]);

  return (
    <section
      className={
        "flex flex-col relative w-screen h-screen items-center justify-center p-4 bg-bgColor overflow-hidden"
      }
    >
      <p
        className={
          "absolute top-10 font-montserrat font-bold text-[3rem] text-stroke opacity-[.04]"
        }
      >
        NERUFUYO
      </p>
      <motion.div
        className={
          "absolute bottom-[-3rem] flex flex-row w-fit gap-1 overflow-hidden"
        }
        style={{ x }}
      >
        <p className={"font-montserrat font-bold text-8xl text-stroke"}>
          NERUFUYO
        </p>
      </motion.div>
      <div className={"flex flex-row w-screen items-start px-4"}>
        <h1
          id="hiText"
          className={
            "font-montserrat font-bold text-[16rem] text-secondaryColor opacity-0"
          }
        >
          Hi,
        </h1>
      </div>
      <p
        id="descriptionText"
        className={
          "font-montserrat font-bold text-[0px] text-secondaryColor overflow-hidden"
        }
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
        className={"flex flex-row w-screen px-4 gap-2 mt-4 opacity-0"}
      >
        <motion.a
          href=""
          whileHover={{ scale: 1.025 }}
          transition={{ type: "spring", stiffness: 500, damping: 10 }}
          className={
            "flex flex-row items-center justify-center font-montserrat text-md p-2 border-2 gap-2 text-secondaryColor hover:bg-secondaryColor transitio duration-150 hover:text-bgColor border-secondaryColor rounded-md"
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
            "flex flex-row items-center justify-center font-montserrat text-md p-2 border-2 gap-2 text-secondaryColor hover:bg-secondaryColor hover:text-bgColor transition duration-150 border-secondaryColor rounded-md"
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
