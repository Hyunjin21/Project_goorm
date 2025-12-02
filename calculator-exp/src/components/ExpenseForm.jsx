function ExpenseForm({
  charge,
  amount,
  onChargeChange,
  onAmountChange,
  onSubmit,
  isEditing,
}) {
  return (
    <form onSubmit={onSubmit} className="expense-form">
      <div className="form-group-row">
        <div className="form-group">
          <label htmlFor="charge" className="form-label">지출 항목</label>
          <input
            type="text"
            id="charge"
            className="form-input"
            value={charge}
            onChange={onChargeChange}
            placeholder="예: 점심 식사"
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount" className="form-label">비용</label>
          <input
            type="number"
            id="amount"
            className="form-input"
            value={amount}
            onChange={onAmountChange}
            placeholder="예: 8000"
          />
        </div>
      </div>

      <button
        type="submit"
        className={`btn-submit ${isEditing ? "editing" : ""}`}
      >
        {isEditing ? "수정 완료" : "제출"}
      </button>
    </form>
  );
}

export default ExpenseForm;