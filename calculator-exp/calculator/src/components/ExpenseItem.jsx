function ExpenseItem({ expense, onEdit, onDelete }) {
  return (
    <li className="expense-item">
      <div className="item-info">
        <span className="item-charge">{expense.charge}</span>
        <span className="item-amount">
          {expense.amount.toLocaleString()} 원
        </span>
      </div>
      <div className="item-actions">
        <button
          type="button"
          className="btn-action btn-edit"
          onClick={() => onEdit(expense.id)}
          aria-label="수정"
        >
          수정
        </button>
        <button
          type="button"
          className="btn-action btn-delete"
          onClick={() => onDelete(expense.id)}
          aria-label="삭제"
        >
          삭제
        </button>
      </div>
    </li>
  );
}

export default ExpenseItem;