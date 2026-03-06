/* ============================================================
   BALA – Premium Clothing Brand | script.js
   ============================================================ */

'use strict';

// ============================================================
// PRODUCT DATA
// ============================================================
const PRODUCTS = [
  // MEN
  {
    id: 1, name: 'Onyx Slim Blazer', category: 'men', tag: 'new',
    price: 289, original: null,
    badge: 'New In', badgeClass: 'badge-new',
    desc: 'A masterfully tailored slim-fit blazer in deep charcoal wool blend. Peak lapels, single-button closure.',
    sizes: ['XS','S','M','L','XL'],
    gradient: 'linear-gradient(135deg, #0d0d0d 0%, #1a1208 50%, #0a0a0a 100%)',
    accent: 'rgba(201,169,110,0.12)',
  },
  {
    id: 2, name: 'Linen Classic Shirt', category: 'men', tag: 'new',
    price: 129, original: null,
    badge: 'New In', badgeClass: 'badge-new',
    desc: 'Breathable premium linen shirt in off-white. Relaxed fit with mother-of-pearl buttons.',
    sizes: ['S','M','L','XL','XXL'],
    gradient: 'linear-gradient(135deg, #1a1a14 0%, #2a2515 50%, #1a1a14 100%)',
    accent: 'rgba(240,230,200,0.08)',
  },
  {
    id: 3, name: 'Midnight Trousers', category: 'men', tag: 'all',
    price: 179, original: 219,
    badge: 'Sale', badgeClass: 'badge-sale',
    desc: 'Sharply cut midnight navy trousers with a clean silhouette and side-adjusted waistband.',
    sizes: ['28','30','32','34','36'],
    gradient: 'linear-gradient(135deg, #05050f 0%, #0d0d20 50%, #05050f 100%)',
    accent: 'rgba(60,80,180,0.08)',
  },
  {
    id: 4, name: 'Merino Turtleneck', category: 'men', tag: 'all',
    price: 159, original: null,
    badge: null, badgeClass: null,
    desc: 'Ultra-fine merino wool turtleneck in jet black. Exceptionally soft, naturally temperature regulating.',
    sizes: ['S','M','L','XL'],
    gradient: 'linear-gradient(135deg, #080808 0%, #111111 50%, #080808 100%)',
    accent: 'rgba(201,169,110,0.06)',
  },
  // WOMEN
  {
    id: 5, name: 'Silk Wrap Dress', category: 'women', tag: 'new',
    price: 319, original: null,
    badge: 'New In', badgeClass: 'badge-new',
    desc: 'An elegant wrap dress in pure shantung silk with a deep V-neckline and fluid drape.',
    sizes: ['XS','S','M','L'],
    gradient: 'linear-gradient(135deg, #1a050a 0%, #2d0e14 50%, #1a050a 100%)',
    accent: 'rgba(180,30,60,0.08)',
  },
  {
    id: 6, name: 'Cashmere Overcoat', category: 'women', tag: 'all',
    price: 489, original: null,
    badge: 'Limited', badgeClass: 'badge-limited',
    desc: 'Double-faced pure cashmere coat in camel. Timeless sculpted shoulders with an effortless drape.',
    sizes: ['XS','S','M','L','XL'],
    gradient: 'linear-gradient(135deg, #1a1208 0%, #2a1e0a 50%, #1a1208 100%)',
    accent: 'rgba(201,150,60,0.10)',
  },
  {
    id: 7, name: 'Tailored Cigarette Pant', category: 'women', tag: 'all',
    price: 199, original: 249,
    badge: 'Sale', badgeClass: 'badge-sale',
    desc: 'High-waisted cigarette trousers in stretch crepe. Slim through the hip and thigh, cropped at ankle.',
    sizes: ['XS','S','M','L','XL'],
    gradient: 'linear-gradient(135deg, #100a14 0%, #1a1020 50%, #100a14 100%)',
    accent: 'rgba(120,60,180,0.07)',
  },
  {
    id: 8, name: 'Lace Blouse Edit', category: 'women', tag: 'new',
    price: 149, original: null,
    badge: 'New In', badgeClass: 'badge-new',
    desc: 'Intricate Chantilly lace blouse with scalloped hemline. Lined in sheer silk georgette.',
    sizes: ['XS','S','M','L'],
    gradient: 'linear-gradient(135deg, #0f0f0f 0%, #1a1514 50%, #0f0f0f 100%)',
    accent: 'rgba(201,169,110,0.06)',
  },
  // ACCESSORIES
  {
    id: 9, name: 'Leather Card Holder', category: 'accessories', tag: 'all',
    price: 89, original: null,
    badge: null, badgeClass: null,
    desc: 'Hand-stitched full-grain vegetable-tanned leather card holder. Holds up to 8 cards.',
    sizes: ['One Size'],
    gradient: 'linear-gradient(135deg, #0f0a06 0%, #1a1008 50%, #0f0a06 100%)',
    accent: 'rgba(120,70,20,0.12)',
  },
  {
    id: 10, name: 'Merino Wool Scarf', category: 'accessories', tag: 'new',
    price: 119, original: null,
    badge: 'New In', badgeClass: 'badge-new',
    desc: 'Extra-fine merino wool scarf in herringbone weave. Incredibly soft, 200cm x 70cm.',
    sizes: ['One Size'],
    gradient: 'linear-gradient(135deg, #0a0810 0%, #120d1a 50%, #0a0810 100%)',
    accent: 'rgba(80,50,140,0.08)',
  },
  {
    id: 11, name: 'Structured Tote Bag', category: 'accessories', tag: 'all',
    price: 259, original: null,
    badge: 'Limited', badgeClass: 'badge-limited',
    desc: 'Architectural tote in pebbled calfskin leather with gold hardware and suede lining.',
    sizes: ['One Size'],
    gradient: 'linear-gradient(135deg, #080808 0%, #141210 50%, #080808 100%)',
    accent: 'rgba(201,169,110,0.10)',
  },
  {
    id: 12, name: 'Silk Pocket Square', category: 'accessories', tag: 'all',
    price: 59, original: null,
    badge: null, badgeClass: null,
    desc: 'Hand-rolled pure silk pocket square with a painterly abstract print. 33cm x 33cm.',
    sizes: ['One Size'],
    gradient: 'linear-gradient(135deg, #0a100a 0%, #101a0a 50%, #0a100a 100%)',
    accent: 'rgba(40,120,40,0.08)',
  },
];

