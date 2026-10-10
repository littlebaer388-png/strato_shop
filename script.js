const WHATSAPP_NUMBER = "27710331241";
const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryTabs = document.getElementById("categoryTabs");
const productCount = document.getElementById("productCount");
const noResults = document.getElementById("noResults");
let products = [];
let selectedCategory = "All";

document.getElementById("year").textContent = new Date().getFullYear();

function makeWhatsAppLink(product) {
  const message = `Hello, I am interested in ordering ${product.name}. Please provide more information about the price, availability, and delivery.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function renderProducts() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const searchable = `${product.name} ${product.category} ${product.description}`.toLowerCase();
    return matchesCategory && searchable.includes(query);
  });
  productCount.textContent = filtered.length;
  noResults.hidden = filtered.length !== 0;
  grid.hidden = filtered.length === 0;
  grid.innerHTML = filtered.map(product => `
    <article class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy" decoding="async">
        <span class="product-tag">STRATO SELECT</span>
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="price-line">Price on enquiry</div>
        <a class="order-button" href="${makeWhatsAppLink(product)}" target="_blank" rel="noopener noreferrer" aria-label="Enquire on WhatsApp about ${product.name}">ORDER ON WHATSAPP <span>↗</span></a>
      </div>
    </article>`).join("");
}

fetch("products.json")
  .then(response => {
    if (!response.ok) throw new Error("Could not load product catalogue");
    return response.json();
  })
  .then(data => { products = data; renderProducts(); })
  .catch(() => {
    grid.innerHTML = '<div class="loading">The catalogue could not load. Please make sure index.html, products.json and the images folder are all uploaded together.</div>';
  });

searchInput.addEventListener("input", renderProducts);
categoryTabs.addEventListener("click", event => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  selectedCategory = button.dataset.category;
  categoryTabs.querySelectorAll(".category-tab").forEach(tab => tab.classList.toggle("active", tab === button));
  renderProducts();
});
document.getElementById("resetSearch").addEventListener("click", () => {
  searchInput.value = "";
  selectedCategory = "All";
  categoryTabs.querySelectorAll(".category-tab").forEach(tab => tab.classList.toggle("active", tab.dataset.category === "All"));
  renderProducts();
  document.getElementById("shop").scrollIntoView({behavior:"smooth"});
});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
