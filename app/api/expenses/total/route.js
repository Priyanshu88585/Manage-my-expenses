import { NextResponse } from 'next/server';
import { getTotalAmount } from '../../../../lib/expenses.service';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    
    const total = await getTotalAmount(category);
    return NextResponse.json({ category, total });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
