# LosBuenos Website 2026

Primeira build funcional do novo site institucional da LosBuenos.

## Stack
HTML, CSS e JavaScript puro, sem framework e preparado para GitHub Pages.

## Páginas
- Home
- Projetos
- Case Lis Semijoias
- Case Fabreck
- O que fazemos
- Como trabalhamos
- Sobre
- Los Pensa
- Contato / briefing
- 404

## Identidade
O projeto está preparado para usar:
- The National Bold em títulos
- Geomanist Regular em textos
- fundo predominantemente escuro
- ruído RGB
- efeito Dissolve em Canvas seguindo o cursor

## Configuração rápida
Edite `assets/js/config.js`:

```js
window.LOSBUENOS_CONFIG = {
  siteUrl: "https://seu-dominio.com.br",
  whatsapp: "5543XXXXXXXX",
  email: "contato@seu-dominio.com.br",
  instagram: "https://instagram.com/...",
  linkedin: "https://linkedin.com/...",
  microsoftFormsEmbedUrl: "URL_DO_EMBED",
  showreelYoutubeId: "ID_DO_VIDEO"
};
```

## Fontes
Coloque em `assets/fonts/`:
- `TheNational-Bold.otf`
- `Geomanist-Regular.otf`

As fontes não estão incluídas no repositório.

## Imagens
Veja `assets/images/ASSETS.md`.

Os placeholders mostram o caminho esperado de cada arquivo. Depois de colocar as imagens, troque os blocos placeholder por elementos `img` com o mesmo caminho.

Exemplo:

```html
<img class="project-media" src="assets/images/cases/lis/hero.webp" alt="Lis Semijoias">
```

Ajuste caminhos relativos conforme a página.

## Showreel
Cole o ID do vídeo do YouTube em `showreelYoutubeId`. A Home troca o placeholder automaticamente por um iframe do YouTube sem cookies.

## Microsoft Forms
Cole a URL do iframe do Forms em `microsoftFormsEmbedUrl`. A página de contato substitui o placeholder automaticamente pelo formulário.

## Depoimentos em áudio
Coloque os arquivos MP3 em `assets/audio/`. O player customizado está em `assets/js/audio-player.js`.

## Cases
Lis e Fabreck já têm estrutura de Desafio, Leitura/Estratégia e Resultado. Nenhuma métrica foi inventada. Insira apenas números validados.

## GitHub Pages
1. Settings
2. Pages
3. Source: Deploy from a branch
4. Branch: main
5. Folder: /(root)

Antes de usar domínio próprio, troque `SEU-DOMINIO.com.br` em:
- `robots.txt`
- `sitemap.xml`
- `assets/js/config.js`

## Próxima rodada
1. logo oficial
2. fontes
3. imagens reais
4. showreel
5. vídeos Raul e Luci
6. depoimentos e áudios reais
7. métricas validadas nos cases
8. contatos reais
9. Microsoft Forms
10. domínio próprio


## Staging
GitHub Pages ativado. URL de teste: https://raullosbuenos-prog.github.io/losbuenos-site/
