export const formatDate = (date, format = "DD/MM/YYYY") => {
    if(format === "YYYY-MM-DD") {
        const [day, month, year] = date.split("/");
        return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`
    }
    
    const [year, month, day] = date.split("-");
    if (format === "DD/MM") {
        return `${day.padStart(2, "0")}/${month.padStart(2, "0")}`
    }

    return `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`
};

export const simplifyDate = (dateString) => dateString?.slice(0, -5);

export const getNextNDays = (n) => {
    const today = new Date();
    const result = [];

    for (let i = 0; i < n; i++) {
        const nextDay = new Date(today.getTime() + 24 * 60 * 60 * 1000 * i);
        const day = nextDay.getDate().toString().padStart(2, "0");
        const month = (nextDay.getMonth() + 1).toString().padStart(2, "0");
        const year = nextDay.getFullYear().toString();
        const formattedDate = `${year}-${month}-${day}`
        result.push(formattedDate);
    }
    return result;
}

export const sortByDayAndTime = (list) => {
    return list.sort((a, b) => {
      if (a.day < b.day) return -1;
      if (a.day > b.day) return 1;
  
      if (a.time < b.time) return -1;
      if (a.time > b.time) return 1;
  
      return 0;
    });
  };

