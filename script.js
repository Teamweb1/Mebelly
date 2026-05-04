const products = [
  {
    id: 1,
    name: "Marin Low Sofa",
    category: "Sofas",
    style: "Modern",
    price: 1490,
    rating: 4.92,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80"
    ],
    description: "A relaxed, deep-seat sofa with a low profile, soft linen texture, and generous proportions for everyday lounging."
  },
  {
    id: 2,
    name: "Oslo Lounge Chair",
    category: "Chairs",
    style: "Scandinavian",
    price: 620,
    rating: 4.88,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Curved oak arms and a cushioned seat create a quiet reading chair with crisp Scandinavian restraint."
  },
  {
    id: 3,
    name: "Aster Oak Dining Table",
    category: "Tables",
    style: "Classic",
    price: 1180,
    rating: 4.84,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Solid oak, softened edges, and a balanced pedestal base make this table equally suited to dinner and work."
  },
  {
    id: 4,
    name: "Cloud Platform Bed",
    category: "Beds",
    style: "Minimal",
    price: 1350,
    rating: 4.91,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1617325247661-675ab4b64b8e?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1617325247661-675ab4b64b8e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80"
    ],
    description: "A calm upholstered bed with a floating frame, rounded corners, and a supportive padded headboard."
  },
  {
    id: 5,
    name: "Dome Linen Pendant",
    category: "Lighting",
    style: "Modern",
    price: 280,
    rating: 4.76,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80"
    ],
    description: "A linen shade softens the room with warm, diffused light and a clean silhouette."
  },
  {
    id: 6,
    name: "Linea Coffee Table",
    category: "Tables",
    style: "Minimal",
    price: 540,
    rating: 4.8,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a694?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1532372320572-cda25653a694?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1617104551722-3b2d51366400?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Slim proportions, storage-friendly shelving, and a warm wood finish keep the living room visually light."
  },
  {
    id: 7,
    name: "Mira Velvet Accent Chair",
    category: "Chairs",
    style: "Classic",
    price: 740,
    rating: 4.72,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=900&q=80"
    ],
    description: "A plush accent chair with tailored upholstery, compact scale, and a softly curved back."
  },
  {
    id: 8,
    name: "Nook Storage Console",
    category: "Decor",
    style: "Scandinavian",
    price: 890,
    rating: 4.86,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Closed storage, rounded pulls, and a pale wood finish keep daily clutter tucked quietly away."
  }
];

const categories = ["All", "Sofas", "Beds", "Chairs", "Tables", "Lighting", "Decor"];
let activeCategory = "All";
let cart = JSON.parse(localStorage.getItem("havenly-cart") || "[]");
let wishlist = JSON.parse(localStorage.getItem("havenly-wishlist") || "[]");
let promoApplied = false;

const formatMoney = (amount) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(amount);

const byId = (id) => document.getElementById(id);

function saveState() {
  localStorage.setItem("havenly-cart", JSON.stringify(cart));
  localStorage.setItem("havenly-wishlist", JSON.stringify(wishlist));
}

function renderCategories() {
  byId("categoryFilters").innerHTML = categories
    .map((category) => `<button class="category-pill ${category === activeCategory ? "active" : ""}" data-category="${category}">${category}</button>`)
    .join("");
}

function getFilteredProducts() {
  const term = byId("whatInput").value.trim().toLowerCase();
  const style = byId("styleInput").value;
  const price = byId("priceInput").value;
  const sort = byId("sortInput").value;

  let filtered = products.filter((product) => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesTerm = !term || `${product.name} ${product.category}`.toLowerCase().includes(term);
    const matchesStyle = !style || product.style === style;
    const matchesPrice = !price || inPriceRange(product.price, price);
    return matchesCategory && matchesTerm && matchesStyle && matchesPrice;
  });

  if (sort === "price-low") filtered = filtered.sort((a, b) => a.price - b.price);
  if (sort === "price-high") filtered = filtered.sort((a, b) => b.price - a.price);
  if (sort === "rating") filtered = filtered.sort((a, b) => b.rating - a.rating);

  return filtered;
}

function inPriceRange(price, range) {
  const [min, max] = range.split("-").map(Number);
  return price >= min && price <= max;
}

