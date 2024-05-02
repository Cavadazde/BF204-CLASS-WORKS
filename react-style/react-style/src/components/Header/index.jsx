import React from "react";
import { FaPhoneAlt } from "react-icons/fa";


const Header = () => {
  return (
    <header>
<div className="container">
<div id="header-top">
        <div className="row">
          <div className="col-6">
            <a href="">
              <FaPhoneAlt />
            </a>
            <span>+748 383 23 14</span>
          </div>

          <div className="col-6">
            <ul>
              <li><a href="">Terms of Use</a></li>
              <li>FAQ</li>
              <li>Customer Services</li>
            </ul>
          </div>
        </div>
      </div>
</div>
    </header>
  );
};

export default Header;
