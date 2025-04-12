// src/components/ExpenseTable.jsx
function ExpenseTable({ expenses }) {
  console.log('Rendering expenses:', expenses); // Debugging
  const safeExpenses = Array.isArray(expenses) ? expenses : [];
  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th>Expense Name</th>
          <th>Category</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {safeExpenses.length > 0 ? (
          safeExpenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.expenseName}</td>
              <td>{expense.category}</td>
              <td>{expense.date}</td>
              <td>${expense.amount.toFixed(2)}</td>
              <td>{expense.notes || '-'}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5">No expenses found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default ExpenseTable;