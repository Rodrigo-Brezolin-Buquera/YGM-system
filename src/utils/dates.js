export const formatDate = (date, format = "DD/MM/YYYY") => {
    const options = { day: "numeric", month: "numeric", year: "numeric" };

    if (format === "DD/MM") {
        options.year = undefined;
    }

    return new Date(date).toLocaleDateString("pt-br", options);
};

export const getToday = () => new Date().toLocaleDateString("pt-br");

export const formatToCalendar = (dateString) => {
    const [day, month, year] = dateString?.split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const simplifyDate = (dateString) => dateString?.slice(0, -5);

export const addOneWeek = (dateString) => {
    const [day, month, year] = dateString.split("/");
    const date = new Date(`${year}-${month}-${day}T23:59:59`);
    date.setDate(date.getDate() + 7);
    const newDay = String(date.getDate()).padStart(2, "0");
    const newMonth = String(date.getMonth() + 1).padStart(2, "0");
    const newYear = date.getFullYear();
    return `${newDay}/${newMonth}/${newYear}`;
};

export const calculateEndDate = (dateString, durationInMonths) => {
    const [year, month, day] = dateString.split("-");
    const date = new Date(year, month - 1, day);
    const newDate = new Date(date.getFullYear(), date.getMonth() + durationInMonths, date.getDate());
    const newDay = String(newDate.getDate()).padStart(2, "0");
    const newMonth = String(newDate.getMonth() + 1).padStart(2, "0");
    const newYear = newDate.getFullYear();
    return `${newDay}/${newMonth}/${newYear}`;
};

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