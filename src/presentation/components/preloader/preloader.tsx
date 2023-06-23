import "./preloader.css";

const Preloader = () => {
  return (
    <div
      id="preloader"
      className={
        "flex flex-col items-center justify-center w-[100vw] h-[100vh] bg-bgColor overflow-hidden"
      }
    >
      <div
        id="haloText"
        className={
          "w-0 absolute flex flex-col items-center justify-center z-40 overflow-hidden"
        }
      >
        <p className={"font-montserrat font-bold text-8xl text-secondaryColor"}>
          HALO
        </p>
        <div className={"flex flex-row"}>
          <p
            className={
              "font-montserrat font-normal text-sm p-1 text-secondaryColor"
            }
          >
            WELCOME
          </p>
          <p
            className={
              "font-montserrat font-normal text-sm p-1 text-secondaryColor"
            }
          >
            TO
          </p>
          <p
            className={
              "font-montserrat font-normal text-sm p-1 text-secondaryColor"
            }
          >
            MY
          </p>
          <p
            className={
              "font-montserrat font-semibold text-sm p-1 bg-secondaryColor"
            }
          >
            PORTOFOLIO
          </p>
          <p
            className={
              "font-montserrat font-normal text-sm p-1 text-secondaryColor"
            }
          >
            WEBSITE
          </p>
        </div>
      </div>
      <div
        className={
          "absolute flex flex-row items-center justify-center gap-1 z-50"
        }
      >
        <div id="slideLeft" className={"w-1 h-0 bg-secondaryColor"}></div>
        <div id="slideRight" className={"w-1 h-0 bg-secondaryColor"}></div>
      </div>
      <p
        id="preloaderSubText7"
        className={
          "font-montserrat font-bold text-5xl text-secondaryColor text-stroke"
        }
      >
        PORTOFOLIO
      </p>
      <p
        id="preloaderSubText6"
        className={"font-montserrat font-bold text-5xl text-secondaryColor"}
      >
        PORTOFOLIO
      </p>
      <p
        id="preloaderSubText5"
        className={
          "font-montserrat font-bold text-5xl text-secondaryColor text-stroke"
        }
      >
        PORTOFOLIO
      </p>
      <p
        id="preloaderSubText4"
        className={"font-montserrat font-bold text-5xl text-secondaryColor"}
      >
        PORTOFOLIO
      </p>
      <p
        id="preloaderSubText3"
        className={
          "font-montserrat font-bold text-5xl text-secondaryColor text-stroke"
        }
      >
        PORTOFOLIO
      </p>
      <p
        id="preloaderSubText2"
        className={"font-montserrat font-bold text-5xl text-secondaryColor"}
      >
        PORTOFOLIO
      </p>
      <p
        id="preloaderSubText1"
        className={
          "font-montserrat font-bold text-5xl text-secondaryColor text-stroke"
        }
      >
        PORTOFOLIO
      </p>
      <p
        id="preloaderMainText"
        className={" font-montserrat font-bold text-5xl text-secondaryColor"}
      >
        PORTOFOLIO
      </p>
      <p
        id="preloaderSubText1"
        className={
          "font-montserrat font-bold text-5xl text-secondaryColor text-stroke"
        }
      >
        PORTOFOLIO
      </p>
      <p
        id="preloaderSubText2"
        className={"font-montserrat font-bold text-5xl text-secondaryColor"}
      >
        PORTOFOLIO
      </p>
      <p
        id="preloaderSubText3"
        className={
          "font-montserrat font-bold text-5xl text-secondaryColor text-stroke"
        }
      >
        PORTOFOLIO
      </p>
      <p
        id="preloaderSubText4"
        className={"font-montserrat font-bold text-5xl text-secondaryColor"}
      >
        PORTOFOLIO
      </p>{" "}
      <p
        id="preloaderSubText5"
        className={
          "font-montserrat font-bold text-5xl text-secondaryColor text-stroke"
        }
      >
        PORTOFOLIO
      </p>
      <p
        id="preloaderSubText6"
        className={"font-montserrat font-bold text-5xl text-secondaryColor"}
      >
        PORTOFOLIO
      </p>
      <p
        id="preloaderSubText7"
        className={
          "font-montserrat font-bold text-5xl text-secondaryColor text-stroke"
        }
      >
        PORTOFOLIO
      </p>
    </div>
  );
};

export default Preloader;
