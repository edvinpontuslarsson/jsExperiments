/**
 * montyHallProblem
 */

// https://en.wikipedia.org/wiki/Monty_Hall_problem

/**
 * Can simulate according to:
 *
    The host must always open a door that was not picked by the contestant (Mueser and Granberg 1999).
    The host must always open a door to reveal a goat and never the car.
    The host must always offer the chance to switch between the originally chosen door and the remaining closed door.

 */

// scenario 1, player sticks with door 1
// scenario 2, player switches to door 2 or 3, depending on which the host opened

// can see which wins the most

'use strict'

/**
 * @returns either a goat or a car
 */
const getPrize = () => {
    const randomInt = Math.floor(
        Math.random() * 10
    )

    return randomInt < 5
        ? 'A goat!'
        : 'A car!'
}

let goats = 0
let cars = 0

for (let i = 0; i < 2000; i++) {
    if (getPrize() === 'A goat!') {
        goats ++
    } else {
        cars ++
    }
}

console.log(
    `${goats} goats and ${cars} cars.`
)
