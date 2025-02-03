import { useId, useState } from "react";
import Card from "./Components/Card";

function App() {
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [isExpense, setIsExpense] = useState(true);

  const expenseId = useId()

  const amountValue = {
    expense: "Dépense",
    revenue: "Revenue"
  }

  const addTransaction = () => {
    if (amount) {
      const newTransaction = {
        amount: parseFloat(amount),
        type: isExpense ? amountValue.expense : amountValue.revenue,
        id: Date.now(),
      };
      setExpenses([...expenses, newTransaction]);
      setAmount("");
    }
  };

  const totalExpenses = expenses
  .filter((expense) => expense.type === amountValue.expense)
  .reduce((acc, expense) => acc + expense.amount, 0)

  const totalIncome = expenses
  .filter((expense) => expense.type === amountValue.revenue)
  .reduce((acc, expense) => acc + expense.amount, 0)


  return (

    <div className="h-screen bg-sky-950 text-white">
    <h1>Gestion de Budget</h1>
    <div>
      <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Entrez une somme" className="p-3 border" />
      <select name="" id={expenseId} onChange={(e) => setIsExpense(e.target.value === "expense")} className="p-3 border">
        {
         Object.values(amountValue).map((item, index) => (
            <option key={index}>{item}</option>
          ))
        }
      </select>
      <button onClick={addTransaction} className="border p-3 cursor-pointer">Ajouter</button>
    </div>
    <div>

    <h3>Dépenses: {totalExpenses}</h3>
    <h3>Revenue: {totalIncome}</h3>
    <h3>Solde: {totalIncome - totalExpenses}</h3>
    </div>
    <h2>Hitoriques des Dépenses</h2>
    <ul>
      {
        expenses.map((expense) => (
          <li key={expense.id}>`${expense.type}: {expense.amount}`</li>
        ))
      }
    </ul>
    <Card title="test" price={6} / >
  </div>
  )
}

export default App;
