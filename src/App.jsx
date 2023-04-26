import MiApi from "./components/MiApi";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <h1 className="title">Rick & Morty</h1>
      <MiApi />
      <Footer />
    </>
  );
};

export default App;
