export function getFilterButtons() {
  return [
    {
      index: 0,
      label: "全部",
      dataFilter: "*",
    },
    {
      index: 1,
      label: "WEB",
      dataFilter: ".web",
    },
    {
      index: 2,
      label: "移动",
      dataFilter: ".mobile",
    },
    {
      index: 3,
      label: "科研",
      dataFilter: ".science",
    },
  ];
}

const filterButtonService = {
  getFilterButtons,
};

export default filterButtonService;
