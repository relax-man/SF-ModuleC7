import {fibonacciNumber} from "../fibonacci";

describe("fibonacci func tests", () => {
    it("for negative numbers", () => {
        expect(fibonacciNumber(-3)).toBe("N is not a natural number");
    });
    it("for other types of data", () => {
        expect(fibonacciNumber("hey")).toBe("N is not a natural number");
    });
    it("for 7", () => {
        expect(fibonacciNumber(7)).toBe(13);
    });
});