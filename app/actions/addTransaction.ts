'use server';

import { auth } from '@clerk/nextjs/server';
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache'; //refreshes the app

interface TransactionData {
  text: string;
  amount: number;
}

interface TransactionResult {
  data?: TransactionData;
  error?: string;
}

async function addTransaction(formData: FormData): Promise<TransactionResult> {
  const textValue = formData.get('text');
  const amountValue = formData.get('amount');

  //check for input values
  if (!textValue || textValue === '' || !amountValue) {
    return { error: 'Text or amount is missing' };
  }

  const text: string = textValue.toString(); //text as string
  const amount: number = parseFloat(amountValue.toString()); //amount as number

  //get logged in user
  const { userId } = await auth();

  //check for user
  if (!userId) {
    return { error: 'User not found' };
  }

  try {
    const transactionData: TransactionData = await db.transaction.create({
      data: {
        text,
        amount,
        userId,
      },
    });

    revalidatePath('/');

    return { data: transactionData };
  } catch (error) {
    return { error: 'Failed to add transaction' };
  }
}

export default addTransaction;
