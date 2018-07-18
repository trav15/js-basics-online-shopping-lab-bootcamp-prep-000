var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemObject = { itemName: item, itemPrice: Math.floor((Math.random() * 100) + 1)}
 cart.push(itemObject)
 return `${item} has been added to your cart.`
}

function viewCart() {
  const cartList = []
  var threeOrMore = 'In your cart, you have '
  if (!cart.length) { //empty cart
    return 'Your shopping cart is empty.'
    
  } else if (cart.length === 2) { //two item cart
    cartList.push(`${cart[0].itemName} at $${cart[0].itemPrice}`)
    cartList.push(`${cart[1].itemName} at $${cart[1].itemPrice}`)
    return `In your cart, you have ${cartList.join(', and ')}.`
    
  } else if (cart.length === 1) { //one item cart
    cartList.push(`${cart[0].itemName} at $${cart[0].itemPrice}`)
    return `In your cart, you have ${cartList.join(', and ')}.`    
    
  } else { for (var i = 0; i < cart.length; i++) { //three or more items
    cartList.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
    if (i===cart.length - 1) {
      threeOrMore += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
    } else {
      threeOrMore += `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
  }
  return threeOrMore
  }
}

function total() {
  var totalPrice = 0
   for (var i = 0; i < cart.length; i++) {
     totalPrice += parseInt(cart[1].itemPrice, 10)
   }
   return totalPrice
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
