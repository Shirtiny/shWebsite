import guanlanche from "../resources/images/guanlanche.png";
import dianche from "../resources/images/dianche.png";
import chengshi2 from "../resources/images/chengshi2.png";
import qingkong from "../resources/images/qingkong.png";
import baihe from "../resources/images/baihe.png";
import baihe2 from "../resources/images/baihe2.png";

export function getCases() {
  return [
    {
      index: 0,
      keywords: ["city"],
      src: guanlanche,
    },
    {
      index: 1,
      keywords: ["city"],
      src: dianche,
    },
    {
      index: 2,
      keywords: ["sky", "city"],
      src: chengshi2,
    },
    {
      index: 3,
      keywords: ["sky"],
      src: qingkong,
    },
    {
      index: 4,
      keywords: ["flower"],
      src: baihe,
    },
    {
      index: 5,
      keywords: ["flower"],
      src: baihe2,
    },
  ];
}

const caseService = {
  getCases,
};

export default caseService;
