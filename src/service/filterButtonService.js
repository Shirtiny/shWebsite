export function getFilterButtons() {
  return [
    {
      index: 0,
      label: "全部",
      dataFilter: "*",
    },
    {
      index: 1,
      label: "城市",
      dataFilter: ".city",
    },
    {
      index: 2,
      label: "天空",
      dataFilter: ".sky",
    },
    {
      index: 3,
      label: "花",
      dataFilter: ".flower",
    },
  ];
}

const filterButtonService = {
  getFilterButtons,
};

export default filterButtonService;
