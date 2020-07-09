import React from "react";
import "./footerMenu.css";

const FooterMenu = () => {
  return (
    <div className="service-menu footer-menu">
      <p className="menu-title">服务概览</p>
      <ul className="menu-items">
        <li>
          <a href="#">网站建设</a>
        </li>
        <li>
          <a href="#">域名购买</a>
        </li>
        <li>
          <a href="#">网页设计</a>
        </li>
        <li>
          <a href="#">移动应用</a>
        </li>
      </ul>
    </div>
  );
};

export default FooterMenu;
