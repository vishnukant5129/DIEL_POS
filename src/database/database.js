import * as SQLite from 'expo-sqlite';
import { DB_NAME } from '../constants/appConfig';
import { SCHEMA_SQL } from './schema';
import { MATERIALS_SEED } from './materialsSeed';

let dbPromise;

export async function getDb() {
  if (!dbPromise) dbPromise = SQLite.openDatabaseAsync(DB_NAME);
  return dbPromise;
}

export async function initDatabase() {
  const db = await getDb();
  await db.execAsync(SCHEMA_SQL);
  const row = await db.getFirstAsync('SELECT COUNT(*) AS count FROM materials');
  if (!row || row.count === 0) {
    await db.withTransactionAsync(async () => {
      for (const item of MATERIALS_SEED) {
        await db.runAsync(
          `INSERT INTO materials
          (name, category, eps_r, eps_r_text, tan_delta, tan_delta_text, frequency, conditions, description, applications, reference)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [item.name, item.category, item.eps_r, item.eps_r_text, item.tan_delta, item.tan_delta_text,
            item.frequency, item.conditions, item.description, item.applications, item.reference]
        );
      }
    });
  }
  return db;
}

export async function getMaterialCount() {
  const db = await getDb();
  const row = await db.getFirstAsync('SELECT COUNT(*) AS count FROM materials');
  return row?.count ?? 0;
}

export async function getMaterials({ search = '', category = 'All' } = {}) {
  const db = await getDb();
  const term = `%${search.trim()}%`;
  if (category !== 'All') {
    return db.getAllAsync(
      'SELECT * FROM materials WHERE (name LIKE ? OR category LIKE ?) AND category = ? ORDER BY name COLLATE NOCASE',
      [term, term, category]
    );
  }
  return db.getAllAsync(
    'SELECT * FROM materials WHERE name LIKE ? OR category LIKE ? ORDER BY name COLLATE NOCASE',
    [term, term]
  );
}

export async function getMaterialById(id) {
  const db = await getDb();
  return db.getFirstAsync('SELECT * FROM materials WHERE id = ?', [id]);
}
