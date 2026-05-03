// ─── SELLER CONFIG ──────────────────────────────────────────
const FB_PAGE_URL = 'https://www.facebook.com/storecollectioph';

// ══════════════════════════════════════════════════════════
// ── PRODUCT DATA  ─────────────────────────────────────────
// ══════════════════════════════════════════════════════════
//
//  HOW TO ADD PRODUCT IMAGES:
//  ----------------------------
//  Each product has an  images  array.
//  Put the filename or URL of your photos inside the quotes.
//
//  OPTION A — Local file (save image in same folder as index.html):
//    images: [ 'sando-v1-front.jpg', 'sando-v1-back.jpg' ]
//
//  OPTION B — Any image URL (Facebook, Google Drive public link, etc.):
//    images: [ 'https://example.com/my-photo.jpg' ]
//
//  ✏️ Remove the // before each line to activate it.
//  You can add as many images as you want — they become gallery thumbnails.
//  The FIRST image shows on the product card.
//  If images array is empty [], the emoji icon shows instead.
//
//  HOW TO SET PRICES PER SIZE:
//  ----------------------------
//  sizePrices keys = size label, values = price in ₱
//  The base  price  field = default shown before a size is picked.
//
// ══════════════════════════════════════════════════════════

const PRODUCTS = [

  // ── SANDO V1 ──────────────────────────────────────────────
  {id:0, grid:'sando', icon:'🎽', cat:'Sando', name:'Sando V1 — Classic Cut',
   price:199, oldPrice:null, badge:'New', inStock:true, sold:'874 sold',
   images: [
     // ✏️ PASTE YOUR IMAGE PATH OR URL INSIDE THE QUOTES:
     // 'sando-v1-front.jpg',
     // 'sando-v1-back.jpg',
     // 'sando-v1-detail.jpg',
   ],
   sizes:['S','M','L','XL','2XL'],
   sizePrices: {
     'S'  : 199,  // ✏️ Price for Small
     'M'  : 199,  // ✏️ Price for Medium
     'L'  : 199,  // ✏️ Price for Large
     'XL' : 219,  // ✏️ Price for XL
     '2XL': 229,  // ✏️ Price for 2XL
   },
   desc:'The original. Clean lines, breathable cotton blend, relaxed muscle fit. Perfect for streetwear or the gym. Available in Black, White, and Army Green.'},

  // ── SANDO V2 ──────────────────────────────────────────────
  {id:1, grid:'sando', icon:'🎽', cat:'Sando', name:'Sando V2 — Premium Oversized',
   price:249, oldPrice:null, badge:'New', inStock:true, sold:'541 sold',
   images: [
     // ✏️ PASTE YOUR IMAGE PATH OR URL INSIDE THE QUOTES:
     // 'sando-v2-front.jpg',
     // 'sando-v2-back.jpg',
   ],
   sizes:['S','M','L','XL','2XL'],
   sizePrices: {
     'S'  : 249,  // ✏️ Price for Small
     'M'  : 249,  // ✏️ Price for Medium
     'L'  : 249,  // ✏️ Price for Large
     'XL' : 269,  // ✏️ Price for XL
     '2XL': 279,  // ✏️ Price for 2XL
   },
   desc:'The upgraded drop. Oversized boxy fit, heavier GSM fabric, dropped shoulders. Streetwear staple you never knew you needed. Limited colorways.'},

  // ── PROCLUB INSPIRED ──────────────────────────────────────
  {id:2, grid:'proclub', icon:'👕', cat:'ProClub Inspired', name:'ProClub Inspired Heavyweight Tee',
   price:299, oldPrice:null, badge:null, inStock:false, sold:'1.2K sold',
   images: [
     // ✏️ PASTE YOUR IMAGE PATH OR URL INSIDE THE QUOTES:
     // 'proclub-front.jpg',
     // 'proclub-back.jpg',
   ],
   sizes:['S','M','L','XL','2XL','3XL'],
   sizePrices: {
     'S'  : 299,  // ✏️ Price for Small
     'M'  : 299,  // ✏️ Price for Medium
     'L'  : 299,  // ✏️ Price for Large
     'XL' : 319,  // ✏️ Price for XL
     '2XL': 329,  // ✏️ Price for 2XL
     '3XL': 349,  // ✏️ Price for 3XL
   },
   desc:'Premium heavyweight tee inspired by the iconic ProClub quality. Thick, durable, and built to last. Restocking soon — message us to reserve.'},

  // ── ICEBLING ──────────────────────────────────────────────
  {id:3, grid:'icebling', icon:'💎', cat:'IceBling', name:'Iced-Out Cuban Chain Set',
   price:599, oldPrice:799, badge:'Sale', inStock:false, sold:'430 sold',
   images: [
     // ✏️ PASTE YOUR IMAGE PATH OR URL INSIDE THE QUOTES:
     // 'icebling-chain.jpg',
     // 'icebling-worn.jpg',
   ],
   sizes:['One Size'],
   desc:'Full iced-out Cuban chain with matching bracelet. High-quality zirconia stones. Stainless steel base, tarnish-resistant. Restocking soon.'},

  // ── JORTS ─────────────────────────────────────────────────
  {id:4, grid:'jorts', icon:'🩳', cat:'Jorts', name:'Premium Denim Jorts',
   price:449, oldPrice:null, badge:null, inStock:false, sold:'312 sold',
   images: [
     // ✏️ PASTE YOUR IMAGE PATH OR URL INSIDE THE QUOTES:
     // 'jorts-front.jpg',
     // 'jorts-side.jpg',
   ],
   sizes:['28','30','32','34','36'],
   sizePrices: {
     '28': 449,  // ✏️ Price for Waist 28
     '30': 449,  // ✏️ Price for Waist 30
     '32': 449,  // ✏️ Price for Waist 32
     '34': 449,  // ✏️ Price for Waist 34
     '36': 469,  // ✏️ Price for Waist 36
   },
   desc:'Relaxed-fit denim shorts with distressed detailing. Heavy-duty stitching for all-day comfort. Restocking soon.'},

  // ── BAGGY PANTS ───────────────────────────────────────────
  {id:5, grid:'baggypants', icon:'👖', cat:'Baggy Pants', name:'Street Baggy Cargo Pants',
   price:599, oldPrice:null, badge:null, inStock:false, sold:'228 sold',
   images: [
     // ✏️ PASTE YOUR IMAGE PATH OR URL INSIDE THE QUOTES:
     // 'baggypants-front.jpg',
     // 'baggypants-worn.jpg',
   ],
   sizes:['28','30','32','34','36'],
   sizePrices: {
     '28': 599,  // ✏️ Price for Waist 28
     '30': 599,  // ✏️ Price for Waist 30
     '32': 599,  // ✏️ Price for Waist 32
     '34': 599,  // ✏️ Price for Waist 34
     '36': 619,  // ✏️ Price for Waist 36
   },
   desc:'Wide-leg baggy cargo pants with multiple pockets. Heavyweight twill fabric. The streetwear staple you need. Restocking soon.'},

  // ── PANDORA ───────────────────────────────────────────────
  {id:6, grid:'pandora', icon:'📿', cat:'Pandora', name:'Pandora-Style Charm Bracelet',
   price:349, oldPrice:499, badge:'Sale', inStock:false, sold:'567 sold',
   images: [
     // ✏️ PASTE YOUR IMAGE PATH OR URL INSIDE THE QUOTES:
     // 'pandora-bracelet.jpg',
   ],
   sizes:['One Size'],
   desc:'Elegant charm bracelet with premium sterling silver finish. Mix and match charms for a personalized look. Restocking soon.'},

  // ── NECKLACE ──────────────────────────────────────────────
  {id:7, grid:'necklace', icon:'✨', cat:'Necklace', name:'Gold-Plated Layered Necklace',
   price:299, oldPrice:null, badge:null, inStock:false, sold:'389 sold',
   images: [
     // ✏️ PASTE YOUR IMAGE PATH OR URL INSIDE THE QUOTES:
     // 'necklace-layered.jpg',
     // 'necklace-worn.jpg',
   ],
   sizes:['One Size'],
   desc:'18K gold-plated layered necklace set. Lightweight and tarnish-free. Stacks perfectly for that luxury look. Restocking soon.'},

  // ── WATCH ─────────────────────────────────────────────────
  {id:8, grid:'watch', icon:'⌚', cat:'Watch', name:'Premium Luxury Watch',
   price:1299, oldPrice:1799, badge:'Limited', inStock:false, sold:'145 sold',
   images: [
     // ✏️ PASTE YOUR IMAGE PATH OR URL INSIDE THE QUOTES:
     // 'watch-face.jpg',
     // 'watch-worn.jpg',
     // 'watch-detail.jpg',
   ],
   sizes:['One Size'],
   desc:'Stainless steel luxury watch with mineral crystal glass. Water-resistant up to 30m. Automatic movement. Restocking soon — message to reserve.'},

  // ── BOXERS ────────────────────────────────────────────────
  {id:9, grid:'boxers', icon:'🩲', cat:'Boxers', name:'Premium Boxer Pack (3pcs)',
   price:299, oldPrice:null, badge:'Hot', inStock:false, sold:'2.1K sold',
   images: [
     // ✏️ PASTE YOUR IMAGE PATH OR URL INSIDE THE QUOTES:
     // 'boxers-pack.jpg',
     // 'boxers-detail.jpg',
   ],
   sizes:['S','M','L','XL','2XL'],
   sizePrices: {
     'S'  : 299,  // ✏️ Price for Small
     'M'  : 299,  // ✏️ Price for Medium
     'L'  : 299,  // ✏️ Price for Large
     'XL' : 319,  // ✏️ Price for XL
     '2XL': 329,  // ✏️ Price for 2XL
   },
   desc:'Ultra-soft premium cotton blend boxers. Tagless comfort with reinforced waistband. Pack of 3. Restocking soon.'},

  // ── RINGS ─────────────────────────────────────────────────
  {id:10, grid:'rings', icon:'💍', cat:'Rings', name:'Iced-Out Statement Ring Stack',
   price:249, oldPrice:null, badge:null, inStock:false, sold:'198 sold',
   images: [
     // ✏️ PASTE YOUR IMAGE PATH OR URL INSIDE THE QUOTES:
     // 'rings-stack.jpg',
     // 'rings-worn.jpg',
   ],
   sizes:['6','7','8','9','10'],
   sizePrices: {
     '6' : 249,  // ✏️ Price for Ring Size 6
     '7' : 249,  // ✏️ Price for Ring Size 7
     '8' : 249,  // ✏️ Price for Ring Size 8
     '9' : 249,  // ✏️ Price for Ring Size 9
     '10': 249,  // ✏️ Price for Ring Size 10
   },
   desc:'3-piece ring stack set with micro-pavé zirconia. Rhodium-plated finish. Perfect for stacking and styling. Restocking soon.'},

  // ── CLOTHES ───────────────────────────────────────────────
  {id:11, grid:'clothes', icon:'🧥', cat:'Clothes', name:'Signature Oversized Hoodie',
   price:799, oldPrice:999, badge:'Exclusive', inStock:false, sold:'341 sold',
   images: [
     // ✏️ PASTE YOUR IMAGE PATH OR URL INSIDE THE QUOTES:
     // 'hoodie-front.jpg',
     // 'hoodie-back.jpg',
   ],
   sizes:['S','M','L','XL','2XL'],
   sizePrices: {
     'S'  : 799,  // ✏️ Price for Small
     'M'  : 799,  // ✏️ Price for Medium
     'L'  : 799,  // ✏️ Price for Large
     'XL' : 829,  // ✏️ Price for XL
     '2XL': 849,  // ✏️ Price for 2XL
   },
   desc:'Premium heavyweight fleece hoodie. Oversized fit with kangaroo pocket and ribbed cuffs. Limited colorways. Restocking soon.'},

  // ── CAPS ──────────────────────────────────────────────────
  {id:12, grid:'caps', icon:'🧢', cat:'Caps', name:'Snapback Street Cap',
   price:349, oldPrice:null, badge:null, inStock:false, sold:'612 sold',
   images: [
     // ✏️ PASTE YOUR IMAGE PATH OR URL INSIDE THE QUOTES:
     // 'cap-front.jpg',
     // 'cap-side.jpg',
   ],
   sizes:['One Size'],
   desc:'Premium snapback cap with embroidered logo. Structured 6-panel design with adjustable snap closure. Restocking soon.'},

  // ── WALLET ────────────────────────────────────────────────
  {id:13, grid:'wallet', icon:'👜', cat:'Premium Wallet', name:'Slim Premium Leather Wallet',
   price:499, oldPrice:699, badge:'Sale', inStock:false, sold:'273 sold',
   images: [
     // ✏️ PASTE YOUR IMAGE PATH OR URL INSIDE THE QUOTES:
     // 'wallet-closed.jpg',
     // 'wallet-open.jpg',
   ],
   sizes:['One Size'],
   desc:'Genuine leather slim wallet with RFID blocking. Multiple card slots and cash compartment. Restocking soon.'},

  // ── BELT ──────────────────────────────────────────────────
  {id:14, grid:'belt', icon:'🪡', cat:'Belt', name:'Premium Leather Belt',
   price:299, oldPrice:null, badge:null, inStock:false, sold:'184 sold',
   images: [
     // ✏️ PASTE YOUR IMAGE PATH OR URL INSIDE THE QUOTES:
     // 'belt-black.jpg',
     // 'belt-brown.jpg',
   ],
   sizes:['S (28-32)','M (32-36)','L (36-40)','XL (40-44)'],
   sizePrices: {
     'S (28-32)' : 299,  // ✏️ Price for S (Waist 28-32)
     'M (32-36)' : 299,  // ✏️ Price for M (Waist 32-36)
     'L (36-40)' : 299,  // ✏️ Price for L (Waist 36-40)
     'XL (40-44)': 319,  // ✏️ Price for XL (Waist 40-44)
   },
   desc:'Full-grain leather belt with polished alloy buckle. Available in black and brown. Restocking soon.'},
];


