import { NextResponse } from 'next/server';
import { getAllExpenses, addExpense } from '../../lib/expenses.service.js';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    
    const expenses = await getAllExpenses(category);
    return NextResponse.json(expenses);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const newExpense = await addExpense(body);
    return NextResponse.json(newExpense, { status: 201 });
  } catch (error) {
    if (error.message.includes('Validation')) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json({ error: 'Failed to add expense' }, { status: 500 });
  }
}
