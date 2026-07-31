import { jest } from '@jest/globals';
import { getAllExpenses, addExpense, deleteExpense, getTotal } from '../src/features/expenses/services/expenses.service.js';
import { readData, writeData } from '../src/features/expenses/services/storage.js';
import { join } from 'path';

// Clean data file before and after tests
const TEST_DATA_FILE = join(process.cwd(), 'data', 'expenses.json');

describe('Expenses Service Unit Tests', () => {
  beforeEach(async () => {
    // Reset local data store
    await writeData([]);
  });

  afterAll(async () => {
    // Clean up
    await writeData([]);
  });

  it('should add a new expense successfully', async () => {
    const expense = await addExpense({
      title: 'Office Supplies',
      amount: 1500,
      category: 'Office',
      date: '2026-08-01',
    });

    expect(expense).toHaveProperty('id');
    expect(expense.title).toBe('Office Supplies');
    expect(expense.amount).toBe(1500);
    expect(expense.category).toBe('Office');
    expect(expense.date).toBe('2026-08-01');

    const all = await getAllExpenses();
    expect(all.length).toBe(1);
    expect(all[0].id).toBe(expense.id);
  });

  it('should validate expense properties properly', async () => {
    // Invalid amount
    await expect(addExpense({
      title: 'Lunch',
      amount: -100,
      category: 'Food',
      date: '2026-08-01'
    })).rejects.toThrow();

    // Missing title
    await expect(addExpense({
      title: '',
      amount: 100,
      category: 'Food',
      date: '2026-08-01'
    })).rejects.toThrow();
  });

  it('should filter expenses by category', async () => {
    await addExpense({ title: 'Lunch', amount: 500, category: 'Food', date: '2026-08-01' });
    await addExpense({ title: 'Server Hosting', amount: 8000, category: 'Infrastructure', date: '2026-08-01' });
    await addExpense({ title: 'Dinner', amount: 1200, category: 'Food', date: '2026-08-02' });

    const foodExpenses = await getAllExpenses('Food');
    expect(foodExpenses.length).toBe(2);
    expect(foodExpenses.every(e => e.category === 'Food')).toBe(true);

    const infraExpenses = await getAllExpenses('Infrastructure');
    expect(infraExpenses.length).toBe(1);
  });

  it('should calculate overall and category totals correctly', async () => {
    await addExpense({ title: 'Lunch', amount: 500.50, category: 'Food', date: '2026-08-01' });
    await addExpense({ title: 'Server Hosting', amount: 8000, category: 'Infrastructure', date: '2026-08-01' });
    await addExpense({ title: 'Dinner', amount: 1200, category: 'Food', date: '2026-08-02' });

    // Overall total
    const overall = await getTotal();
    expect(overall.total).toBe(9700.50);

    // Food category total
    const foodTotal = await getTotal('Food');
    expect(foodTotal.total).toBe(1700.50);

    // Non-existent category total
    const emptyTotal = await getTotal('Travel');
    expect(emptyTotal.total).toBe(0);
  });

  it('should delete an expense by ID', async () => {
    const expense = await addExpense({
      title: 'Lunch',
      amount: 500,
      category: 'Food',
      date: '2026-08-01'
    });

    const allBefore = await getAllExpenses();
    expect(allBefore.length).toBe(1);

    await deleteExpense(expense.id);

    const allAfter = await getAllExpenses();
    expect(allAfter.length).toBe(0);
  });

  it('should throw error when deleting non-existent ID', async () => {
    await expect(deleteExpense('non-existent-id')).rejects.toThrow('Expense not found.');
  });
});
