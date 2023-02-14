import moment from "moment"

export const formatDate = (date, format) => moment(date, "YYYY-MM-DD").format(format)

export const getToday = () => moment().format("DD/MM/YYYY")

export const formatToCalendar = (date) => moment(date, "DD/MM/YYYY").format("YYYY-MM-DD")


export const addOneWeek = (date) => {
    const momentResult = moment(date, "DD/MM/YYYY").add(1, "weeks");
    return formatDate(momentResult, "DD/MM/YYYY")
};

export const calculateEndDate = (date, durationInMonths) => {
    const momentResult = moment(date, "YYYY-MM-DD").add(durationInMonths, "months").calendar();
    return moment(momentResult, "MM/DD/YYYY").format("DD/MM/YYYY")
}