import { NextResponse } from 'next/server';
import { removeExpense } from '../../../lib/expenses.service.js';

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    await removeExpense(id);
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    if (error.message === 'Expense not found') {
      return NextResponse.json({ error: 'Expense not found' }, { status: 404 });
    }
    return NextResponse.json({ error: 'Failed to delete expense' }, { status: 500 });
  }
}
