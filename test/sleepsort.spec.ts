import { expect } from "chai";
import { DangerLinq } from "../src";
import { DangerLinqFunction } from "../src/DangerLinqFunction";

describe("DangerLinqFunction.SleepSort", () => {
  it("Should be a function", async () => {
    const sleepSort = await DangerLinq(DangerLinqFunction.SleepSort);
    expect(sleepSort).to.be.a("function");
  });

  it("Should sort a list of numbers", async () => {
    const sleepSort = await DangerLinq(DangerLinqFunction.SleepSort);
    const input = [2, 1, 6, 3];
    const actual = await sleepSort(input, (x) => x);
    const expected = [1, 2, 3, 6];

    expect(actual).to.eql(expected);
  });

  it("Should sort a list of objects", async () => {
    const sleepSort = await DangerLinq(DangerLinqFunction.SleepSort);
    const input = [{ x: 2 }, { x: 1 }, { x: 6 }, { x: 3 }];
    const actual = await sleepSort(input, (x) => x.x);
    const expected = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 6 }];;

    expect(actual).to.eql(expected);
  });

  it("Should sort an empty list", async () => {
    const sleepSort = await DangerLinq(DangerLinqFunction.SleepSort);
    const input: any[] = [];
    const actual = await sleepSort(input, (x) => x);
    const expected: any[] = [];

    expect(actual).to.eql(expected);
  });
});
