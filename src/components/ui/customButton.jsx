import React from "react";
import "./CustomButton.css";

function CustomButton({ title, variant = "primary", onClick }) {
  return (
    <button
      className={`custom-btn custom-btn--${variant}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default CustomButton;
