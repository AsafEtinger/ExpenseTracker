import IncomeOrExpense from "./IncomeOrExpense";
import { useSelector } from "react-redux";
import classes from "./DisplayBalance.module.css";
const DisplayBalance = () => {
  const { transactionArray } = useSelector((state) => state.transactions);

  let incomeArr = [];
  let expenseArr = [];

  transactionArray.map((item) => {
    if (item.sum > 0) {
      return incomeArr.push(item.sum);
    } else {
      return expenseArr.push(item.sum);
    }
  });

  const incomeSum = incomeArr.reduce((a, b) => a + b, 0);
  const expensesSum = expenseArr.reduce((a, b) => a + b, 0);

  const balance = incomeSum + expensesSum;

  return (
    <div className={classes.container}>
      <div className={classes.balance}>
        <h3 className={classes.yourBalanceText}>Your Balance</h3>
        <h3 className={classes.balanceNumber}>{balance}₪</h3>
      </div>
      <div className={classes.incomeOrExpense}>
        <IncomeOrExpense type="Income" sum={incomeSum} />
        <IncomeOrExpense type="Expense" sum={expensesSum} />
      </div>
    </div>
  );
};

export default DisplayBalance;
