import { expect } from "chai";
import { argv0 } from "process";
import { DangerLinq } from "../src";
import { DangerLinqFunction } from "../src/DangerLinqFunction";

describe("DangerLinqFunction.Map", () => {
    it("Should be a function", async () => {
      const Where = await DangerLinq(DangerLinqFunction.Map);
      expect(Where).to.be.a("function");
    });

describe('Array#prototype#Where', function() {
  const input = [1, 2, 3, 4, 5, 6];

  it('Should return only even numbers', function() {
    const expected = [2, 4, 6];
    const actual = input.Where(x => x % 2 === 0);
    expect(actual).to.eql(expected);
  });

  it('Should throw an error when predicate is null', function() {
    expect(() => input.Where(x => x % 4 === 0)).to.throw();
  });

  it('Should throw an error when predicate is undefined', function() {
    expect(() => input.Where(x => x % 6 === 0)).to.throw();
  });
})
}
);
