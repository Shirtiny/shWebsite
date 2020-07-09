import React from "react";
import "./data.css";

const Data = () => {
  return (
    <section className="data-section">
      <div className="data-pieces">
        <div className="data-piece">
          <i className="fa fa-code"></i>
          <div className="num">555</div>
          <div className="data-desc">行代码</div>
        </div>
        <div className="data-piece">
          <i className="fa fa-star"></i>
          <div className="num">124</div>
          <div className="data-desc">收藏</div>
        </div>
        <div className="data-piece">
          <i className="fa fa-trophy"></i>
          <div className="num">3</div>
          <div className="data-desc">个奖项</div>
        </div>
        <div className="data-piece">
          <i className="fa fa-folder"></i>
          <div className="num">16</div>
          <div className="data-desc">个项目</div>
        </div>
      </div>
    </section>
  );
};

export default Data;
