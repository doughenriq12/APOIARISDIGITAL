# 🚀 Apoiaris E-Books — Site Oficial

## Estrutura do Projeto

```
apoiaris-site/
├── index.html           ← Página inicial (Home)
├── quem-somos.html      ← Sobre a empresa
├── catalogo.html        ← Catálogo de e-books
├── contato.html         ← Formulário de contato + FAQ
├── css/
│   └── style.css        ← Todos os estilos
├── js/
│   └── main.js          ← Menu mobile, FAQ, formulário
└── assets/
    └── logos/           ← Arquivos de logo
        ├── logo-horizontal-transparente.png  ← usada na navbar e footer
        ├── logo-vertical.png                 ← usada na página Quem Somos
        └── logo-horizontal.png
```

---

## ✏️ Personalizações necessárias antes de publicar

### 1. WhatsApp
Substitua `5562999999999` pelo número real em todos os arquivos:
- `index.html` → linha com `wa.me/55...`
- `quem-somos.html` → footer
- `catalogo.html` → footer
- `contato.html` → `.contact-item` e botão WhatsApp

### 2. E-mail
Substitua `contato@apoiaris.com.br` pelo e-mail real.

### 3. Formulário de Contato (Formspree — gratuito)
1. Acesse https://formspree.io e crie uma conta gratuita
2. Crie um "New Form" e copie o ID (ex: `xkgbppnr`)
3. Em `contato.html`, substitua `SEU_ID_FORMSPREE`:
   ```html
   action="https://formspree.io/f/xkgbppnr"
   ```

### 4. Redes sociais
Em todos os footers, substitua os links `href="#"` pelos links reais do Instagram, Facebook etc.

### 5. Capas dos e-books (futuro)
Quando tiver as capas em PNG, coloque em `assets/ebooks/` e no `catalogo.html`
substitua o bloco `.ebook-cover-placeholder` por:
```html
<div class="ebook-cover">
  <img src="assets/ebooks/capa-transito.png" alt="101 Dicas de Sobrevivência no Trânsito" />
</div>
```

---

## 🌐 Como publicar gratuitamente (GitHub Pages)

1. Crie uma conta em https://github.com (gratuito)
2. Clique em "+ New repository"
3. Nome sugerido: `apoiaris-ebooks-site`
4. Marque "Public" e clique em "Create repository"
5. Faça upload de todos os arquivos (botão "uploading an existing file")
6. Vá em **Settings → Pages → Source: Deploy from a branch → main → / (root)**
7. Seu site ficará em: `https://SEU_USUARIO.github.io/apoiaris-ebooks-site`

### Domínio próprio (opcional, depois)
- Registre em https://registro.br (ex: `apoiaris.com.br` ~R$40/ano)
- No GitHub Pages → "Custom domain" → coloque seu domínio
- No painel do registro.br, configure o DNS conforme instruções do GitHub

---

## 🎨 Paleta de Cores (para referência)

| Nome      | Hex       | Uso                          |
|-----------|-----------|------------------------------|
| Navy      | `#1e2a4a` | Fundo navbar, hero, footer   |
| Teal      | `#2ec4b6` | Destaques, links, CTA        |
| Dourado   | `#c9a96e` | Acento, "Grupo Apoiaris ®"   |
| Off-white | `#f5f5f0` | Fundo geral das páginas      |
| Cinza     | `#6b7280` | Textos secundários           |

---

## 📞 Suporte

Dúvidas sobre o código? Me chame! Posso:
- Adicionar novas páginas (Política de Privacidade, Blog, etc.)
- Criar animações e efeitos visuais
- Integrar com o Google Analytics
- Otimizar para SEO (aparecer no Google)
- Adicionar chat de WhatsApp flutuante
