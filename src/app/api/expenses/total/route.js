import { NextResponse } from 'next/server';
import { getTotal } from '@/features/expenses/services/expenses.service.js';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    
    const total = await getTotal(category);
    return NextResponse.json({ category, total });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
