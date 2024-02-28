import React from "react";

const ForFive = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 985 98"
      fill="none"
    >
      <path
        stroke={color}
        strokeWidth={2}
        d="M321.5 47.5H274c-16.569 0-30 13.431-30 30V98M606 47.5h47.5c16.569 0 30 13.431 30 30V98"
      />
      <path
        stroke={color}
        strokeWidth={2}
        d="M461 7v10.5c0 16.569-13.431 30-30 30H31c-16.569 0-30 13.431-30 30V98M461 7v10.5c0 16.569 13.431 30 30 30h400c16.569 0 30 13.431 30 30V98"
      />
      <path fill={color} d="m461 0 8.66 15h-17.32L461 0Z" />
      <path stroke={color} strokeWidth={2} d="M461 10v86" />
    </svg>
  );
};

export default ForFive;
