import React from "react";
import img1 from "../../../resources/images/activity.png";
import "./activityCard.css";

const ActivityCard = () => {
  return (
    <div className="activity-card">
      <div className="activity-img">
        <img src={img1} alt="" />
      </div>
      <div className="meta">
        <p className="data-published">
          <i className="fa fa-calendar"></i>2020年6月1日
        </p>
        <p className="comments">
          <i className="fa fa-comments"></i>33条评论
        </p>
      </div>
      <h2 className="activity-title">开始新的生活</h2>
      <article>
        张三逃到了新加坡，在这里隐姓埋名。
      </article>
      <button className="read-more-btn">阅读更多</button>
    </div>
  );
};

export default ActivityCard;
