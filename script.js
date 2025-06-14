let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;

  let cartList = document.getElementById('cart-items');
  let listItem = document.createElement('li');
  listItem.textContent = `${item} - ₹${price}`;
  cartList.appendChild(listItem);

  document.getElementById('total').textContent = `Total: ₹${total}`;
}

function submitBooking(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;

  if (cart.length === 0) {
    alert("Please select at least one food item.");
    return;
  }

  alert(`Thank you ${name}! Your order of ₹${total} has been placed.\nWe will contact you on ${phone}.`);

  // Reset
  cart = [];
  total = 0;
  document.getElementById('cart-items').innerHTML = '';
  document.getElementById('total').textContent = 'Total: ₹0';
  document.querySelector("form").reset();
}
