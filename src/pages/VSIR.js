import React, { useRef, useEffect } from "react";
import "./VSIR.css";

function VSIR() {
  return (
    <div className="MainContainer" style={{minHeight: "100vh"}}>
      <iframe
        title="VSIR"
        src="https://vibestreamnetwork.io/vibestreambeats/vsirfull.html"
        style={{
          width: "100vw",
          border: "none",
          minHeight: "100vh",
        }}
      />
    </div>
  );
}

export default VSIR;
