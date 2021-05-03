const {MarkovMachine} = require("./markov");

describe('markov machine', function() {
    test('make chains', function() {
        let mm = new MarkovMachine("cat hat bag cat BAG cat BAG");

        expect(mm.chains).toEqual(new Map([
            ["cat", ["hat", "BAG", "BAG"]],
            ["hat", ["bag"]],
            ["bag", ["cat"]],
            ["BAG", ["cat", null]]
        ]));
    });

    test('choice picks from array', function() {
        expect(MarkovMachine.choice([8,8,8])).toEqual(8);
        expect([1,2,3]).toContain(MarkovMachine.choice([1,2,3]));
    });
});