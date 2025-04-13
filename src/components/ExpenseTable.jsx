function ExpenseTable({ expenses, onDeleteExpense }) {
  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {expenses.length === 0 ? (
          <tr>
            <td colSpan="5">No expenses found.</td>
          </tr>
        ) : (
          expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.amount.toFixed(2)}</td>
              <td>{expense.date}</td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => onDeleteExpense(expense.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default ExpenseTable;