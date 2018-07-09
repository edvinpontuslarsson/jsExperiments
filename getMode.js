'use strict'

// print mode numbers/number

const getMode = (numbers) => {
    const obj = {}

    numbers.forEach(nr => {
        if (!obj[nr]) {
            obj[nr] = 1
        } else {
            obj[nr] += 1
        }
    })

    const mode = []
    
    Object.keys(obj).forEach(key => {
        if (mode.length === 0) {
            mode.push(key)
        } else if (obj[key] > obj[mode[0]]) {
            mode = []
            mode.push(key)
        } else if (obj[key] === obj[mode[0]]) {
            mode.push(key)
        }
    })

    console.log(`Mode numbers are: ${mode}`)
}

// 3 & 5 most common
getMode([2, 3, 5, 5, 3, 1, 6])

// 3 most common
getMode([1, 2, 3, 3])
