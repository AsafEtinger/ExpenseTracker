import IncomeOrExpense from "./IncomeOrExpense";
import { useSelector } from "react-redux";

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
    <div>
      <h3>Your Balance</h3>
      <h3>{balance}</h3>
      <div>
        <IncomeOrExpense type="Income" sum={incomeSum} />
        <IncomeOrExpense type="Expense" sum={expensesSum} />
      </div>
    </div>
  );
};

export default DisplayBalance;
