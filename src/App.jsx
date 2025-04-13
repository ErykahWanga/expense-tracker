import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('');

  // Add a new expense
  const addExpense = (expense) => {
    const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
    setExpenses([...expenses, { ...expense, id: Date.now(), date }]);
  };

  // Delete an expense by ID
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  // Filter expenses based on search term
  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort expenses
  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    if (!sortField) return 0;
    return a[sortField].localeCompare(b[sortField]);
  });

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <div className="main-content">
        <div className="form-section">
          <ExpenseForm onAddExpense={addExpense} />
        </div>
        <div className="table-section">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <div className="sort-controls">
            <button onClick={() => setSortField('category')}>
              Sort by Category
            </button>
            <button onClick={() => setSortField('description')}>
              Sort by Description
            </button>
            <button onClick={() => setSortField('')}>Clear Sort</button>
          </div>
          <ExpenseTable expenses={sortedExpenses} onDeleteExpense={deleteExpense} />
        </div>
      </div>
    </div>
  );
}

export default App;