function renderProducts() {
  const filtered = getFilteredProducts();
  byId("resultCount").textContent = `${filtered.length} curated ${filtered.length === 1 ? "piece" : "pieces"}`;
  byId("productGrid").innerHTML =
    filtered
      .map((product) => {
        const wished = wishlist.includes(product.id);
        return `
          <article class="product-card" data-id="${product.id}">
            <div class="image-wrap">
              <img class="product-image" src="${product.image}" alt="${product.name}" />
              <span class="badge">${product.badge}</span>
              <button class="heart ${wished ? "active" : ""}" data-heart="${product.id}" aria-label="Save ${product.name}">${wished ? "♥" : "♡"}</button>
            </div>
            <h3>${product.name}</h3>
            <p class="product-meta">${product.category} · ${product.style}</p>
            <div class="price-row">
              <span class="price">${formatMoney(product.price)}</span>
              <span class="rating">★ ${product.rating}</span>
            </div>
          </article>
        `;
      })
      .join("") || `<div class="empty-state">No pieces match this search.</div>`;
}

function renderCart() {
  const cartItems = byId("cartItems");
  if (!cart.length) {
    cartItems.innerHTML = `<div class="empty-state">Your cart is empty.</div>`;
  } else {
    cartItems.innerHTML = cart
      .map((item) => {
        const product = products.find((entry) => entry.id === item.id);
        return `
          <article class="line-item">
            <img src="${product.image}" alt="${product.name}" />
            <div>
              <h3>${product.name}</h3>
              <p>${formatMoney(product.price)} · Qty ${item.qty}</p>
              <div class="line-actions">
                <button data-decrease="${product.id}" aria-label="Decrease quantity">−</button>
                <button data-increase="${product.id}" aria-label="Increase quantity">+</button>
                <button data-remove="${product.id}">Remove</button>
              </div>
            </div>
          </article>
        `;
      })
      .join("");
  }

  const subtotal = cart.reduce((sum, item) => {
    const product = products.find((entry) => entry.id === item.id);
    return sum + product.price * item.qty;
  }, 0);
  const total = promoApplied ? subtotal * 0.9 : subtotal;
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  byId("cartTotal").textContent = formatMoney(total);
  byId("stickyCartTotal").textContent = formatMoney(total);
  byId("cartCount").textContent = count;
}

function renderWishlist() {
  byId("wishlistCount").textContent = wishlist.length;
  byId("wishlistItems").innerHTML =
    wishlist
      .map((id) => {
        const product = products.find((entry) => entry.id === id);
        return `
          <article class="line-item">
            <img src="${product.image}" alt="${product.name}" />
            <div>
              <h3>${product.name}</h3>
              <p>${product.category} · ${formatMoney(product.price)}</p>
              <div class="line-actions">
                <button data-detail="${product.id}">View</button>
                <button data-unwish="${product.id}">Remove</button>
              </div>
            </div>
          </article>
        `;
      })
      .join("") || `<div class="empty-state">Saved pieces will appear here.</div>`;
}

function addToCart(id, qty = 1) {
  const existing = cart.find((item) => item.id === id);
  if (existing) existing.qty += qty;
  else cart.push({ id, qty });
  saveState();
  renderCart();
}

function updateCart(id, delta) {
  const item = cart.find((entry) => entry.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter((entry) => entry.id !== id);
  saveState();
  renderCart();
}

function toggleWishlist(id) {
  wishlist = wishlist.includes(id) ? wishlist.filter((entry) => entry !== id) : [...wishlist, id];
  saveState();
  renderWishlist();
  renderProducts();
}

function openDrawer(id) {
  byId(id).classList.add("open");
  byId(id).setAttribute("aria-hidden", "false");
}

function closeDrawer(drawer) {
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
}

function openDetail(id) {
  const product = products.find((entry) => entry.id === id);
  let qty = 1;
  byId("detailGallery").innerHTML = product.gallery.map((image) => `<img src="${image}" alt="${product.name}" />`).join("");
  byId("detailInfo").innerHTML = `
    <h2>${product.name}</h2>
    <p class="detail-price">${formatMoney(product.price)}</p>
    <p>${product.description}</p>
    <div class="quantity">
      <button id="detailMinus" aria-label="Decrease quantity">−</button>
      <span id="detailQty">1</span>
      <button id="detailPlus" aria-label="Increase quantity">+</button>
    </div>
    <div class="detail-actions">
      <button class="primary-button" id="buyNow">Buy Now</button>
      <button class="secondary-button" id="detailAddCart">Add to Cart</button>
    </div>
  `;
  openDrawer("detailModal");
  byId("detailMinus").onclick = () => {
    qty = Math.max(1, qty - 1);
    byId("detailQty").textContent = qty;
  };
  byId("detailPlus").onclick = () => {
    qty += 1;
    byId("detailQty").textContent = qty;
  };
  byId("detailAddCart").onclick = () => addToCart(product.id, qty);
  byId("buyNow").onclick = () => {
    addToCart(product.id, qty);
    closeDrawer(byId("detailModal"));
    openDrawer("cartDrawer");
  };
}

function syncMobileSearchOptions() {
  byId("mobileStyleInput").innerHTML = byId("styleInput").innerHTML;
  byId("mobilePriceInput").innerHTML = byId("priceInput").innerHTML;
}

renderCategories();
renderProducts();
renderCart();
renderWishlist();
syncMobileSearchOptions();

byId("categoryFilters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderCategories();
  renderProducts();
});

