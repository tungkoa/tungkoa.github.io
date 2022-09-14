export const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const DAYS = () => {
  const days = [{ value: "", text: "Day" }];
  for (let i = 1; i <= 31; i++) {
    if (i < 10) {
      days.push({ value: `0${i}`, text: `0${i}` });
    } else {
      days.push({ value: `${i}`, text: `${i}` });
    }
  }
  return days;
};

export const MONTHS = () => {
  const months = [{ value: "", text: "Month" }];
  MONTH_NAMES.forEach(m => months.push({ value: m, text: m }));
  return months;
};

export const YEARS = () => {
  const startYear = 2010;
  const years = [{ value: "", text: "Year" }];
  for (let i = 0; i < 100; i++) {
    years.push({ value: (startYear - i).toString(), text: (startYear - i).toString() });
  }
  return years;
};

export const REFERRED_BY_DEFAULT = () => {
  return [
    { value: "", text: "Select" },
    { value: "Another Client", text: "Another Client" },
    { value: "Facebook", text: "Facebook" },
    { value: "Flyer", text: "Flyer" },
    { value: "Internet", text: "Internet" },
    { value: "Newspaper", text: "Newspaper" },
    { value: "Radio", text: "Radio" },
    { value: "Yellow Pages", text: "Yellow Pages" },
  ]
}

