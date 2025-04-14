import { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(''); // Empty string initially

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert amount to a number and validate
    const parsedAmount = parseFloat(amount);
    if (!name || !description || isNaN(parsedAmount) || parsedAmount <= 0 || !category || !date) {
      console.log('Validation failed:', { name, description, amount: parsedAmount, category, date });
      return;
    }
    onAddExpense({ name, description, amount: parsedAmount, category, date });
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
            required // Make field required
          />
        </label>
        <label>
          Description
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            required
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
            min="0.01" // Prevent negative or zero amounts
            required
          />
        </label>
        <label>
          Category
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter category"
            required
          />
        </label>
        <label>
          Date
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default ExpenseForm;