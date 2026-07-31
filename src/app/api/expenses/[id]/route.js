import { NextResponse } from 'next/server';
import { deleteExpense } from '@/features/expenses/services/expenses.service.js';

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    await deleteExpense(id);
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    if (error.message === 'Expense not found') {
      return NextResponse.json({ error: 'Expense not found' }, { status: 404 });
    }
    return NextResponse.json({ error: 'Failed to delete expense' }, { status: 500 });
  }
}
