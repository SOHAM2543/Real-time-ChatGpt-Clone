import React from "react";

const LoadingIcon = () => {
  return (
    <svg
      className="w-10 h-10"
      preserveAspectRatio="xMidYMid"
      style={{
        margin: "auto",
        display: "block",
        shapeRendering: "auto",
      }}
      viewBox="0 0 100 100"
    >
      <circle
        cx={50}
        cy={50}
        r={35}
        fill="none"
        stroke="#fff"
        strokeDasharray="164.93361431346415 56.97787143782138"
        strokeWidth={10}
      >
        <animateTransform
          attributeName="transform"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="rotate"
          values="0 50 50;360 50 50"
        />
      </circle>
    </svg>
  );
};

export default LoadingIcon;