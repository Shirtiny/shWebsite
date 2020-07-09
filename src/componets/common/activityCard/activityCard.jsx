import React from "react";
import img1 from "../../../resources/images/activity01-image.jpg";
import "./activityCard.css";

const ActivityCard = () => {
  return (
    <div className="activity-card">
      <div className="activity-img">
        <img src={img1} alt="" />
      </div>
      <div className="meta">
        <p className="data-published">
          <i className="fa fa-calendar"></i>2019年12月1日
        </p>
        <p className="comments">
          <i className="fa fa-comments"></i>33条评论
        </p>
      </div>
      <h2 className="activity-title">提供互联网接入</h2>
      <article>
        网络公司不仅仅是提供域名注册、空间租用、网站开发、网站建设与网络营销活动策划相关的企业组织。
      </article>
      <button className="read-more-btn">阅读更多</button>
    </div>
  );
};

export default ActivityCard;
