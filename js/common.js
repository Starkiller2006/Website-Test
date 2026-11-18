/* Shared helpers used by every page */

function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[ch]));
}

function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}
