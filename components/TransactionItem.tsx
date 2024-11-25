import { Transaction } from '@/types/Transaction';
import { formatAmount } from '@/lib/utils';
import { toast } from 'react-toastify';

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  const amountSign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}
      <span>
        {amountSign} ₹ {formatAmount(Math.abs(transaction.amount))}
      </span>
    </li>
  );
};

export default TransactionItem;
