# Guia de Publicação no Cloudflare Pages — PKABOT

A pasta `website/` está 100% pronta e otimizada para publicação no **Cloudflare Pages**, sem necessidade de ferramentas de build complexas ou dependências externas.

---

## 1. Checklist Rápido Antes de Publicar (`website/js/config.js`)

Abra o ficheiro `website/js/config.js` e revise os itens comerciais quando estiver pronto:

1. **Preço da Assinatura de 30 Dias**:
   - Altere `pricing.priceValue` (ex.: `"49,90"`).
2. **Captura de Ecrã Real da Interface (Opcional)**:
   - Coloque um print real da janela do **PKABOT** em `website/assets/images/pkabot-ui.png` e preencha `hero.screenshotUrl: "assets/images/pkabot-ui.png"`.
3. **Vídeo Demonstrativo do YouTube (Opcional)**:
   - Preencha `demo.youtubeVideoIdOrUrl` com o ID ou link do vídeo no YouTube.
4. **Contactos e Redes Sociais**:
   - Atualize `contact.supportEmail` e os links em `contact.socials` (`discord`, `youtube`, `instagram`, `telegram`).
5. **Revisão das Políticas Provisórias do FAQ / Termos**:
   - Revise os itens marcados com `provisional: true` em `faq` e mude para `provisional: false` quando definidos.

---

## 2. Como Publicar no Cloudflare Pages

### Opção A — Upload Direto (Mais Rápido, sem Git)
1. Aceda ao painel da Cloudflare: **Workers & Pages** → **Create application** → **Pages** → **Upload assets**.
2. Dê um nome ao projeto (ex.: `pkabot-oficial`).
3. Arraste a pasta **`website`** (contendo `index.html`, `css/`, `js/`, `assets/`, `_headers`, `robots.txt`).
   - *Nota: Antes do upload direto, pode remover este ficheiro `DEPLOY-CLOUDFLARE.md` ou mantê-lo fora do pacote final se preferir.*
4. Clique em **Deploy site**.

### Opção B — Integração com GitHub / GitLab
Caso conecte um repositório Git ao Cloudflare Pages:
- **Framework preset**: `None`
- **Build command**: *(deixar em branco)*
- **Build output directory**: `website` (ou `/` caso o repositório contenha apenas o conteúdo de `website/`).

---

## 3. Segurança Verificada
- Nenhum instalador (`.exe`), código Python (`.py`), chave de API ou ficheiro `.env` está incluído dentro da pasta `website/`.
- O ficheiro `_headers` aplica proteção automática contra *clickjacking* (`X-Frame-Options: DENY`), *MIME sniffing* (`X-Content-Type-Options: nosniff`) e políticas de cache otimizadas na rede global da Cloudflare.
