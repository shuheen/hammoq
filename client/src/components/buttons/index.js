import React from "react";

const Button = ({ size, variant, text, type }) => {
  return (
    <button
      style={{
        width: "150px",
        borderRadius: "3px",
        letterSpacing: "1.5px",
        marginTop: "1rem",
      }}
      type={type}
      className={`btn ${
        size === "large" ? "btn-large" : ""
      } waves-effect waves-light hoverable ${
        variant === "primary" ? "orange" : "blue"
      } blue accent-3`}
    >
      {text}
    </button>
  );
};

export default Button;
