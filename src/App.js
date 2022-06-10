import "./App.css";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { useState } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

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
      document.title = "Text Utilites -LightMode";
    } else {
      setMode("dark");
      // document.body.style.backgroundColor = "#042743";
      document.body.style.backgroundColor = "#686868";
      // document.body.style.color = 'white';
      showAlert("Dark Mode has been enable", "success");
      document.title = "Text Utilites -DarkMode"; //🔴

      // BLINKING TITLE🔴
      // setInterval(() => {
      // document.title = 'Text Utilites -is Amezing';
      // }, 2000);
      // setInterval(() => {
      // document.title = 'Text Utilites -Install now';
      // }, 1500);
    }
  };
  const bluishToggleMood = () => {
    if (mode !== "light") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enable", "success");
      document.title = "Text Utilites -LightMode";
    } else {
      setMode("info");
      document.body.style.backgroundColor = "#042743";
      showAlert("Bluish Mode has been enable", "success");
      document.title = "Text Utilites -BluishMode";
    }
  };
  const greenishToggleMood = () => {
    if (mode !== "light") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enable", "success");
      document.title = "Text Utilites -LightMode";
    } else {
      setMode("success");
      document.body.style.backgroundColor = "#0d3016";
      showAlert("Greenish Mode has been enable", "success");
      document.title = "Text Utilites -GreenishMode";
    }
  };

  return (
    <>
      {/* <Navbar title = "TextUtilites" aboutText="About Us" /> */}
      {/* <Navbar/> */}
      {/* <Home /> */}
      {/* <About /> */}

      <BrowserRouter>
        <Navbar
          title="TextUtilites"
          aboutText="About Us"
          myMode={mode}
          toggleMoodFunc={toggleMood}
          bluishToggleMoodFunc={bluishToggleMood}
          greenishToggleMoodFunc={greenishToggleMood}
        />
        <Alert myAlert={alert} />

        {/* 🔴🟠 ROUTING 🔴🟠 */}
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route
           exact path="/"
            element={
              <TextForm
                heading="Enter the text for analize"
                myMode={mode}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
