const fs = require('fs');

function fuelForModule(mass: number): number {
    return Math.floor(mass / 3) - 2;
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
    console.log('All tests passed');
}

function main() {
    test();

    let totalFuel = 0;
    const lines = fs.readFileSync('./puzzle_input').toString().split('\n');
    for (const line of lines) {
        if (line !== '') {
            const mass: number = parseInt(line);
            totalFuel += fuelForModule(mass);
        }
        // console.log(line);
    }
    console.log(totalFuel);
}

main();
