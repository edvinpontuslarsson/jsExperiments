const basket = []

const milk = {
  type: 'milk',
  dollars: 0,
  cents: 99
}

const chickenWings = {
  type: 'chicken wings',
  dollars: 4,
  cents: 0
}

const rice = {
  type: 'rice',
  dollars: 1,
  cents: 99
}

;(() => {
  putInBasket(basket, milk)
  putInBasket(basket, milk)
  putInBasket(basket, rice)
  putInBasket(basket, chickenWings)

  const sum = getSum(basket)

  console.log(basket)
  console.log(`
  Sum: ${sum.dollars}$ and ${sum.cents} cents
  `)
})()

function putInBasket (basket, product) {
  let exists

  for (let i = 0; i < basket.length; i += 1) {
    if (basket[i].type === product.type) {
      exists = true

      basket[i].dollars *= 2
      basket[i].cents *= 2
      basket[i].quantity += 1

      centsToDollars(basket[i])
    }
  }

  if (!exists) {
    const j = basket.length
    basket[j] = product
    basket[j].quantity = 1
  }  
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

  centsToDollars(sum)

  return sum
}

/**
 * 
 * @param {*} object 
 */
function centsToDollars (object) {
  while (object.cents > 100) {
    object.cents -= 100
    object.dollars += 1
  }
}
