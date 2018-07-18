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
  for (var i = 0; i < cart.length; i++) {
    cartList.push(`${itemName} at ${itemPrice}`)
  }
  return `In your cart, you have ${cartList.join(', ')}`
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
