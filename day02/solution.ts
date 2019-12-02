const fs = require('fs');

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

function expectEqual(value: any, toBe: any) {
    if (value !== toBe) {
        throw new Error(`Expected ${toBe} but received ${value}`);
    }
}
function test() {
//     // would be nice to use Jest, but it's annoying to use with TypeScript
    expectEqual(runTape([1,9,10,3,2,3,11,0,99,30,40,50]), 3500);
//     expectEqual(fuelForModule(12), 2);
//     expectEqual(fuelForModule(14), 2);
//     expectEqual(fuelForModule(1969), 654);
//     expectEqual(fuelForModule(100756), 33583);
//     expectEqual(fuelForModuleAndFuel(14), 2);
//     expectEqual(fuelForModuleAndFuel(1969), 966);
//     expectEqual(fuelForModuleAndFuel(100756), 50346);
//     console.log('All tests passed');
}

function runTape(tape: number[]): number {
    let opPtr: number = 0;
    let op: number = -1;
    do {
        op = tape[opPtr];
        switch (op) {
            case 1:
                tape[opPtr + 3] = tape[opPtr + 1] + tape[opPtr + 2];
                opPtr += 4;
                break;
            case 2:
                tape[opPtr + 3] = tape[opPtr + 1] * tape[opPtr + 2];
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

    let totalFuel1 = 0;
    let totalFuel2 = 0;
    const tape: number[] = fs.readFileSync('./puzzle_input').toString().split(',').map((x) => parseInt(x));
    runTape(tape);
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
