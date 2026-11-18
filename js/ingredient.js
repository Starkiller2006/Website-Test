/* Ingredient detail page: reads ?name= from the URL and fills in the details from catalog-data.js */

(function () {
  const name = getQueryParam('name');
  const product = PRODUCTS.find(p => p.name === name);

  if (!product) {
    document.getElementById('ing-name').textContent = 'Ingredient not found';
    document.getElementById('ing-description').innerHTML =
      'We couldn\'t find that ingredient. <a href="products.html">Browse the full catalogue</a>.';
    document.querySelector('.ingredient-detail-main h3:nth-of-type(2)').style.display = 'none';
    return;
  }

  const cat = CATEGORIES.find(c => c.id === product.category) || { label: product.category, icon: '🧪' };
  document.title = `${product.name} — CAS Chemical LLC`;
  document.getElementById('ing-name').textContent = product.name;
  document.getElementById('ing-cat-tag').textContent = cat.label;
  document.getElementById('ing-icon').textContent = cat.icon;
  document.getElementById('ing-description').textContent = product.description;
  document.getElementById('ing-applications').textContent = product.applications;
  document.getElementById('ing-pricing').href = 'contact.html?product=' + encodeURIComponent(product.name);
  document.querySelector('.ingredient-back').href = 'products.html?cat=' + encodeURIComponent(product.category);
})();
