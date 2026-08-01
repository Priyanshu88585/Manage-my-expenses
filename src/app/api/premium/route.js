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
    } else if (body.type === 'updateGoal') {
      if (data.goals) {
        const idx = data.goals.findIndex(g => g.id === body.payload.id);
        if (idx !== -1) data.goals[idx] = { ...data.goals[idx], ...body.payload };
      }
    } else if (body.type === 'deleteGoal') {
      if (data.goals) data.goals = data.goals.filter(g => g.id !== body.payload.id);
    } else if (body.type === 'updateBudget') {
      if (data.budgets) {
        const idx = data.budgets.findIndex(b => b.id === body.payload.id);
        if (idx !== -1) data.budgets[idx] = { ...data.budgets[idx], ...body.payload };
      }
    } else if (body.type === 'deleteBudget') {
      if (data.budgets) data.budgets = data.budgets.filter(b => b.id !== body.payload.id);
    } else if (body.type === 'netWorthBase') {
      data.netWorthBase = {
        baseAssets: Number(body.payload.baseAssets) || 0,
        baseLiabilities: Number(body.payload.baseLiabilities) || 0,
      };
    } else if (body.type === 'addRecurring') {
      const newRecurring = { id: Date.now().toString(), ...body.payload };
      if (!data.recurring) data.recurring = [];
      data.recurring.push(newRecurring);
    } else if (body.type === 'updateRecurring') {
      if (data.recurring) {
        const idx = data.recurring.findIndex(r => r.id === body.payload.id);
        if (idx !== -1) {
          data.recurring[idx] = { ...data.recurring[idx], ...body.payload };
        }
      }
    } else if (body.type === 'deleteRecurring') {
      if (data.recurring) {
        data.recurring = data.recurring.filter(r => r.id !== body.payload.id);
      }
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
