
import React from 'react';

const Popup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Campaign Popup</h2>
        <button onClick={onClose}>Close Popup</button>
      </div>
    </div>
  );
};

export default Popup;
