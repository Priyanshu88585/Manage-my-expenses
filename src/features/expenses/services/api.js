const API_BASE = '/api/expenses';

/**
 * Fetch all expenses, optionally filtered by category.
 */
export async function fetchExpenses(category) {
  const url = category ? `${API_BASE}?category=${encodeURIComponent(category)}` : API_BASE;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch expenses');
  return res.json();
}

/**
 * Fetch expense total, optionally by category.
 */
export async function fetchTotal(category) {
  const url = category
    ? `${API_BASE}/total?category=${encodeURIComponent(category)}`
    : `${API_BASE}/total`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch total');
  return res.json();
}

/**
 * Create a new expense.
 */
export async function createExpense(data) {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Failed to create expense');
  }
  return res.json();
}

/**
 * Delete an expense by ID.
 */
export async function deleteExpense(id) {
  const res = await fetch(`${API_BASE}/${id}`, { method: 'DELETE' });
  if (!res.ok) {
    throw new Error('Failed to delete expense');
  }
}

/**
 * Update an existing expense.
 */
export async function updateExpense(id, data) {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Failed to update expense');
  }
  return res.json();
}

/**
 * Bulk delete expenses.
 */
export async function bulkDeleteExpenses(ids) {
  const res = await fetch(`${API_BASE}/bulk`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ids }),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Failed to bulk delete expenses');
  }
}
