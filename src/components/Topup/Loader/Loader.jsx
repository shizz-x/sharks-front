import React from "react";
import "./Loader.css";
export default function Loader({ disableControls }) {
  return (
    <div className={`LOADER ${disableControls ? "shown" : ""}`}>Loader</div>
  );
}
