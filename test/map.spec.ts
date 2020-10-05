import { expect } from "chai";
import { DangerLinq } from "../src";
import { DangerLinqFunction } from "../src/DangerLinqFunction";

describe("DangerLinqFunction.Map", () => {
  it("Should be a function", async () => {
    const map = await DangerLinq(DangerLinqFunction.Map);
    expect(map).to.be.a("function");
  });

  it("Should transform a list", async () => {
    const map = await DangerLinq(DangerLinqFunction.Map);
    const input = [0, 1, 2, 3];
    const actual = map(input, (x) => x + x);
    const expected = [0, 2, 4, 6];

    expect(actual).to.eql(expected);
  });

  it("Should transform an empty list", async () => {
    const map = await DangerLinq(DangerLinqFunction.Map);
    const input: any[] = [];
    const actual = map(input, (x) => x + x);
    const expected: any[] = [];

    expect(actual).to.eql(expected);
  });
});
