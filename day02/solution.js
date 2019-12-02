var fs = require('fs');
// function fuelForModule(mass: number): number {
//     return Math.floor(mass / 3) - 2;
// }
// function fuelForModuleAndFuel(mass: number, depth: number = 0): number {
//     console.log(`${mass}, ${depth}`);
//     if (depth > 15) {
//         throw new Error('call depth')
//     }
//     const partialFuel: number = Math.floor(mass / 3) - 2;
//     if (partialFuel > 0) {
//         return partialFuel + fuelForModuleAndFuel(partialFuel, depth + 1)
//     } else {
//         return 0;
//     }
// }
function expectEqual(value, toBe) {
    if (value !== toBe) {
        throw new Error("Expected " + toBe + " but received " + value);
    }
}
function test() {
    //     // would be nice to use Jest, but it's annoying to use with TypeScript
    expectEqual(runTape([1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50]), 3500);
    expectEqual(runTape([1,0,0,0,99]), 2);
    expectEqual(runTape([2,3,0,3,99]), 2);
    expectEqual(runTape([1,1,1,4,99,5,6,0,99]), 30);
    //     expectEqual(fuelForModule(12), 2);
    //     expectEqual(fuelForModule(14), 2);
    //     expectEqual(fuelForModule(1969), 654);
    //     expectEqual(fuelForModule(100756), 33583);
    //     expectEqual(fuelForModuleAndFuel(14), 2);
    //     expectEqual(fuelForModuleAndFuel(1969), 966);
    //     expectEqual(fuelForModuleAndFuel(100756), 50346);
        console.log('All tests passed');
}
function runTape(tape) {
    var opPtr = 0;
    var op = -1;
    do {
        op = tape[opPtr];
        switch (op) {
            case 1:
                tape[tape[opPtr + 3]] = tape[tape[opPtr + 1]] + tape[tape[opPtr + 2]];
                opPtr += 4;
                break;
            case 2:
                tape[tape[opPtr + 3]] = tape[tape[opPtr + 1]] * tape[tape[opPtr + 2]];
                opPtr += 4;
                break;
            case 99:
                console.log('Program complete');
                return tape[0];
            default:
                throw new Error('unknown opcode');
                break;
        }
    } while (true);
}
function main() {
    test();
    var totalFuel1 = 0;
    var totalFuel2 = 0;
    var tape = fs.readFileSync('./puzzle_input').toString().split(',').map(function (x) { return parseInt(x); });
    tape[1] = 12;
    tape[2] = 2;
    console.log(runTape(tape));
    // for (const op of lines) {
    //     if (line !== '') {
    //         const mass: number = parseInt(line);
    //         totalFuel1 += fuelForModule(mass);
    //         totalFuel2 += fuelForModuleAndFuel(mass);
    //     }
    //     // console.log(line);
    // }
    // console.log(totalFuel1);
    // console.log(totalFuel2);
}
main();
