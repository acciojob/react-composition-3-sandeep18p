// Tooltip.js
import React, { useState } from 'react';
// import './Tooltip.css'; // Import CSS file for styling
import './../styles/App.css';

const Tooltip = ({ text, children }) => {
    const [showTooltip, setShowTooltip] = useState(false);
  
    const handleMouseEnter = () => {
      setShowTooltip(true);
      console.log('hello')
    };
  
    const handleMouseLeave = () => {
      setShowTooltip(false);
    };
  
    return (
      <div className="tooltip-container">
        {showTooltip && <div className="tooltiptext visible">{text}</div>}
        {!showTooltip && <div className="tooltiptext invisible">{text}</div>}
        <div
          className="tooltip"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </div>
        
      </div>
    );
  };
  
  export default Tooltip;