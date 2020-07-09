import gray_laptop_computer from "../resources/images/gray-laptop-computer-showing-html-codes-in-shallow-focus-160107.jpg";
import photo_of_imac from "../resources/images/photo-of-imac-near-macbook-1029757.jpg";
import apple_laptop_notebook from "../resources/images/apple-laptop-notebook-office-39284.jpg";
import apple_apple_device from "../resources/images/apple-apple-device-design-desk-285814.jpg";
import person_using_black from "../resources/images/person-using-black-and-white-smartphone-and-holding-blue-230544.jpg";
import people_in_couch from "../resources/images/people-in-couch-1024248.jpg";

export function getCases() {
  return [
    {
      index: 0,
      keywords: ["web", "mobile"],
      src: gray_laptop_computer,
    },
    {
      index: 1,
      keywords: ["mobile"],
      src: photo_of_imac,
    },
    {
      index: 2,
      keywords: ["web", "mobile"],
      src: apple_laptop_notebook,
    },
    {
      index: 3,
      keywords: ["science"],
      src: apple_apple_device,
    },
    {
      index: 4,
      keywords: ["science"],
      src: person_using_black,
    },
    {
      index: 5,
      keywords: ["science", "web"],
      src: people_in_couch,
    },
  ];
}

const caseService = {
    getCases,
}

export default caseService;

