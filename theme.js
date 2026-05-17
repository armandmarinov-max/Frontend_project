// ── ROYAL GAMBIT THEME SYSTEEM ──
// Voeg dit bestand toe aan ELKE html pagina: <script src="theme.js"></script>
// Zet het VOOR andere scripts in de <head> of bovenaan <body>

(function () {
  // Pas thema onmiddellijk toe om flikkering te voorkomen
  const saved = localStorage.getItem('royal-gambit-theme') || 'night';
  if (saved === 'day') {
    document.documentElement.classList.add('day');
  }
})();

// Wacht tot DOM geladen is voor de knop
document.addEventListener('DOMContentLoaded', function () {
  // Zet class ook op body (sommige CSS gebruikt body.day)
  const saved = localStorage.getItem('royal-gambit-theme') || 'night';
  if (saved === 'day') {
    document.body.classList.add('day');
  }

  // Zoek de toggle knop als die bestaat op deze pagina
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    updateToggleUI(saved);
    btn.addEventListener('click', function () {
      const isDay = document.body.classList.contains('day');
      applyTheme(isDay ? 'night' : 'day');
    });
  }
});

function applyTheme(theme) {
  if (theme === 'day') {
    document.body.classList.add('day');
    document.documentElement.classList.add('day');
  } else {
    document.body.classList.remove('day');
    document.documentElement.classList.remove('day');
  }
  localStorage.setItem('royal-gambit-theme', theme);
  updateToggleUI(theme);
}

function updateToggleUI(theme) {
  const icon  = document.getElementById('theme-icon');
  const label = document.getElementById('theme-label');
  if (icon)  icon.textContent  = theme === 'day' ? '🌙' : '☀️';
  if (label) label.textContent = theme === 'day' ? 'Nacht' : 'Dag';
}
