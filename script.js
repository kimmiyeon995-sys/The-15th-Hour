cconst translations = {
    vi: { title: "THE 15<span class='underline'>TH</span> HOUR", slogan: "Cà phê • Trà • Đồ uống", search: "Tìm đồ uống...", popular: "Món phổ biến", add: "Thêm", home: "Chủ", menu: "Menu", cart: "Giỏ", me: "Tôi" },
    en: { title: "THE 15<span class='underline'>TH</span> HOUR", slogan: "Coffee • Tea • Drinks", search: "Search drink...", popular: "Popular Drinks", add: "Add", home: "Home", menu: "Menu", cart: "Cart", me: "Me" }
};

const products = [
    { id: 1, name: "Caramel Latte", price: "45.000đ", img: "image/CaramelLatte.jpg", type: "coffee" },
    { id: 2, name: "Peach Tea", price: "35.000đ", img: "image/PeachTea.jpg", type: "fruittea" },
    { id: 3, name: "Matcha Latte", price: "42.000đ", img: "image/matchalate.jpg", type: "milktea" }
];

let cartCount = 0;
let currentLang = 'en';

function changeLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    document.getElementById('app-title').innerHTML = t.title;
    document.getElementById('app-slogan').innerText = t.slogan;
    document.getElementById('search-input').placeholder = t.search;
    document.getElementById('text-popular').innerText = t.popular;
    const navTexts = document.querySelectorAll('.nav-text');
    navTexts[0].innerText = t.home; navTexts[1].innerText = t.menu;
    navTexts[2].innerText = t.cart; navTexts[3].innerText = t.me;
    renderProducts(products);
}

function renderProducts(data) {
    const list = document.getElementById('product-list');
    list.innerHTML = data.map(p => `
        <div class="product-card">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p style="color: var(--gold); font-weight: bold;">${p.price}</p>
            <button class="add-btn" onclick="addToCart()">${translations[currentLang].add}</button>
        </div>
    `).join('');
}

function filterProduct(type) {
    const filtered = type === 'all' ? products : products.filter(p => p.type === type);
    renderProducts(filtered);
}

function addToCart() {
    cartCount++;
    document.querySelector('.cart-badge').innerText = cartCount;
}

document.getElementById('search-input').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const results = products.filter(p => p.name.toLowerCase().includes(term));
    renderProducts(results);
});

changeLanguage('en');