// ============================================================
// STATE
// ============================================================
let cart = [];
let activeFilter = 'all';
let visibleCount = 8;
let currentTestimonial = 0;
let selectedSize = '';
let quickViewProduct = null;

// ============================================================
// DOM REFERENCES
// ============================================================
const loader           = document.getElementById('loader');
const navbar           = document.getElementById('navbar');
const hamburger        = document.getElementById('hamburger');
const mobileNav        = document.getElementById('mobileNav');
const mobileNavOverlay = document.getElementById('mobileNavOverlay');
const mobileNavClose   = document.getElementById('mobileNavClose');
const searchToggle     = document.getElementById('searchToggle');
const searchBar        = document.getElementById('searchBar');
const searchClose      = document.getElementById('searchClose');
const searchInput      = document.getElementById('searchInput');
const cartToggle       = document.getElementById('cartToggle');
const cartSidebar      = document.getElementById('cartSidebar');
const cartOverlay      = document.getElementById('cartOverlay');
const cartClose        = document.getElementById('cartClose');
const cartCount        = document.getElementById('cartCount');
const cartBadgeSidebar = document.getElementById('cartBadgeSidebar');
const cartItems        = document.getElementById('cartItems');
const cartEmpty        = document.getElementById('cartEmpty');
const cartFooter       = document.getElementById('cartFooter');
const cartTotalPrice   = document.getElementById('cartTotalPrice');
const productsGrid     = document.getElementById('productsGrid');
const loadMoreBtn      = document.getElementById('loadMoreBtn');
const modalOverlay     = document.getElementById('modalOverlay');
const quickViewModal   = document.getElementById('quickViewModal');
const modalClose       = document.getElementById('modalClose');
const testiPrev        = document.getElementById('testiPrev');
const testiNext        = document.getElementById('testiNext');
const testiDots        = document.getElementById('testiDots');
const testimonialTrack = document.getElementById('testimonialTrack');
const nlForm           = document.getElementById('nlForm');
const nlEmail          = document.getElementById('nlEmail');
const nlSuccess        = document.getElementById('nlSuccess');

