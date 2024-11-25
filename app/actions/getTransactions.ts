'use server';

'use server';

import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { Transaction } from '@/types/Transaction';

async function getTransaction(): Promise<{
  transactions?: Transaction[];
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
      orderBy: {
        createdAt: 'desc',
      },
    });

    return { transactions };
  } catch (error) {
    return { error: 'Failed to get balance' };
  }
}

export default getTransaction;
