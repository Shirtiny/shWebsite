import React, { useEffect, useCallback, useRef } from "react";
import config from "../../config.json";
import "./header.css";

const Header = () => {
  const headerRef = useRef(null);
  const handleScroll = useCallback(() => {
    const classList = headerRef.current.classList;
    if (window.pageYOffset > 800 + 80) {
      if (!classList.contains("toFixed")) {
        classList.add("toFixed");
      }
    } else {
      classList.remove("toFixed");
    }
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="" ref={headerRef}>
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
