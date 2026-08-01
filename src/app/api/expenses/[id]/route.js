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

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const body = await request.json();
    
    // Import dynamically or ensure it's imported at the top
    const { updateExpense } = await import('@/features/expenses/services/expenses.service.js');
    
    const updatedExpense = await updateExpense(id, body);
    return NextResponse.json(updatedExpense, { status: 200 });
  } catch (error) {
    if (error.message.includes('Validation')) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    if (error.message === 'Expense not found.') {
      return NextResponse.json({ error: 'Expense not found' }, { status: 404 });
    }
    return NextResponse.json({ error: 'Failed to update expense' }, { status: 500 });
  }
}

