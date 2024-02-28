import React from "react";

const ForThree = ({ color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 479 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M238 7V17.5C238 34.0685 224.569 47.5 208 47.5H31C14.4315 47.5 1 60.9315 1 77.5V98"
        stroke={color}
        stroke-width="2"
      />
      <path
        d="M240 7V17.5C240 34.0685 253.431 47.5 270 47.5H448C464.569 47.5 478 60.9315 478 77.5V98"
        stroke={color}
        stroke-width="2"
      />
      <line x1="239" y1="10" x2="239" y2="96" stroke={color} stroke-width="2" />
      <path d="M239 0L247.66 15H230.34L239 0Z" fill={color} />
    </svg>
  );
};

export default ForThree;
