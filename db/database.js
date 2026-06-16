import * as SQLite from 'expo-sqlite'

let db

export async function initDatabase() {
    db = await SQLite.openDatabaseAsync('expenses.db');

    await db.execAsync(`
    CREATE TABLE IF NOT EXISTS expenses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      amount REAL NOT NULL,
      category TEXT NOT NULL,
      note TEXT,
      date TEXT NOT NULL
    );
  `);

  console.log('Database Initialized')
}


export async function AddExpense(amount , categroy, note, date) {
    const result = await db.runAsync(
         'INSERT INTO expenses (amount, category, note, date) VALUES (?, ?, ?, ?)',
    [amount, category, note, date]
    );
    return result.lastInsertRowId;
}

export async function getAllExpense() {
    const row = await db.getAllAsync('SELECT * FROM expenses ORDER BY date DESC');
    return row;
}

export async function deleteExpense(id) {
  await db.runAsync('DELETE FROM expenses WHERE id = ?', [id]);
}

export async function updateExpense(id, amount, category, note, date) {
  await db.runAsync(
    'UPDATE expenses SET amount = ?, category = ?, note = ?, date = ? WHERE id = ?',
    [amount, category, note, date, id]
  );
}

export async function getExpensesByCategory() {
    const row = db.getAllAsync(
        'SELECT category, SUM(amount) as total FROM expenses GROUP BY category'
    );
    return row;
}