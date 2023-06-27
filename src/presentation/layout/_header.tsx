import { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import "./index.css";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    if (isDrawerOpen) {
      const DrawerShow = async () => {
        document.getElementById("drawer")?.classList.add("drawerHeightShow");
        document
          .getElementById("drawer")
          ?.classList.remove("drawerHeightClose");
        document.getElementById("menuLine1")?.classList.add("rotateLine1");
        document.getElementById("menuLine2")?.classList.add("rotateLine2");
        document
          .getElementById("menuLine1")
          ?.classList.remove("backRotateLine1");
        document
          .getElementById("menuLine2")
          ?.classList.remove("backRotateLine2");
      };
      DrawerShow();
    } else {
      const DrawerHide = async () => {
        document.getElementById("menuLine1")?.classList.add("backRotateLine1");
        document.getElementById("menuLine2")?.classList.add("backRotateLine2");
        document.getElementById("drawer")?.classList.add("drawerHeightClose");
        document.getElementById("drawer")?.classList.remove("drawerHeightShow");
        document.getElementById("menuLine1")?.classList.remove("rotateLine1");
        document.getElementById("menuLine2")?.classList.remove("rotateLine2");
      };
      DrawerHide();
    }
  }, [isDrawerOpen]);

  return (
    <header id="header" className={"sticky top-0 flex flex-col w-screen z-40"}>
      <div
        className={
          "flex flex-row items-center justify-between px-4 py-2 bg-bgColor z-40 sm:px-6 sm:py-4 md:px-8 lg:px-12 lg:py-6 xl:px-16"
        }
      >
        <h1
          className={
            "font-montserrat font-semibold text-lg tracking-widest  text-secondaryColor sm:text-xl md:text-2xl lg:text-3xl"
          }
        >
          LISTYO ADI
        </h1>
        <div
          className={
            "flex flex-col justify-center items-center p-1 cursor-pointer gap-1"
          }
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        >
          <div
            id="menuLine1"
            className={`w-6 h-1 rounded-full bg-secondaryColor hover:bg-white md:w-11 md:h-2`}
          ></div>
          <div
            id="menuLine2"
            className={`w-6 h-1 rounded-full bg-secondaryColor hover:bg-white md:w-11 md:h-2`}
          ></div>
        </div>
      </div>
      <div
        id="drawer"
        className={`absolute flex flex-col h-screen w-screen justify-center items-center gap-4 bg-bgColor z-30`}
      >
        <div
          className={
            "absolute bottom-0 flex flex-col w-1/4 h-4 items-center justify-center p-4 border-b-4"
          }
        >
          <p className={"text-secondaryColor md:text-4xl"}>
            <FaAngleDoubleUp />
          </p>
        </div>
        <p
          className={
            "font-montserrat font-semibold text-md text-secondaryColor tracking-widest opacity-60 md:text-2xl"
          }
        >
          MENU
        </p>
        <a
          href=""
          className={
            "font-montserrat font-bold text-4xl text-secondaryColor hover:bg-secondaryColor hover:text-bgColor transition duration-150 md:text-6xl"
          }
        >
          HOME
        </a>{" "}
        <a
          href=""
          className={
            "font-montserrat font-bold text-4xl text-secondaryColor hover:bg-secondaryColor hover:text-bgColor transition duration-150 md:text-6xl"
          }
        >
          PROJECTS
        </a>{" "}
        <a
          href=""
          className={
            "font-montserrat font-bold text-4xl text-secondaryColor hover:bg-secondaryColor hover:text-bgColor transition duration-150 md:text-6xl"
          }
        >
          ABOUT
        </a>{" "}
        <a
          href=""
          className={
            "font-montserrat font-bold text-4xl text-secondaryColor hover:bg-secondaryColor hover:text-bgColor transition duration-150 md:text-6xl"
          }
        >
          CONTACT
        </a>
      </div>
    </header>
  );
};
export default Header;
