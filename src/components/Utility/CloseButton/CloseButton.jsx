import React from "react";

import closeSvg from "../../../media/close-lg.svg";
import "./CloseButton.css";
export default function CloseButton({ onClick }) {
  return (
    <div className="wrapper" onClick={() => onClick[0](onClick[1])}>
      <svg
        width="10px"
        height="10px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Menu / Close_LG">
          <path
            id="Vector"
            d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
            stroke="#000"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}
