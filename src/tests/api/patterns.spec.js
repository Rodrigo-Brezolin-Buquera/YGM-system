import { emailPattern, numberPattern, passwordPattern, pricePattern, namePattern } from "../../api/patterns"

describe("Test - Price regex", () => {
    test("Sucess case - 1 digits", () => {
        const input = "2"
        const result = input.match(pricePattern.value)
        expect(result).not.toBeNull()
    })

    test("Sucess case - 2 digits", () => {
        const input = "25"
        const result = input.match(pricePattern.value)
        expect(result).not.toBeNull()
    })

    test("Sucess case - 3 digits", () => {
        const input = "251"
        const result = input.match(pricePattern.value)
        expect(result).not.toBeNull()
    })

    test("Fail case - 0 digits", () => {
        const input = ""
        const result = input.match(pricePattern.value)
        expect(result).toBeNull()
    })

    test("Fail case - 4 digits", () => {
        const input = "1111"
        const result = input.match(pricePattern.value)
        expect(result).toBeNull()
    })

    test("Fail case - not a number", () => {
        const input = "aa"
        const result = input.match(pricePattern.value)
        expect(result).toBeNull()
    })
})

describe("Test - number regex", () => {
    test("Sucess case - 1 digits", () => {
        const input = "2"
        const result = input.match(numberPattern.value)
        expect(result).not.toBeNull()
    })

    test("Sucess case - 2 digits", () => {
        const input = "25"
        const result = input.match(numberPattern.value)
        expect(result).not.toBeNull()
    })

    test("Fail case - 3 digits", () => {
        const input = "123"
        const result = input.match(numberPattern.value)
        expect(result).toBeNull()
    })

    test("Fail case - not a number", () => {
        const input = "aa"
        const result = input.match(numberPattern.value)
        expect(result).toBeNull()
    })
})

describe("Test - string regex", () => {
    test("Sucess case", () => {
        const input = "Ana Maria"
        const result = input.match(namePattern.value)
        expect(result).not.toBeNull()
    })

    test("Fail case - less than 3 characters", () => {
        const input = "aa"
        const result = input.match(namePattern.value)
        expect(result).toBeNull()
    })

    test("Fail case - more than 30 characters", () => {
        const input = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        const result = input.match(namePattern.value)
        expect(result).toBeNull()
    })

    test("Fail case - numbers", () => {
        const input = "123124"
        const result = input.match(namePattern.value)
        expect(result).toBeNull()
    })

    test("Fail case - special Chars", () => {
        const input = "@!@#"
        const result = input.match(namePattern.value)
        expect(result).toBeNull()
    })

})

describe("Test - email regex", () => {
    test("Sucess case - .com", () => {
        const input = "test@gmail.com"
        const result = input.match(emailPattern.value)
        expect(result).not.toBeNull()
    })

    test("Sucess case - .com.br", () => {
        const input = "test@gmail.com.br"
        const result = input.match(emailPattern.value)
        expect(result).not.toBeNull()
    })


    test("Fail case - wihtout @", () => {
        const input = "testgmail.com.br"
        const result = input.match(emailPattern.value)
        expect(result).toBeNull()
    })

    test("Fail case - wihtout .com", () => {
        const input = "test@gmail"
        const result = input.match(emailPattern.value)
        expect(result).toBeNull()
    })

    test("Fail case - wihtout first part", () => {
        const input = "@gmail.com"
        const result = input.match(emailPattern.value)
        expect(result).toBeNull()
    })
})

describe("Test - password regex", () => {
    test("Sucess case", () => {
        const input = "123abc9"
        const result = input.match(passwordPattern.value)
        expect(result).not.toBeNull()
    })

    test("Sucess case  - camel case", () => {
        const input = "123AbC9"
        const result = input.match(passwordPattern.value)
        expect(result).not.toBeNull()
    })

    test("Sucess case - with special character", () => {
        const input = "123abc@@!"
        const result = input.match(passwordPattern.value)
        expect(result).not.toBeNull()
    })

    test("Fail case - too short", () => {
        const input = "123"
        const result = input.match(passwordPattern.value)
        expect(result).toBeNull()
    })

    test("Fail case - no letters", () => {
        const input = "1234567"
        const result = input.match(passwordPattern.value)
        expect(result).toBeNull()
    })

    test("Fail case - no numbers", () => {
        const input = "abcdefg"
        const result = input.match(passwordPattern.value)
        expect(result).toBeNull()
    })

    test("Fail case - only special characters", () => {
        const input = "!!@#@$@"
        const result = input.match(passwordPattern.value)
        expect(result).toBeNull()
    })
})