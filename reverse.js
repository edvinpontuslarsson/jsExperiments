const reverse = (string) => {
    const arr = string.split("")
    
    const lowerHalf = string.length / 2 - 1

    let replaceIndex = 0

    for (let i = arr.length - 1; i > lowerHalf; i--) {
        let temp = arr[replaceIndex]
        arr[replaceIndex] = arr[i]
        arr[i] = temp
        replaceIndex++
    }

    return arr.join("")
}

console.log(reverse('string'))