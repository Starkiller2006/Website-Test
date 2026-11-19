/* Products page: category sidebar, live search, and product rows from catalog-data.js */

const ARROW_SVG = '<svg aria-hidden="true" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 8h10M9 4l4 4-4 4"/></svg>';
const PREVIEW_COUNT = 5;   // rows shown per category in the "All" view

let activeCat = 'all';
let query = '';

function ingredientURL(name) {
  return 'ingredient.html?name=' + encodeURIComponent(name);
}

function renderSidebar() {
  const side = document.getElementById('category-list');
  const items = [{ id: 'all', label: 'All ingredients', count: PRODUCTS.length }].concat(
    CATEGORIES.map(c => ({ id: c.id, label: c.label, count: PRODUCTS.filter(p => p.category === c.id).length }))
  );
  side.insertAdjacentHTML('beforeend', items.map(c =>
    `<button class="side-btn" data-cat="${c.id}" aria-pressed="false"><span>${escapeHTML(c.label)}</span><span class="count">${c.count}</span></button>`
  ).join(''));
  side.addEventListener('click', e => {
    const btn = e.target.closest('.side-btn');
    if (btn) setCategory(btn.dataset.cat);
  });
}

function rowHTML(p) {
  return `
    <a class="row" href="${ingredientURL(p.name)}">
      <span class="name">${escapeHTML(p.name)}</span>
      <span class="desc">${escapeHTML(p.description)}</span>
      <span class="apps"><span class="dot"></span><span class="apps-label use-label">Use in · </span>${escapeHTML(p.applications)}</span>
      <span class="row-arrow">${ARROW_SVG}</span>
    </a>`;
}

function render() {
  const list = document.getElementById('ingredients-list');
  const q = query.trim().toLowerCase();
  const matches = p => !q ||
    p.name.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.applications.toLowerCase().includes(q);

  const groups = CATEGORIES
    .filter(c => activeCat === 'all' || c.id === activeCat)
    .map(c => ({ cat: c, items: PRODUCTS.filter(p => p.category === c.id && matches(p)) }))
    .filter(g => g.items.length);

  if (!groups.length) {
    list.innerHTML = `<p class="empty">No ingredients match “${escapeHTML(query)}”. Try another word, or <a class="text-link" href="contact.html">ask us</a> — we may still be able to source it.</p>`;
    return;
  }

  // In the "All" view with no search, preview a few rows per category
  const preview = activeCat === 'all' && !q;
  list.innerHTML = groups.map(g => {
    const total = g.items.length;
    const shown = preview ? g.items.slice(0, PREVIEW_COUNT) : g.items;
    const more = preview && total > PREVIEW_COUNT
      ? `<button class="btn btn-outline btn-sm show-all" data-cat="${g.cat.id}">Show all ${total} in ${escapeHTML(g.cat.label)}</button>`
      : '';
    return `
      <section>
        <div class="group-head"><h2>${escapeHTML(g.cat.label)}</h2><span>${total} ${total === 1 ? 'product' : 'products'}</span></div>
        <div class="row-head"><span>Ingredient</span><span>Description</span><span>Applications</span><span></span></div>
        ${shown.map(rowHTML).join('')}
        ${more}
      </section>`;
  }).join('');
}

function setCategory(cat) {
  if (cat !== 'all' && !CATEGORIES.some(c => c.id === cat)) cat = 'all';
  activeCat = cat;
  document.querySelectorAll('.side-btn').forEach(b => {
    const on = b.dataset.cat === cat;
    b.classList.toggle('active', on);
    b.setAttribute('aria-pressed', String(on));
    // On phones the categories scroll sideways: bring the selected one into view
    if (on) {
      const side = document.getElementById('category-list');
      if (side.scrollWidth > side.clientWidth) side.scrollLeft = b.offsetLeft - side.offsetLeft - 20;
    }
  });
  const url = new URL(window.location);
  if (cat === 'all') url.searchParams.delete('cat'); else url.searchParams.set('cat', cat);
  history.replaceState(null, '', url);
  render();
}

document.getElementById('ingredients-list').addEventListener('click', e => {
  const btn = e.target.closest('.show-all');
  if (btn) {
    setCategory(btn.dataset.cat);
    window.scrollTo({ top: document.querySelector('.catalog').offsetTop - 80, behavior: 'smooth' });
  }
});

const search = document.getElementById('product-search');
search.addEventListener('input', () => { query = search.value; render(); });
document.addEventListener('keydown', e => {
  if (e.key === '/' && document.activeElement !== search && !e.target.closest('input, textarea')) {
    e.preventDefault();
    search.focus();
  }
});

renderSidebar();
setCategory(getQueryParam('cat') || 'all');
