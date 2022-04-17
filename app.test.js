const app = require("./app");

describe("mi programa increible", () => {
    test("jest funciona", () => {
        expect(true).toBe(true);
    });

    test("saluda correctamente", () => {
        expect(app.saludar("Antonio")).toBe("Hola Antonio");
    });

    test("se despide correctamente", () => {
        expect(app.despedida("Antonio")).toBe("Adios Antonio");
    });
});
