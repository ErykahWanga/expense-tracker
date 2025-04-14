import { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !amount || !category || !date) return;
    onAddExpense({ name, description, amount: parseFloat(amount), category });
    setName('');
    setDescription('');
    setAmount('');
    setCategory('');
    setDate('');
  };

  return (
    <div className="expense-form-container">
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit} className="expense-form">
        <label>
          Expense Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter expense name"
          />
        </label>
        <label>
          Description
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
          />
        </label>
        <label>
          Amount
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            step="0.01"
          />
        </label>
        <label>
          Category
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter category"
          />
        </label>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default ExpenseForm;