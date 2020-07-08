import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">SH</div>
      <nav>
        <a href="#">首页</a>
        <a href="#">关于我们</a>
        <a href="#">成功案例</a>
        <a href="#">服务流程</a>
        <a href="#">团队介绍</a>
        <a href="#">公司动态</a>
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
