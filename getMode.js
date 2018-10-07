'use strict'

/**
 * @returns {Array} user's chosen numbers
 */
const getUserInput = () =>
    process.argv.splice(2)

/**
 * Gets mode number(s)
 * @param {Array} numbers initial
 * @returns {Array} mode number(s)
 */
const getMode = numbers => {
    const obj = {}
    let maxOccurance = 0

    numbers.forEach(nr => {
        // populates object with occurance of each number
        obj[nr] = !obj[nr] 
            ? 1 
            : obj[nr] + 1

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
const printMode = mode => {
    const isPlural = mode.length > 1 
        ? 's are'
        : ' is'
    const info = `Mode number${isPlural}`
    console.log(`${info}: ${mode.join(', ')}`)
}

// run script
;(() => {
    const userInput = getUserInput()

    const numbers = 
        userInput.length > 0 
        ? userInput
        : [4, 5, 5, 7, 9, 7, 2]

    const mode = getMode(numbers)

    printMode(mode)
})()
