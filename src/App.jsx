import { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');
    return savedExpenses
      ? JSON.parse(savedExpenses)
      : [
          {
            id: 1,
            name: "Lunch",
            description: "Team lunch at restaurant",
            amount: 50.00,
            category: "Food",
            date: "2025-04-10"
          },
          {
            id: 2,
            name: "Books",
            description: "New books for personal growth",
            amount: 30.00,
            category: "Education",
            date: "2025-04-11"
          }
        ];
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('');

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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