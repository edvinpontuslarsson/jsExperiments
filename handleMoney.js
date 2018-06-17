const basket = []

const milk = {
  product: 'milk',
  dollars: 0,
  cents: 99
}

const chickenWings = {
  product: 'chicken wings',
  dollars: 4,
  cents: 0
}

const rice = {
  product: 'rice',
  dollars: 1,
  cents: 99
}

putInBasket(basket, milk)
putInBasket(basket, milk)
putInBasket(basket, rice)
putInBasket(basket, chickenWings)

const sum = getSum(basket)

console.log(basket)
console.log(`
Sum: ${sum.dollars}$ and ${sum.cents} cents
`)

function putInBasket (basket, product) {
  const i = basket.length
  basket[i] = product
}

function getSum (basket) {
  const sum = {
    dollars: 0,
    cents: 0
  }

  for (let i = 0; i < basket.length; i += 1) {
    sum.dollars += basket[i].dollars
    sum.cents += basket[i].cents
  }

  while (sum.cents > 100) {
    sum.cents -= 100
    sum.dollars += 1
  }

  return sum
}
