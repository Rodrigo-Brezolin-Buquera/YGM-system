import moment from "moment"

export const formatDate = (date, format) => moment(date, "YYYY-MM-DD").format(format)

export const getToday = () => moment().format("DD/MM/YYYY")

export const formatToCalendar = (date) => moment(date, "DD/MM/YYYY").format("YYYY-MM-DD")

export const simplifyDate = (date) => moment(date, "DD/MM/YYYY").format("DD / MM")

export const addOneWeek = (date) => {
    const momentResult = moment(date, "DD/MM/YYYY").add(1, "weeks");
    return formatDate(momentResult, "DD/MM/YYYY")
};

export const calculateEndDate = (date, durationInMonths) => {
    const momentResult = moment(date, "YYYY-MM-DD").add(durationInMonths, "months").calendar();
    return moment(momentResult, "MM/DD/YYYY").format("DD/MM/YYYY")
}


export const getCurrentWeek = () => {
    let currentDate = new Date();
    let dayOfWeek = currentDate.getDay();
    let sunday = new Date(currentDate.getTime() - dayOfWeek * 24 * 3600 * 1000);
    let datesOfWeek = [];
    for (let i = 0; i < 7; i++) {
        let date = new Date(sunday.getTime() + i * 24 * 3600 * 1000);
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let fullDate = `${day < 10 ? "0" : ""}${day}/${month < 10 ? "0" : ""}${month}/${year}`;
        datesOfWeek.push(fullDate);
    }
    return datesOfWeek
}