byId("productGrid").addEventListener("click", (event) => {
  const heart = event.target.closest("[data-heart]");
  if (heart) {
    event.stopPropagation();
    toggleWishlist(Number(heart.dataset.heart));
    return;
  }
  const card = event.target.closest(".product-card");
  if (card) openDetail(Number(card.dataset.id));
});

byId("cartItems").addEventListener("click", (event) => {
  const increase = event.target.closest("[data-increase]");
  const decrease = event.target.closest("[data-decrease]");
  const remove = event.target.closest("[data-remove]");
  if (increase) updateCart(Number(increase.dataset.increase), 1);
  if (decrease) updateCart(Number(decrease.dataset.decrease), -1);
  if (remove) {
    cart = cart.filter((item) => item.id !== Number(remove.dataset.remove));
    saveState();
    renderCart();
  }
});

byId("wishlistItems").addEventListener("click", (event) => {
  const detail = event.target.closest("[data-detail]");
  const unwish = event.target.closest("[data-unwish]");
  if (detail) openDetail(Number(detail.dataset.detail));
  if (unwish) toggleWishlist(Number(unwish.dataset.unwish));
});

byId("searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  renderProducts();
});

["styleInput", "priceInput", "sortInput"].forEach((id) => byId(id).addEventListener("change", renderProducts));
byId("whatInput").addEventListener("input", renderProducts);

byId("clearFilters").addEventListener("click", () => {
  activeCategory = "All";
  byId("whatInput").value = "";
  byId("styleInput").value = "";
  byId("priceInput").value = "";
  byId("sortInput").value = "featured";
  renderCategories();
  renderProducts();
});

byId("applyPromo").addEventListener("click", () => {
  promoApplied = byId("promoInput").value.trim().toUpperCase() === "HAVEN10";
  renderCart();
});

byId("openCart").addEventListener("click", () => openDrawer("cartDrawer"));
byId("stickyCartButton").addEventListener("click", () => openDrawer("cartDrawer"));
byId("openWishlist").addEventListener("click", () => openDrawer("wishlistDrawer"));
byId("closeDetail").addEventListener("click", () => closeDrawer(byId("detailModal")));

document.querySelectorAll(".close-drawer").forEach((button) => {
  button.addEventListener("click", () => closeDrawer(button.closest(".drawer")));
});

document.querySelectorAll(".drawer, .detail-modal").forEach((surface) => {
  surface.addEventListener("click", (event) => {
    if (event.target === surface) closeDrawer(surface);
  });
});

byId("mobileSearchTrigger").addEventListener("click", () => {
  byId("mobileWhatInput").value = byId("whatInput").value;
  byId("mobileStyleInput").value = byId("styleInput").value;
  byId("mobilePriceInput").value = byId("priceInput").value;
  openDrawer("mobileSearchModal");
});

byId("closeMobileSearch").addEventListener("click", () => closeDrawer(byId("mobileSearchModal")));
byId("mobileSearchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  byId("whatInput").value = byId("mobileWhatInput").value;
  byId("styleInput").value = byId("mobileStyleInput").value;
  byId("priceInput").value = byId("mobilePriceInput").value;
  closeDrawer(byId("mobileSearchModal"));
  renderProducts();
});
