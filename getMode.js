'use strict'

/**
 * @returns {Array} user's chosen numbers
 */
const getUserInput = () =>
    process.argv.splice(2)

/**
 * Prints mode number/numbers
 * @param {Array} numbers 
 */
const getMode = numbers => {
    const obj = {}
    let maxOccurance = 0

    numbers.forEach(nr => {
        // populates object with occurance of each number
        obj[nr] = !obj[nr] ? 1 : obj[nr] + 1

        if (maxOccurance < obj[nr]) {
            maxOccurance = obj[nr]
        }
    })

    return Object.keys(obj)
        .filter(key => obj[key] === maxOccurance)
}

/**
 * @param {Array} mode 
 */
const printMode = mode =>
    console.log(`Mode numbers are: ${mode.join(', ')}`)

// run script
;(() => {
    const numbers = getUserInput()

    const mode = getMode(numbers)

    printMode(mode)
})()
