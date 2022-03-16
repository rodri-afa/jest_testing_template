const saludarFn = require("./app");

describe("mi programa increible", () => {
    test("comprobación", () => {
        expect(true).toBe(true);
    });
    test("devuelve lo esperado", () => {
        expect(saludarFn("Antonio")).toBe("Hola Antonio");
    });
});