// ============================================================
// LOADER
// ============================================================
window.addEventListener('load', () => {
  setTimeout(() => {
    loader.classList.add('hidden');
    document.body.style.overflow = '';
  }, 2000);
});
document.body.style.overflow = 'hidden';

// ============================================================
// NAVBAR SCROLL
// ============================================================
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// ============================================================
// MOBILE MENU
// ============================================================
function openMobileNav() {
  mobileNav.classList.add('open');
  mobileNavOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMobileNav() {
  mobileNav.classList.remove('open');
  mobileNavOverlay.classList.remove('open');
  document.body.style.overflow = '';
}
hamburger.addEventListener('click', openMobileNav);
mobileNavClose.addEventListener('click', closeMobileNav);
mobileNavOverlay.addEventListener('click', closeMobileNav);
document.querySelectorAll('.mobile-nav-link[data-close]').forEach(a => a.addEventListener('click', closeMobileNav));

// ============================================================
// SEARCH
// ============================================================
searchToggle.addEventListener('click', () => {
  searchBar.classList.toggle('open');
  if (searchBar.classList.contains('open')) searchInput.focus();
});
searchClose.addEventListener('click', () => searchBar.classList.remove('open'));
searchInput.addEventListener('input', () => {
  const q = searchInput.value.toLowerCase().trim();
  if (q.length > 1) {
    activeFilter = 'all';
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('[data-category="all"]').classList.add('active');
    const filtered = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q)
    );
    renderProductCards(filtered.slice(0, visibleCount));
    const section = document.getElementById('products');
    section.scrollIntoView({ behavior: 'smooth' });
  } else {
    renderProducts();
  }
});

// ============================================================
// CART
// ============================================================
function openCart() {
  cartSidebar.classList.add('open');
  cartOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('open');
  document.body.style.overflow = '';
}
cartToggle.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

function addToCart(product, size = 'M') {
  const existing = cart.find(i => i.id === product.id && i.size === size);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, size, qty: 1 });
  }
  updateCartUI();
  openCart();
  showToast(`"${product.name}" added to bag`);
}

function removeFromCart(id, size) {
  cart = cart.filter(i => !(i.id === id && i.size === size));
  updateCartUI();
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);

  cartCount.textContent = total;
  cartCount.classList.toggle('visible', total > 0);
  cartBadgeSidebar.textContent = total;
  cartTotalPrice.textContent = `$${totalPrice.toFixed(2)}`;

  const isEmpty = cart.length === 0;
  cartEmpty.style.display = isEmpty ? 'flex' : 'none';
  cartFooter.style.display = isEmpty ? 'none' : 'block';

  // Render items
  const existingItems = cartItems.querySelectorAll('.cart-item');
  existingItems.forEach(el => el.remove());

  cart.forEach(item => {
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      <div class="cart-item-img">
        <div class="cart-item-img-bg" style="background: ${item.gradient}; background-image: radial-gradient(ellipse at 50% 50%, ${item.accent} 0%, transparent 70%);"></div>
      </div>
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <div class="ci-size">Size: ${item.size} · Qty: ${item.qty}</div>
        <div class="product-price-row">
          <span class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</span>
        </div>
      </div>
      <button class="cart-item-remove" title="Remove">✕</button>
    `;
    el.querySelector('.cart-item-remove').addEventListener('click', () => removeFromCart(item.id, item.size));
    cartItems.appendChild(el);
  });
}

// ============================================================
// TOAST
// ============================================================
function showToast(msg) {
  let toast = document.querySelector('.bala-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'bala-toast';
    Object.assign(toast.style, {
      position: 'fixed', bottom: '32px', left: '50%',
      transform: 'translateX(-50%) translateY(8px)',
      background: 'rgba(18,16,10,0.95)', border: '1px solid rgba(201,169,110,0.3)',
      backdropFilter: 'blur(16px)', color: '#fff',
      padding: '14px 28px', borderRadius: '100px',
      fontSize: '0.84rem', zIndex: '9999',
      transition: 'opacity 0.35s ease, transform 0.35s ease',
      opacity: '0', pointerEvents: 'none', whiteSpace: 'nowrap',
    });
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span style="color:var(--gold);margin-right:8px;">✓</span>${msg}`;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(8px)';
  }, 2800);
}

