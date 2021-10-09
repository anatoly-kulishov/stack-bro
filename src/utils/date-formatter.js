import moment from "moment";
import { TIME_FORMATS } from "../constants/time-format";

export const convertDateToMM_DD_YYY = (date) => {
    try {
        const month = `${date.getMonth()}`.padStart(2, "0");
        const day = `${date.getDate()}`.padStart(2, "0");
        const year = `${date.getFullYear()}`;

        return `${month}/${day}/${year}`;
    } catch (error) {
        console.error("error in formatting date");
    }
};

/**
 *  @function getValidDate
 *
 *  @param {number | null} time Set UNIX timestamp
 *  @param {TIME_FORMATS} timeFormat Set a format for time
 *
 *  @return {string}
 */
function getValidDate(time, timeFormat) {
    if (time === null || typeof timeFormat !== "string") {
        return "";
    }

    return moment.unix(time).format(timeFormat);
}

/**
 *  @function getValidChatDate
 *
 *  @param {number | null} time Set UNIX timestamp
 *  @param {TIME_FORMATS} timeFormat Set a format for time
 *
 *  @return {string}
 */
 function getValidChatDate(time, isSeparator = false) {
    if (time === null) {
        return "";
    }

    const diffFromToday = moment().utc().startOf('day').diff(moment.unix(time).utc().startOf('day'), 'days');

    if (diffFromToday === 0) {
        return isSeparator ? "Today" : moment.unix(time).format(TIME_FORMATS.MESSAGE);
    }

    if (diffFromToday === 1) {
        return "Yesterday";
    }

    if (diffFromToday <= 7) {
        return moment.unix(time).utc().format(TIME_FORMATS.WEEK_DAY);
    }

    return moment.unix(time).utc().format(TIME_FORMATS.DATE_IN_MONTH);
}

export { getValidDate, getValidChatDate };

export const addDays = (fromDate, numberOfDays) =>{
    return moment(fromDate).add(numberOfDays, 'd').toDate();
}

export const endOfDay = (date) =>{
    return moment(date).endOf('d').toDate();
}

export const startOfDay = (date) =>{
    return moment(date).startOf('d').toDate();
}

export const startOfMonth = (date) =>{
    return moment(date).startOf('month').toDate();
}

export const endOfMonth = (date) =>{
    return moment(date).endOf('month').toDate();
}

export const addMonths = (fromDate, numberOfMonths) =>{
    return moment(fromDate).add(numberOfMonths, 'months').toDate();
}

export const startOfQuarter = (date) => {
    return moment(date).startOf('quarter').toDate();
}

export const startOfWeek = (date) =>{
    return moment(date).startOf('week').toDate(); 
}

export const endOfWeek = (date) =>{
    return moment(date).endOf('week').toDate(); 
}

export const startOfYear = (date) =>{
    return moment(date).startOf('year').toDate(); 
}

export const endOfYear = (date) =>{
    return moment(date).endOf('year').toDate();
}

export const addYears = (fromDate, numberOfYears) =>{
    return moment(fromDate).add(numberOfYears, 'years').toDate();
}
