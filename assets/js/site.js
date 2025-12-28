(function () {
  function qs(sel, el) {
    return (el || document).querySelector(sel);
  }

  function qsa(sel, el) {
    return Array.from((el || document).querySelectorAll(sel));
  }

  function initNav() {
    const toggle = qs('[data-nav-toggle]');
    const menu = qs('[data-nav-menu]');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
      const isOpen = menu.getAttribute('data-open') === 'true';
      menu.setAttribute('data-open', String(!isOpen));
      toggle.setAttribute('aria-expanded', String(!isOpen));
    });

    document.addEventListener('click', (e) => {
      const isOpen = menu.getAttribute('data-open') === 'true';
      if (!isOpen) return;
      if (menu.contains(e.target) || toggle.contains(e.target)) return;
      menu.setAttribute('data-open', 'false');
      toggle.setAttribute('aria-expanded', 'false');
    });
  }

  function initSearch() {
    const openBtn = qs('[data-search-open]');
    const modal = qs('[data-search-modal]');
    const closeBtns = qsa('[data-search-close]');
    const input = qs('[data-search-input]');
    const resultsEl = qs('[data-search-results]');

    if (!openBtn || !modal || !input || !resultsEl) return;

    let index = null;
    let indexLoading = null;
    let pendingQuery = '';
    let lastActiveElement = null;

    function isOpen() {
      return modal.getAttribute('aria-hidden') === 'false';
    }

    function isEditableTarget(el) {
      if (!el) return false;
      if (el.isContentEditable) return true;
      const tag = (el.tagName || '').toLowerCase();
      return tag === 'input' || tag === 'textarea' || tag === 'select';
    }

    function focusableElements() {
      return qsa(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
        modal
      ).filter((el) => !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length));
    }

    function setOpen(isOpen) {
      modal.setAttribute('aria-hidden', String(!isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
      if (isOpen) {
        lastActiveElement = document.activeElement;
        input.focus();
        if (!index && !indexLoading) {
          const indexUrl = window.__SEARCH_INDEX__ || '/search.json';
          resultsEl.innerHTML = '<div class="result"><div class="result__snippet">Loading…</div></div>';
          indexLoading = fetch(indexUrl, { cache: 'force-cache' })
            .then((r) => r.json())
            .then((data) => {
              index = data || [];
            })
            .catch(() => {
              index = [];
            })
            .finally(() => {
              indexLoading = null;
              if (pendingQuery) {
                const q = pendingQuery;
                pendingQuery = '';
                renderResults(q);
              }
            });
        }
      } else {
        input.value = '';
        resultsEl.innerHTML = '';
        if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
          lastActiveElement.focus();
        } else {
          openBtn.focus();
        }
      }
    }

    function esc(s) {
      return String(s).replace(/[&<>\"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    }

    function snippet(text, q) {
      const t = String(text || '').replace(/\s+/g, ' ').trim();
      if (!t) return '';
      const i = t.toLowerCase().indexOf(q.toLowerCase());
      if (i < 0) return t.slice(0, 160) + (t.length > 160 ? '…' : '');
      const start = Math.max(0, i - 60);
      const end = Math.min(t.length, i + 100);
      return (start > 0 ? '…' : '') + t.slice(start, end) + (end < t.length ? '…' : '');
    }

    function renderResults(q) {
      const query = q.trim();
      if (!query) {
        resultsEl.innerHTML = '';
        return;
      }

      const items = (index || [])
        .filter((it) => it && (it.title || it.content))
        .map((it) => ({
          title: it.title || it.url,
          url: it.url,
          content: it.content || ''
        }))
        .filter((it) => (it.title + ' ' + it.content).toLowerCase().includes(query.toLowerCase()))
        .slice(0, 10);

      if (items.length === 0) {
        resultsEl.innerHTML = '<div class="result"><div class="result__snippet">No matches.</div></div>';
        return;
      }

      resultsEl.innerHTML = items
        .map((it) => {
          return (
            '<div class="result">' +
            '<a href="' +
            esc(it.url) +
            '">' +
            esc(it.title) +
            '</a>' +
            '<div class="result__snippet">' +
            esc(snippet(it.content, query)) +
            '</div>' +
            '</div>'
          );
        })
        .join('');
    }

    openBtn.addEventListener('click', () => setOpen(true));
    closeBtns.forEach((b) => b.addEventListener('click', () => setOpen(false)));

    document.addEventListener('keydown', (e) => {
      if (!isOpen()) {
        if (
          e.key === '/' &&
          !e.metaKey &&
          !e.ctrlKey &&
          !e.altKey &&
          !isEditableTarget(document.activeElement)
        ) {
          e.preventDefault();
          setOpen(true);
          return;
        }

        if (
          (e.key === 'k' || e.key === 'K') &&
          (e.metaKey || e.ctrlKey) &&
          !e.altKey
        ) {
          e.preventDefault();
          setOpen(true);
          return;
        }

        return;
      }

      if (e.key === 'Escape') {
        setOpen(false);
        return;
      }

      if (e.key === 'Tab') {
        const focusables = focusableElements();
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement;

        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
          return;
        }
        if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });

    input.addEventListener('input', () => {
      if (!index && indexLoading) {
        pendingQuery = input.value;
        resultsEl.innerHTML = '<div class="result"><div class="result__snippet">Loading…</div></div>';
        return;
      }
      renderResults(input.value);
    });
  }

  function initCountdown() {
    const els = qsa('[data-countdown]');
    if (els.length === 0) return;

    function parseYMD(s) {
      const m = String(s || '').match(/^(\d{4})-(\d{2})-(\d{2})$/);
      if (!m) return null;
      return { y: Number(m[1]), mo: Number(m[2]) - 1, d: Number(m[3]) };
    }

    function isAoE(tz) {
      const t = String(tz || '').toLowerCase();
      return t.includes('aoe') || t.includes('anywhere on earth');
    }

    function endOfDay(dateStr, tz) {
      const parts = parseYMD(dateStr);
      if (!parts) return null;
      if (isAoE(tz)) {
        return new Date(Date.UTC(parts.y, parts.mo, parts.d + 1, 11, 59, 59));
      }
      return new Date(parts.y, parts.mo, parts.d, 23, 59, 59);
    }

    function formatDate(dateStr) {
      const parts = parseYMD(dateStr);
      if (!parts) return dateStr;
      try {
        return new Intl.DateTimeFormat(undefined, { year: 'numeric', month: 'short', day: 'numeric' }).format(
          new Date(parts.y, parts.mo, parts.d)
        );
      } catch {
        return dateStr;
      }
    }

    function pickNextDeadline(dates, tz) {
      const now = new Date();
      const exclude = /call for/i;

      const candidates = (dates || [])
        .filter((d) => d && d.label && d.date && !exclude.test(String(d.label)))
        .map((d) => ({ label: d.label, date: d.date, end: endOfDay(d.date, tz) }))
        .filter((d) => d.end && d.end.getTime() >= now.getTime())
        .sort((a, b) => a.end.getTime() - b.end.getTime());

      return candidates[0] || null;
    }

    function daysLeft(endDate) {
      const ms = endDate.getTime() - Date.now();
      return Math.max(0, Math.ceil(ms / 86400000));
    }

    function render(el) {
      let dates = [];
      try {
        dates = JSON.parse(el.getAttribute('data-deadlines') || '[]');
      } catch {
        dates = [];
      }

      const tz = el.getAttribute('data-timezone') || '';
      const next = pickNextDeadline(dates, tz);
      if (!next) {
        el.style.display = 'none';
        return;
      }

      const labelEl = qs('[data-countdown-label]', el);
      const dateEl = qs('[data-countdown-date]', el);
      const daysEl = qs('[data-countdown-days]', el);

      if (labelEl) labelEl.textContent = next.label;
      if (dateEl) dateEl.textContent = formatDate(next.date) + (isAoE(tz) ? ' (AoE)' : '');
      if (daysEl) daysEl.textContent = String(daysLeft(next.end));
    }

    els.forEach((el) => {
      render(el);
      window.setInterval(() => render(el), 60 * 1000);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initSearch();
    initCountdown();
  });
})();
