const DESCRIPTORS = ['1st', '2nd', '3rd', '4th', '5th', 'last', 'teenth'];
const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const DAYS_IN_WEEK = WEEKDAYS.length;
const TEENTH_OFFSET = 12;

/**
 * Find the month day of a target weekday, starting from a certain weekday and pushed by offset
 * @param {number} weekdayIndexFrom The weekday index of the starting day
 * @param {number} weekdayIndexTo The weekday index of the target day
 * @param {number} offset Number of days to skip
 * @return {number} The day of the month
 */
const dayOf = (weekdayIndexFrom, weekdayIndexTo, offset = 0) => {
  const diff = weekdayIndexTo - weekdayIndexFrom;
  const daysToFirstOccurence = diff >= 0 ? diff : diff + DAYS_IN_WEEK;
  return daysToFirstOccurence + offset + 1; // +1 to shift from 0 index weekday to month days
};

/**
 * Find the day of the month from year, month, weekday and descriptor
 * @param {number} year Four digits year
 * @param {number} month Zero based index of the target month
 * @param {string} weekday One of WEEKDAYS
 * @param {string} descriptor One of DESCRIPTORS
 * @return {Date} The date of the meetup
 */
export const meetupDay = (year, month, weekday, descriptor) => {
  if( WEEKDAYS.includes(weekday) !== true ) throw new TypeError(`Invalid argument value for 'weekday': ${weekday}`);
  if( DESCRIPTORS.includes(descriptor) !== true ) throw new TypeError(`Invalid argument value for 'descriptor': ${descriptor}`);

  const date = new Date(year, month);
  const firstWeekdayIndex = date.getDay();
  const targetWeekdayIndex = WEEKDAYS.indexOf(weekday);
  const nextMonth = month < 11 ? month + 1 : 0;
  const daysInMonth = new Date(year, nextMonth, 0).getDate();
  const fifthWeekDays = daysInMonth % DAYS_IN_WEEK;

  // Handles all ordinal descriptiors
  let startWeekdayIndex = firstWeekdayIndex;
  let offset = DAYS_IN_WEEK * DESCRIPTORS.indexOf(descriptor);

  switch( descriptor ) {
    case 'teenth':
      startWeekdayIndex = new Date(year, month, 13).getDay();
      offset = TEENTH_OFFSET;
      break;

    case 'last':
      const ordinalDescriptor = fifthWeekDays > (targetWeekdayIndex - firstWeekdayIndex) ? '5th' : '4th';
      offset = DAYS_IN_WEEK * DESCRIPTORS.indexOf(ordinalDescriptor);
      break;

    default:
      // handled by default init
  }

  const targetDay = dayOf(startWeekdayIndex, targetWeekdayIndex, offset);
  if( targetDay > daysInMonth ) throw new Error('Day out of range');

  return new Date(year, month, targetDay);
};
