function ExpenseSummary({ total, onClear, disabled }) {
  return (
    <div className="expense-summary">
      <button
        type="button"
        className="btn-clear"
        onClick={onClear}
        disabled={disabled}
      >
        목록 지우기
      </button>

      <div className="total-display">
        총 지출:
        <span className="total-amount">
          {total.toLocaleString()} 원
        </span>
      </div>
    </div>
  );
}

export default ExpenseSummary;