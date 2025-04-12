// src/components/ExpenseForm.jsx
import { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [expenseName, setExpenseName] = useState('');
  const [category, setCategory] = useState('Choose');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [notes, setNotes] = useState('');

  const categories = ['Choose', 'Food', 'Transport', 'Entertainment', 'Utilities', "Friday's Supper"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (expenseName && category !== 'Choose' && date && amount) {
      const newExpense = {
        expenseName,
        category,
        date,
        amount: parseFloat(amount),
        notes,
      };
      onAddExpense(newExpense);
      setExpenseName('');
      setCategory('Choose');
      setDate('');
      setAmount('');
      setNotes('');
    }
  };

  return (
    <div className="expense-form-container">
      <h2>ADD EXPENSE</h2>
      <form onSubmit={handleSubmit} className="expense-form">
        <input
          type="text"
          placeholder="Expense Name"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
          required
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          step="0.01"
          required
        />
        <textarea
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default ExpenseForm;