import React from "react";
import Feature from "../common/feature/feature";
import "./about.css";

const About = () => {
  return (
    <section className="about-us">
      <h2 className="section-title">关于我们</h2>
      <p className="info">
        网络公司不仅仅是提供域名注册、空间租用、网站开发、网站建设与网络营销活动策划相关的企业组织。
      </p>
      <div className="features">
        <Feature
          iconClass="fa-lightbulb-o"
          title="品牌创意"
          content="为企业设计独特的并能完美呈现企业价值观的视觉"
        />
        <Feature
          iconClass="fa-line-chart"
          title="整合营销"
          content="为企业设计独特的并能完美呈现企业价值观的视觉"
        />
        <Feature
          iconClass="fa-desktop"
          title="品牌创意"
          content="为企业设计独特的并能完美呈现企业价值观的视觉"
        />
        <Feature
          iconClass="fa-tachometer"
          title="品牌创意"
          content="为企业设计独特的并能完美呈现企业价值观的视觉"
        />
        <Feature
          iconClass="fa-lightbulb"
          title="品牌创意"
          content="为企业设计独特的并能完美呈现企业价值观的视觉"
        />
        <Feature
          iconClass="fa-lightbulb"
          title="品牌创意"
          content="为企业设计独特的并能完美呈现企业价值观的视觉"
        />
      </div>
    </section>
  );
};

export default About;
