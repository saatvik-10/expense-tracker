import getUserBalance from '@/app/actions/getUserBalance';

const Balance = async () => {
  const { balance } = await getUserBalance();

  return (
    <div>
      <h4>Your Balance:</h4>
      <h1>{balance ?? 0}</h1>
    </div>
  );
};

export default Balance;
