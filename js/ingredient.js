/* Ingredient detail page: reads ?name= and fills the page from catalog-data.js */

(function () {
  const name = getQueryParam('name');
  const product = PRODUCTS.find(p => p.name === name);

  if (!product) {
    document.getElementById('ing-name').textContent = 'Ingredient not found';
    document.getElementById('crumb-name').textContent = 'Not found';
    document.getElementById('crumb-cat').style.display = 'none';
    document.getElementById('ing-cat-tag').style.display = 'none';
    document.getElementById('ing-description').innerHTML =
      'We couldn\'t find that ingredient. <a class="text-link" href="products.html">Browse the full catalogue</a>.';
    document.getElementById('apps-row').style.display = 'none';
    document.getElementById('related').style.display = 'none';
    return;
  }

  const cat = CATEGORIES.find(c => c.id === product.category) || { id: product.category, label: product.category };
  const catURL = 'products.html?cat=' + encodeURIComponent(cat.id);
  const contactURL = 'contact.html?product=' + encodeURIComponent(product.name);

  document.title = `${product.name} — Cas Chemical LLC`;
  document.getElementById('ing-name').textContent = product.name;
  document.getElementById('crumb-name').textContent = product.name;
  document.getElementById('crumb-cat').textContent = cat.label;
  document.getElementById('crumb-cat').href = catURL;
  document.getElementById('ing-cat-tag').textContent = cat.label;
  document.getElementById('ing-description').textContent = product.description;
  document.getElementById('quote-title').textContent = `Get a quote for ${product.name}`;
  document.getElementById('ing-pricing').href = contactURL;
  document.getElementById('ing-coa').href = contactURL;

  // Applications become chips, split on semicolons
  const apps = product.applications.replace(/\.$/, '').split(/;\s*/).filter(Boolean);
  document.getElementById('ing-applications').innerHTML = apps.map(a =>
    `<span class="chip"><span class="dot"></span>${escapeHTML(a.charAt(0).toUpperCase() + a.slice(1))}</span>`
  ).join('');

  // Related: up to three others from the same category
  const siblings = PRODUCTS.filter(p => p.category === product.category && p.name !== product.name);
  if (!siblings.length) {
    document.getElementById('related').style.display = 'none';
    return;
  }
  const related = siblings.slice(0, 3);
  document.getElementById('related-title').textContent = `More in ${cat.label}`;
  document.getElementById('related-all').textContent = `All ${siblings.length + 1} →`;
  document.getElementById('related-all').href = catURL;
  document.getElementById('related-grid').innerHTML = related.map(p => `
    <a class="rel-card" href="ingredient.html?name=${encodeURIComponent(p.name)}">
      <strong>${escapeHTML(p.name)}</strong>
      <p>${escapeHTML(p.description)}</p>
      <span class="use"><span class="use-label">Use in · </span>${escapeHTML(p.applications)}</span>
    </a>`).join('');
})();
