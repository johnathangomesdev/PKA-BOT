CREATE TABLE IF NOT EXISTS orders (
 id TEXT PRIMARY KEY,
 email TEXT NOT NULL,
 amount_brl REAL NOT NULL CHECK (amount_brl = 10),
 status TEXT NOT NULL CHECK (status IN ('pending','paid','failed','error')),
 provider TEXT NOT NULL CHECK (provider IN ('mercadopago','stripe')),
 provider_payment_id TEXT UNIQUE,
 created_at TEXT NOT NULL DEFAULT (datetime('now')),
 updated_at TEXT
);
CREATE INDEX IF NOT EXISTS orders_status_created_at ON orders(status,created_at);

CREATE TABLE IF NOT EXISTS checkout_test_orders (
 id TEXT PRIMARY KEY,
 email TEXT NOT NULL,
 amount_cents INTEGER NOT NULL CHECK (amount_cents = 10),
 status TEXT NOT NULL CHECK (status IN ('pending','paid','error')),
 provider TEXT NOT NULL CHECK (provider = 'mercadopago'),
 provider_payment_id TEXT UNIQUE,
 created_at TEXT NOT NULL DEFAULT (datetime('now')),
 updated_at TEXT
);
CREATE INDEX IF NOT EXISTS checkout_test_orders_status_created ON checkout_test_orders(status,created_at);
