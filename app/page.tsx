import { currentUser } from '@clerk/nextjs/server';
import AddTransaction from '@/components/AddTransaction';
import Balance from '@/components/Balance';
import IncomeExpense from '@/components/IncomeExpense';
import Guest from '@/components/Guest';

const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <main>
      <h2>Welcome, {user.firstName}</h2>
      <Balance />
      <IncomeExpense />
      <AddTransaction />
    </main>
  );
};

export default HomePage;
