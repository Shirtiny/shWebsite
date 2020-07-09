import React from "react";
import config from "../../config.json";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">SH</div>
      <nav>
        {config.navs.map((nav) => (
          <a key={nav.index} href={nav.href}>
            {nav.name}
          </a>
        ))}

        <i className="fa fa-search"></i>
      </nav>
      {/* 折叠菜单 */}
      <div className="burger">
        <div className="burger-line1"></div>
        <div className="burger-line2"></div>
        <div className="burger-line3"></div>
      </div>
    </header>
  );
};

export default Header;
