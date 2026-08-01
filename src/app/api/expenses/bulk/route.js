import { NextResponse } from 'next/server';
import { bulkDeleteExpenses } from '@/features/expenses/services/expenses.service.js';

export async function DELETE(request) {
  try {
    const body = await request.json();
    const { ids } = body;
    
    if (!Array.isArray(ids)) {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }
    
    await bulkDeleteExpenses(ids);
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to bulk delete expenses' }, { status: 500 });
  }
}
