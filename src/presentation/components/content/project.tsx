import "./content.css";

const Project = () => {
  return (
    <section
      className={
        "flex flex-col relative h-screen items-center justify-center p-4 overflow-hidden"
      }
    >
      <div
        className={
          "absolute top-[-3rem] flex flex-row w-screen gap-1 overflow-hidden"
        }
      >
        <p className={"font-montserrat font-bold text-8xl text-bgColor"}>ART</p>
        <p className={"font-montserrat font-bold text-8xl text-bgColor"}>ART</p>
        <p className={"font-montserrat font-bold text-8xl text-bgColor"}>ART</p>
        <p className={"font-montserrat font-bold text-8xl text-bgColor"}>ART</p>
      </div>
      <div className={"flex flex-col w-screen px-4 items-start justify-start"}>
        <h1 className={"font-montserrat font-bold text-4xl"}>PROJECTS</h1>
      </div>
      <div className="grid grid-cols-3 gap-1 w-screen h-1/2 px-4">
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
