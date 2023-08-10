let cart = [];
let filters = {
    category: 'all',
    minPrice: null,
    maxPrice: null,
};

function addToCart(id, name, origin, price) {
    const item = { id, name, origin, price };
    cart.push(item);
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
        <img src="../images/Merchandise/product${item.id}.jpg" alt="${item.name}" style="max-width: 60px; max-height: 60px;">
        <p>${item.name} - From: ${item.origin}</p>
        <p>Price: $${item.price}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItems.appendChild(li);
    totalPrice += item.price;
    });

    totalPriceElement.textContent = totalPrice;
}

function applyFilters() {
    filters.category = document.getElementById('category').value;
    filters.minPrice = parseFloat(document.getElementById('minPrice').value);
    filters.maxPrice = parseFloat(document.getElementById('maxPrice').value);

    const items = document.querySelectorAll('.item');
    items.forEach(item => {
    const origin = item.getAttribute('data-origin');
    const price = parseFloat(item.getAttribute('data-price'));

    const categoryFilter = filters.category === 'all' || filters.category === origin;
    const priceFilter = (isNaN(filters.minPrice) || price >= filters.minPrice) &&
                        (isNaN(filters.maxPrice) || price <= filters.maxPrice);

    if (categoryFilter && priceFilter) {
        item.style.display = 'block';
    } else {
        item.style.display = 'none';
    }
    });
}