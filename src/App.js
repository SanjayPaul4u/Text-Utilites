import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/home";

function App() {
  return (
    <>
      {/* <Navbar title = "TextUtilites" aboutText="About Us" /> */}
      {/* <Navbar/> */}
      <Navbar title = "TextUtilites"/>
      <Home />
    </>
  );
}

export default App;
