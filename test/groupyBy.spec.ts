import { expect } from "chai";
import { DangerLinq } from "../src";
import { DangerLinqFunction } from "../src/DangerLinqFunction";

describe("DangerLinqFunction.GroupBy", () => {
    
    const input = [
        { date: '10/10/2020', count: 3 },
        { date: '10/11/2020', count: 7 },
        { date: '10/12/2020', count: 4 },
        { date: '10/10/2020', count: 9 },
        { date: '10/11/2020', count: 9 },
        { date: '10/12/2020', count: 8 },
        { date: '10/10/2020', count: 7 }
    ];

    describe("Success scenarios", () => {
        it("Should be a function", async () => {
            const groupBy = await DangerLinq(DangerLinqFunction.GroupBy);
            expect(groupBy).to.be.a("function");
        });

        it('Should group values by primitive key', async () => {
            const groupBy = await DangerLinq(DangerLinqFunction.GroupBy);
            const actual = groupBy(input, x => x.date);
            expect(actual).to.be.instanceOf(Array);
            actual.forEach(group => {
                expect(group).to.include.keys('key');
                group.forEach(item => {
                    expect(item.date).to.eq(group.key);
                });
            });
        });

        it('Should group values by non-primitive key', async () => {
            const groupBy = await DangerLinq(DangerLinqFunction.GroupBy);
            const f = () => {};
            const g = () => {};
            const input = [
                { date: '10/10/2020', count: 3, func: f },
                { date: '10/11/2020', count: 7, func: f },
                { date: '10/12/2020', count: 4, func: g },
                { date: '10/10/2020', count: 9, func: f },
                { date: '10/11/2020', count: 9, func: g },
                { date: '10/12/2020', count: 8, func: f },
                { date: '10/10/2020', count: 7, func: f }
            ];
            const actual = groupBy(input, x => x.func);
            expect(actual).to.be.instanceOf(Array);
            actual.forEach(group => {
                expect(group).to.include.keys('key');
                group.forEach(item => {
                    expect(item.func).to.eq(group.key);
                });
            });
            expect(actual).to.have.length(2);
        });
    });

    describe("Error scenarios", () => {
        it("Should throw a type error if the input array is null", async () => {
            const groupBy = await DangerLinq(DangerLinqFunction.GroupBy);

            // @ts-ignore
            expect(() => groupBy(null, (a, b) => a + b)).to.throw(TypeError);
        });

        it("Should throw a type error if the key selector is null", async () => {
            const groupBy = await DangerLinq(DangerLinqFunction.GroupBy);

            // @ts-ignore
            expect(() => groupBy(input, null)).to.throw(TypeError);
        });
    });
});
