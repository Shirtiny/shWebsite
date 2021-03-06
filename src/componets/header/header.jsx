import React, { useEffect, useCallback, useRef } from "react";
import config from "../../config.json";
import _ from "lodash";
import "./header.css";

const Header = () => {
  const headerRef = useRef(null);

  const handleBurgerClick = useCallback(() => {
    const classList = headerRef.current.classList;
    classList.toggle("shHeader_burger");
  }, [headerRef]);

  const handleScroll = useCallback(() => {
    const classList = headerRef.current.classList;
    if (window.pageYOffset > 800 + 80) {
      if (!classList.contains("toFixed")) {
        classList.add("toFixed");
        classList.remove("shHeader_burger");
      }
    } else {
      if (classList.contains("toFixed") && !classList.contains("removeFixed")) {
        classList.add("removeFixed");
        setTimeout(() => {
          classList.remove("removeFixed");
        }, 200);
      }
      classList.remove("toFixed");
    }
  }, [headerRef]);

  const handleScrollThr = useCallback(
    _.throttle(handleScroll, 200, {
      trailing: false,
    }),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScrollThr);
    return () => {
      window.removeEventListener("scroll", handleScrollThr);
    };
  }, []);

  return (
    // shHeader_burger
    <header className="shHeader" ref={headerRef}>
      <div className="logo">
        <a href="#">SH</a>
      </div>
      <nav>
        {config.navs.map((nav) => (
          <a key={nav.index} href={nav.href}>
            {nav.name}
          </a>
        ))}

        {/* <i className="fa fa-search"></i> */}
      </nav>
      {/* 折叠菜单 */}
      <div className="burger" onClick={handleBurgerClick}>
        <div className="burger-line burger-line1"></div>
        <div className="burger-line burger-line2"></div>
        <div className="burger-line burger-line3"></div>
      </div>
    </header>
  );
};

export default Header;
