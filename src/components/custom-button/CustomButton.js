import React from "react";
import { CustomButtonContainer } from "./CustomButtonComponents";

const CustomButton = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

export default CustomButton;
