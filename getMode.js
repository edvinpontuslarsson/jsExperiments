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

    const sorted = Object.keys(obj)

    console.log(`Mode numbers are: `)
}


// 3 & 5 most common
getMode([2, 3, 5, 5, 3, 1])

// 3 most common
getMode([1, 2, 3, 3])
