import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
window.Buffer = window.Buffer || require("buffer").Buffer;
window.Date.prototype.getMonthName = function (lang) {
  lang = lang && lang in Date.locale ? lang : "en";
  return Date.locale[lang].month_names[this.getMonth()];
};

window.Date.prototype.getMonthNameShort = function (lang) {
  lang = lang && lang in Date.locale ? lang : "en";
  return Date.locale[lang].month_names_short[this.getMonth()];
};

window.Date.locale = {
  en: {
    month_names: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    month_names_short: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
