export const itemOptions = [
  { value: "undefined", label: "Pick an item" },
  { value: "shirt", label: "T-shirt" },
  { value: "socks", label: "Socks" },
  { value: "bottle", label: "Bottle" },
];

export const sizeOptions = [
  { value: "undefined", label: "Select" },
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "Large" },
  { value: "extralarge", label: "Extra-large" },
];

export const imgFiles = {
  undefined: "question.jpg",
  shirt: "tshirt.png",
  socks: "socks.jpg",
  bottle: "bottle.png",
};

export const initialState = {
  order: "undefined",
  size: "undefined",
  givenName: "",
  surname: "",
  email: "",
  address: "",
  province: "",
  postcode: "",
  country: "",
};

export const errorMessages = {
  unavailable: "Item out of stock. :(",
  "repeat-customer":
    "Exiting user. Not allowed to place another order at the moment.",
  undeliverable: "Outside of delivery zone. :(",
  "missing-data": "Oops! Looks like we're missing some information.",
};
