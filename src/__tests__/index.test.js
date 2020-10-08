import {multiply} from "../index";

xdescribe("multiply func tests", () => {
    it("1 * 2 is equal to 2", () => {
       expect(multiply(1, 2)).toBe(2);
    });
    it("3 * 5 is equal to 8", () => {
        expect(multiply(3, 5)).toBe(8);
    });
    it("0 * 1 is equal to 0", () => {
        expect(multiply(0, 1)).toBe(0);
    });
})