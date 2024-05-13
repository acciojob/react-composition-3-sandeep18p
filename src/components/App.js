// App.js

import React from "react";
import './../styles/App.css'; // Assuming you have a separate CSS file for App styling
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <>
      {/* First tooltip with different text */}
      <div className="one">
          <Tooltip text="This is a tooltip for the first element"><h1>Hover over me</h1></Tooltip>
      </div>
      {/* Second tooltip with different text */}
      <div className="one">
          <Tooltip text="This is a tooltip for the second element"><h1>Hover over me</h1></Tooltip>
      </div>
    </>
  )
}

export default App;
