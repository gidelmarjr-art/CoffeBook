# CoffeBook

Landing page e cardápio de uma cafeteria/livraria **fictícia**, feitos em React + Vite + React Router como projeto de portfólio.
Todos os nomes, textos, preços, endereços e depoimentos são inventados. As imagens do cardápio são ilustrações geradas em código.

## Rodar
```bash
npm install
npm run dev      # desenvolvimento
npm run build    # produção (gera dist/)
```

## Onde editar
- `src/data/site.js`: nome, horários, endereço, links, estatísticas e eventos. `src/utils/hours.js`: lógica do "Aberto agora" (mesmos horários).
- `src/data/menu.js`: cardápio (legenda dos blocos no topo do arquivo). `src/data/faq.js`: perguntas frequentes.
- `src/styles/theme.css`: cores (cor principal `--brand`; direção do degradê em `--hero-gradient`).
- `src/assets/menu/*.webp`: imagens do cardápio. Troque por fotos de bancos gratuitos (Unsplash, Pexels), mantendo o nome do arquivo.
- `src/assets/logo-*.png` e `public/favicon.png`: logo fictícia do CoffeBook.

## Estrutura
`src/components/<Nome>/<Nome>.jsx` + `<Nome>.css`, páginas em `src/pages/`, estilos compartilhados em `src/styles/`.
Hospedagem: `vercel.json` e `public/_redirects` fazem o `/cardapio` funcionar ao recarregar.
