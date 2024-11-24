import getUserBalance from '@/app/actions/getUserBalance';
import { formatNumber } from '@/lib/utils';

const Balance = async () => {
  const { balance } = await getUserBalance();

  return (
    <div>
      <h4>Your Balance:</h4>
      <h1>₹ {formatNumber(balance ?? 0)}</h1>
    </div>
  );
};

export default Balance;
