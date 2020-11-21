import { Currency } from "./currency";

export const euros = new Currency("€", [
    {
      name: "1c",
      value: 0.01,
      id: 'euro1c'
    },
    {
      name: "2c",
      value: 0.02,
      id: 'euro2c'
    },
    {
      name: "5c",
      value: 0.05,
      id: 'euro5c'
    },
    {
      name: "10c",
      value: 0.1,
      id: 'czk10'
    },
    {
      name: "20 Kč",
      value: 20,
      id: 'czk20'
    },
    {
      name: "50 Kč",
      value: 50,
      id: 'czk50'
    },
  ]);