// Tooltip.js
import React, { useState } from 'react';
import './Tooltip.css'; // Import CSS for styling

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="tooltip-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="tooltip">{children}</div>
      {showTooltip && <div className="tooltiptext">{text}</div>}
    </div>
  );
};

export default Tooltip;