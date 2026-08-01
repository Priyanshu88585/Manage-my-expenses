import { NextResponse } from 'next/server';
import { getPremiumData, savePremiumData } from '@/features/premium/services/premiumServer.service';

export async function GET() {
  try {
    const data = await getPremiumData();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Failed to get premium data:', error);
    return NextResponse.json({ error: 'Failed to fetch premium data' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const data = await getPremiumData();

    if (body.type === 'budget') {
      const newBudget = { id: Date.now().toString(), ...body.payload };
      data.budgets.push(newBudget);
    } else if (body.type === 'goal') {
      const newGoal = { id: Date.now().toString(), ...body.payload };
      data.goals.push(newGoal);
    } else {
      return NextResponse.json({ error: 'Invalid update type' }, { status: 400 });
    }

    await savePremiumData(data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Failed to update premium data:', error);
    return NextResponse.json({ error: 'Failed to update premium data' }, { status: 500 });
  }
}
