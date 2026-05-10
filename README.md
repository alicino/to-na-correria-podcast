# Tô na Correria Podcast 🏃

Site oficial do **Tô na Correria Podcast** — podcast brasileiro sobre corrida de rua apresentado por Daniel Rech e Alicino Moura, gravado em Austin, Texas, EUA.

🌐 **[tonacorreria.com.br](https://tonacorreria.com.br)**

---

## Sobre o Podcast

Dois brasileiros apaixonados por corrida de rua, vivendo em Austin, Texas, trocando conversa sobre treino, esporte e vida ativa. Mais de 40 episódios publicados desde 2021.

**Apresentadores:**
- **Daniel Rech** — Educador Físico
- **Alicino Moura** — Corredor Amador

---

## Páginas

| Página | Arquivo | Descrição |
|---|---|---|
| Home | `index.html` | Landing page com últimos 3 episódios e plataformas |
| Sobre Nós | `sobre.html` | Perfil dos apresentadores + mapa do treino |
| Episódios | `episodios.html` | Lista paginada de todos os episódios (5 por página) |
| Eventos | `eventos.html` | Calendário de corridas em Austin, TX |
| Ouça o Podcast | `ouca.html` | Links para todas as plataformas + player Spotify |

---

## Stack

- **HTML5** semântico
- **CSS3** puro — variáveis CSS, grid, flexbox, animações
- **JavaScript** vanilla — sem frameworks, sem dependências
- **Google Fonts** — Inter + Outfit
- Totalmente estático — sem build step, sem backend

---

## Estrutura de Arquivos

```
/
├── index.html              # Home / Landing page
├── sobre.html              # Sobre os apresentadores
├── episodios.html          # Lista de episódios
├── eventos.html            # Agenda de corridas
├── ouca.html               # Plataformas de streaming
│
├── assets/
│   ├── css/
│   │   └── style.css       # Stylesheet global (dark/light mode)
│   └── img/
│       ├── podcast-logo.png
│       ├── favicon.jpg
│       ├── alicino-profile.jpg
│       ├── daniel-profile.png
│       ├── foto_efeito_juntos.jpeg
│       └── ep/
│           └── ep<num>-thumb.<ext>   # Thumbnails dos episódios
│
├── episodios.md            # Fonte de dados dos episódios
└── events.md               # Fonte de dados dos eventos
```

---

## Como Rodar Localmente

Por ser um site estático puro, basta abrir os arquivos diretamente no navegador:

```bash
# Clone o repositório
git clone https://github.com/<seu-usuario>/to-na-correria-podcast.git
cd to-na-correria-podcast

# Abrir no navegador (macOS)
open index.html

# Ou use um servidor local simples com Python
python3 -m http.server 8000
# Acesse: http://localhost:8000
```

> **Dica:** Para melhor experiência de desenvolvimento, use a extensão **Live Server** no VS Code.

---

## Deploy — GitHub Pages

O site é hospedado diretamente pelo **GitHub Pages** via branch `main`.

### Configuração inicial

1. Vá em **Settings → Pages** no repositório
2. Em **Source**, selecione `Deploy from a branch`
3. Selecione a branch `main` e pasta `/ (root)`
4. Clique em **Save**

O site estará disponível em `https://<usuario>.github.io/<repositorio>/` em alguns minutos.

### Atualizar o site

```bash
git add .
git commit -m "Atualizar conteúdo"
git push origin main
```

O GitHub Pages faz o deploy automaticamente a cada push.

---

## Funcionalidades

- **Dark / Light Mode** — toggle no canto superior direito da navbar, preferência salva no `localStorage`
- **Responsivo** — Mobile-first, compatível com todos os tamanhos de tela
- **Paginação de episódios** — 5 episódios por página com navegação
- **Thumbnails** dos episódios na home e na listagem completa
- **Player Spotify** embutido na página de plataformas
- **Countdown dinâmico** de eventos de corrida
- **SEO** — meta tags, Open Graph e Twitter Cards em todas as páginas
- **Acessibilidade** — `aria-label`, roles semânticos, skip links

---

## Plataformas

| Plataforma | Link |
|---|---|
| 🟢 Spotify | [open.spotify.com/show/1ufB0VHLAmanOaUhFY3Z2S](https://open.spotify.com/show/1ufB0VHLAmanOaUhFY3Z2S) |
| 🍎 Apple Podcasts | [podcasts.apple.com](https://podcasts.apple.com/us/podcast/t%C3%B4-na-correria-podcast/id1588172818) |
| 🎵 Amazon Music | [music.amazon.com](https://music.amazon.com/podcasts/84a8bac8-2711-4f31-a51f-ec71f253387c/t%C3%B4-na-correria-podcast) |
| 🎶 Deezer | [deezer.com/br/show/3085892](https://www.deezer.com/br/show/3085892) |
| 🎙️ Goodpods | [goodpods.com](https://goodpods.com/pt/podcasts/t%C3%B4-na-correria-podcast-407498) |

📡 **RSS Feed:** [anchor.fm/s/6d5ec654/podcast/rss](https://anchor.fm/s/6d5ec654/podcast/rss)

---

## Redes Sociais

- Instagram: [@tonacorreriapodcast](https://www.instagram.com/tonacorreriapodcast/)
- Facebook: [tonacorreriapodcast](https://www.facebook.com/tonacorreriapodcast)
- Strava: [Clube TnC](https://www.strava.com/clubs/986647)

---

## Contato

📧 contato@tonacorreria.com.br

---

## Licença

© 2021–2026 Tô na Correria Podcast. Todos os direitos reservados.
