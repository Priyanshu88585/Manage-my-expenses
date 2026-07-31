/**
 * Validate expense input data.
 * @param {object} data - The expense data to validate
 * @returns {{ valid: boolean, errors: string[] }}
 */
export function validateExpense(data) {
  const errors = [];

  if (!data.title || typeof data.title !== 'string' || data.title.trim().length === 0) {
    errors.push('Title is required and must be a non-empty string.');
  }

  if (data.amount === undefined || data.amount === null) {
    errors.push('Amount is required.');
  } else if (typeof data.amount !== 'number' || isNaN(data.amount)) {
    errors.push('Amount must be a valid number.');
  } else if (data.amount <= 0) {
    errors.push('Amount must be greater than 0.');
  }

  if (!data.category || typeof data.category !== 'string' || data.category.trim().length === 0) {
    errors.push('Category is required and must be a non-empty string.');
  }

  if (!data.date || typeof data.date !== 'string') {
    errors.push('Date is required and must be a string.');
  } else {
    const parsed = new Date(data.date);
    if (isNaN(parsed.getTime())) {
      errors.push('Date must be a valid date string (e.g., YYYY-MM-DD).');
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
