document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const cartCounter = document.getElementById('cart-counter');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const item = button.getAttribute('data-item');
            const price = parseFloat(button.getAttribute('data-price'));
            addItemToCart(item, price);
        });
    });

    function addItemToCart(item, price) {
        cart.push({ item, price });
        updateCart();
    }

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let totalPrice = 0;

        cart.forEach(cartItem => {
            const li = document.createElement('li');
            li.textContent = `${cartItem.item} - $${cartItem.price.toFixed(2)}`;
            cartItemsContainer.appendChild(li);
            totalPrice += cartItem.price;
        });

        totalPriceElement.textContent = totalPrice.toFixed(2);
        cartCounter.textContent = cart.length;
    }
});
