import React from "react";
import './../styles/App.css'; // Assuming you have a separate CSS file for App styling
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <>
      <div className="one">
          <Tooltip text="This is a tooltip"><h1>Hover over me</h1></Tooltip>
      </div>
      <div className="one">
          <Tooltip text="Hover over me to see another tooltip"><h1>Hover over me</h1></Tooltip>
      </div>
    </>
  )
}

export default App;
