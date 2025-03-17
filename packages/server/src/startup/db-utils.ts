import { Database } from 'sqlite3';

export const createTables = (db: Database) => {
  const sql = `
    CREATE TABLE IF NOT EXISTS character (
      id INTEGER PRIMARY KEY,
      name TEXT,
      age INTEGER DEFAULT 0,
      health INTEGER DEFAULT 60,
      hunger INTEGER DEFAULT 70,
      happiness INTEGER DEFAULT 50,
      energy INTEGER DEFAULT 50
    )
  `;
  return new Promise((resolve, reject) => {
    return db.run(sql, (result: unknown, err: any) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

export const seedDatabase = (db: Database) => {
  const porcu = {
    id: 1,
    name: 'Porcu',
  };

  return new Promise((resolve, reject) =>
    db.run(
      `INSERT INTO character (id, name) VALUES (?, ?)`,
      Object.values(porcu),
      (result: unknown, err: any) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      },
    ),
  );
};
