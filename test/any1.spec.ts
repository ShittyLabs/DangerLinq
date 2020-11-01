import { expect } from "chai";
import { DangerLinq } from "../src";
import { DangerLinqFunction } from "../src/DangerLinqFunction";

/**
 * TODO
 * Test cases:
 * - Nonempty array, predicate matches an item in array
 * - Nonempty array, predicate doesn't match an item in array
 * - Empty array, predicate doesn't matter
 * - Array is null, predicate doesn't matter
 * - Array is undefined, predicate doesn't matter
 * - Array is nonempty, predicate is null
 * - Array is nonempty, predicate is undefined
 */

describe("DangerLinqFunction.Any", () => {
  it("Should be a function", async () => {
    const any = await DangerLinq(DangerLinqFunction.Any1);    
    expect(any).to.be.a("function");
  });

  it("Should return true for a non empty list", async () => {
    const any = await DangerLinq(DangerLinqFunction.Any1);
    const input = [0, 1, 2, 3];
    const actual = any(input);
    const expected = true;

    expect(actual).to.eql(expected);
  });

  it("Should return false for empty list", async () => {
    const any = await DangerLinq(DangerLinqFunction.Any1);
    const input: any[] = [];
    const actual = any(input);
    const expected = false;

    expect(actual).to.eql(expected);
  });

  it("Should throw an error when null is passed in", async () => {
    const any = await DangerLinq(DangerLinqFunction.Any1);

    // @ts-ignore
    expect(() => any(null)).to.throw();
  });

  it("Should throw an error when undefined is passed in", async () => {
    const any = await DangerLinq(DangerLinqFunction.Any1);

    // @ts-ignore
    expect(() => any(undefined)).to.throw();
  });
});