'use server';

import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';

async function getIncExp(): Promise<{
  income?: number;
  expense?: number;
  error?: string;
}> {
  const { userId } = await auth();

  if (!userId) {
    return { error: 'User not found' };
  }

  try {
    const transactions = await db.transaction.findMany({
      where: {
        userId, //means userId = userId;
      },
    });

    const amounts = transactions.map((transaction) => transaction.amount);

    const income = amounts
      .filter((item) => item > 0)
      .reduce((acc, item) => acc + item, 0);

    const expense = amounts
      .filter((item) => item < 0)
      .reduce((acc, item) => acc - item, 0);

    return { income, expense: Math.abs(expense) };
  } catch (error) {
    return { error: 'Failed to get balance' };
  }
}

export default getIncExp;
