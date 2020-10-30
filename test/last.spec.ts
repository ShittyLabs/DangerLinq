import { expect } from "chai";
import { DangerLinq } from "../src";
import { DangerLinqFunction } from "../src/DangerLinqFunction";

describe("DangerLinqFunction.Last", () => {
  it("Should be a function", async () => {
    const last = await DangerLinq(DangerLinqFunction.Last);
    expect(last).to.be.a("function");
  });

  it("Should return the last value of array", async () => {
    const last = await DangerLinq(DangerLinqFunction.Last);
    const input = [0, 1, 2, 3];
    const actual = last(input);
    const expected = 3;

    expect(actual).to.eql(expected);
  });

  it("Should throw an error when input is empty", async () => {
    const last = await DangerLinq(DangerLinqFunction.Last);
    const input: any[] = [];

    expect(() => last(input)).to.throw();
  });

  it("Should throw an error when input value is null", async () => {
    const last = await DangerLinq(DangerLinqFunction.Last);

    // @ts-ignore
    expect(() => last(null)).to.throw();
  });
});
