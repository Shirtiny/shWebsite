import React from "react";
import TeamMember from "../common/teamMember/teamMember"
import "./team.css";

const Team = () => {
  return (
    <section id="team" className="team section-bg">
      <h2 className="section-title">团队介绍</h2>
      <div className="team-members">
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
      </div>
    </section>
  );
};

export default Team;
