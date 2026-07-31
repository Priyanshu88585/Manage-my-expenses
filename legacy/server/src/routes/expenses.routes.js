import { Router } from 'express';
import {
  getExpenses,
  createExpense,
  removeExpense,
  getExpenseTotal,
} from '../controllers/expenses.controller.js';

const router = Router();

// GET /expenses/total must come before /expenses/:id to avoid conflict
router.get('/total', getExpenseTotal);
router.get('/', getExpenses);
router.post('/', createExpense);
router.delete('/:id', removeExpense);

export default router;
