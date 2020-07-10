import React, { useState } from "react";
import Feature from "../common/feature/feature";
import serviceItemService from "../../service/serviceItemService";
import "./service.css";

const Service = () => {
  const [serviceItems, SetServiceItems] = useState(
    serviceItemService.getServiceItems()
  );
  return (
    <section id="service" className="service">
      <h2 className="section-title">服务流程</h2>
      <p className="info">
        网络综合公司包括提供网络基础服务和网络增值服务等业务
      </p>
      <div className="service-items">
        {serviceItems.map((item) => (
          <Feature
            key={item.index}
            style={{
              padding: "1.2rem",
              boxShadow: "0px 0px 0.9rem rgba(0,0,0,0.06)",
            }}
            iconClass={item.iconClass}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </section>
  );
};

export default Service;
