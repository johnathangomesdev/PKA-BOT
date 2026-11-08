# Checkout do PKABOT: Pix Mercado Pago e Stripe

O site chama um Cloudflare Worker que cria cobranças de valor fixo (R$ 10,00). Nenhuma credencial é enviada ao navegador.

## Configuração
1. Crie D1 e aplique o esquema: `wrangler d1 execute NOME_DO_BANCO --remote --file=worker/schema.sql`.
2. Publique `worker/index.js` no Cloudflare Workers e configure binding D1 `DB`.
3. Configure variables `SITE_URL` (origem do site) e `WORKER_URL` (origem pública do Worker).
4. Configure secrets `MP_ACCESS_TOKEN`, `MP_WEBHOOK_SECRET`, `STRIPE_SECRET_KEY` e `STRIPE_WEBHOOK_SECRET`.
5. Registre os webhooks: Mercado Pago `/api/webhooks/mercadopago`, Stripe `/api/webhooks/stripe` (evento `checkout.session.completed`).
6. Em `js/config.js`, defina `checkoutApiUrl` como `https://SEU-WORKER.workers.dev/api/checkout` se o Worker não estiver no mesmo domínio.

O webhook do Mercado Pago verifica assinatura e consulta o pagamento na API antes de confirmar valor/moeda. O Stripe webhook também verifica assinatura e valor pago. Os pedidos confirmados são gravados como `paid` na tabela D1.

**Entrega da licença:** este repositório contém somente o site e não tem o serviço de licenciamento/emissão de chaves do bot. Conecte um processo de entrega ao status `paid` antes de vender automaticamente. A captura de tela também depende do print real, que ainda não foi enviado.