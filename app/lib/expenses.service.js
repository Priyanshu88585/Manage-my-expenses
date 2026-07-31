import { readData, writeData } from './storage.js';
import { generateId } from './id.js';
import { validateExpense } from './expense.validator.js';

/**
 * Get all expenses, optionally filtered by category.
 * @param {string} [category] - Optional category to filter by
 * @returns {Promise<Array>}
 */
export async function getAllExpenses(category) {
  const expenses = await readData();
  if (category) {
    return expenses.filter(
      (e) => e.category.toLowerCase() === category.toLowerCase()
    );
  }
  return expenses;
}

/**
 * Add a new expense.
 * @param {object} data - { title, amount, category, date }
 * @returns {Promise<object>} The created expense with generated id
 * @throws {Error} If validation fails (error.statusCode = 400)
 */
export async function addExpense(data) {
  const { valid, errors } = validateExpense(data);
  if (!valid) {
    const err = new Error(errors.join(' '));
    err.statusCode = 400;
    throw err;
  }

  const expenses = await readData();

  const newExpense = {
    id: generateId(),
    title: data.title.trim(),
    amount: Number(data.amount),
    category: data.category.trim(),
    date: data.date,
  };

  expenses.push(newExpense);
  await writeData(expenses);

  return newExpense;
}

/**
 * Delete an expense by ID.
 * @param {string} id - The expense ID
 * @returns {Promise<void>}
 * @throws {Error} If expense not found (error.statusCode = 404)
 */
export async function deleteExpense(id) {
  const expenses = await readData();
  const index = expenses.findIndex((e) => e.id === id);

  if (index === -1) {
    const err = new Error('Expense not found.');
    err.statusCode = 404;
    throw err;
  }

  expenses.splice(index, 1);
  await writeData(expenses);
}

/**
 * Calculate total expense amount, optionally by category.
 * @param {string} [category] - Optional category to filter by
 * @returns {Promise<object>} { total } or { category, total }
 */
export async function getTotal(category) {
  const expenses = await readData();

  if (category) {
    const filtered = expenses.filter(
      (e) => e.category.toLowerCase() === category.toLowerCase()
    );
    const total = filtered.reduce((sum, e) => sum + e.amount, 0);
    return { category, total: Math.round(total * 100) / 100 };
  }

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  return { total: Math.round(total * 100) / 100 };
}
