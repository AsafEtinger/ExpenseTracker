import classes from "./IncomeOrExpense.module.css";

const IncomeOrExpense = ({ type, sum }) => {
  return (
    <div className={classes.incomeOrExpense}>
      <h4>{type}</h4>
      <h4>{sum}₪</h4>
    </div>
  );
};

export default IncomeOrExpense;
