const GIGASECOND_IN_MILLISECONDS = 10e11;

/**
 * Compute date in one gigasecond from 'startDate'
 * @param {Date} startDate The initial date
 * @return {Date} Date one giga-second in the future
 */
export const gigasecond = startDate => new Date( startDate.getTime() + GIGASECOND_IN_MILLISECONDS );
