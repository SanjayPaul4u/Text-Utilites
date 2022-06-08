import "./App.css";
import Navbar from "./components/Navbar";
// import Home from "./components/home";
import TextForm from './components/TextForm'
// import About from './components/About'

function App() {
  return (
    <>
      {/* <Navbar title = "TextUtilites" aboutText="About Us" /> */}
      {/* <Navbar/> */}
      {/* <Home /> */}
      <Navbar title = "TextUtilites" aboutText="About Us"/>
      <TextForm heading ="Enter the text for analize"/>
      {/* <About/> */}

    </>
  );
}

export default App;
