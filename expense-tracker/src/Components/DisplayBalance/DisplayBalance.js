import IncomeOrExpense from "./IncomeOrExpense";
import { useSelector } from "react-redux";
import classes from "./DisplayBalance.module.css";
const DisplayBalance = () => {
  const { transactionArray } = useSelector((state) => state.transactions);
  const { regularExpense } = useSelector((state) => state.transactions);

  let incomeArr = [];
  let expenseArr = [];
  let regularExpensesArrPositive = [];
  let regularExpensesArrNegative = [];

  transactionArray.map((item) => {
    if (item.sum > 0) {
      return incomeArr.push(item.sum);
    } else {
      return expenseArr.push(item.sum);
    }
  });

  const regularExpensesArr = regularExpense.map((item) => {
    if (item.amount > 0) {
      return regularExpensesArrPositive.push(+item.amount);
    } else {
      return regularExpensesArrNegative.push(+item.amount);
    }
  });

  const regularExpensesPositiveSum = regularExpensesArrPositive.reduce(
    (a, b) => a + b,
    0
  );
  const regularExpensesNegativeSum = regularExpensesArrNegative.reduce(
    (a, b) => a + b,
    0
  );

  const incomeSum =
    incomeArr.reduce((a, b) => a + b, 0) + regularExpensesPositiveSum;
  const expensesSum =
    expenseArr.reduce((a, b) => a + b, 0) + regularExpensesNegativeSum;

  const balance = incomeSum + expensesSum;

  console.log(balance, "balance");
  console.log(expensesSum, "expensesSum");
  console.log(incomeSum, "incomeSum");
  console.log(regularExpensesNegativeSum, "regularExpensesNegativeSum");
  console.log(regularExpensesPositiveSum, "regularExpensesPositiveSum");

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
