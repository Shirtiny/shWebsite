import React, { useEffect, useState, useCallback } from "react";
import FilterButton from "../common/filterButton/filterButton";
import CaseItem from "../common/caseItem/caseItem";
import Isotope from "isotope-layout";
import filterButtonService from "../../service/filterButtonService";
import caseService from "../../service/caseService";
import "./showcase.css";

const Showcase = () => {
  const [isotope, setIsotope] = useState(null);
  const [activeButton, setActiveButton] = useState(0);
  const [filterButtons, SetFilterButton] = useState(
    filterButtonService.getFilterButtons()
  );
  const [cases, setCases] = useState(caseService.getCases());

  useEffect(() => {
    const isotope = new Isotope(".cases", {
      layoutMode: "fitRows",
      itemSelector: ".case-item",
    });
    setIsotope(isotope);
  }, [setIsotope]);

  const handleClick = useCallback(
    (index, filter) => {
      setActiveButton(index);
      if (!isotope) return;
      isotope.arrange({ filter });
    },
    [isotope, setActiveButton]
  );

  return (
    <section className="showcase section-bg">
      <h2 className="section-title">成功案例</h2>
      <div className="filter-btns">
        {filterButtons.map((button) => (
          <FilterButton
            key={button.index}
            index={button.index}
            label={button.label}
            dataFilter={button.dataFilter}
            activeIndex={activeButton}
            onClick={handleClick}
          />
        ))}
      </div>
      <div className="cases">
        {cases.map((item) => (
          <CaseItem
            key={item.index}
            className={item.keywords.join(" ")}
            src={item.src}
          />
        ))}
      </div>
    </section>
  );
};

export default Showcase;
