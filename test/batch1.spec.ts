import { expect } from "chai";
import { DangerLinq } from "../src";
import { DangerLinqFunction } from "../src/DangerLinqFunction";

describe("DangerLinqFunction.Batch1", () => {
  describe("Success scenarios", () => {
    it("Should be a function", async () => {
      const batch1 = await DangerLinq(DangerLinqFunction.Batch1);
      expect(batch1).to.be.a("function");
    });

    it("Should return an empty sequence", async () => {
      const batch1 = await DangerLinq(DangerLinqFunction.Batch1);
      const emptySequence: Array<number> = [];
      const actual = batch1(emptySequence, 100, (n) => n.toString());
      const expected: Array<Array<string>> = [];

      expect(actual).to.be.instanceOf(Array);
      expect(actual).to.eql(expected);
    });

    it("Should batch evenly divisible sequence", async () => {
      const batch1 = await DangerLinq(DangerLinqFunction.Batch1);
      const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const actual = batch1(input, 3, (n) => n);
      const expected = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];

      expect(actual).to.eql(expected);
    });

    it("Should batch unevenly divisible sequence", async () => {
      const batch1 = await DangerLinq(DangerLinqFunction.Batch1);
      const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const actual = batch1(input, 4, (n) => n);
      const expected = [[1, 2, 3, 4], [5, 6, 7, 8], [9]];

      expect(actual).to.eql(expected);
    });

    it("Should batch sequence transforming results", async () => {
      const batch1 = await DangerLinq(DangerLinqFunction.Batch1);
      const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const sum = (a: number, b: number) => a + b;
      const actual = batch1(input, 4, (n) => n.reduce(sum));
      const expected = [10, 26, 9];

      expect(actual).to.eql(expected);
    });

    it("Should batch sequence smaller than size", async () => {
      const batch1 = await DangerLinq(DangerLinqFunction.Batch1);
      const input = [1, 2, 3, 4, 5];
      const actual = batch1(input, 6, (n) => n);
      const expected = [[1, 2, 3, 4, 5]];

      expect(actual).to.eql(expected);
    });
  });

  describe("Error scenarios", () => {
    it("Should throw a type error if the input array is null", async () => {
      const batch1 = await DangerLinq(DangerLinqFunction.Batch1);

      // @ts-ignore
      expect(() => batch1(null, 100, (n) => n)).to.throw(TypeError);
    });

    it("Should throw a type error if the size is not an integer", async () => {
      const batch1 = await DangerLinq(DangerLinqFunction.Batch1);
      const input: Array<string> = [];

      expect(() => batch1(input, 100.1, (n) => n)).to.throw(TypeError);
    });

    it("Should throw a type error if the size is 0", async () => {
      const batch1 = await DangerLinq(DangerLinqFunction.Batch1);
      const input: Array<string> = [];

      expect(() => batch1(input, 0, (n) => n)).to.throw(TypeError);
    });

    it("Should throw a type error if the size is negative", async () => {
      const batch1 = await DangerLinq(DangerLinqFunction.Batch1);
      const input: Array<string> = [];

      expect(() => batch1(input, -1, (n) => n)).to.throw(TypeError);
    });

    it("Should throw the resultSelector is null", async () => {
      const batch1 = await DangerLinq(DangerLinqFunction.Batch1);
      const input: Array<string> = [];

      // @ts-ignore
      expect(() => batch1(input, 100, null)).to.throw(TypeError);
    });
  });
});
