/* ============================================================
   APOIARIS E-BOOKS — main.js
   ============================================================ */

/* ---------- MENU MOBILE ---------- */
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('open');
}

// Fecha o menu ao clicar em um link
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('navLinks')?.classList.remove('open');
    });
  });

  // Marca o link ativo de acordo com a página atual
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // ---------- FAQ ACCORDION ----------
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Fecha todos
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

      // Abre o clicado (se não estava aberto)
      if (!isOpen) item.classList.add('open');
    });
  });

  // ---------- FORMULÁRIO DE CONTATO (Formspree) ----------
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('.btn-submit');
      btn.textContent = 'Enviando…';
      btn.disabled = true;

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          form.style.display = 'none';
          document.getElementById('formSuccess').style.display = 'block';
        } else {
          btn.textContent = 'Erro ao enviar. Tente novamente.';
          btn.disabled = false;
        }
      } catch {
        btn.textContent = 'Erro de conexão. Tente novamente.';
        btn.disabled = false;
      }
    });
  }
});
