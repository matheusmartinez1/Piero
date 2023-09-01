document.addEventListener("DOMContentLoaded", function() {
    const buyButtons = document.querySelectorAll(".buy-button");
    const cartButtons = document.querySelectorAll(".cart-button");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const checkoutButton = document.getElementById("checkout-button");

    let cart = [];
    let total = 0;

    function updateCart() {
        cartItems.innerHTML = "";
        total = 0;

        cart.forEach(item => {
            const itemDiv = document.createElement("div");
            itemDiv.innerHTML = `
                <p>Produto: ${item.name}</p>
                <p>Preço: R$${item.price.toFixed(2)}</p>
            `;
            cartItems.appendChild(itemDiv);
            total += item.price;
        });

        cartTotal.textContent = `R$${total.toFixed(2)}`;
    }

    buyButtons.forEach(button => {
        button.addEventListener("click", function() {
            const product = button.getAttribute("data-product");
            const productDetails = getProductDetails(product);
            cart.push({ name: productDetails.name, price: productDetails.price });
            updateCart();
        });
    });

    cartButtons.forEach(button => {
        button.addEventListener("click", function() {
            const product = button.getAttribute("data-product");
            const productDetails = getProductDetails(product);
            cart.push({ name: productDetails.name, price: productDetails.price });
            updateCart();
        });
    });

    function getProductDetails(product) {
        // Substitua por uma função que retorna os detalhes reais do produto
        const products = {
            copo1: { name: "Copo Tradicional", price: 15.00 },
            // Substitua os outros produtos aqui
        };
        return products[product];
    }

    checkoutButton.addEventListener("click", function() {
        if (cart.length > 0) {
            // Simule uma finalização de compra
            alert("Compra finalizada! Obrigado por comprar na PIERO Store!");
            cart = [];
            updateCart();
        } else {
            alert("Seu carrinho está vazio. Adicione produtos antes de finalizar a compra.");
        }
    });
});
