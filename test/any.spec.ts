import { expect } from "chai";
import { DangerLinq } from "../src";
import { DangerLinqFunction } from "../src/DangerLinqFunction";

describe("DangerLinqFunction.Any", () => {
  it("Should be a function", async () => {
    const any = await DangerLinq(DangerLinqFunction.Any);    
    expect(any).to.be.a("function");
  });

  it("Should return true for a non empty list", async () => {
    const any = await DangerLinq(DangerLinqFunction.Any);
    const input = [0, 1, 2, 3];
    const actual = any(input);
    const expected = true;

    expect(actual).to.eql(expected);
  });

  it("Should return false for empty list", async () => {
    const any = await DangerLinq(DangerLinqFunction.Any);
    const input: any[] = [];
    const actual = any(input);
    const expected = false;

    expect(actual).to.eql(expected);
  });

  it("Should throw an error when null is passed in", async () => {
    const any = await DangerLinq(DangerLinqFunction.Any);

    // @ts-ignore
    expect(() => any(null)).to.throw();
  });

  it("Should throw an error when undefined is passed in", async () => {
    const any = await DangerLinq(DangerLinqFunction.Any);

    // @ts-ignore
    expect(() => any(undefined)).to.throw();
  });
});
