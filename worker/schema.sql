CREATE TABLE IF NOT EXISTS orders (
 id TEXT PRIMARY KEY, email TEXT NOT NULL,
 method TEXT NOT NULL CHECK (method IN ('pix','card')),
 amount_cents INTEGER NOT NULL CHECK (amount_cents=1000),
 status TEXT NOT NULL, provider_id TEXT, created_at TEXT NOT NULL, paid_at TEXT
);
CREATE INDEX IF NOT EXISTS orders_status_created_at ON orders(status,created_at);