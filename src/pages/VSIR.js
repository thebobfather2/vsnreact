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
          minHeight: "120vh",
          border: "none",
        }}
      />
    </div>
  );
}

export default VSIR;
