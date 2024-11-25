import getIncExp from '@/app/actions/getIncExp';

const IncomeExpense = async () => {
  const { income, expense } = await getIncExp();

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>₹ {income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>₹ {expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
