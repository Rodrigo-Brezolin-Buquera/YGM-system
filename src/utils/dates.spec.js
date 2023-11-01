import { formatDate, getNextNDays, simplifyDate, sortByDayAndTime } from "./dates"

describe("formatDate tests", () => {
    test("Default format: DD/MM/YYYY", () => {
        const input = "2021-09-13"
        const result = formatDate(input)
        expect(result).toBe("13/09/2021")
    })

    test("Default format: YYYY-MM-DD", () => {
        const input = "13/09/2021"
        const result = formatDate(input, "YYYY-MM-DD")
        expect(result).toBe("2021-09-13")
    })

    test("Default format: DD/MM", () => {
        const input = "2021-09-13"
        const result = formatDate(input, "DD/MM")
        expect(result).toBe("13/09")
    })
})

describe("simplifyDate tests", () => {
    test("Default", () => {
        const input = "13/09/2021"
        const result = simplifyDate(input)
        expect(result).toBe("13/09")
    })
})

describe("getNextNDays tests", () => {
    test("1 day", () => {
        const input = 1
        const result = getNextNDays(input)
        const [firstDay] = new Date().toISOString().split("T")
        expect(result).toHaveLength(1)
        expect(result[0]).toBe(firstDay)
    })

    test("5 days", () => {
        const input = 5
        const result = getNextNDays(input)
        expect(result).toHaveLength(5)
    })

})

describe("sortByDayAndTime tests", () => {
    test("Default", () => {
        const input = [
            { date: "17/03/2023", time: "19:00" },
            { date: "17/03/2023", time: "11:00" },
            { date: "17/03/2023", time: "11:30" },
            { date: "19/03/2023", time: "11:30" },
            { date: "19/02/2023", time: "17:30" },
            { date: "11/05/2023", time: "07:30" },
        ]
        const result = sortByDayAndTime(input)
        expect(result).toEqual([
            { date: '19/02/2023', time: '17:30' },
            { date: '17/03/2023', time: '11:00' },
            { date: '17/03/2023', time: '11:30' },
            { date: '17/03/2023', time: '19:00' },
            { date: '19/03/2023', time: '11:30' },
            { date: '11/05/2023', time: '07:30' }
        ])
    })



})