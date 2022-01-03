import moment, {Moment} from "moment";
import DurationConstructor = moment.unitOfTime.DurationConstructor;

export const convertDateToMM_DD_YYY = (date: Date) => {
    try {
        const month = `${date.getMonth()}`.padStart(2, "0");
        const day = `${date.getDate()}`.padStart(2, "0");
        const year = `${date.getFullYear()}`;

        return `${month}/${day}/${year}`;
    } catch (error) {
        console.error("error in formatting date");
    }
};

export function getValidDate(time: number, timeFormat: string) {
    return moment.unix(time).format(timeFormat);
}

export const addDays = (fromDate: Moment, numberOfDays: DurationConstructor) => {
    return moment(fromDate).add(numberOfDays, 'd').toDate();
}

export const endOfDay = (date: Date) => {
    return moment(date).endOf('d').toDate();
}

export const startOfDay = (date: Date) => {
    return moment(date).startOf('d').toDate();
}

export const startOfMonth = (date: Date) => {
    return moment(date).startOf('month').toDate();
}

export const endOfMonth = (date: Date) => {
    return moment(date).endOf('month').toDate();
}

export const addMonths = (fromDate: Moment, numberOfMonths: DurationConstructor) => {
    return moment(fromDate).add(numberOfMonths, 'months').toDate();
}

export const startOfQuarter = (date: Date) => {
    return moment(date).startOf('quarter').toDate();
}

export const startOfWeek = (date: Date) => {
    return moment(date).startOf('week').toDate();
}

export const endOfWeek = (date: Date) => {
    return moment(date).endOf('week').toDate();
}

export const startOfYear = (date: Date) => {
    return moment(date).startOf('year').toDate();
}

export const endOfYear = (date: Date) => {
    return moment(date).endOf('year').toDate();
}

export const addYears = (fromDate: Moment, numberOfYears: DurationConstructor) => {
    return moment(fromDate).add(numberOfYears, 'years').toDate();
}