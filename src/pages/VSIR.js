import React, { useRef, useEffect } from "react";
import "./VSIR.css";

function VSIR() {
  return (
    <div>
      <iframe
        title="VSIR"
        src="https://vibestreamnetwork.io/vibestreambeats/vsirfull.html"
        style={{
          width: "100vw",
          height: "100vh",
          border: "none",
          overflow: "hidden"
        }}
      />
    </div>
  );
}

export default VSIR;
