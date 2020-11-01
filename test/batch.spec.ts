import { expect } from "chai";
import { DangerLinq } from "../src";
import { DangerLinqFunction } from "../src/DangerLinqFunction";

describe("DangerLinqFunction.Batch", () => {
  describe("Success scenarios", () => {
    it("Should be a function", async () => {
      const batch = await DangerLinq(DangerLinqFunction.Batch);
      expect(batch).to.be.a("function");
    });

    it("Should return an empty sequence", async () => {
      const batch = await DangerLinq(DangerLinqFunction.Batch);
      const emptySequence: Array<number> = [];
      const actual = batch(emptySequence, 100);
      const expected: Array<Array<number>> = [];

      expect(actual).to.be.instanceOf(Array);
      expect(actual).to.eql(expected);
    });

    it("Should batch evenly divisible sequence", async () => {
      const batch = await DangerLinq(DangerLinqFunction.Batch);
      const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const actual = batch(input, 3);
      const expected = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];

      expect(actual).to.eql(expected);
    });

    it("Should batch unevenly divisible sequence", async () => {
      const batch = await DangerLinq(DangerLinqFunction.Batch);
      const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const actual = batch(input, 4);
      const expected = [[1, 2, 3, 4], [5, 6, 7, 8], [9]];

      expect(actual).to.eql(expected);
    });

    it("Should batch sequence smaller than size", async () => {
      const batch = await DangerLinq(DangerLinqFunction.Batch);
      const input = [1, 2, 3, 4, 5];
      const actual = batch(input, 6);
      const expected = [[1, 2, 3, 4, 5]];

      expect(actual).to.eql(expected);
    });
  });

  describe("Error scenarios", () => {
    it("Should throw a type error if the input array is null", async () => {
      const batch = await DangerLinq(DangerLinqFunction.Batch);

      // @ts-ignore
      expect(() => batch(null, 100)).to.throw(TypeError);
    });

    it("Should throw a type error if the size is not an integer", async () => {
      const batch = await DangerLinq(DangerLinqFunction.Batch);
      const input: Array<string> = [];

      expect(() => batch(input, 100.1)).to.throw(TypeError);
    });

    it("Should throw a type error if the size is 0", async () => {
      const batch = await DangerLinq(DangerLinqFunction.Batch);
      const input: Array<string> = [];

      expect(() => batch(input, 0)).to.throw(TypeError);
    });

    it("Should throw a type error if the size is negative", async () => {
      const batch = await DangerLinq(DangerLinqFunction.Batch);
      const input: Array<string> = [];

      expect(() => batch(input, -1)).to.throw(TypeError);
    });
  });
});
