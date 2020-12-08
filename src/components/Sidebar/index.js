import React from "react";
import { Sidebar, SidebarItem } from "./Sidebar";
import { Link } from "react-router-dom";

export default function LeftSidebar() {
  return (
    <Sidebar>
      <SidebarItem active>
        <Link to="/">
          <i className="fa fa-home" aria-hidden="true"></i>
        </Link>
      </SidebarItem>
      <SidebarItem>
        <Link to="/">
          <i className="fa fa-map-marker" aria-hidden="true"></i>
        </Link>
      </SidebarItem>
      <SidebarItem>
        <Link to="/">
          <i className="fa fa-home" aria-hidden="true"></i>
        </Link>
      </SidebarItem>
      <SidebarItem>
        <Link to="/">
          <i className="fa fa-home" aria-hidden="true"></i>
        </Link>
      </SidebarItem>
    </Sidebar>
  );
}