// ─── STATE ──────────────────────────────────────────────────
let cart = [];
let modalQty = 1;
let modalSize = null;
let activeProduct = null;
let coStep = 1;
let toastTimer;

// ─── GET PRICE FOR SIZE ──────────────────────────────────────
// Returns the price for a given size. Falls back to product's base price.
function getSizePrice(p, size) {
  if (p.sizePrices && size && p.sizePrices[size] !== undefined) {
    return p.sizePrices[size];
  }
  return p.price;
}

// ─── SCROLL TO DROP SECTION ─────────────────────────────────
function scrollToDrop(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 80; // navbar height
  const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}

// ─── RENDER ALL CATEGORY GRIDS ──────────────────────────────
function renderProducts() {
  // Group products by their grid id
  const groups = {};
  PRODUCTS.forEach(p => {
    if (!groups[p.grid]) groups[p.grid] = [];
    groups[p.grid].push(p);
  });

  Object.entries(groups).forEach(([gridId, products]) => {
    const el = document.getElementById('grid-' + gridId);
    if (!el) return;
    el.innerHTML = products.map((p, i) => buildCard(p, i)).join('');
    el.querySelectorAll('.reveal').forEach(el => revealIO.observe(el));
  });
}

function buildCard(p, i) {
  const outOfStock = !p.inStock;
  const hasImg = p.images && p.images.length > 0;

  const badgeHtml = outOfStock
    ? `<div class="product-badge oos-badge">Out of Stock</div>`
    : (p.badge ? `<div class="product-badge"${p.badge==='Exclusive'?' style="background:transparent;border:1px solid var(--gold);color:var(--gold)"':''}>${p.badge}</div>` : '');

  const imgHtml = hasImg
    ? `<img src="${p.images[0]}" alt="${p.name}" class="product-real-img" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
    : '';
  const placeholderStyle = hasImg ? 'display:none' : '';

  return `
    <div class="product-card reveal${outOfStock?' oos-card':''}" style="transition-delay:${i*0.1}s"
         onclick="${outOfStock ? `notifyMe(${p.id})` : `quickView(${p.id})`}">
      <div class="product-img">
        ${imgHtml}
        <div class="product-img-placeholder" style="${placeholderStyle}">${p.icon}</div>
        <div class="product-spotlight"></div>
        ${badgeHtml}
        ${outOfStock
          ? `<div class="product-actions"><button class="product-action-btn notify-btn" onclick="event.stopPropagation();notifyMe(${p.id})">&#128172; Notify Me</button></div>
             <div class="oos-overlay"></div>`
          : `<div class="product-qv-overlay">
               <span class="product-qv-label">&#128065; Quick View</span>
             </div>`
        }
      </div>
      <div class="product-info">
        <div class="product-category">${p.cat}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-footer">
          <div>
            <span class="product-price${outOfStock?' oos-price':''}">&#8369;${p.price.toLocaleString()}</span>
            ${p.oldPrice ? `<span class="product-price-old">&#8369;${p.oldPrice.toLocaleString()}</span>` : ''}
          </div>
          <div class="product-sold">${outOfStock ? '<span class="oos-tag">Out of Stock</span>' : p.sold}</div>
        </div>
      </div>
    </div>`;
}

function notifyMe(pid) {
  const p = PRODUCTS.find(x => x.id === pid);
  if (!p) return;
  // Show a prompt — user taps the toast to go to Messenger manually
  showToast('Message us on Messenger to reserve this item!');
  // Show a manual link after a short delay so it doesn't auto-navigate
  setTimeout(() => {
    const confirmed = confirm(`"${p.name}" is out of stock.\n\nTap OK to open Messenger and ask us to notify you when it's back.`);
    if (confirmed) window.open('https://www.facebook.com/messages/t/storecollectioph', '_blank');
  }, 400);
}

