import React from "react";

const Button = ({ title, onClick, customStyle }) => (
  <button style={{...styles.wrapper, ...customStyle}} onClick={onClick}>{title}</button>
);

const styles = {
  wrapper: {
    backgroundColor: "#cf1075",
    height: "40px",
    color: "#fff",
    borderWidth: "0px",
    borderRadius: "6px",
    minWidth: "100px",
  },
};

export default Button;
