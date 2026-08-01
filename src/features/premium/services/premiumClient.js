const API_BASE = '/api/premium';

/**
 * Fetch all premium features data (budgets, goals, recurring, netWorthBase)
 */
export async function fetchPremiumData() {
  const res = await fetch(API_BASE);
  if (!res.ok) throw new Error('Failed to fetch premium data');
  return res.json();
}

/**
 * Add a new budget to premium data.
 */
export async function addBudget(payload) {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type: 'budget', payload })
  });
  if (!res.ok) throw new Error('Failed to add budget');
  return res.json();
}

/**
 * Add a new savings goal to premium data.
 */
export async function addGoal(payload) {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type: 'goal', payload })
  });
  if (!res.ok) throw new Error('Failed to add goal');
  return res.json();
}

/**
 * Update an existing savings goal.
 */
export async function updateGoal(payload) {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type: 'updateGoal', payload })
  });
  if (!res.ok) throw new Error('Failed to update goal');
  return res.json();
}

/**
 * Delete a savings goal by id.
 */
export async function deleteGoal(id) {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type: 'deleteGoal', payload: { id } })
  });
  if (!res.ok) throw new Error('Failed to delete goal');
  return res.json();
}

/**
 * Update an existing budget.
 */
export async function updateBudget(payload) {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type: 'updateBudget', payload })
  });
  if (!res.ok) throw new Error('Failed to update budget');
  return res.json();
}

/**
 * Delete a budget by id.
 */
export async function deleteBudget(id) {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type: 'deleteBudget', payload: { id } })
  });
  if (!res.ok) throw new Error('Failed to delete budget');
  return res.json();
}

/**
 * Update net worth base.
 */
export async function updateNetWorth(payload) {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type: 'netWorthBase', payload })
  });
  if (!res.ok) throw new Error('Failed to update net worth');
  return res.json();
}

/**
 * Add a new recurring expense.
 */
export async function addRecurringExpense(payload) {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type: 'addRecurring', payload })
  });
  if (!res.ok) throw new Error('Failed to add recurring expense');
  return res.json();
}

/**
 * Update an existing recurring expense.
 */
export async function updateRecurringExpense(payload) {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type: 'updateRecurring', payload })
  });
  if (!res.ok) throw new Error('Failed to update recurring expense');
  return res.json();
}

/**
 * Delete a recurring expense by id.
 */
export async function deleteRecurringExpense(id) {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type: 'deleteRecurring', payload: { id } })
  });
  if (!res.ok) throw new Error('Failed to delete recurring expense');
  return res.json();
}