// ─── CART ───────────────────────────────────────────────────
function addToCart(pid, qty, size) {
  const p = PRODUCTS.find(x => x.id === pid);
  if (!p || !p.inStock) { showToast('This item is out of stock'); return; }
  const sz = size || (p.sizes.length === 1 ? p.sizes[0] : null);
  const key = pid + '-' + (sz || 'ns');
  const ex = cart.find(i => i.key === key);
  if (ex) ex.qty += qty; else cart.push({key, pid, qty, size:sz, p});
  updateCartUI();
  showToast(p.name + ' added to cart');
  bump();
}
function removeFromCart(key) { cart = cart.filter(i => i.key !== key); updateCartUI(); }
function changeQty(key, d) {
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty = Math.max(1, item.qty + d);
  updateCartUI();
}
function cartTotal() { return cart.reduce((s,i) => s + i.p.price * i.qty, 0); }
function cartCount() { return cart.reduce((s,i) => s + i.qty, 0); }

function updateCartUI() {
  document.getElementById('cartCount').textContent = cartCount();
  const items = document.getElementById('cartItems');
  const empty = document.getElementById('cartEmpty');
  const footer = document.getElementById('cartFooter');
  if (!cart.length) {
    empty.style.display=''; items.innerHTML=''; footer.style.display='none';
  } else {
    empty.style.display='none'; footer.style.display='';
    items.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-img">${item.p.icon}</div>
        <div class="cart-item-info">
          <div class="cart-item-cat">${item.p.cat}${item.size?' · '+item.size:''}</div>
          <div class="cart-item-name">${item.p.name}</div>
          <div class="cart-item-price">₱${item.p.price.toLocaleString()}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="changeQty('${item.key}',-1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty('${item.key}',1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart('${item.key}')" title="Remove">✕</button>
      </div>`).join('');
    document.getElementById('cartSubtotal').textContent = '₱' + cartTotal().toLocaleString();
  }
}
function bump() {
  const el = document.getElementById('cartCount');
  el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump');
  setTimeout(() => el.classList.remove('bump'), 300);
}
function openCart() {
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartDrawer').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartDrawer').classList.remove('open');
  document.body.style.overflow = '';
}

// ─── QUICK VIEW ─────────────────────────────────────────────
let activeGalleryIdx = 0;

function quickView(pid) {
  const p = PRODUCTS.find(x => x.id === pid);
  if (!p) return;
  if (!p.inStock) { notifyMe(pid); return; }

  activeProduct = pid;
  modalQty = 1;
  activeGalleryIdx = 0;
  modalSize = p.sizes.length === 1 ? p.sizes[0] : null;

  const hasImg = p.images && p.images.length > 0;
  const imgs = hasImg ? p.images : [];

  // ── Image area ──────────────────────────────────────────
  document.getElementById('modalImg').innerHTML = `
    <div class="modal-gallery">
      <!-- Main image display -->
      <div class="modal-gallery-main" id="mgMain">
        ${hasImg
          ? `<img src="${imgs[0]}" alt="${p.name}" class="mg-main-img" id="mgMainImg"
               onerror="this.src=''; this.style.display='none'; document.getElementById('mgFallback').style.display='flex'">`
          : ''}
        <div class="mg-fallback" id="mgFallback" style="${hasImg ? 'display:none' : ''}">
          <span class="modal-emoji-icon">${p.icon}</span>
        </div>
        ${p.badge ? `<div class="modal-img-badge"${p.badge==='Exclusive'?' style="background:transparent;border:1px solid var(--gold);color:var(--gold)"':''}>${p.badge}</div>` : ''}
        ${imgs.length > 1 ? `
          <button class="mg-arrow mg-prev" onclick="galleryNav(-1)" aria-label="Previous">&#8249;</button>
          <button class="mg-arrow mg-next" onclick="galleryNav(1)" aria-label="Next">&#8250;</button>
          <div class="mg-counter" id="mgCounter">1 / ${imgs.length}</div>
        ` : ''}
      </div>
      <!-- Thumbnails -->
      ${imgs.length > 1 ? `
      <div class="modal-gallery-thumbs" id="mgThumbs">
        ${imgs.map((src, idx) => `
          <div class="mg-thumb${idx===0?' mg-thumb-active':''}" onclick="galleryGoTo(${idx})" data-idx="${idx}">
            <img src="${src}" alt="View ${idx+1}" loading="lazy"
              onerror="this.parentElement.style.display='none'">
          </div>`).join('')}
      </div>` : ''}
    </div>
    <button class="modal-close" onclick="closeModal()" aria-label="Close">&#10005;</button>`;

  // ── Info area ────────────────────────────────────────────
  document.getElementById('modalInfo').innerHTML = `
    <div class="modal-info-inner">
      <div class="modal-cat">${p.cat}</div>
      <div class="modal-name">${p.name}</div>

      <div class="modal-price-row">
        <span class="modal-price" id="mLivePrice">&#8369;${getSizePrice(p, modalSize).toLocaleString()}</span>
        ${p.oldPrice ? `<span class="modal-price-old">&#8369;${p.oldPrice.toLocaleString()}</span>
        <span class="modal-price-save">Save &#8369;${(p.oldPrice - p.price).toLocaleString()}</span>` : ''}
      </div>

      <p class="modal-desc">${p.desc}</p>

      ${p.sizes.length > 1 ? `
      <div class="modal-sizes">
        <div class="modal-sizes-label">Select Size <span class="modal-size-price-hint">— price may vary by size</span></div>
        <div class="size-btns">
          ${p.sizes.map(s => {
            const sp = getSizePrice(p, s);
            const hasDiff = p.sizePrices && sp !== p.price;
            return `<button class="size-btn${s===modalSize?' active':''}" onclick="selSize('${s}',this,${p.id})" data-price="${sp}">
              <span class="size-btn-label">${s}</span>
              ${hasDiff ? `<span class="size-btn-price">&#8369;${sp.toLocaleString()}</span>` : ''}
            </button>`;
          }).join('')}
        </div>
      </div>` : `<div class="modal-size-single">Size: <strong>${p.sizes[0]}</strong></div>`}

      <div class="modal-qty-row">
        <div class="modal-qty-label">Quantity</div>
        <div class="modal-qty-ctrl">
          <button class="qty-btn" onclick="mQty(-1)" aria-label="Decrease">&#8722;</button>
          <span class="qty-num" id="mQtyNum">1</span>
          <button class="qty-btn" onclick="mQty(1)" aria-label="Increase">+</button>
        </div>
        <div class="modal-subtotal">&#8369;<span id="mSubtotal">${getSizePrice(p, modalSize).toLocaleString()}</span></div>
      </div>

      <div class="modal-actions">
        <button class="modal-cart-btn" onclick="addFromModal()">
          &#128722; Add to Cart
        </button>
        <button class="modal-order-btn" onclick="orderNowFromModal()">
          &#9889; Order Now
        </button>
      </div>

      <div class="modal-meta">
        <span class="modal-meta-item">&#9989; In Stock</span>
        <span class="modal-meta-sep">&#183;</span>
        <span class="modal-meta-item">&#128666; Fast Shipping</span>
        <span class="modal-meta-sep">&#183;</span>
        <span class="modal-meta-item">&#128172; Pay via Messenger</span>
      </div>
    </div>`;

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

// Gallery navigation
function galleryNav(dir) {
  const p = PRODUCTS.find(x => x.id === activeProduct);
  if (!p || !p.images || p.images.length < 2) return;
  activeGalleryIdx = (activeGalleryIdx + dir + p.images.length) % p.images.length;
  galleryGoTo(activeGalleryIdx);
}

function galleryGoTo(idx) {
  const p = PRODUCTS.find(x => x.id === activeProduct);
  if (!p || !p.images) return;
  activeGalleryIdx = idx;

  const mainImg = document.getElementById('mgMainImg');
  const counter = document.getElementById('mgCounter');
  if (mainImg) {
    mainImg.style.opacity = '0';
    setTimeout(() => {
      mainImg.src = p.images[idx];
      mainImg.style.display = '';
      mainImg.style.opacity = '1';
    }, 150);
  }
  if (counter) counter.textContent = `${idx + 1} / ${p.images.length}`;

  // Update thumb active state
  document.querySelectorAll('.mg-thumb').forEach((t, i) => {
    t.classList.toggle('mg-thumb-active', i === idx);
  });
}
function selSize(s, btn, pid) {
  modalSize = s;
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Update live price display
  const p = PRODUCTS.find(x => x.id === (pid !== undefined ? pid : activeProduct));
  if (p) {
    const sp = getSizePrice(p, s);
    const livePriceEl = document.getElementById('mLivePrice');
    const subtotalEl  = document.getElementById('mSubtotal');
    if (livePriceEl) livePriceEl.textContent = '₱' + sp.toLocaleString();
    if (subtotalEl)  subtotalEl.textContent  = (sp * modalQty).toLocaleString();
  }
}
function mQty(d) {
  const p = PRODUCTS.find(x => x.id === activeProduct);
  modalQty = Math.max(1, modalQty + d);
  const sp = getSizePrice(p, modalSize);
  const numEl = document.getElementById('mQtyNum');
  const subEl = document.getElementById('mSubtotal');
  if (numEl) numEl.textContent = modalQty;
  if (subEl && p) subEl.textContent = (sp * modalQty).toLocaleString();
}
function addFromModal() {
  const p  = PRODUCTS.find(x => x.id === activeProduct);
  const sp = getSizePrice(p, modalSize);
  // Temporarily override price for cart with size-specific price
  const cartItem = { ...p, price: sp };
  const sz  = modalSize || (p.sizes.length === 1 ? p.sizes[0] : null);
  const key = p.id + '-' + (sz || 'ns');
  const ex  = cart.find(i => i.key === key);
  if (ex) { ex.qty += modalQty; ex.p = cartItem; }
  else cart.push({ key, pid: p.id, qty: modalQty, size: sz, p: cartItem });
  updateCartUI();
  showToast(p.name + (sz ? ' (' + sz + ')' : '') + ' added to cart');
  bump();
  closeModal();
  openCart();
}
function orderNowFromModal() {
  addFromModal();
  // addFromModal already closes modal and opens cart, now open checkout
  closeCart();
  openCheckout();
}
function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ─── CHECKOUT ───────────────────────────────────────────────
function openCheckout() {
  if (!cart.length) { showToast('Your cart is empty!'); return; }
  closeCart();
  coStep = 1;
  renderStep(1);
  document.getElementById('checkoutStepTabs').style.display = '';
  document.getElementById('checkoutOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCheckout() {
  document.getElementById('checkoutOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
function goStep(n) {
  if (n > coStep) {
    if (coStep===1 && (!v('fname')||(!v('email')&&!v('phone')))) { showToast('Please enter your name & contact'); return; }
    if (coStep===2 && (!v('address')||!v('city'))) { showToast('Please fill in your address'); return; }
  }
  coStep = n; renderStep(n);
  if (n===3) buildReview();
  document.getElementById('checkoutBox').scrollTop = 0;
}
function v(id) { return (document.getElementById(id)||{}).value?.trim()||''; }
function renderStep(n) {
  document.querySelectorAll('.checkout-section').forEach((s,i) => s.classList.toggle('active', i+1===n));
  ['stab1','stab2','stab3'].forEach((id,i) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('active','done');
    if (i+1===n) el.classList.add('active');
    else if (i+1<n) el.classList.add('done');
  });
}
function buildReview() {
  const sub  = cartTotal();
  const ship = sub >= 500 ? 0 : 99;
  const total = sub + ship;
  document.getElementById('coItems').innerHTML = cart.map(item => `
    <div class="checkout-summary-item">
      <span class="co-item-name">${item.p.icon} ${item.p.name}${item.size?' ('+item.size+')':''} &times;${item.qty}</span>
      <span class="co-item-price">₱${(item.p.price*item.qty).toLocaleString()}</span>
    </div>`).join('');
  document.getElementById('coSub').textContent   = '₱'+sub.toLocaleString();
  document.getElementById('coShip').textContent  = ship===0?'FREE':'₱'+ship.toLocaleString();
  document.getElementById('coTotal').textContent = '₱'+total.toLocaleString();
  const name = (v('fname')+' '+v('lname')).trim();
  document.getElementById('coContact').innerHTML = `<strong>${name}</strong>${v('email')?'<br>'+v('email'):''}${v('phone')?'<br>'+v('phone'):''}`;
  document.getElementById('coAddress').textContent = [v('address'),v('city'),v('province'),v('zip'),v('country')].filter(Boolean).join(', ');
}

// ─── PLACE ORDER → MESSENGER ────────────────────────────────
function placeOrder() {
  const btn = document.getElementById('placeBtn');
  btn.disabled = true; btn.innerHTML = '<span>Preparing...</span>';
  const sub   = cartTotal();
  const ship  = sub >= 500 ? 0 : 99;
  const total = sub + ship;
  const orderId = 'SC-' + Date.now().toString(36).toUpperCase();
  const now = new Date().toLocaleString('en-PH',{year:'numeric',month:'long',day:'numeric',hour:'2-digit',minute:'2-digit'});
  const lines = [
    '🛍️ NEW ORDER — Store Collectio PH',
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    `📋 Order ID: ${orderId}`,
    `📅 Date: ${now}`,
    '',
    '📦 ITEMS ORDERED:',
    ...cart.map(i=>`  • ${i.p.icon} ${i.p.name}${i.size?' ('+i.size+')':''} x${i.qty}  =  ₱${(i.p.price*i.qty).toLocaleString()}`),
    '',
    '💰 ORDER TOTAL:',
    `  Subtotal : ₱${sub.toLocaleString()}`,
    `  Shipping : ${ship===0?'FREE':'₱'+ship.toLocaleString()}`,
    `  ─────────────────────`,
    `  TOTAL    : ₱${total.toLocaleString()}`,
    '',
    '👤 CUSTOMER DETAILS:',
    `  Name  : ${(v('fname')+' '+v('lname')).trim()}`,
    v('email')?`  Email : ${v('email')}`:'',
    v('phone')?`  Phone : ${v('phone')}`:'',
    '',
    '📍 SHIP TO:',
    `  ${[v('address'),v('city'),v('province'),v('zip'),v('country')].filter(Boolean).join(', ')}`,
    '',
    '💬 Hi! I just placed this order. Please let me know how to complete payment. Thank you! 🙏',
  ].filter(l=>l!==null).join('\n');

  const messengerUrl = 'https://www.facebook.com/messages/t/storecollectioph';
  cart = []; updateCartUI();
  showOrderSentScreen(orderId, total, lines, messengerUrl);
}

// ─── ORDER SENT SCREEN ──────────────────────────────────────
function showOrderSentScreen(orderId, total, orderMessage, messengerUrl) {
  window._orderMsg = orderMessage;
  window._messengerUrl = messengerUrl;
  window._hasCopied = false;

  document.getElementById('checkoutStepTabs').style.display = 'none';
  document.getElementById('checkoutBody').innerHTML = `
    <div class="order-sent-wrap">

      <div class="order-sent-icon-wrap">
        <div class="order-sent-icon">&#128203;</div>
      </div>
      <div class="order-sent-title">Almost Done!</div>
      <div class="order-sent-sub">
        Your order <strong>${orderId || ''}</strong> is ready.<br>
        <span style="color:var(--gold);font-weight:700">Complete 2 quick steps below to send it to the seller.</span>
      </div>

      <!-- Progress Steps -->
      <div class="order-sent-steps">
        <div class="sent-step active" id="oss-step1">
          <div class="sent-step-circle">1</div>
          <div class="sent-step-label">Copy Message</div>
        </div>
        <div class="sent-step-line"></div>
        <div class="sent-step" id="oss-step2">
          <div class="sent-step-circle">2</div>
          <div class="sent-step-label">Open Messenger</div>
        </div>
        <div class="sent-step-line"></div>
        <div class="sent-step" id="oss-step3">
          <div class="sent-step-circle">3</div>
          <div class="sent-step-label">Paste &amp; Send</div>
        </div>
        <div class="sent-step-line"></div>
        <div class="sent-step" id="oss-step4">
          <div class="sent-step-circle">&#10003;</div>
          <div class="sent-step-label">Done!</div>
        </div>
      </div>

      <!-- Order Summary Card -->
      ${total > 0 ? `
      <div class="order-sent-card">
        <div class="sent-card-row"><span class="sent-card-label">Order ID</span><span class="sent-card-val gold">${orderId}</span></div>
        <div class="sent-card-row"><span class="sent-card-label">Total Amount</span><span class="sent-card-val gold">&#8369;${total.toLocaleString()}</span></div>
        <div class="sent-card-row"><span class="sent-card-label">Payment</span><span class="sent-card-val">Via Facebook Messenger</span></div>
      </div>` : ''}

      <!-- STEP 1: Copy -->
      <div class="oss-step-block" id="ossBlock1">
        <div class="oss-step-header">
          <span class="oss-step-num">Step 1</span>
          <span class="oss-step-title">Copy your order message</span>
        </div>
        <div class="copy-msg-box" id="orderMsgBox">${orderMessage.replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>')}</div>
        <button class="copy-msg-btn" id="copyBtn" onclick="copyOrderMsg()">
          &#128203;&nbsp; Tap to Copy Order Message
        </button>
        <div class="oss-copy-hint" id="copyHint" style="display:none">
          &#9989; Message copied! Now go to Step 2.
        </div>
      </div>

      <!-- STEP 2: Open Messenger (locked until copied) -->
      <div class="oss-step-block oss-locked" id="ossBlock2">
        <div class="oss-step-header">
          <span class="oss-step-num">Step 2</span>
          <span class="oss-step-title">Open Messenger &amp; paste</span>
        </div>
        <div class="oss-lock-notice" id="ossLockNotice">
          &#128274; Copy your message first (Step 1) to unlock this button.
        </div>
        <button class="messenger-open-btn oss-messenger-btn" id="messengerBtn"
          onclick="openMessengerNow()"
          style="opacity:0.35;pointer-events:none;cursor:not-allowed;">
          &#128172;&nbsp; Open Store Collectio PH on Messenger
        </button>
        <div class="oss-paste-hint" style="display:none" id="pasteHint">
          &#128196; In Messenger: tap the message field → long press → <strong>Paste</strong> → hit Send
        </div>
      </div>

      <!-- What happens next -->
      <div class="order-sent-instructions">
        <div class="instruct-title">After you send the message:</div>
        <div class="instruct-step"><span class="instruct-num">3</span>The seller will reply with payment details (GCash / GoTyme / Maya / COD)</div>
        <div class="instruct-step"><span class="instruct-num">4</span>Send your payment — seller confirms and ships your order &#128666;</div>
      </div>

      <button class="btn-primary" style="width:100%;margin-top:1.5rem" onclick="closeCheckout();location.reload()">
        Back to Shop
      </button>
    </div>`;
}


function copyOrderMsg() {
  const msg = window._orderMsg || '';
  const done = () => {
    window._hasCopied = true;

    // Update copy button
    const btn = document.getElementById('copyBtn');
    if (btn) {
      btn.textContent = '✅ Copied!';
      btn.style.background = '#1a4a1a';
      btn.style.borderColor = '#4ade80';
      btn.style.color = '#4ade80';
      btn.style.cursor = 'default';
    }

    // Show copy success hint
    const hint = document.getElementById('copyHint');
    if (hint) hint.style.display = '';

    // Mark Step 1 done
    const s1 = document.getElementById('oss-step1');
    if (s1) { s1.classList.remove('active'); s1.classList.add('done'); }

    // Unlock Step 2
    const block2 = document.getElementById('ossBlock2');
    if (block2) block2.classList.remove('oss-locked');

    const lockNotice = document.getElementById('ossLockNotice');
    if (lockNotice) lockNotice.style.display = 'none';

    const messengerBtn = document.getElementById('messengerBtn');
    if (messengerBtn) {
      messengerBtn.style.opacity = '1';
      messengerBtn.style.pointerEvents = 'all';
      messengerBtn.style.cursor = 'pointer';
      // Pulse animation to draw attention
      messengerBtn.style.animation = 'messengerPulse 1.5s ease-in-out 3';
    }

    // Mark Step 2 active
    const s2 = document.getElementById('oss-step2');
    if (s2) s2.classList.add('active');

    showToast('Copied! Now open Messenger and paste it.');
  };

  navigator.clipboard.writeText(msg).then(done).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = msg; ta.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(ta); ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    done();
  });
}

function openMessengerNow() {
  if (!window._hasCopied) {
    showToast('Please copy your order message first (Step 1)');
    return;
  }

  // Show paste hint
  const pasteHint = document.getElementById('pasteHint');
  if (pasteHint) pasteHint.style.display = '';

  // Mark step 2 done, step 3 active
  const s2 = document.getElementById('oss-step2');
  if (s2) { s2.classList.remove('active'); s2.classList.add('done'); }
  const s3 = document.getElementById('oss-step3');
  if (s3) s3.classList.add('active');

  // Update the messenger button to show it was clicked
  const btn = document.getElementById('messengerBtn');
  if (btn) {
    btn.innerHTML = '&#10003;&nbsp; Messenger Opened — Go Paste &amp; Send!';
    btn.style.background = '#0066CC';
    btn.style.animation = 'none';
  }

  // NOW open messenger — only when user clicks
  window.open(window._messengerUrl || 'https://www.facebook.com/messages/t/storecollectioph', '_blank');
}

// ─── TOAST ──────────────────────────────────────────────────
function showToast(msg) {
  document.getElementById('toastMsg').textContent = msg;
  const t = document.getElementById('toast');
  t.classList.add('show'); clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

// ─── SCROLL REVEAL ──────────────────────────────────────────
const revealIO = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealIO.unobserve(e.target); } });
},{threshold:0.08});
document.querySelectorAll('.reveal').forEach(el => revealIO.observe(el));

// ─── STAT COUNTER ───────────────────────────────────────────
function animateStat(el) {
  const tgt=parseInt(el.dataset.target), suf=el.dataset.suffix||'';
  if (!tgt) return;
  const disp=tgt>=10000?tgt/1000:tgt, dur=1800, t0=performance.now();
  (function tick(now){
    const p=Math.min((now-t0)/dur,1), ease=1-Math.pow(1-p,3);
    el.textContent=Math.round(ease*disp)+suf;
    if(p<1) requestAnimationFrame(tick);
  })(performance.now());
}
const statIO = new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){animateStat(e.target);statIO.unobserve(e.target);}});
},{threshold:0.5});
document.querySelectorAll('.stat-num[data-target]').forEach(el=>statIO.observe(el));

// ─── NAVBAR ─────────────────────────────────────────────────
window.addEventListener('scroll',()=>{
  document.getElementById('navbar').style.background=
    scrollY>60?'rgba(8,8,8,0.98)':'rgba(8,8,8,0.92)';
});

// ══════════════════════════════════════════════════════════
// ── RESELLER PAGE ─────────────────────────────────────────
// ══════════════════════════════════════════════════════════

// ── CONFIG: set your discount rates here ─────────────────
const WHOLESALE_DISC = 0.30;   // 30% off retail = wholesale
// You can also set per-product wholesale price in PRODUCTS as
// wholesalePrice: 150  — if set, overrides the discount calc

// ── Helpers ──────────────────────────────────────────────
function getWholesale(p) {
  if (p.wholesalePrice) return p.wholesalePrice;
  return Math.round(p.price * (1 - WHOLESALE_DISC));
}
function getProfit(p) { return p.price - getWholesale(p); }
function getDiscPct(p) { return Math.round((1 - getWholesale(p)/p.price)*100); }

// ── State ────────────────────────────────────────────────
let isWholesale = false;

// ── Open / Close ─────────────────────────────────────────
function openResellerPage() {
  isWholesale = false;
  updateToggleUI();
  renderResellerGrid();
  populateCalc();
  document.getElementById('resellerPage').style.display = 'block';
  document.body.style.overflow = 'hidden';
  document.getElementById('resellerPage').scrollTop = 0;
}
function closeResellerPage() {
  document.getElementById('resellerPage').style.display = 'none';
  document.body.style.overflow = '';
}

// ── Toggle Pricing Mode ───────────────────────────────────
function togglePricingMode() {
  isWholesale = !isWholesale;
  updateToggleUI();
  renderResellerGrid();
}

function updateToggleUI() {
  const knob   = document.getElementById('switchKnob');
  const sw     = document.getElementById('priceSwitch');
  const notice = document.getElementById('rpToggleText');
  const lbR    = document.getElementById('modeLblRetail');
  const lbW    = document.getElementById('modeLblWholesale');

  if (isWholesale) {
    knob.style.transform   = 'translateX(26px)';
    sw.style.background    = 'var(--gold)';
    lbR.style.color        = 'var(--gray-dim)';
    lbW.style.color        = 'var(--gold)';
    lbW.style.fontWeight   = '800';
    lbR.style.fontWeight   = '400';
    notice.innerHTML = 'Showing <strong style="color:var(--gold)">Wholesale Prices</strong> — available to approved resellers. <span style="color:#4ade80">✓ You pay less, keep the difference.</span>';
  } else {
    knob.style.transform   = 'translateX(0)';
    sw.style.background    = 'var(--gray-dim)';
    lbR.style.color        = 'var(--white)';
    lbW.style.color        = 'var(--gray-dim)';
    lbR.style.fontWeight   = '800';
    lbW.style.fontWeight   = '400';
    notice.innerHTML = 'Showing <strong>Retail Prices</strong> — toggle above to see Wholesale pricing available to approved resellers';
  }
}

// ── Render Product Pricing Grid ───────────────────────────
function renderResellerGrid() {
  const grid = document.getElementById('rpProductGrid');
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map(p => {
    const retail    = p.price;
    const ws        = getWholesale(p);
    const profit    = getProfit(p);
    const discPct   = getDiscPct(p);
    const showPrice = isWholesale ? ws : retail;
    const tag       = isWholesale ? 'WHOLESALE' : 'RETAIL';

    return `
    <div class="rp-prod-card${isWholesale?' rp-ws-active':''}">
      <div class="rp-prod-top">
        <div class="rp-prod-icon">${p.icon}</div>
        <div class="rp-prod-cat">${p.cat}</div>
        <div class="rp-prod-name">${p.name}</div>
      </div>

      <div class="rp-price-compare">
        <div class="rp-price-col${!isWholesale?' rp-price-active':''}">
          <div class="rp-price-col-lbl">Retail Price</div>
          <div class="rp-price-col-val rp-retail">&#8369;${retail.toLocaleString()}</div>
          <div class="rp-price-col-note">Customer pays</div>
        </div>
        <div class="rp-price-vs">VS</div>
        <div class="rp-price-col${isWholesale?' rp-price-active':''}">
          <div class="rp-price-col-lbl">Wholesale Price</div>
          <div class="rp-price-col-val rp-wholesale">&#8369;${ws.toLocaleString()}</div>
          <div class="rp-price-col-note">You pay</div>
        </div>
      </div>

      <div class="rp-profit-pill">
        <span>Your profit per piece:</span>
        <strong>&#8369;${profit.toLocaleString()} <em>(${discPct}% off)</em></strong>
      </div>

      <div class="rp-active-price ${isWholesale?'rp-ap-ws':'rp-ap-rt'}">
        <span class="rp-ap-tag">${tag}</span>
        <span class="rp-ap-val">&#8369;${showPrice.toLocaleString()}</span>
      </div>

      <button class="rp-order-btn" onclick="openRqoModal(${p.id})">
        Order as Reseller &#128172;
      </button>
    </div>`;
  }).join('');
}

// ── Profit Calculator ─────────────────────────────────────
function populateCalc() {
  const sel = document.getElementById('calcProd');
  if (!sel) return;
  sel.innerHTML = '<option value="">Choose a product...</option>' +
    PRODUCTS.map(p => `<option value="${p.id}">${p.icon} ${p.name} — Retail ₱${p.price.toLocaleString()}</option>`).join('');
}

function calcProfit() {
  const pid = document.getElementById('calcProd').value;
  const qty = Math.max(1, parseInt(document.getElementById('calcQty').value)||1);
  const res = document.getElementById('calcResult');
  if (!pid) { res.style.display='none'; return; }
  const p  = PRODUCTS.find(x=>x.id===parseInt(pid));
  if (!p)  { res.style.display='none'; return; }
  const ws     = getWholesale(p);
  const profit = getProfit(p);
  const total  = profit * qty;
  document.getElementById('crWs').textContent      = '₱'+ws.toLocaleString();
  document.getElementById('crRt').textContent      = '₱'+p.price.toLocaleString();
  document.getElementById('crPer').textContent     = '₱'+profit.toLocaleString();
  document.getElementById('crQtyLbl').textContent  = qty;
  document.getElementById('crTotal').textContent   = '₱'+total.toLocaleString();
  res.style.display = '';
}

// ── Reseller Quick Order Modal ────────────────────────────
function openRqoModal(pid) {
  const p   = PRODUCTS.find(x=>x.id===pid);
  if (!p) return;
  const ws     = getWholesale(p);
  const profit = getProfit(p);

  document.getElementById('rqoBox').innerHTML = `
    <div class="rqo-header">
      <div>
        <div class="rqo-eyebrow">Reseller Order</div>
        <div class="rqo-title">${p.icon} ${p.name}</div>
      </div>
      <button class="cart-close" onclick="closeRqoModal()">&#10005;</button>
    </div>

    <div class="rqo-price-bar">
      <div class="rqo-pb-item">
        <div class="rqo-pb-lbl">Retail Price</div>
        <div class="rqo-pb-val">&#8369;${p.price.toLocaleString()}</div>
      </div>
      <div class="rqo-pb-arrow">&#8594;</div>
      <div class="rqo-pb-item rqo-pb-ws">
        <div class="rqo-pb-lbl">Your Wholesale</div>
        <div class="rqo-pb-val ws-gold">&#8369;${ws.toLocaleString()}</div>
      </div>
      <div class="rqo-pb-arrow">&#8594;</div>
      <div class="rqo-pb-item rqo-pb-profit">
        <div class="rqo-pb-lbl">Profit / pc</div>
        <div class="rqo-pb-val profit-green">&#8369;${profit.toLocaleString()}</div>
      </div>
    </div>

    <div class="rqo-form">
      <div class="form-row">
        <div class="form-group"><label class="form-label">Your Name</label><input class="form-input" type="text" id="rqoName" placeholder="Juan Dela Cruz"></div>
        <div class="form-group"><label class="form-label">Phone / Messenger</label><input class="form-input" type="tel" id="rqoPhone" placeholder="09XX XXX XXXX"></div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Size</label>
          <select class="form-input form-select" id="rqoSize">${p.sizes.map(s=>`<option>${s}</option>`).join('')}</select>
        </div>
        <div class="form-group">
          <label class="form-label">Quantity</label>
          <input class="form-input" type="number" id="rqoQty" value="1" min="1" oninput="updateRqoTotal(${pid})">
        </div>
      </div>
    </div>

    <div class="rqo-total" id="rqoTotal">
      <span>Wholesale Total:</span>
      <strong>&#8369;${ws.toLocaleString()}</strong>
    </div>

    <div class="rqo-note">
      &#128172; Include your <strong>reseller code</strong> in the message to get wholesale pricing applied automatically.
    </div>

    <button class="rqo-send-btn" onclick="sendRqoOrder(${pid})">
      &#128172; Send Wholesale Order via Messenger
    </button>`;

  document.getElementById('rqoOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function updateRqoTotal(pid) {
  const p   = PRODUCTS.find(x=>x.id===pid);
  const qty = Math.max(1, parseInt(document.getElementById('rqoQty').value)||1);
  const ws  = getWholesale(p);
  const el  = document.getElementById('rqoTotal');
  if (el) el.innerHTML = `<span>Wholesale Total:</span><strong>&#8369;${(ws*qty).toLocaleString()}</strong>`;
}

function closeRqoModal() {
  document.getElementById('rqoOverlay').classList.remove('open');
}

function sendRqoOrder(pid) {
  const p     = PRODUCTS.find(x=>x.id===pid);
  const name  = (document.getElementById('rqoName')||{}).value?.trim()||'—';
  const phone = (document.getElementById('rqoPhone')||{}).value?.trim()||'—';
  const size  = (document.getElementById('rqoSize')||{}).value||'—';
  const qty   = Math.max(1, parseInt((document.getElementById('rqoQty')||{}).value)||1);
  const ws    = getWholesale(p);
  const profit= getProfit(p);
  const total = ws * qty;

  const msg = [
    '🛍️ RESELLER ORDER — Store Collectio PH',
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    `📦 Product  : ${p.icon} ${p.name}`,
    `📐 Size     : ${size}`,
    `🔢 Qty      : ${qty} piece(s)`,
    '',
    '💰 PRICING BREAKDOWN:',
    `  Retail Price    : ₱${p.price.toLocaleString()} per pc`,
    `  Wholesale Price : ₱${ws.toLocaleString()} per pc`,
    `  My Total Cost   : ₱${total.toLocaleString()}`,
    `  My Profit       : ₱${(profit*qty).toLocaleString()} (₱${profit} × ${qty} pcs)`,
    '',
    '👤 RESELLER:',
    `  Name  : ${name}`,
    `  Phone : ${phone}`,
    '',
    '🔑 RESELLER CODE: [paste your code here]',
    '',
    'Hi! I am placing a wholesale/reseller order. Please confirm and send payment details. Salamat! 🙏',
  ].join('\n');

  window._orderMsg = msg;
  closeRqoModal();
  closeResellerPage();

  // Show the copy-paste confirmation screen — user opens Messenger manually
  showOrderSentScreen('RSO-'+Date.now().toString(36).toUpperCase(), total, msg, 'https://www.facebook.com/messages/t/storecollectioph');
  document.getElementById('checkoutOverlay').classList.add('open');
  document.getElementById('checkoutStepTabs').style.display = 'none';
  document.body.style.overflow = 'hidden';
}

// ── Reseller Application ──────────────────────────────────
function submitResellerApp() {
  const name     = document.getElementById('rpName')?.value?.trim()||'';
  const phone    = document.getElementById('rpPhone')?.value?.trim()||'';
  const fb       = document.getElementById('rpFb')?.value?.trim()||'—';
  const city     = document.getElementById('rpCity')?.value?.trim()||'—';
  const platform = document.getElementById('rpPlatform')?.value||'—';
  const volume   = document.getElementById('rpVolume')?.value||'—';

  if (!name||!phone) { showToast('Please enter your name and phone number'); return; }

  const msg = [
    '⭐ RESELLER APPLICATION — Store Collectio PH',
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    '',
    '👤 APPLICANT:',
    `  Name     : ${name}`,
    `  Phone    : ${phone}`,
    `  Facebook : ${fb}`,
    `  Location : ${city}`,
    '',
    '💼 SELLING PLAN:',
    `  Platform : ${platform}`,
    `  Volume   : ${volume}`,
    '',
    'Hi! I would like to apply as a reseller for Store Collectio PH.',
    'Please send my reseller code and welcome kit. Salamat! 🙏',
  ].join('\n');

  window._orderMsg = msg;
  closeResellerPage();

  // Show copy-paste confirmation screen — user opens Messenger manually
  showOrderSentScreen('APP-'+Date.now().toString(36).toUpperCase(), 0, msg, 'https://www.facebook.com/messages/t/storecollectioph');
  document.getElementById('checkoutOverlay').classList.add('open');
  document.getElementById('checkoutStepTabs').style.display = 'none';
  document.body.style.overflow = 'hidden';
}

// ══════════════════════════════════════════════════════════
// ── REVIEWS / FEEDBACK SYSTEM ─────────────────────────────
// ══════════════════════════════════════════════════════════

// Seed reviews — pre-loaded sample reviews to fill the section on first load
const SEED_REVIEWS = [
  {
    name: 'Maria Santos',
    location: 'Cebu City',
    initial: 'M',
    color: '#C9A84C',
    product: 'Sando V1 — Classic Cut',
    rating: 5,
    text: 'Super ganda ng quality! Ang bibilad pa, hindi kumukupas. Perfect fit sa akin na medium. Arrived in 3 days. Definitely ordering more. 10/10!',
    date: '2025-03-15',
    verified: true,
    helpful: 12
  },
  {
    name: 'Carlo Reyes',
    location: 'Davao City',
    initial: 'C',
    color: '#7C6BFF',
    product: 'Premium Luxury Watch',
    rating: 5,
    text: 'Legit premium watch! Mahal ang dating pero affordable ang presyo. Nag-compliment yung mga katrabaho ko. Packaging was also really nice, parang regalo talaga.',
    date: '2025-03-10',
    verified: true,
    helpful: 8
  },
  {
    name: 'Janine Cruz',
    location: 'Manila',
    initial: 'J',
    color: '#FF6B9D',
    product: 'Iced-Out Cuban Chain Set',
    rating: 5,
    text: 'Binigay ko as a gift sa bf ko tapos grabe ang reaction niya! Very bling, hindi mahal ang dating. Stainless and hindi naglalabas ng amoy sa balat. Sulit na sulit!',
    date: '2025-02-28',
    verified: true,
    helpful: 15
  },
  {
    name: 'Renz Villanueva',
    location: 'Quezon City',
    initial: 'R',
    color: '#4ade80',
    product: 'Premium Boxer Pack (3pcs)',
    rating: 4,
    text: 'Very comfortable boxers! Soft fabric, hindi lumaluwag kahit paulit-ulit na laba. Minsan lang 4 stars kasi medyo matagal yung delivery sa QC pero worth the wait.',
    date: '2025-02-20',
    verified: true,
    helpful: 6
  },
  {
    name: 'Ana Magbanua',
    location: 'Iloilo City',
    initial: 'A',
    color: '#FF9D4D',
    product: 'Sando V2 — Premium Oversized',
    rating: 5,
    text: 'Love the oversized fit! Trendy kaayo og komportable. Bag-o nakong gi-order ang lain nga color. Seller is very responsive sa Messenger. Highly recommended!',
    date: '2025-02-12',
    verified: true,
    helpful: 9
  },
  {
    name: 'Mark Lim',
    location: 'Pampanga',
    initial: 'ML',
    color: '#00B4D8',
    product: 'Street Baggy Cargo Pants',
    rating: 5,
    text: 'Grabe yung quality, ang dami pang pockets! Perfect sa lakad-lakad. Ganda ng tahi, solid. Naka-dagdag pa yung seller ng freebie na sticker. Overall 5 stars talaga!',
    date: '2025-01-30',
    verified: true,
    helpful: 11
  }
];

let reviews = [];
let currentRating = 0;
const STORAGE_KEY = 'lexeon_reviews_v1';

// Load reviews from localStorage (user-submitted) + seed
function loadReviews() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const userReviews = saved ? JSON.parse(saved) : [];
    reviews = [...userReviews, ...SEED_REVIEWS];
  } catch(e) {
    reviews = [...SEED_REVIEWS];
  }
}

