import { expect } from "chai";
import { DangerLinq } from "../src";
import { DangerLinqFunction } from "../src/DangerLinqFunction";

describe("DangerLinqFunction.Aggregate1", () => {
  describe("Success scenarios", () => {
    it("Should be a function", async () => {
      const aggregate1 = await DangerLinq(DangerLinqFunction.Aggregate1);
      expect(aggregate1).to.be.a("function");
    });

    it("Should sum a list of numbers", async () => {
      const aggregate1 = await DangerLinq(DangerLinqFunction.Aggregate1);
      const input = [1, 2, 3, 4];
      const actual = aggregate1(input, (a, b) => a + b);
      const expected = 10;

      expect(actual).to.eql(expected);
    });
  });

  describe("Error scenarios", () => {
    it("Should throw an error if the input array is empty", async () => {
      const aggregate1 = await DangerLinq(DangerLinqFunction.Aggregate1);
      const input: number[] = [];

      expect(() => aggregate1(input, (a, b) => a + b)).to.throw(Error);
    });

    it("Should throw a type error if the input is not an array", async () => {
      const aggregate1 = await DangerLinq(DangerLinqFunction.Aggregate1);

      // @ts-ignore
      expect(() => aggregate1(null, (a, b) => a + b)).to.throw(TypeError);
    });

    it("Should throw a type error if the reducer is not a function", async () => {
      const aggregate1 = await DangerLinq(DangerLinqFunction.Aggregate1);
      const input = [1, 2, 3, 4];

      // @ts-ignore
      expect(() => aggregate1(input, null)).to.throw(TypeError);
    });

    it("Should throw a type error if the reducer is a function with incorrect arity", async () => {
      const aggregate1 = await DangerLinq(DangerLinqFunction.Aggregate1);
      const input = [1, 2, 3, 4];

      // @ts-ignore
      expect(() => aggregate1(input, (x) => x)).to.throw(TypeError);
    });
  });
});
