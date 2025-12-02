import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onEdit, onDelete }) {
  if (expenses.length === 0) {
    return (
      <div className="empty-list-message">
        아직 추가된 지출이 없습니다.
      </div>
    );
  }

  return (
    <ul className="expense-list">
      {expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          expense={item}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;