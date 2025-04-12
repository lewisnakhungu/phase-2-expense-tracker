// src/App.jsx
import { useState, useEffect } from 'react';
import ExpenseTable from './components/ExpenseTable';
import ExpenseForm from './components/ExpenseForm';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      expenseName: 'Groceries',
      category: 'Food',
      date: '2025-04-10',
      amount: 75.50,
      notes: 'Weekly shopping',
    },
    {
      id: 2,
      expenseName: 'Gas',
      category: 'Transport',
      date: '2025-04-11',
      amount: 40.00,
      notes: 'Car fuel',
    },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = [...prevExpenses, { ...newExpense, id: prevExpenses.length + 1 }];
      setFilteredExpenses(updatedExpenses); // Update
      return updatedExpenses;
    });
    setSearchTerm(''); // Clear search 
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Update filteredExpenses 
  useEffect(() => {
    const newFilteredExpenses = expenses.filter(
      (expense) =>
        expense.expenseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (expense.notes && expense.notes.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredExpenses(newFilteredExpenses);
  }, [expenses, searchTerm]);

  return (
    <div className="app-container">
      <header>
        <h1>EXPENSE TRACKER</h1>
        <p>Start keeping track of your expenses and income.</p>
        <p>Categorise and annalyse your spending.</p>
      </header>
      <div className="main-content">
        <ExpenseForm onAddExpense={addExpense} />
        <div className="table-section">
          <SearchBar onSearch={handleSearch} />
          <ExpenseTable expenses={filteredExpenses} />
        </div>
      </div>
    </div>
  );
}

export default App;