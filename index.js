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
  
  if (!cart.length) {
    return 'Your shopping cart is empty.'
  } else if (cart.length === 2) {
    
    for (var i = 0; i < 2; i++) {
    cartList.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
    return `In your cart, you have ${cartList.join('and ')}.`
    }
    
  } else { for (var i = 0; i < cart.length; i++) {
    cartList.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
    return `In your cart, you have ${cartList.join(', ')}.`
  }
  
  }
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
