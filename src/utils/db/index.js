import { readFileSync, writeFileSync } from 'fs';

const dbFile = 'db.json';

export async function getDB() {
  const dbText = readFileSync(dbFile, 'utf8');
  return JSON.parse(dbText);
}

export async function saveDB(db) {
  writeFileSync(dbFile, JSON.stringify(db, null, 2), 'utf8');
}