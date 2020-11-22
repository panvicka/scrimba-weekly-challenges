import { Currency } from "./currency";

export const euros = new Currency("€", [
  {
    name: "1c",
    value: 0.01,
    id: "euro1c",
  },
  {
    name: "2c",
    value: 0.02,
    id: "euro2c",
  },
  {
    name: "5c",
    value: 0.05,
    id: "euro5c",
  },
  {
    name: "10c",
    value: 0.1,
    id: "euro10c",
  },
  {
    name: "20c",
    value: 0.2,
    id: "euro20c",
  },
  {
    name: "50c",
    value: 0.5,
    id: "euro50c",
  },
  {
    name: "1€",
    value: 1,
    id: "euro1e",
  },
  {
    name: "2€",
    value: 2,
    id: "euro2e",
  },
]);
