import { addOneWeek, calculateEndDate, formatDate, formatToCalendar, getToday, simplifyDate, sortByDayAndTime, sortByTime } from "./dates"

describe("Tests formatDate", () => {
    test("Input AAAA-MM-DD", () => {
        const input = "2023-03-02"
        const result = formatDate(input)
        expect(result).toBe("02/03/2023")
    })

    test("Input AAAA-MM-DD and fomato  DD/MM", () => {
        const input = "2023-03-02"
        const result = formatDate(input, "DD/MM")
        expect(result).toBe("02/03")
    })
})

describe.skip("Tests getToday", () => {
    test("Default", () => {
        const result = getToday()
        expect(result).toBe("02/03/2023") // o dia irá mudar
    })
})

describe("Tests formatToCalendar", () => {
    test("Input DD-MM-YYYY", () => {
        const input = "02/03/2023"
        const result = formatToCalendar(input)
        expect(result).toBe("2023-03-02")
    })
})

describe("Tests simplifyDate", () => {
    test("Input DD-MM-YYYY", () => {
        const input = "02/03/2023"
        const result = simplifyDate(input)
        expect(result).toBe("02/03")
    })
})

describe("Tests - addOneWeek", () => {
    test("Sucess case in same month", () => {
        const date = "20/05/2020";
        const result = addOneWeek(date)
        expect(result).toBe("27/05/2020")
    });

    test("Sucess case in diferent month", () => {
        const date = "31/05/2020";
        const result = addOneWeek(date)
        expect(result).toBe("07/06/2020")

    });

    test("Sucess case in diferent year", () => {
        const date = "31/12/2020";
        const result = addOneWeek(date)
        expect(result).toBe("07/01/2021")

    });
});

describe("Tests - calculateEndDate", () => {
    let date = "2020-01-01";
    test("Sucess case with 1 month", () => {
        const durationInMonths = 1
        const result = calculateEndDate(date, durationInMonths)
        expect(result).toBe("01/02/2020")

    });

    test("Sucess case wtih 3 months", () => {
        const durationInMonths = 3
        const result = calculateEndDate(date, durationInMonths)
        expect(result).toBe("01/04/2020")

    });

    test("Sucess case wtih 6 months", () => {
        const durationInMonths = 6
        const result = calculateEndDate(date, durationInMonths)
        expect(result).toBe("01/07/2020")

    });
});



describe("Tests - sortByTime", () => {
    const classesList = [
        { time: "09:00" },
        { time: "17:00" },
        { time: "00:00" },
        { time: "22:00" },
        { time: "21:00" },
    ]
    test("Sucess case", () => {
        const result = sortByTime(classesList)
        expect(result[0].time).toBe("00:00")
        expect(result[1].time).toBe("09:00")
        expect(result[result.length - 1].time).toBe("22:00")
    })
})

describe("Tests - sortDayAndTime", () => {
    const classesList = [
        { day: "Terça", time: "17:00" },
        { day: "Terça", time: "21:00" },
        { day: "Segunda", time: "09:00" },
        { day: "Sábado", time: "22:00" },
        { day: "Quinta", time: "00:00" },
    ]

    test("Sucess case", () => {
        const result = sortByDayAndTime(classesList)
        expect(result[0]).toEqual({ day: "Segunda", time: "09:00" })
        expect(result[1]).toEqual({ day: "Terça", time: "17:00" })
        expect(result[4]).toEqual({ day: "Sábado", time: "22:00" })
    })
})