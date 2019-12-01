var fs = require('fs');
function fuelForModule(mass) {
    return Math.floor(mass / 3) - 2;
}
function fuelForModuleAndFuel(mass, depth) {
    if (depth === void 0) { depth = 0; }
    console.log(mass + ", " + depth);
    if (depth > 15) {
        throw new Error('call depth');
    }
    var partialFuel = Math.floor(mass / 3) - 2;
    if (partialFuel > 0) {
        return partialFuel + fuelForModuleAndFuel(partialFuel, depth + 1);
    }
    else {
        return 0;
    }
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
    expectEqual(fuelForModuleAndFuel(14), 2);
    expectEqual(fuelForModuleAndFuel(1969), 966);
    expectEqual(fuelForModuleAndFuel(100756), 50346);
    console.log('All tests passed');
}
function main() {
    test();
    var totalFuel1 = 0;
    var totalFuel2 = 0;
    var lines = fs.readFileSync('./puzzle_input').toString().split('\n');
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        if (line !== '') {
            var mass = parseInt(line);
            totalFuel1 += fuelForModule(mass);
            totalFuel2 += fuelForModuleAndFuel(mass);
        }
        // console.log(line);
    }
    console.log(totalFuel1);
    console.log(totalFuel2);
}
main();
