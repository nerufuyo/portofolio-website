import { useEffect } from "react";
import Preloader from "../components/preloader/preloader.tsx";
import Header from "./_header";
import Content from "./_content";

function App() {
  useEffect(() => {
    document.body.classList.add("stop-scrolling");

    const timerDuration = 11250;

    setTimeout(() => {
      document.body.classList.remove("stop-scrolling");
    }, timerDuration);
  }, []);

  return (
    <section className={"bg-secondaryColor"}>
      <Preloader />
      <Header />
      <Content />
    </section>
  );
}
export default App;
