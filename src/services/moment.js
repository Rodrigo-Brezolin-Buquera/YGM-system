import moment from "moment"

export const formatDate = (date, format) => moment(date, "YYYY-MM-DD").format(format)

export const getToday = () => moment().format("DD/MM/YYYY")

export const formatToCalendar = (date) => moment(date, "DD/MM/YYYY").format("YYYY-MM-DD")

export const simplifyDate = (date) => moment(date, "DD/MM/YYYY").format("DD/MM")

export const addOneWeek = (date) => {
    const momentResult = moment(date, "DD/MM/YYYY").add(1, "weeks");
    return formatDate(momentResult, "DD/MM/YYYY")
};

export const calculateEndDate = (date, durationInMonths) => {
    const momentResult = moment(date, "YYYY-MM-DD").add(durationInMonths, "months").calendar();
    return moment(momentResult, "MM/DD/YYYY").format("DD/MM/YYYY")
}


export const getSundayOfCurrentWeek = () => {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();
    return new Date(currentDate.getTime() - dayOfWeek * 24 * 3600 * 1000);
}

export const getDatesOfWeek = (sunday) => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
        const date = new Date(sunday.getTime() + i * 24 * 3600 * 1000);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const fullDate = `${day < 10 ? "0" : ""}${day}/${month < 10 ? "0" : ""}${month}/${year}`;
        dates.push(fullDate);
    }
    return dates;
}


export const getNextNDays = (n) => {
    const today = new Date();
    const result = [];

    for (let i = 0; i < n; i++) {
        const nextDay = new Date(today.getTime() + 24 * 60 * 60 * 1000 * i);
        const day = nextDay.getDate().toString().padStart(2, "0");
        const month = (nextDay.getMonth() + 1).toString().padStart(2, "0");
        const year = nextDay.getFullYear().toString();
        const formattedDate = `${day}/${month}/${year}`;
        result.push(formattedDate);
    }

    return result;
}