var fs = require('fs');
function fuelForModule(mass) {
    return Math.floor(mass / 3) - 2;
}
function expectEqual(value, toBe) {
    if (value !== toBe) {
        throw new Error("Expected " + toBe + " but received " + value);
    }
}
function test() {
    // would be nice to use Jest, but it's annoying to use with TypeScript
    expectEqual(fuelForModule(12), 2);
    expectEqual(fuelForModule(14), 2);
    expectEqual(fuelForModule(1969), 654);
    expectEqual(fuelForModule(100756), 33583);
    console.log('All tests passed');
}
function main() {
    test();
    var totalFuel = 0;
    var lines = fs.readFileSync('./puzzle_input').toString().split('\n');
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        if (line !== '') {
            var mass = parseInt(line);
            totalFuel += fuelForModule(mass);
        }
        // console.log(line);
    }
    console.log(totalFuel);
}
main();
