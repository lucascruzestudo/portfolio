# Lucas Gomes Cruz - Portfólio Profissional

Site de portfólio pessoal desenvolvido com React, TypeScript e Tailwind CSS v4.

## 🎯 Objetivo

Portfólio profissional de página única (SPA) projetado para comunicar autoridade técnica, experiência real e disponibilidade em menos de 10 segundos.

## 🚀 Tecnologias

- React 18
- TypeScript
- Tailwind CSS v4
- Vite
- Lucide React (ícones)

## 📦 Instalação e Uso

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 🌐 Deploy

### GitHub Pages

1. Instale o gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Adicione ao `package.json`:
```json
{
  "homepage": "https://lucasgomescruz.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Configure o `vite.config.ts` com a base correta:
```typescript
export default defineConfig({
  base: '/portfolio/', // nome do repositório
  // ...
});
```

4. Execute:
```bash
npm run deploy
```

### Vercel

1. Instale a CLI da Vercel:
```bash
npm install -g vercel
```

2. Execute:
```bash
vercel
```

### Netlify

1. Conecte seu repositório GitHub ao Netlify
2. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`

## 📝 Personalização

### Cores

Edite as variáveis CSS em `/src/styles/theme.css`:

```css
:root {
  --navy: #0A1628;
  --accent: #3B82F6;
  /* ... */
}
```

### Conteúdo

Os dados do portfólio estão nos componentes em `/src/app/components/`.

## 📄 Licença

© 2024 Lucas Gomes Cruz. Todos os direitos reservados.