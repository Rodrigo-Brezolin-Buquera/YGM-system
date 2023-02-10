import moment from "moment"

export const formatDate = (date, format) =>  moment(date, "YYYY-MM-DD").format(format)

export const getToday = ()  =>  moment().format("DD/MM/YYYY")