import React, { useEffect, useCallback, useRef } from "react";
import "./data.css";

const Data = () => {
  const dataRef = useRef(null);
  const dataBckgroundPosition = useCallback(() => {
    const dataEl = dataRef.current;
    const rect = dataEl.getBoundingClientRect();
    const { bottom, top } = rect;
    //如果该元素出现在浏览器的视口内
    if (bottom >= 0 && top <= window.innerHeight) {
      dataEl.style.backgroundPosition = `center calc(50% - ${bottom / 6}px)`;
    } else return;
  }, [dataRef]);
  useEffect(() => {
    window.addEventListener("scroll", dataBckgroundPosition);
    return () => {};
  }, []);
  return (
    <section className="data-section">
      <div className="data-pieces" ref={dataRef}>
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
