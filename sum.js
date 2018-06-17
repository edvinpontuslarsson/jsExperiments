var longNumber = 42059145081259215

function returnNumberSum (number) {
  const nrString = number.toString()
  let newNumber = 0
  for (let i = 0; i < nrString.length; i += 1) {
    newNumber += parseInt(nrString.charAt(i))
  }
  return newNumber
}

console.log(returnNumberSum(longNumber))
