const productContainer = document.getElementById("productContainer");
const cartList = document.getElementById("cart-list");
const totalPrice = document.getElementById("totalPrice");

let total = 0;
fetch('https://fakestoreapi.com/products?limit=10')
    .then(res => res.json())
    .then(data => {
        kartochkanichiqar(data); 
    });

function kartochkanichiqar(products) {
    productContainer.innerHTML = ''; 
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card'); 
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <h3>${product.title}</h3>
            <p>${product.description.slice(0,50)}</p>
            <p><strong>💲 ${product.price}</strong></p>
            <button onclick="addToCart(${product.id}, '${product.title}', ${product.price})">Add To Cart</button>
        `;
        productContainer.appendChild(card);
    });
}


function addToCart(id, title, price) {
    const isConfirmed = confirm(`Siz '${title}' mahsulotini olmoqchimisiz?`);
    if (!isConfirmed) {
        return;
    }

    let surash = document.createElement("li");
    surash.textContent = `${title} - ${price} so'm`;
    cartList.appendChild(surash);

    total += price;
    totalPrice.textContent = `Umumiy summa: $${Math.floor(total * 100) / 100}`;
}
