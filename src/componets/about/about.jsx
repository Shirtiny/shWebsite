import React, { useState } from "react";
import Feature from "../common/feature/feature";
import featureService from "../../service/featureService";
import "./about.css";

const About = () => {
  const [features, setFeatures] = useState(featureService.getFeatures());

  return (
    <section className="about-us">
      <h2 className="section-title">关于我们</h2>
      <p className="info">
        网络公司不仅仅是提供域名注册、空间租用、网站开发、网站建设与网络营销活动策划相关的企业组织。
      </p>
      <div className="features">
        {features.map((f) => (
          <Feature
            key={f.index}
            iconClass={f.iconClass}
            title={f.title}
            content={f.content}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
