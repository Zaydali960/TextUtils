
import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
import React, { useState } from "react";
// import About from "./Components/About";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const [greenModeText, setGreenModeText] = useState("Enable Green mode");
  let greenText = () => {
    if (greenMode === "light") {
      setGreenModeText("Enable Green Mode");
      showAlert("Green Mode Is Enable", "success");
      document.title = "Home - Green Mode";
    } else {
      setGreenModeText("Enable Light Mode");
      showAlert("Light Mode Is Enable", "success");
      document.title = "Home - Light Mode";
    }
  };
  const [greenMode, setGreenMode] = useState("light");
  let greenToogleMode = () => {
    if (greenMode === "light") {
      setGreenMode("Green");
      document.body.style.backgroundColor = "#9FE2BF";
    } else {
      setGreenMode("light");
      document.body.style.backgroundColor = "white";
    }
    greenText();
  };

  const [modeText, setModeText] = useState("Enable dark mode");
  let text = () => {
    if (mode === "light") {
      setModeText("Enable Dark Mode");
      showAlert("Dark Mode Is Enable", "success");
      document.title = "Home - Dark Mode";
    } else {
      setModeText("Enable Light Mode");
      showAlert("Light Mode Is Enable", "success");
      document.title = "Home - Light Mode";
    }
  };
  const [mode, setMode] = useState("light");
  let toogleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#3e3e58";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
    text();
  };
  return (
    <>
    {/* <Router> */}
        <Navbar title="Title here" about="About" mode={mode} greenMode={greenMode} toogleMode={toogleMode} modeText={modeText} greenToogleMode={greenToogleMode} greenModeText={greenModeText} />
          <Alert alert={alert} />
      {/* <Switch>
        <Route exact path="/"> */}
          <Textform showAlert={showAlert} heading="Enter text to analyze" mode={mode}/>
        {/* </Route>
        <Route exact path="/about">
          <About />
        </Route> 
      </Switch>
      </Router> */}
    </>
  );
}

export default App;
