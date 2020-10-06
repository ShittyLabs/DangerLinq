import { expect } from "chai";
import { DangerLinq } from "../src";
import { DangerLinqFunction } from "../src/DangerLinqFunction";

describe("DangerLinqFunction.Aggregate2", () => {
  describe("Success scenarios", () => {
    it("Should be a function", async () => {
      const aggregate2 = await DangerLinq(DangerLinqFunction.Aggregate2);
      expect(aggregate2).to.be.a("function");
    });

    it("Should sum a list of numbers and increment the result", async () => {
      const aggregate2 = await DangerLinq(DangerLinqFunction.Aggregate2);
      const input = [1, 2, 3, 4];
      const actual = aggregate2(input, 0, (a, b) => a + b, x => x + 1);
      const expected = 11;

      expect(actual).to.eql(expected);
    });

    it("Should apply the result selector to the seed if the input array is empty", async () => {
      const aggregate2 = await DangerLinq(DangerLinqFunction.Aggregate2);
      const input: number[] = [];
      const actual = aggregate2(input, 0, (a, b) => a + b, x => x + 1);
      const expected = 1;

      expect(actual).to.eq(expected);
    });
  });

  describe("Error scenarios", () => {
    it("Should throw a type error if the input is not an array", async () => {
      const aggregate2 = await DangerLinq(DangerLinqFunction.Aggregate2);

      // @ts-ignore
      expect(() => aggregate2(null, 0, (a, b) => a + b), x => x + 1).to.throw(TypeError);
    });

    it("Should throw a type error if the reducer is not a function", async () => {
      const aggregate2 = await DangerLinq(DangerLinqFunction.Aggregate2);
      const input = [1, 2, 3, 4];

      // @ts-ignore
      expect(() => aggregate2(input, 0, null, x => x + 1)).to.throw(TypeError);
    });

    it("Should throw a type error if the reducer is a function with incorrect arity", async () => {
      const aggregate2 = await DangerLinq(DangerLinqFunction.Aggregate2);
      const input = [1, 2, 3, 4];

      // @ts-ignore
      expect(() => aggregate2(input, 0, (x) => x, x => x + 1)).to.throw(TypeError);
    });

    it("Should throw a type error if the result selector is not a function", async () => {
      const aggregate2 = await DangerLinq(DangerLinqFunction.Aggregate2);
      const input = [1, 2, 3, 4];

      // @ts-ignore
      expect(() => aggregate2(input, 0, (a, b) => a + b, null)).to.throw(TypeError);
    });
  });
});
