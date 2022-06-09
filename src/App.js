import "./App.css";
import Navbar from "./components/Navbar";
// import Home from "./components/home";
import TextForm from "./components/TextForm";
// import About from './components/About'
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light"); // wheather dark mood is enable or not
  const [alert, setAlert] = useState(null);

  // SHOW 'ALERT FUNCTION' FOR SET 'setAlert'📌
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1999);
  };

  const toggleMood = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // document.body.style.color = '#343434';
      showAlert("Light Mode has been enable", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      // document.body.style.color = 'white';
      showAlert("Dark Mode has been enable", "success");
    }
  };

  return (
    <>
      {/* <Navbar title = "TextUtilites" aboutText="About Us" /> */}
      {/* <Navbar/> */}
      {/* <Home /> */}
      <Navbar
        title="TextUtilites"
        aboutText="About Us"
        myMode={mode}
        toggleMoodFunc={toggleMood}
      />
      <Alert myAlert={alert} />
      <TextForm
        heading="Enter the text for analize"
        myMode={mode}
        showAlert={showAlert}
      />
      {/* <About/> */}
    </>
  );
}

export default App;
