import React, { useState } from "react";
import './../styles/App.css'; 

const Tooltip = ({ text, children }) => {
    const [showTooltip, setShowTooltip] = useState(false);
  
    const handleMouseEnter = () => {
        console.log("one")
      setShowTooltip(true);
    };
  
    const handleMouseLeave = () => {
        console.log("two")
      setShowTooltip(false);
    };
  
    return (
      <div className="tooltip-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {/* Apply class name "tooltip" to children element container */}
        <div className="tooltip">{children}</div>
        {/* Apply class name "tooltiptext" to tooltip text */}
        {showTooltip && <div className="tooltiptext">{text}</div>}
      </div>
    );
  };
  
  export default Tooltip;