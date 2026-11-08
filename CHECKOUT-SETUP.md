# Checkout do PKABOT: Pix Mercado Pago e Stripe

O Worker publica o site e as rotas de checkout a partir desta configuração Wrangler. A licença custa R$ 10,00; credenciais nunca são expostas ao navegador.

## Conectar ao Worker existente

1. Confirme que o projeto Cloudflare se chama `pka-bot` (o valor `name` em `wrangler.toml` precisa corresponder ao Worker que publica `pka-bot.nhojsilva.workers.dev`).
2. Em **Workers & Pages → pka-bot → Settings → Builds**, conecte `johnathangomesdev/PKA-BOT` e selecione `main` como branch de produção. O build/deploy deve usar Wrangler na raiz do repositório (sem comando de build separado). A configuração publica os arquivos estáticos da raiz e executa `worker/index.js` para as rotas `/api/*`.
3. Crie um banco D1. Aplique o esquema com `wrangler d1 execute NOME_DO_BANCO --remote --file=worker/schema.sql`.
4. No Worker, adicione o binding D1 com o nome **DB** apontando para esse banco.
5. Configure variables `SITE_URL=https://pka-bot.nhojsilva.workers.dev` e `WORKER_URL=https://pka-bot.nhojsilva.workers.dev`.
6. Configure secrets `MP_ACCESS_TOKEN`, `MP_WEBHOOK_SECRET`, `STRIPE_SECRET_KEY` e `STRIPE_WEBHOOK_SECRET`.
7. Registre os webhooks dos provedores: Mercado Pago em `/api/webhooks/mercadopago`; Stripe em `/api/webhooks/stripe` para `checkout.session.completed`.
8. Dispare um novo deploy de produção da branch `main`. Abra `/api/checkout` com GET para conferir que a rota da API responde (GET deve dar 404 JSON, não uma página HTML).

O webhook do Mercado Pago valida a assinatura e consulta o pagamento na API antes de confirmar valor/moeda. O Stripe webhook valida a assinatura e o valor pago. Os pagamentos confirmados são gravados como `paid` na tabela D1. Se o binding D1 ou as variáveis de URL estiverem ausentes, a API responde com uma mensagem JSON explicando a configuração faltante.

**Entrega da licença:** este repositório ainda não contém o serviço que emite/envia as chaves do bot. Conecte a entrega ao status `paid` antes de vender automaticamente. A captura real está em `assets/images/pkabot-ui.jpg`.

## Teste separado do Pix

A página não listada `/teste-pagamento.html` cria uma cobrança Pix real de R$ 0,10, sem emitir licença. Ela grava os pedidos na tabela separada `checkout_test_orders`, preservando os pedidos do plano de R$ 10,00. A tabela é criada automaticamente na primeira tentativa e também está declarada em `worker/schema.sql`. Após pagar, o webhook marca o pedido de teste como `paid` no D1.

O teste de R$ 0,10 está disponível apenas por Pix. A Stripe exige valor mínimo de R$ 0,50 em BRL.
