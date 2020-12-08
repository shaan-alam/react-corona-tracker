import React from "react";
import Dropdown from "./Dropdown";

const list = [
  "India",
  "Spain",
  "China",
  "Pakistan",
  "Iraq",
  "Afghanistan",
  "United kingdom",
  "US",
];

export default function Header() {
  return (
    <header>
      <h2>Corona Tracker</h2>
      <Dropdown listItems={list} />
    </header>
  );
}
