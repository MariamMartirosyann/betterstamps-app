import React from "react";
import Button from "@mui/material/Button";
import '../../../App.css'

const BtnComponent = (props) => {
  const {
    text,
    onClick = null,
    type = "button",
    width,
    variant = "outlined",
  } = props;
  return (
    <Button className="button"
      type={type}
      variant={variant}
      width={width}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default BtnComponent;