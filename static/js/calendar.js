// Variables:
const date = new Date();
const calMonth = document.querySelector('.date-month');
const calDay = document.querySelector('.date-day');
const calDays = document.querySelector('.date-days');

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const month = date.getMonth() + 1;
const firstDayIndex = date.getDay();

console.log(date, month, firstDayIndex);