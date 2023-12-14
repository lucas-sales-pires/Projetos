const escola = require("./index");

describe("função escola", () => {
  it("imprime lucas", () => {
    expect(escola.nome).toBe("lucas");
  });
});
