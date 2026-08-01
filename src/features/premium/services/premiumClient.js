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
