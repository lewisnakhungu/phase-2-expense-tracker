# Expense Tracker

This is a simple **Expense Tracker** application built with **React** and **Vite**. It allows users to add, search, and view expenses dynamically in a table format.

## Features

- Add new expenses with details such as name, category, date, amount, and notes.
- Search for expenses by name or notes.
- View expenses in a responsive and styled table.
- Real-time filtering of expenses based on the search term.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: For fast development and build tooling.
- **CSS**: For styling the application.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
2. Navigate to the project directory:
    
    cd expense-tracker
3. Install dependencies:
   
   npm install
 4. Start the development server

    npm run dev

## Project Structure
src/components: Contains reusable components like ExpenseForm, ExpenseTable, and SearchBar.
src/App.jsx: The main application logic and state management.
src/App.css: Styles for the application.

## Usage
Open the application in your browser (default: http://localhost:5173).
Use the Add Expense form to add new expenses.
Use the Search Bar to filter expenses by name or notes.
View the filtered results in the Expense Table.

## Scripts
npm run dev: Start the development server.
npm run build: Build the application for production.
npm run preview: Preview the production build.

## Future Enhancements
Add support for editing and deleting expenses.
Implement expense categories with color-coded tags.
Add a summary section to display total expenses and category breakdown.
Integrate local storage or a backend API for persistent data.

## License
This project is licensed under the MIT License. Feel free to use and modify it as needed.