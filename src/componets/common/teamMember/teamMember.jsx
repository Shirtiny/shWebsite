import React from "react";
import miku from "../../../resources/images/miku_summer.jpg";
import "./teamMember.css";

const TeamMember = () => {
  return (
    <div className="team-member">
      <div className="profile-image">
        <img src={miku} alt="" />
      </div>
      <h4 className="name">张三</h4>
      <p className="position">路人甲友人A</p>
      <ul className="social-links">
        <li>
          <a href="#">
            <i className="fa fa-weixin"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-weibo "></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-github"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TeamMember;
