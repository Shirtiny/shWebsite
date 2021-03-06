import React from "react";
import FooterMenu from "../../componets/common/footerMenu/footerMenu";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-menus">
        <div className="contact-us">
          <p className="menu-title">联系我们</p>
          <p>地址：中国xx省xx市xx路xx商务中心x号楼</p>
          <p>电话：+186123123123</p>
          <p>传真：+186186186</p>
          <p>电子邮箱：shirtiny@gmail.com</p>
          <div className="link-me">
            <div className="link-me-group">
              <i className="fa fa-github"></i>
              <a href="https://github.com/Shirtiny">
                https://github.com/Shirtiny
              </a>
            </div>
            <div className="link-me-group">
              <i className="fa fa-home"></i>
              <a href="https://shirtiny.cn">https://shirtiny.cn</a>
            </div>
          </div>
        </div>
        <FooterMenu />
        <FooterMenu />
        <FooterMenu />
        <FooterMenu />
        <p className="icp-info">京ICP备 123456789-1 号</p>
        <p className="copyrights">&copy;2020 SH </p>
        <div className="scroll-to-top">
          <a href="#home" shtitle="返回顶部">
            <i className="fa fa-arrow-up"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