// ============================================================
// PRODUCTS RENDER
// ============================================================
function buildProductCard(p, index) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.style.animationDelay = `${index * 0.08}s`;
  card.innerHTML = `
    <div class="product-img">
      <div class="product-img-bg" style="
        background: ${p.gradient};
        background-image: radial-gradient(ellipse at 40% 40%, ${p.accent} 0%, transparent 65%);
      "></div>
      ${p.badge ? `<span class="product-badge ${p.badgeClass}">${p.badge}</span>` : ''}
      <div class="product-actions">
        <button class="p-action-btn btn-wishlist" title="Wishlist">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path></svg>
        </button>
        <button class="p-action-btn btn-quickview" title="Quick View">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
        </button>
        <button class="p-action-btn btn-add-cart" title="Add to Bag">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
        </button>
      </div>
    </div>
    <div class="product-info">
      <div class="product-cat">${p.category.charAt(0).toUpperCase() + p.category.slice(1)}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-price-row">
        <span class="product-price">$${p.price}</span>
        ${p.original ? `<span class="product-original">$${p.original}</span>` : ''}
      </div>
    </div>
  `;

  card.querySelector('.btn-quickview').addEventListener('click', (e) => {
    e.stopPropagation();
    openQuickView(p);
  });
  card.querySelector('.btn-add-cart').addEventListener('click', (e) => {
    e.stopPropagation();
    addToCart(p, p.sizes[1] || p.sizes[0]);
  });
  card.querySelector('.btn-wishlist').addEventListener('click', (e) => {
    e.stopPropagation();
    const btn = e.currentTarget;
    btn.style.background = 'rgba(231,76,60,0.2)';
    btn.style.borderColor = 'rgba(231,76,60,0.4)';
    btn.querySelector('svg').style.stroke = '#e74c3c';
    showToast(`"${p.name}" added to wishlist`);
  });
  card.addEventListener('click', () => openQuickView(p));
  return card;
}

function renderProductCards(products) {
  productsGrid.innerHTML = '';
  if (products.length === 0) {
    productsGrid.innerHTML = '<p style="color:var(--gray-3);text-align:center;grid-column:1/-1;padding:60px 0;">No products found.</p>';
    return;
  }
  products.forEach((p, i) => productsGrid.appendChild(buildProductCard(p, i)));
}

function getFiltered() {
  if (activeFilter === 'all') return PRODUCTS;
  if (activeFilter === 'new') return PRODUCTS.filter(p => p.tag === 'new');
  return PRODUCTS.filter(p => p.category === activeFilter);
}

function renderProducts() {
  const filtered = getFiltered();
  renderProductCards(filtered.slice(0, visibleCount));
  loadMoreBtn.style.display = filtered.length > visibleCount ? 'inline-flex' : 'none';
}

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.category;
    visibleCount = 8;
    renderProducts();
    document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Collection quick links
document.querySelectorAll('.coll-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const filter = link.dataset.filter;
    activeFilter = filter;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`[data-category="${filter}"]`).classList.add('active');
    visibleCount = 8;
    renderProducts();
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  });
});

loadMoreBtn.addEventListener('click', () => {
  visibleCount += 4;
  renderProducts();
});

