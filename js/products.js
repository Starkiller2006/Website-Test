/* Products page: renders the catalogue from catalog-data.js and handles category filters */

function ingredientURL(name) {
  return 'ingredient.html?name=' + encodeURIComponent(name);
}

function renderFilters(activeCat) {
  const wrap = document.getElementById('products-filters');
  const buttons = [{ id: 'all', label: 'All ingredients' }].concat(CATEGORIES);
  wrap.innerHTML = buttons.map(c =>
    `<button class="filter-btn${c.id === activeCat ? ' active' : ''}" data-cat="${c.id}">${escapeHTML(c.label)}</button>`
  ).join('');
  wrap.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (btn) filterCategory(btn.dataset.cat);
  });
}

function renderProducts() {
  const list = document.getElementById('ingredients-list');
  list.innerHTML = CATEGORIES.map(cat => {
    const items = PRODUCTS.filter(p => p.category === cat.id);
    if (!items.length) return '';
    const cards = items.map(p => `
      <a class="ingredient-card" href="${ingredientURL(p.name)}">
        <div class="ingredient-card-head">
          <span class="ingredient-icon" aria-hidden="true">${cat.icon}</span>
          <h3 class="ingredient-name">${escapeHTML(p.name)}</h3>
        </div>
        <p class="ingredient-desc">${escapeHTML(p.description)}</p>
        <p class="ingredient-apps"><span class="ingredient-apps-label">Applications</span>${escapeHTML(p.applications)}</p>
        <span class="ingredient-card-cta">View details &amp; request pricing →</span>
      </a>`).join('');
    return `
      <section class="ingredient-category" data-cat="${cat.id}">
        <h2 class="ingredient-cat-heading">${escapeHTML(cat.label)} <span class="ingredient-count">(${items.length})</span></h2>
        <div class="ingredient-cards">${cards}</div>
      </section>`;
  }).join('');
}

function filterCategory(cat) {
  if (cat !== 'all' && !CATEGORIES.some(c => c.id === cat)) cat = 'all';
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === cat));
  document.querySelectorAll('.ingredient-category').forEach(section => {
    section.style.display = (cat === 'all' || section.dataset.cat === cat) ? 'block' : 'none';
  });
  const url = new URL(window.location);
  if (cat === 'all') url.searchParams.delete('cat'); else url.searchParams.set('cat', cat);
  history.replaceState(null, '', url);
}

const initialCat = getQueryParam('cat') || 'all';
renderFilters(initialCat);
renderProducts();
filterCategory(initialCat);
