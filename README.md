# PKABOT — Site Comercial Oficial

Repositório oficial da landing page comercial do **PKABOT**, ferramenta de automação desenvolvida para **Poke Alliance Online**.

## 📁 Estrutura do Repositório

```text
├── index.html            # Página principal (HTML5 semântico + SEO + Open Graph)
├── css/
│   └── style.css         # Identidade visual Gaming Dark Mode (Roxo Neon & Azul Elétrico)
├── js/
│   ├── config.js         # Configuração central (preço, vídeo, contactos, textos e FAQ)
│   └── main.js           # Controlador de interface, menu mobile, FAQ e modais
├── assets/
│   ├── icons/
│   │   └── favicon.svg   # Logotipo vetorial PKABOT
│   └── images/           # Diretório para capturas de ecrã reais da interface
├── _headers              # Cabeçalhos de segurança e cache para Cloudflare Pages
├── robots.txt            # Diretivas de indexação SEO
└── .gitignore            # Regras de exclusão de segurança
```

## 🚀 Configuração no Cloudflare Pages (via GitHub)

Quando este repositório contém diretamente os ficheiros da pasta `website/`:
- **Framework preset**: `None`
- **Build command**: *(deixar vazio)*
- **Build output directory**: `/`

*(Se o repositório tiver a pasta `website/` dentro da raiz, defina **Build output directory** como `website`).*
