import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import "./App.css";

function App() {
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!charge.trim()) {
      alert("지출 항목을 입력해주세요.");
      return;
    }
    if (!amount || Number(amount) <= 0) {
      alert("1 이상 숫자 비용을 입력해주세요.");
      return;
    }

    if (editId === null) {
      const newExpense = {
        id: Date.now(),
        charge: charge.trim(),
        amount: Number(amount),
      };
      setExpenses((prev) => [...prev, newExpense]);
    } else {
      const updated = expenses.map((item) =>
        item.id === editId
          ? { ...item, charge: charge.trim(), amount: Number(amount) }
          : item
      );
      setExpenses(updated);
      setEditId(null);
    }

    setCharge("");
    setAmount("");
  };

  const handleEdit = (id) => {
    const target = expenses.find((item) => item.id === id);
    if (!target) return;
    setCharge(target.charge);
    setAmount(String(target.amount));
    setEditId(id);
  };

  const handleDelete = (id) => {
    setExpenses((prev) => prev.filter((item) => item.id !== id));
    if (editId === id) {
      setEditId(null);
      setCharge("");
      setAmount("");
    }
  };

  const handleClear = () => {
    setExpenses([]);
    setEditId(null);
    setCharge("");
    setAmount("");
  };

  const total = expenses.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="app-container">
      <h1 className="app-title">예산 계산기</h1>

      <ExpenseForm
        charge={charge}
        amount={amount}
        onChargeChange={(e) => setCharge(e.target.value)}
        onAmountChange={(e) => setAmount(e.target.value)}
        onSubmit={handleSubmit}
        isEditing={editId !== null}
      />

      <ExpenseList
        expenses={expenses}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <ExpenseSummary
        total={total}
        onClear={handleClear}
        disabled={expenses.length === 0}
      />
    </div>
  );
}

export default App;