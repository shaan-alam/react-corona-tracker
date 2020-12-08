import React from "react";
import { Link } from "react-router-dom";

export default function LeftSidebar() {
  return (
    <div className="sidebar">
      <ul>
        <Link to="/">
          <li className="active">
            <i class="fa fa-home"></i>
          </li>
        </Link>
        <Link to="/map">
          <li>
            <i className="fa fa-map-marker"></i>
          </li>
        </Link>
        <Link to="/countries">
          <li>
            <i className="fa fa-globe"></i>
          </li>
        </Link>
        <Link to="/info">
          <li>
            <i className="fa fa-info"></i>
          </li>
        </Link>
      </ul>
    </div>
  );
}
