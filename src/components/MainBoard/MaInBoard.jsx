import React from "react";
import Description from "../Description/Description";
export default function MaInBoard({ children }) {
  return (
    <main>
      <div className="content">
        <div className="blured_bg"></div>
        <div className="spliter">
          <Description></Description>
          {children}
        </div>
      </div>
    </main>
  );
}
