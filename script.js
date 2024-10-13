let cart = [];

function addToCart(name, image, price) {
    const cartItem = { name, image, price };
    cart.push(cartItem);
    displayCartItems();
}

function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItemsContainer.innerHTML = ''; // Clear previous items

    let totalPrice = 0;

    cart.forEach((item, index) => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');

        cartItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>₹${item.price.toFixed(2)}</p>
            <button class="remove-button" onclick="removeCartItem(${index})">&times;</button>
        `;

        cartItemsContainer.appendChild(cartItemElement);
        totalPrice += item.price;
    });

    totalPriceElement.textContent = `₹${totalPrice.toFixed(2)}`;
}

function removeCartItem(index) {
    cart.splice(index, 1);
    displayCartItems();
}

