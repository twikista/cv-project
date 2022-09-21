const months = [
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
];

const currentYear = new Date().getFullYear() + 5;
const numberOfyears = 62;
let years = [];
for (let i = 0; i <= numberOfyears; i++) {
  years = [...years, currentYear - i];
}

export { months, years };
