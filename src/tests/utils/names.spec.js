import { capitalizeFirstLetter } from "../../utils/names"

describe("Tests capitalizeFirstLetter", () => {
    test("Input: Test Name", () => {
        const input = "Test Name"
        const result = capitalizeFirstLetter(input)
        expect(result).toBe("Test Name")
    })

    test("Input: test name", () => {
        const input = "test name"
        const result = capitalizeFirstLetter(input)
        expect(result).toBe("Test Name")
    })

    test("Input: test Name", () => {
        const input = "test Name"
        const result = capitalizeFirstLetter(input)
        expect(result).toBe("Test Name")
    })

    test("Input: `` ", () => {
        const input = ""
        const result = capitalizeFirstLetter(input)
        expect(result).toBe("")
    })

    test("Input: name ", () => {
        const input = "name"
        const result = capitalizeFirstLetter(input)
        expect(result).toBe("Name")
    })

    test("Input: Name NAME NAme ", () => {
        const input = "Name NAME NAme"
        const result = capitalizeFirstLetter(input)
        expect(result).toBe("Name Name Name")
    })

})