import { expect } from "chai";
import { argv0 } from "process";
import { DangerLinq } from "../src";
import { DangerLinqFunction } from "../src/DangerLinqFunction";

describe("DangerLinqFunction.Where", () => {
  it("Should be a function", async () => {
    const where = await DangerLinq(DangerLinqFunction.Where);
    expect(where).to.be.a("function");
  });

  // arrange
  const input = [1, 2, 3, 4, 5, 6];

  it('Should return only even numbers', async function () {
    // arrange
    const where = await DangerLinq(DangerLinqFunction.Where);
    const expected = [2, 4, 6];

    // act
    const actual = where(input, x => x % 2 === 0);

    // assert
    expect(actual).to.eql(expected);
  });

  it('Should throw an error when predicate is null', async function () {
    const where = await DangerLinq(DangerLinqFunction.Where);
    // @ts-ignore
    expect(() => where(input, null)).to.throw();
  });

  it('Should throw an error when predicate is undefined', async function () {
    const where = await DangerLinq(DangerLinqFunction.Where);
    // @ts-ignore
    expect(() => where(input, undefined)).to.throw();
  });
});

