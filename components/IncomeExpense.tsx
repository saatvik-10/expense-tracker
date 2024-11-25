import getIncExp from '@/app/actions/getIncExp';
import { formatAmount } from '@/lib/utils';

const IncomeExpense = async () => {
  const { income, expense } = await getIncExp();

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>
          ₹ {formatAmount(Number(income?.toFixed(2)))}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>
          ₹ {formatAmount(Number(expense?.toFixed(2)))}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpense;
