import { motion, useScroll, useTransform } from "framer-motion";

import "./content.css";

const Project = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0.75, 0], [0, 400]);

  return (
    <section
      className={
        "flex flex-col relative h-screen items-center justify-center p-4 overflow-hidden"
      }
    >
      <motion.div
        className={
          "absolute top-[-3rem] flex flex-row w-fit gap-1 overflow-hidden"
        }
        style={{ x }}
      >
        <p className={"font-montserrat font-bold text-8xl text-bgColor"}>
          NERUFUYO
        </p>
      </motion.div>
      <div
        className={
          "flex flex-col w-screen px-4 items-start justify-start sm:px-6 lg:px-11 xl:px-14"
        }
      >
        <h1 className={"font-montserrat font-bold text-4xl md:text-7xl"}>
          PROJECTS
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-1 w-screen h-1/2 px-4 sm:px-7 md:px-8 lg:px-12 xl:px-16">
        <div className="bg-primaryColor p-2">01</div>
        <div className="bg-primaryColor p-2">02</div>
        <div className="row-span-2 bg-primaryColor p-2">03</div>
        <div className="col-span-2 bg-primaryColor p-2">04</div>
        <div className="bg-primaryColor p-2">06</div>
        <div className="col-span-2 bg-primaryColor p-2">07</div>
      </div>
    </section>
  );
};

export default Project;
