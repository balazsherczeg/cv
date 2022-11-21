export const MAX = 17;

const getNow = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  return [year, month];
};

const splitDateString = (string) => {
  return [string.toString().substr(0, 4), string.toString().substr(4)];
};

const getDecimalDate = ([year, month]) => Number(year) + Number(month) / 12;

const getDifference = (date1, date2) => {
  return getDecimalDate(date1) - getDecimalDate(date2);
};

const yearsToPercentage = (years) => (years / MAX) * 100;

export const getTop = (end) => {
  if (end === 'NOW') return 0;
  return yearsToPercentage(getDifference(getNow(), splitDateString(end)));
};

const adjustStartMonth = (start) =>
  (Number(splitDateString(start)[1]) - 1).toString();

export const getHeight = (_end, _start) => {
  const end = _end === 'NOW' ? getNow() : splitDateString(_end);
  const start = [splitDateString(_start)[0], adjustStartMonth(_start)];
  return yearsToPercentage(getDecimalDate(end) - getDecimalDate(start));
};
