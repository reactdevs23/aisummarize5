import React from "react";

const ForFour = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 867 98"
      fill="none"
    >
      <path
        stroke={color}
        strokeWidth={2}
        d="M354 7v10.5c0 16.569-13.431 30-30 30h-60c-16.569 0-30 13.431-30 30V98M354 7v10.5c0 16.569 13.431 30 30 30h61c16.569 0 30 13.431 30 30V98"
      />
      <path
        stroke={color}
        strokeWidth={2}
        d="M354 7v10.5c0 16.569-13.431 30-30 30H31c-16.569 0-30 13.431-30 30V98M354 7v10.5c0 16.569 13.431 30 30 30h297c16.569 0 30 13.431 30 30V98"
      />
      <path fill={color} d="m354 0 8.66 15h-17.32L354 0Z" />
    </svg>
  );
};

export default ForFour;
