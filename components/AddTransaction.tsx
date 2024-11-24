//using client action instead of server action bcz we want to use validations on client side
'use client';

import addTransaction from '@/app/actions/addTransaction';

const AddTransaction = () => {
  const clientAction = async (formData: FormData) => {
    const { data, error } = await addTransaction(formData);

    if (error) {
      alert(error);
    } else {
      alert(`Transaction added`);
      console.log(data);
    }
  };

  return (
    <div>
      <h3>Add Transaction</h3>
      <form action={clientAction}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            id='text'
            name='text'
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            id='amount'
            name='amount'
            placeholder='Enter text...'
            step='0.01' //allow 2 decimal places
          />
        </div>
        <button className='btn'>Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
