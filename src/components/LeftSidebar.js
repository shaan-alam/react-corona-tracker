import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";

function LeftSidebar({ history }) {
  const [selectedLink, setSelectedLink] = useState(
    history.location.pathname.substring(1)
  );

  return (
    <div className="sidebar">
      <ul>
        <Link to="/" onClick={() => setSelectedLink("")}>
          <li className={`${selectedLink === "" ? "active" : ""}`}>
            <i className="fa fa-home"></i>
          </li>
        </Link>
        <Link to="/map" onClick={() => setSelectedLink("map")}>
          <li className={`${selectedLink === "map" ? "active" : ""}`}>
            <i className="fa fa-map-marker"></i>
          </li>
        </Link>
        <Link to="/countries" onClick={() => setSelectedLink("globe")}>
          <li className={`${selectedLink === "globe" ? "active" : ""}`}>
            <i className="fa fa-globe"></i>
          </li>
        </Link>
        <Link to="/info" onClick={() => setSelectedLink("info")}>
          <li className={`${selectedLink === "info" ? "active" : ""}`}>
            <i className="fa fa-info"></i>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default withRouter(LeftSidebar);
