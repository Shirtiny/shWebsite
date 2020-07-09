import React from "react";
import ActivityCard from "../common/activityCard/activityCard"
import "./activity.css";

const Activity = () => {
  return (
    <section className="activity-section">
      <h2 className="section-title">公司动态</h2>
      <p className="info">关注公司动态，第一时间获取消息</p>
      <div className="activities">
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
      </div>
    </section>
  );
};

export default Activity;
