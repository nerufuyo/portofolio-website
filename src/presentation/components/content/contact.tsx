import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDiscord,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      className={
        "flex flex-col w-screen h-fit px-4 py-8 items-center justify-center gap-2 bg-bgColor md:gap-4"
      }
    >
      <p
        className={"font-montserrat font-bold text-secondaryColor md:text-3xl"}
      >
        Feel free to contact me!
      </p>
      <motion.a
        href=""
        whileHover={{ scale: 1.025 }}
        transition={{ type: "spring", stiffness: 500, damping: 10 }}
        className={
          "px-4 py-2 font-montserrat font-semibold bg-bgColor text-secondaryColor border-2 rounded-xl hover:bg-secondaryColor hover:text-bgColor transition duration-150 md:text-3xl lg:text-4xl"
        }
      >
        listyoap.work@gmail.com
      </motion.a>
      <p
        className={
          "font-montserrat font-normal text-sm pt-10 text-secondaryColor md:text-xl"
        }
      >
        Or you can find me on:
      </p>
      <div
        className={
          "w-full flex flex-row justify-center items-center gap-5 md:gap-8"
        }
      >
        <motion.a
          href=""
          whileHover={{ scale: 1.025 }}
          transition={{ type: "spring", stiffness: 500, damping: 10 }}
          className={"text-3xl text-secondaryColor md:text-5xl"}
        >
          <FaDiscord />
        </motion.a>
        <motion.a
          href=""
          whileHover={{ scale: 1.025 }}
          transition={{ type: "spring", stiffness: 500, damping: 10 }}
          className={"text-3xl text-secondaryColor md:text-5xl"}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href=""
          whileHover={{ scale: 1.025 }}
          transition={{ type: "spring", stiffness: 500, damping: 10 }}
          className={"text-3xl text-secondaryColor md:text-5xl"}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href=""
          whileHover={{ scale: 1.025 }}
          transition={{ type: "spring", stiffness: 500, damping: 10 }}
          className={"text-3xl text-secondaryColor md:text-5xl"}
        >
          <FaInstagram />
        </motion.a>
        <motion.a
          href=""
          whileHover={{ scale: 1.025 }}
          transition={{ type: "spring", stiffness: 500, damping: 10 }}
          className={"text-3xl text-secondaryColor md:text-5xl"}
        >
          <FaTwitter />
        </motion.a>
      </div>
      <div className={"p-4 w-screen flex items-center justify-center"}>
        <p className={"font-montserrat text-sm text-secondaryColor md:text-lg"}>
          Copyright &copy;2023 Listyo Adi. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
