import React from "react";
import man from "../../../resources/images/man-wearing-black-suit-2955376.jpg";
import "./teamMember.css";

const TeamMember = () => {
  return (
    <div className="team-member">
      <div className="profile-image">
        <img src={man} alt="" />
      </div>
      <h4 className="name">张三</h4>
      <p className="position">前端工程师</p>
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
