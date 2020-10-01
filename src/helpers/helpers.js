import dayjs from 'dayjs';

const DAYS = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

/** Generate a Random Boolean */
const generateRandomBoolean = () => {
  const random = Math.round(Math.random() * 1);
  return random === 0;
};

/** Generate Random Times */
const generateTimes = (start, stop) => {
  const array = [];
  for (let i = start; i <= stop; i += 1) {
    if (i > 11) {
      const value = i - 12 === 0 ? 12 : i - 12;
      const single = `${value}:00 pm`;
      array.push({
        time: single,
        available: generateRandomBoolean(),
      });
      if (i !== stop) {
        array.push({
          time: `${value}:30 pm`,
          available: generateRandomBoolean(),
        });
      }
      continue;
    }
    const single = `${i}:00 am`;
    array.push({
      time: single,
      available: generateRandomBoolean(),
    });
    if (i !== stop) {
      array.push({
        time: `${i}:30 pm`,
        available: generateRandomBoolean(),
      });
    }
  }
  return array;
};

/** Generate Days Before a specific time within a week */
const generateDaysBefore = (numOfDaysBefore, currentDate) => {
  const arrayOfDates = [];
  for (let i = numOfDaysBefore; i >= 1; i -= 1) {
    const newDay = dayjs(currentDate).subtract(i, 'day');
    arrayOfDates.push(newDay.toDate());
  }
  return arrayOfDates;
};
/** Generate Days After a specific time within a week */
const generateDaysAfter = (numOfDaysAfter, currentDate) => {
  const arrayOfDates = [];
  for (let i = 1; i <= numOfDaysAfter; i += 1) {
    const newDay = dayjs(currentDate).add(i, 'day');
    arrayOfDates.push(newDay.toDate());
  }
  return arrayOfDates;
};

/** Generate week range of specific time */
const generateWeek = (currentDate) => {
  const dateNow = currentDate;
  const day = `${dateNow}`.split(' ')[0];
  const positionInWeek = DAYS[day];
  const numberOfDaysBefore = positionInWeek;
  const numberOfDaysAfter = 7 - positionInWeek - 1;
  const datesBefore = generateDaysBefore(numberOfDaysBefore, dateNow);
  const datesAfter = generateDaysAfter(numberOfDaysAfter, dateNow);
  return [...datesBefore, currentDate, ...datesAfter];
};

/** Build the title text of a week range */
const buildTitle = (weekRange) => {
  const startDate = weekRange[0];
  const endDate = weekRange[weekRange.length - 1];
  const startPeriod = dayjs(startDate).format('MMMM DD');
  const startMonth = dayjs(startDate).format('MMMM');
  const endPeriod = dayjs(endDate).format('MMMM DD');
  const endMonth = dayjs(endDate).format('MMMM');
  const endDay = dayjs(endDate).format('DD');
  const year = dayjs(endDate).format('YYYY');
  return startMonth === endMonth ? `${startPeriod} - ${endDay}, ${year}` : `${startPeriod} - ${endPeriod}, ${year}`;
};

export {
  generateTimes,
  generateWeek,
  buildTitle,
};
