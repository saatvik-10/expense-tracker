'use server';

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
    return { error: 'Please provide text and amount' };
  }

  const text: string = textValue.toString(); //text as string
  const amount: number = parseFloat(amountValue.toString()); //amount as number

  const transactionData: TransactionData = { text, amount };

  return { data: transactionData };
}

export default addTransaction;