// ============================================================
// QUICK VIEW MODAL
// ============================================================
function openQuickView(p) {
  quickViewProduct = p;
  selectedSize = p.sizes[1] || p.sizes[0];

  document.getElementById('modalTag').textContent = p.category.charAt(0).toUpperCase() + p.category.slice(1);
  document.getElementById('modalTitle').textContent = p.name;
  document.getElementById('modalPrice').textContent = `$${p.price}${p.original ? ` · was $${p.original}` : ''}`;
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('modalImgBg').style.cssText = `
    background: ${p.gradient};
    background-image: radial-gradient(ellipse at 40% 40%, ${p.accent} 0%, transparent 65%);
  `;
  const sizesEl = document.getElementById('modalSizes');
  sizesEl.innerHTML = '';
  p.sizes.forEach(s => {
    const btn = document.createElement('button');
    btn.className = 'size-btn' + (s === selectedSize ? ' active' : '');
    btn.textContent = s;
    btn.addEventListener('click', () => {
      selectedSize = s;
      sizesEl.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
    sizesEl.appendChild(btn);
  });

  modalOverlay.classList.add('open');
  quickViewModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeQuickView() {
  modalOverlay.classList.remove('open');
  quickViewModal.classList.remove('open');
  document.body.style.overflow = '';
}
modalClose.addEventListener('click', closeQuickView);
modalOverlay.addEventListener('click', closeQuickView);
document.getElementById('modalAddBtn').addEventListener('click', () => {
  if (quickViewProduct) {
    addToCart(quickViewProduct, selectedSize);
    closeQuickView();
  }
});

// ============================================================
// TESTIMONIALS SLIDER
// ============================================================
const testiCards = document.querySelectorAll('.testi-card');
const totalSlides = testiCards.length;

function renderDots() {
  testiDots.innerHTML = '';
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.className = 'testi-dot' + (i === currentTestimonial ? ' active' : '');
    dot.addEventListener('click', () => goToSlide(i));
    testiDots.appendChild(dot);
  }
}

function goToSlide(index) {
  currentTestimonial = (index + totalSlides) % totalSlides;
  const cardWidth = testiCards[0].offsetWidth + 24;
  testimonialTrack.style.transform = `translateX(-${currentTestimonial * cardWidth}px)`;
  renderDots();
}

testiPrev.addEventListener('click', () => goToSlide(currentTestimonial - 1));
testiNext.addEventListener('click', () => goToSlide(currentTestimonial + 1));
let autoSlide = setInterval(() => goToSlide(currentTestimonial + 1), 5000);
testimonialTrack.addEventListener('mouseenter', () => clearInterval(autoSlide));
testimonialTrack.addEventListener('mouseleave', () => { autoSlide = setInterval(() => goToSlide(currentTestimonial + 1), 5000); });
window.addEventListener('resize', () => goToSlide(currentTestimonial));

// ============================================================
// NEWSLETTER
// ============================================================
nlForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!nlEmail.value) return;
  nlForm.style.display = 'none';
  nlSuccess.classList.add('show');
});

// ============================================================
// AOS (Animate on Scroll)
// ============================================================
function initAOS() {
  const targets = document.querySelectorAll('[data-aos]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('aos-visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  targets.forEach(t => observer.observe(t));
}

// ============================================================
// HERO PARTICLES
// ============================================================
function initParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;
  const count = 30;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    const size = Math.random() * 3 + 1;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const dur = Math.random() * 15 + 10;
    const delay = Math.random() * 10;
    Object.assign(p.style, {
      position: 'absolute',
      width: `${size}px`, height: `${size}px`,
      borderRadius: '50%',
      left: `${x}%`, top: `${y}%`,
      background: `rgba(201,169,110,${Math.random() * 0.3 + 0.05})`,
      animation: `particleFloat ${dur}s ease-in-out ${delay}s infinite`,
      pointerEvents: 'none',
    });
    container.appendChild(p);
  }

  const style = document.createElement('style');
  style.textContent = `
    @keyframes particleFloat {
      0%,100% { transform: translate(0,0) scale(1); opacity: 0.4; }
      25%      { transform: translate(${Math.random()*30-15}px,${Math.random()*30-15}px) scale(1.2); opacity: 0.8; }
      50%      { transform: translate(${Math.random()*30-15}px,${Math.random()*30-15}px) scale(0.9); opacity: 0.5; }
      75%      { transform: translate(${Math.random()*30-15}px,${Math.random()*30-15}px) scale(1.1); opacity: 0.7; }
    }
  `;
  document.head.appendChild(style);
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderDots();
  initAOS();
  initParticles();
});
