import React from "react";

export default function BDropdown() {
  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        data-toggle="dropdown"
      >
        Dropdown
        <span className="caret"></span>
      </button>
      <ul className="dropdown-menu">
        <li>
          <a href="/">HTML</a>
        </li>
        <li>
          <a href="/">CSS</a>
        </li>
        <li>
          <a href="/">JavaScript</a>
        </li>
      </ul>
    </div>
  );
}
