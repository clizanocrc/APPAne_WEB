import React from "react";

export const IconRed = ({ status }) => {
  return status ? (
    <i className="fa fa-check-double bigicon ml-4"></i>
  ) : (
    <i className="fa fa-check bigicon ml-4"></i>
  );
};
