import React from "react";
import "./customButton.css";

function customButton({ title, variant = "primary", onClick }) {
  return (
    <button
      className={`custom-btn custom-btn--${variant}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default customButton;
