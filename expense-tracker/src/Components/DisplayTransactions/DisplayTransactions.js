import { useSelector } from "react-redux";
import classes from "./DisplayTransactions.module.css";
const DisplayTransactions = () => {
  const { transactionArray } = useSelector((state) => state.transactions);

  const transactionsList = transactionArray.map((item, i) => {
    return (
      <li key={i}>
        <h3>{item.name}</h3>
        <h3>{item.sum}</h3>
      </li>
    );
  });

  return <ul className={classes.container}>{transactionsList}</ul>;
};

export default DisplayTransactions;
