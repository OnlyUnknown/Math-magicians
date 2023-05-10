import operate from "../logic/operate";

describe("Operation file tests", () => {
test("Expected 2 + 3 equalt to 5", () => {
    const result = operate(3,2,"+")
    expect(result).toBe("5")
});

test("Expected 2 - 3 equalt to 5", () => {
    const result = operate(2,3,"-")
    expect(result).toBe("-1")
})

test("Expected 6 ÷ 3 equalt to 5", () => {
    const result = operate(6,3,"÷")
    expect(result).toBe("2")
})



})