import React, { useEffect, useState } from "react";
import Glide from "@glidejs/glide";
import people_in_couch from "../../resources/images/people-in-couch-1024248.jpg";
import working_man from "../../resources/videos/working-man.mp4";
import "./glide.css";

const GlideBox = () => {
  useEffect(() => {
    const glide = new Glide(".glide", {
      autoplay: 5000,
    });
    glide.mount();
  }, []);

  return (
    <div className="glide">
      {/* 轮播轨道 */}
      <div className="glide__track" data-glide-el="track">
        {/* 轮播容器 */}
        <div className="glide__slides">
          <div className="glide__slide">
            <div className="slide-caption">
              <h1>用创新点缀人生，让科技融入理想</h1>
              <h3>
                科技创新大平台，智慧生活新引擎。依靠科技进步推进经济跨越式大发展。用创新点缀人生，让科技融入理想
              </h3>
              <button className="explore-btn">探索更多</button>
            </div>
            {/* 黑色遮罩 */}
            <div className="blackdrop"></div>
            <img src={people_in_couch} alt="" />
          </div>
          <div className="glide__slide">
            <div className="slide-caption left">
              <h1>用创新点缀人生，让科技融入理想</h1>
              <h3>
                科技创新大平台，智慧生活新引擎。依靠科技进步推进经济跨越式大发展。用创新点缀人生，让科技融入理想
              </h3>
              <button className="explore-btn">探索更多</button>
            </div>
            {/* 黑色遮罩 */}
            <div className="blackdrop"></div>
            <video src={working_man} muted autoPlay loop></video>
          </div>
        </div>
        {/* 两边的箭头 */}
        <div className="glide__arrows" data-glide-el="controls">
          <button
            className="glide__arrow glide__arrow--left"
            data-glide-dir="<"
          >
            {"<"}
          </button>
          <button
            className="glide__arrow glide__arrow--right"
            data-glide-dir=">"
          >
            {">"}
          </button>
        </div>
        {/* 轮播nav导航 第几张轮播图 */}
        <div className="glide__bullets" data-glide-el="controls[nav]">
          <button className="glide__bullet" data-glide-dir="=0"></button>
          <button className="glide__bullet" data-glide-dir="=1"></button>
        </div>
      </div>
    </div>
  );
};

export default GlideBox;