function saveUserReviews() {
  try {
    const userReviews = reviews.filter(r => r.userSubmitted);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userReviews));
  } catch(e) {}
}

// Render all reviews
function renderReviews() {
  loadReviews();
  const grid = document.getElementById('reviewsGrid');
  const empty = document.getElementById('reviewsEmpty');
  if (!grid) return;

  if (reviews.length === 0) {
    grid.innerHTML = '';
    if (empty) empty.style.display = '';
    return;
  }
  if (empty) empty.style.display = 'none';

  // Sort: newest first (user reviews first, then seeds)
  const sorted = [...reviews].sort((a, b) => {
    if (a.userSubmitted && !b.userSubmitted) return -1;
    if (!a.userSubmitted && b.userSubmitted) return 1;
    return new Date(b.date) - new Date(a.date);
  });

  grid.innerHTML = sorted.map((r, idx) => buildReviewCard(r, idx)).join('');
  updateReviewStats();

  // Observe new cards
  grid.querySelectorAll('.reveal').forEach(el => revealIO.observe(el));
}

function buildReviewCard(r, idx) {
  const stars = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
  const initial = r.initial || r.name.split(' ').map(w=>w[0]).join('').toUpperCase().substr(0,2);
  const color = r.color || randomColor(r.name);
  const date = formatDate(r.date);
  const delayMs = (idx % 6) * 0.08;

  return `
    <div class="review-card reveal" style="transition-delay:${delayMs}s">
      <div class="review-card-header">
        <div class="review-avatar" style="background:${color}">${initial}</div>
        <div class="review-identity">
          <div class="review-name">${escHtml(r.name)}</div>
          <div class="review-location">&#128205; ${escHtml(r.location)}</div>
        </div>
        <div class="review-meta-right">
          ${r.verified ? '<div class="review-verified">&#9989; Verified</div>' : ''}
          <div class="review-date">${date}</div>
        </div>
      </div>
      <div class="review-stars">${stars}</div>
      <div class="review-product">Bought: <strong>${escHtml(r.product)}</strong></div>
      <p class="review-text">${escHtml(r.text)}</p>
      <div class="review-card-footer">
        <button class="review-helpful-btn" onclick="markHelpful(this, ${idx})">
          &#128077; Helpful ${r.helpful > 0 ? `(${r.helpful})` : ''}
        </button>
        ${r.userSubmitted ? '<span class="review-new-badge">NEW</span>' : ''}
      </div>
    </div>`;
}

