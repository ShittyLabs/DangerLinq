import { expect } from "chai";
import { DangerLinq } from "../src";
import { DangerLinqFunction } from "../src/DangerLinqFunction";

describe("DangerLinqFunction.Aggregate", () => {
  describe("Success scenarios", () => {
    it("Should be a function", async () => {
      const aggregate = await DangerLinq(DangerLinqFunction.Aggregate);
      expect(aggregate).to.be.a("function");
    });

    it("Should sum a list of numbers", async () => {
      const aggregate = await DangerLinq(DangerLinqFunction.Aggregate);
      const input = [1, 2, 3, 4];
      const actual = aggregate(input, 0, (a, b) => a + b);
      const expected = 10;

      expect(actual).to.eql(expected);
    });

    it("Should return the seed value if the input array is empty", async () => {
      const aggregate = await DangerLinq(DangerLinqFunction.Aggregate);
      const input: any[] = [];
      const actual = aggregate(input, 0, (a, b) => a + b);
      const expected = 0;

      expect(actual).to.eql(expected);
    });
  });

  describe("Error scenarios", () => {
    it("Should throw a type error if the input is not an array", async () => {
      const aggregate = await DangerLinq(DangerLinqFunction.Aggregate);

      // @ts-ignore
      expect(() => aggregate(null, 0, (a, b) => a + b)).to.throw(TypeError);
    });

    it("Should throw a type error if the reducer is not a function", async () => {
      const aggregate = await DangerLinq(DangerLinqFunction.Aggregate);
      const input = [1, 2, 3, 4];

      // @ts-ignore
      expect(() => aggregate(input, 0, null)).to.throw(TypeError);
    });

    it("Should throw a type error if the reducer is a function with incorrect arity", async () => {
      const aggregate = await DangerLinq(DangerLinqFunction.Aggregate);
      const input = [1, 2, 3, 4];

      // @ts-ignore
      expect(() => aggregate(input, 0, x => x)).to.throw(TypeError);
    });
  });
});
