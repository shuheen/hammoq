import React from "react";

const Navbar = () => {
  return (
    <div className="left-nav">
      <ul id="sidenav-top" className="sidenav-items sidenav-top">
        <li className="">
          <a href="#!">
            <i className="material-icons">multiline_chart</i> Dashboard
          </a>
        </li>
        <li>
          <a href="#!">
            {" "}
            <i className="material-icons">link</i>Link 2
          </a>
        </li>
      </ul>
      <ul id="sidenav-bottom" className="sidenav-items sidenav-bottom">
        <li className="active">
          <a href="#!">
            <i className="material-icons">account_circle</i> Profile
          </a>
        </li>
        <li>
          <a href="#!">
            {" "}
            <i className="material-icons">perm_data_setting</i>Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
