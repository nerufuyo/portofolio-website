import { useState, useEffect } from "react";
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
    <header id="header" className={"fixed top-0 flex flex-col w-screen z-40"}>
      <div
        className={
          "flex flex-row items-center justify-between px-4 py-2 bg-bgColor z-40"
        }
      >
        <h1
          className={
            "font-montserrat font-semibold text-lg tracking-widest  text-secondaryColor"
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
            className={`w-6 h-1 rounded-full bg-secondaryColor hover:bg-white`}
          ></div>
          <div
            id="menuLine2"
            className={`w-6 h-1 rounded-full bg-secondaryColor hover:bg-white`}
          ></div>
        </div>
      </div>
      <div
        id="drawer"
        className={`absolute flex flex-col h-screen w-screen bg-bgColor z-30`}
      ></div>
    </header>
  );
};
export default Header;
