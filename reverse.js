const reverse = (string) => {
    const array = string.split("")
    
    const stopIndex = string.length / 2 - 1

    let replaceIndex = 0

    for (let i = array.length - 1; i > stopIndex; i--) {
        let temp = array[replaceIndex]
        array[replaceIndex] = array[i]
        array[i] = temp
        replaceIndex++
    }

    return array.join("")
}

const userInput = process.argv.splice(2)[0]

console.log(reverse(userInput))