// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// =========================================================
// Plans rendering
// =========================================================
(function renderPlansSection() {
  const container = document.getElementById("plans-container");
  if (!container || typeof PLANS === "undefined") return;

  const order = (typeof CATEGORY_ORDER !== "undefined" && CATEGORY_ORDER) || [];
  const groups = new Map();
  order.forEach((c) => groups.set(c, []));
  PLANS.forEach((p) => {
    if (!groups.has(p.category)) groups.set(p.category, []);
    groups.get(p.category).push(p);
  });

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    })[c]);

  let html = "";
  for (const [category, items] of groups) {
    if (!items.length) continue;
    html += `<section class="plan-group" data-category="${esc(category.toLowerCase())}">`;
    html += `<h3 class="plan-group__title"><span class="plan-group__name">${esc(category)}</span><span class="plan-group__count">${items.length}</span></h3>`;
    html += `<ul class="plans">`;
    for (const p of items) {
      const searchBlob = esc((p.name + " " + p.category + " " + p.specs).toLowerCase());
      if (p.comingSoon) {
        html += `
        <li class="plan plan--coming-soon" data-search="${searchBlob}">
          <div class="plan__link" aria-disabled="true">
            <span class="plan__name">${esc(p.name)}</span>
            <span class="plan__specs">${esc(p.specs)}</span>
            <span class="plan__cta">Coming Soon</span>
          </div>
        </li>`;
      } else {
        html += `
        <li class="plan" data-search="${searchBlob}">
          <a class="plan__link" href="${esc(p.href)}" target="_blank" rel="noopener">
            <span class="plan__name">${esc(p.name)}</span>
            <span class="plan__specs">${esc(p.specs)}</span>
            <span class="plan__cta">Download PDF <span aria-hidden="true">&rarr;</span></span>
          </a>
        </li>`;
      }
    }
    html += `</ul></section>`;
  }
  container.innerHTML = html;

  // --- Search ---
  const searchInput = document.getElementById("plans-search");
  const emptyMsg = document.getElementById("plans-empty");
  if (!searchInput) return;

  searchInput.addEventListener("input", () => {
    const q = searchInput.value.trim().toLowerCase();
    const plans = container.querySelectorAll(".plan");
    let visible = 0;
    plans.forEach((p) => {
      const match = !q || p.dataset.search.includes(q);
      p.hidden = !match;
      if (match) visible++;
    });
    container.querySelectorAll(".plan-group").forEach((g) => {
      const any = Array.from(g.querySelectorAll(".plan")).some((p) => !p.hidden);
      g.hidden = !any;
    });
    if (emptyMsg) emptyMsg.hidden = visible > 0;
  });
})();


