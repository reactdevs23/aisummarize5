import React from "react";

const ForTwo = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 320 98"
    >
      <path
        stroke={color}
        strokeWidth={2}
        d="M141 7v10.5c0 16.569-13.431 30-30 30H31c-16.569 0-30 13.431-30 30V98M141 7v10.5c0 16.569 13.431 30 30 30h80c16.569 0 30 13.431 30 30V98"
      />
      <path fill={color} d="m141 0 8.66 15h-17.32L141 0Z" />
    </svg>
  );
};

export default ForTwo;
