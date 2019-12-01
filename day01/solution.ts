const fs = require('fs');

function fuelForModule(mass: number): number {
    return Math.floor(mass / 3) - 2;
}

function fuelForModuleAndFuel(mass: number, depth: number = 0): number {
    console.log(`${mass}, ${depth}`);
    if (depth > 15) {
        throw new Error('call depth')
    }
    const partialFuel: number = Math.floor(mass / 3) - 2;
    if (partialFuel > 0) {
        return partialFuel + fuelForModuleAndFuel(partialFuel, depth + 1)
    } else {
        return 0;
    }
}

function expectEqual(value: any, toBe: any) {
    if (value !== toBe) {
        throw new Error(`Expected ${toBe} but received ${value}`);
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

    let totalFuel1 = 0;
    let totalFuel2 = 0;
    const lines = fs.readFileSync('./puzzle_input').toString().split('\n');
    for (const line of lines) {
        if (line !== '') {
            const mass: number = parseInt(line);
            totalFuel1 += fuelForModule(mass);
            totalFuel2 += fuelForModuleAndFuel(mass);
        }
        // console.log(line);
    }
    console.log(totalFuel1);
    console.log(totalFuel2);
}

main();
