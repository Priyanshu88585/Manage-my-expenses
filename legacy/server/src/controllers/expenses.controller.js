import {
  getAllExpenses,
  addExpense,
  deleteExpense,
  getTotal,
} from '../services/expenses.service.js';

/**
 * GET /expenses
 * Optional query: ?category=
 */
export async function getExpenses(req, res, next) {
  try {
    const { category } = req.query;
    const expenses = await getAllExpenses(category);
    res.status(200).json(expenses);
  } catch (err) {
    next(err);
  }
}

/**
 * POST /expenses
 * Body: { title, amount, category, date }
 */
export async function createExpense(req, res, next) {
  try {
    const expense = await addExpense(req.body);
    res.status(201).json(expense);
  } catch (err) {
    next(err);
  }
}

/**
 * DELETE /expenses/:id
 */
export async function removeExpense(req, res, next) {
  try {
    await deleteExpense(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

/**
 * GET /expenses/total
 * Optional query: ?category=
 */
export async function getExpenseTotal(req, res, next) {
  try {
    const { category } = req.query;
    const result = await getTotal(category);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}
