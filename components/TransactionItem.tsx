'use client'

import { Transaction } from '@/types/Transaction';
import { formatAmount } from '@/lib/utils';
import { toast } from 'react-toastify';
import deleteTransaction from '@/app/actions/deleteTransaction';

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  const handleDeleteTransaction = async (transactionId: string) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this transaction?'
    );

    if (!confirmed) return;

    const { msg, error } = await deleteTransaction(transactionId);
    if (error) {
      toast.error(error);
    }
    toast.success(msg);
  };

  const amountSign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}
      <span>
        {amountSign} ₹ {formatAmount(Math.abs(transaction.amount))}
      </span>
      <button
        onClick={() => handleDeleteTransaction(transaction.id)}
        className='delete-btn'
      >
        x
      </button>
    </li>
  );
};

export default TransactionItem;