function updateReviewStats() {
  if (!reviews.length) return;
  const avg = reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;
  const avgEl   = document.getElementById('revAvgScore');
  const starsEl = document.getElementById('revAvgStars');
  const countEl = document.getElementById('revAvgCount');
  if (avgEl)   avgEl.textContent = avg.toFixed(1);
  if (countEl) countEl.textContent = `Based on ${reviews.length} review${reviews.length !== 1 ? 's' : ''}`;
  if (starsEl) {
    const full  = Math.floor(avg);
    const half  = avg - full >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    starsEl.innerHTML = '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
  }
}

function markHelpful(btn, idx) {
  if (btn.dataset.voted) return;
  btn.dataset.voted = '1';
  reviews[idx].helpful = (reviews[idx].helpful || 0) + 1;
  btn.innerHTML = `&#128077; Helpful (${reviews[idx].helpful})`;
  btn.style.color = 'var(--gold)';
  btn.style.borderColor = 'rgba(201,168,76,0.4)';
  saveUserReviews();
}

// Feedback Modal
function openFeedbackModal() {
  currentRating = 0;
  document.getElementById('fbName').value = '';
  document.getElementById('fbLocation').value = '';
  document.getElementById('fbProduct').value = '';
  document.getElementById('fbInitial').value = '';
  document.getElementById('fbText').value = '';
  document.getElementById('fbCharCount').textContent = '0';
  document.getElementById('fbVerified').checked = false;
  document.getElementById('fbRatingLabel').textContent = 'Tap a star to rate';
  document.querySelectorAll('.fb-star').forEach(s => s.classList.remove('active','hover'));
  document.getElementById('fbOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeFeedbackModal() {
  document.getElementById('fbOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function setRating(val) {
  currentRating = val;
  const labels = ['', 'Poor', 'Fair', 'Good', 'Great', 'Excellent! 🔥'];
  document.getElementById('fbRatingLabel').textContent = labels[val] || '';
  document.querySelectorAll('.fb-star').forEach(s => {
    const v = parseInt(s.dataset.val);
    s.classList.toggle('active', v <= val);
  });
}

// Character counter for textarea
document.addEventListener('DOMContentLoaded', () => {
  const ta = document.getElementById('fbText');
  if (ta) {
    ta.addEventListener('input', () => {
      document.getElementById('fbCharCount').textContent = ta.value.length;
    });
  }
  renderReviews();
});

function submitFeedback() {
  const name     = (document.getElementById('fbName')?.value || '').trim();
  const location = (document.getElementById('fbLocation')?.value || '').trim();
  const product  = document.getElementById('fbProduct')?.value || '';
  const text     = (document.getElementById('fbText')?.value || '').trim();
  const verified = document.getElementById('fbVerified')?.checked;
  const initial  = (document.getElementById('fbInitial')?.value || '').trim().toUpperCase() || name.split(' ').map(w=>w[0]).join('').substr(0,2).toUpperCase();

  if (!name)     { showToast('Please enter your full name'); return; }
  if (!location) { showToast('Please enter your location'); return; }
  if (!product)  { showToast('Please select the product you bought'); return; }
  if (!currentRating) { showToast('Please select a star rating'); return; }
  if (text.length < 20) { showToast('Please write at least 20 characters in your review'); return; }
  if (!verified) { showToast('Please confirm this is a genuine purchase'); return; }

  const COLORS = ['#C9A84C','#7C6BFF','#FF6B9D','#4ade80','#FF9D4D','#00B4D8','#FF3D71','#6EE7B7'];
  const newReview = {
    name, location, initial, product, rating: currentRating, text,
    date: new Date().toISOString().split('T')[0],
    verified: true,
    helpful: 0,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    userSubmitted: true
  };

  reviews.unshift(newReview);
  saveUserReviews();
  closeFeedbackModal();
  renderReviews();
  document.getElementById('reviews').scrollIntoView({behavior:'smooth'});
  showToast('✅ Thank you, ' + name + '! Your review has been posted.');
}

// Helpers
function escHtml(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function formatDate(dateStr) {
  try {
    return new Date(dateStr).toLocaleDateString('en-PH', {year:'numeric', month:'short', day:'numeric'});
  } catch(e) { return dateStr; }
}
function randomColor(name) {
  const cols = ['#C9A84C','#7C6BFF','#FF6B9D','#4ade80','#FF9D4D','#00B4D8'];
  let h = 0;
  for (let i=0; i<name.length; i++) h = (h*31 + name.charCodeAt(i)) % cols.length;
  return cols[h];
}

// ─── INIT ────────────────────────────────────────────────────
renderProducts();
updateCartUI();