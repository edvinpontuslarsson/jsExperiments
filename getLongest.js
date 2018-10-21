const getLongest = (arr) => {
    let longest = ''

    arr.forEach(word => {
      if (longest.length < word.length) {
          longest = word
      }  
    })

    return longest
}

const arr = ['dog', 'giraffe', 'cat', 'lion', 'snail']

console.log(getLongest(arr))