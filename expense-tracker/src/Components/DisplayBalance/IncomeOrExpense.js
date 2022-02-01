const IncomeOrExpense = ({ type, sum }) => {
  return (
    <div>
      <h4>{type}</h4>
      <h4>{sum}</h4>
    </div>
  );
};

export default IncomeOrExpense;
