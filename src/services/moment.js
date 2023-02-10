import moment from "moment"

export const formatDate = (date) =>  moment(date, "YYYY-MM-DD").format("DD/MM")

export const getToday = ()  =>  moment().format("DD/MM/YYYY")