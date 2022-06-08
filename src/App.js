import "./App.css";
import Navbar from "./components/Navbar";
// import Home from "./components/home";
import TextForm from './components/TextForm'
// import About from './components/About'
import {useState} from 'react'

function App() {
  const [mode, setMode] = useState('light')// wheather dark mood is enable or not

  const toggleMood = ()=>{
    if(mode ==='dark'){
      setMode("light");
      document.body.style.backgroundColor = 'white';
      // document.body.style.color = '#343434';
    }else{
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      // document.body.style.color = 'white';


    }
  }

  return (
    <>
      {/* <Navbar title = "TextUtilites" aboutText="About Us" /> */}
      {/* <Navbar/> */}
      {/* <Home /> */}
      <Navbar title = "TextUtilites" aboutText="About Us" myMode={mode} toggleMoodFunc= {toggleMood}/>
      <TextForm heading ="Enter the text for analize"  myMode={mode}/>
      {/* <About/> */}

    </>
  );
}

export default App;
