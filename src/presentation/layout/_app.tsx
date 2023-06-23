import Preloader from "../components/preloader/preloader.tsx";
import Header from "./_header";
import Content from "./_content";

function App() {
  return (
    <section className={"bg-secondaryColor"}>
      <Preloader />
      <Header />
      <Content />
    </section>
  );
}
export default App;
