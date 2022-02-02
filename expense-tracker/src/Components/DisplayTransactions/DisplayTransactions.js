import { useSelector } from "react-redux";
import classes from "./DisplayTransactions.module.css";

const transactionsList = (list) => {
  return list.map((item, i) => {
    return (
      <li
        key={i}
        className={
          item.sum > 0
            ? classes.transactionPositive
            : classes.transactionNegative
        }
      >
        <h3>{item.name}</h3>
        <h3>{item.sum}₪</h3>
      </li>
    );
  });
};

const DisplayTransactions = () => {
  const { transactionArray } = useSelector((state) => state.transactions);

  const positiveList = transactionArray.filter((item) => item.sum > 0);
  const negativeList = transactionArray.filter((item) => item.sum < 0);

  const income = transactionsList(positiveList);
  const expenses = transactionsList(negativeList);

  return (
    <div className={classes.container}>
      <ul className={classes.DisplayTransactions}>{income}</ul>
      <ul className={classes.DisplayTransactions}>{expenses}</ul>
    </div>
  );
};

export default DisplayTransactions;
