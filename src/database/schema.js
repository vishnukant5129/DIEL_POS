export const SCHEMA_SQL = `
PRAGMA journal_mode = WAL;
CREATE TABLE IF NOT EXISTS materials (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  eps_r REAL,
  eps_r_text TEXT NOT NULL,
  tan_delta REAL,
  tan_delta_text TEXT NOT NULL,
  frequency TEXT NOT NULL,
  conditions TEXT NOT NULL,
  description TEXT NOT NULL,
  applications TEXT NOT NULL,
  reference TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS meta (
  key TEXT PRIMARY KEY NOT NULL,
  value TEXT NOT NULL
);
`;
