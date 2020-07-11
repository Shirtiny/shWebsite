import React, { useState } from "react";
import Feature from "../common/feature/feature";
import featureService from "../../service/featureService";
import "./about.css";

const About = () => {
  const [features, setFeatures] = useState(featureService.getFeatures());

  return (
    <section id="about-us" className="about-us">
      <h2 className="section-title">关于我们</h2>
      <p className="info">
      销售信文案步骤之一就是要打造产品的独特卖点,这些卖点就是客户的心理需求和渴望
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
