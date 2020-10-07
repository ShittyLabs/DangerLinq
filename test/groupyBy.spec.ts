import { expect } from "chai";
import { DangerLinq } from "../src";
import { DangerLinqFunction } from "../src/DangerLinqFunction";
import { Grouping } from "../src/Types/Grouping";

describe("DangerLinqFunction.GroupBy", () => {
    it("Should be a function", async () => {
        const groupBy = await DangerLinq(DangerLinqFunction.GroupBy);
        expect(groupBy).to.be.a("function");
    });

    it('Should group values by key', async () => {
        const groupBy = await DangerLinq(DangerLinqFunction.GroupBy);
        const input = [
            { date: '10/10/2020', count: 3 },
            { date: '10/11/2020', count: 7 },
            { date: '10/12/2020', count: 4 },
            { date: '10/10/2020', count: 9 },
            { date: '10/11/2020', count: 9 },
            { date: '10/12/2020', count: 8 },
            { date: '10/10/2020', count: 7 }
        ];
        const actual = groupBy(input, x => x.date);
        expect(actual).to.be.instanceOf(Array);
        actual.forEach(group => {
            expect(group).to.include.keys('key');
            group.forEach(item => {
                expect(item.date).to.eq(group.key);
            });
        });
    });
});
