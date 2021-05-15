import React, { useState } from "react";
import "./Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="Navbar">
      <div className="leftSide">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <a href="./home">AnimePlex</a>
        </div>
        <button className="btn" onClick={() => setShowLinks(!showLinks)}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
