import { Transaction } from '@/types/Transaction';
import getTransactions from '@/app/actions/getTransactions';

const TransactionList = async () => {
  const { transactions, error } = await getTransactions();

  if (error) {
    return <p className='error'>{error}</p>;
  }

  return (
    <div>
      <h3>History</h3>
      <ul className='list'>
        {transactions &&
          transactions.map((transaction: Transaction) => (
            <p>{transaction.text}</p>
          ))}
      </ul>
    </div>
  );
};

export default TransactionList;
